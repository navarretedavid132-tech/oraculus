const express = require("express");
const path = require("path");
const { CACHE_TTL_MS, listLeagues, loadAnalysis, loadEvents, searchItems } = require("./sports-service");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const publicDirectory = path.join(__dirname, "public");
const eventCaches = new Map();
const refreshPromises = new Map();

app.disable("x-powered-by");
app.use(express.static(publicDirectory));

function cacheKey(query) {
  return [query.sp || "", query.lg || "", query.rg || "today"].join("|");
}

async function getEvents(forceRefresh, query) {
  const key = cacheKey(query);
  for (const [cacheId, snapshot] of eventCaches) {
    if (Date.now() - snapshot.cachedAt > 10 * CACHE_TTL_MS) eventCaches.delete(cacheId);
  }
  const previous = eventCaches.get(key);
  const isFresh = previous && Date.now() - previous.cachedAt < CACHE_TTL_MS;
  if (!forceRefresh && isFresh) return previous;
  if (refreshPromises.has(key)) return refreshPromises.get(key);

  const refresh = loadEvents(new Date(), query).then(data => {
    if (!data.hasSuccessfulProvider && previous) {
      return {
        ...previous,
        stale: true,
        providers: data.providers,
        warning: "No se pudo actualizar; se muestran datos previamente obtenidos."
      };
    }
    if (!data.hasSuccessfulProvider) {
      const error = new Error("No fue posible consultar ninguna fuente deportiva.");
      error.providers = data.providers;
      throw error;
    }
    const snapshot = { ...data, cachedAt: Date.now() };
    if (eventCaches.size >= 100) eventCaches.delete(eventCaches.keys().next().value);
    eventCaches.set(key, snapshot);
    return snapshot;
  }).finally(() => {
    refreshPromises.delete(key);
  });
  refreshPromises.set(key, refresh);
  return refresh;
}

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "ORACULUS", timestamp: new Date().toISOString() });
});

app.get("/api/ligas", (_request, response) => {
  response.json({ leagues: listLeagues() });
});

app.get("/api/buscar", async (request, response) => {
  try {
    const query = {
      q: request.query.q,
      sp: request.query.sp,
      lg: request.query.lg,
      rg: request.query.rg || "today"
    };
    const data = await getEvents(request.query.refresh === "1", query);
    const results = searchItems(data.items, query);
    response.json({
      total: results.length,
      results,
      sourcesUsed: [...new Set(results.flatMap(item => item.sources))],
      providers: data.providers,
      updatedAt: data.updatedAt,
      stale: Boolean(data.stale),
      ...(data.coverageNote ? { coverageNote: data.coverageNote } : {}),
      ...(data.warning ? { warning: data.warning } : {})
    });
  } catch (error) {
    console.error("Error consultando eventos deportivos:", error.message);
    response.status(502).json({
      error: "No se pudieron consultar las fuentes deportivas.",
      providers: error.providers || []
    });
  }
});

app.get("/api/analisis/:eventId", async (request, response) => {
  try {
    const event = [...eventCaches.values()]
      .flatMap(data => data.items)
      .find(item => item.id === request.params.eventId);
    if (!event) {
      response.status(404).json({ error: "Evento no encontrado en la consulta actual." });
      return;
    }
    response.json(await loadAnalysis(event));
  } catch (error) {
    console.error("Error generando análisis deportivo:", error.message);
    response.status(502).json({ error: "No se pudo obtener el análisis verificable del evento." });
  }
});

app.use((error, _request, response, _next) => {
  console.error("Error interno del servidor:", error.message);
  response.status(500).json({ error: "Error interno del servidor." });
});

app.listen(PORT, () => {
  console.log(`ORACULUS corriendo en http://localhost:${PORT}`);
});
