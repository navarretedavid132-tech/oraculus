const ESPN_LEAGUES = [
  { id: "chi.1", sport: "Fútbol", label: "Liga de Primera (Chile)", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/chi.1/scoreboard" },
  { id: "arg.1", sport: "Fútbol", label: "Liga Profesional (Argentina)", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/arg.1/scoreboard" },
  { id: "bra.1", sport: "Fútbol", label: "Brasileirão Série A", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/bra.1/scoreboard" },
  { id: "uru.1", sport: "Fútbol", label: "Liga AUF Uruguaya", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/uru.1/scoreboard" },
  { id: "col.1", sport: "Fútbol", label: "Primera A (Colombia)", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/col.1/scoreboard" },
  { id: "esp.1", sport: "Fútbol", label: "LaLiga (España)", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard" },
  { id: "esp.2", sport: "Fútbol", label: "LaLiga Hypermotion", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.2/scoreboard" },
  { id: "esp.copa", sport: "Fútbol", label: "Copa del Rey", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.copa_del_rey/scoreboard" },
  { id: "uefa.champions", sport: "Fútbol", label: "UEFA Champions League", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard" },
  { id: "uefa.europa", sport: "Fútbol", label: "UEFA Europa League", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa/scoreboard" },
  { id: "uefa.conference", sport: "Fútbol", label: "UEFA Conference League", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa.conf/scoreboard" },
  { id: "conmebol.libertadores", sport: "Fútbol", label: "CONMEBOL Libertadores", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/conmebol.libertadores/scoreboard" },
  { id: "conmebol.sudamericana", sport: "Fútbol", label: "CONMEBOL Sudamericana", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/conmebol.sudamericana/scoreboard" },
  { id: "eng.1", sport: "Fútbol", label: "Premier League", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard" },
  { id: "ger.1", sport: "Fútbol", label: "Bundesliga", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard" },
  { id: "ita.1", sport: "Fútbol", label: "Serie A", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard" },
  { id: "fra.1", sport: "Fútbol", label: "Ligue 1", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/scoreboard" },
  { id: "mex.1", sport: "Fútbol", label: "Liga MX", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/mex.1/scoreboard" },
  { id: "usa.1", sport: "Fútbol", label: "MLS", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard" },
  { id: "fifa.friendly", sport: "Fútbol", label: "Amistosos / Selecciones", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard" },
  { id: "esp.w.1", sport: "Fútbol", label: "Liga F (España Femenina)", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.w.1/scoreboard" },
  { id: "eng.w.1", sport: "Fútbol", label: "Women's Super League", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.w.1/scoreboard" },
  { id: "usa.nwsl", sport: "Fútbol", label: "NWSL Femenina", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard" },
  { id: "fra.w.1", sport: "Fútbol", label: "Première Ligue Femenina", url: "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.w.1/scoreboard" },
  { id: "ufc", sport: "UFC", label: "UFC", url: "https://site.api.espn.com/apis/site/v2/sports/mma/ufc/scoreboard" },
  { id: "atp", sport: "Tenis", label: "ATP Tour", url: "https://site.api.espn.com/apis/site/v2/sports/tennis/atp/scoreboard" },
  { id: "wta", sport: "Tenis", label: "WTA Tour", url: "https://site.api.espn.com/apis/site/v2/sports/tennis/wta/scoreboard" },
  { id: "nba", sport: "NBA", label: "NBA", url: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard" }
];

const OPENLIGA_LEAGUES = [
  { id: "bl1", leagueId: "ger.1", label: "Bundesliga" },
  { id: "bl2", leagueId: "opendb:bl2", label: "2. Bundesliga (Alemania)" },
  { id: "bl3", leagueId: "opendb:bl3", label: "3. Liga (Alemania)" },
  { id: "cl", leagueId: "uefa.champions", label: "UEFA Champions League" },
  { id: "ucl", leagueId: "uefa.champions", label: "UEFA Champions League" },
  { id: "el", leagueId: "uefa.europa", label: "UEFA Europa League" },
  { id: "uel", leagueId: "uefa.europa", label: "UEFA Europa League" },
  { id: "uecl", leagueId: "uefa.conference", label: "UEFA Conference League" },
  { id: "pd", leagueId: "esp.1", label: "LaLiga (España)" },
  { id: "pl", leagueId: "eng.1", label: "Premier League" },
  { id: "sa", leagueId: "ita.1", label: "Serie A" },
  { id: "fl1", leagueId: "fra.1", label: "Ligue 1" },
  { id: "ERE", leagueId: "opendb:ere", label: "Eredivisie (Países Bajos)" },
  { id: "dfb", leagueId: "opendb:dfb", label: "DFB-Pokal (Alemania)" },
  { id: "ffb1", leagueId: "opendb:ffb1", label: "Frauen-Bundesliga (Alemania)" }
];

const ODDS_API_LEAGUES = {
  "eng.1": "soccer_epl",
  "esp.1": "soccer_spain_la_liga",
  "ita.1": "soccer_italy_serie_a",
  "ger.1": "soccer_germany_bundesliga",
  "fra.1": "soccer_france_ligue_one",
  "usa.1": "soccer_usa_mls",
  "nba": "basketball_nba"
};

const FOOTBALL_DATA_LEAGUES = {
  PL: "eng.1",
  PD: "esp.1",
  BL1: "ger.1",
  SA: "ita.1",
  FL1: "fra.1",
  CL: "uefa.champions",
  EL: "uefa.europa",
  EC: "uefa.conference",
  DED: "opendb:ere",
  BSA: "bra.1"
};

const CACHE_TTL_MS = 60 * 1000;
const ANALYSIS_TTL_MS = 5 * 60 * 1000;
const ODDS_CACHE_TTL_MS = 5 * 60 * 1000;
const BOXSCORE_CACHE_TTL_MS = 30 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 9000;
const norm = value => String(value || "").toLowerCase()
  .replace(/[ø]/g, "o")
  .replace(/[æ]/g, "ae")
  .replace(/[œ]/g, "oe")
  .replace(/[ß]/g, "ss")
  .replace(/[ł]/g, "l")
  .replace(/[ð]/g, "d")
  .replace(/[þ]/g, "th")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
const dateParam = date => `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;
const TEAM_NAME_ALIASES = new Map([
  ["bayernmunchen", "bayernmunich"],
  ["bayer04leverkusen", "bayerleverkusen"],
  ["internazionale", "intermilan"],
  ["parissaintgermain", "psg"],
  ["manutd", "manchesterunited"],
  ["mancity", "manchestercity"],
  ["newcastleunited", "newcastle"],
  ["wolverhamptonwanderers", "wolves"],
  ["tottenhamhotspur", "tottenham"],
  ["atleticodemadrid", "atleticomadrid"],
  ["athleticbilbao", "athleticclub"],
  ["galatasarayistanbul", "galatasaray"],
  ["lasklinz", "lask"],
  ["como1907", "como"],
  ["aekathen", "aekathens"],
  ["feyenoordrotterdam", "feyenoord"],
  ["realbetisbalompie", "realbetis"]
]);
const TEAM_NAME_MARKERS = new Set(["afc", "cfc", "ssc", "rc", "fc", "cf", "sc", "ac", "fk", "sk"]);
const teamKey = value => {
  const tokens = norm(value).replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
  const raw = tokens.join("");
  while (tokens.length > 1 && TEAM_NAME_MARKERS.has(tokens[0])) tokens.shift();
  while (tokens.length > 1 && TEAM_NAME_MARKERS.has(tokens[tokens.length - 1])) tokens.pop();
  const withoutClubMarker = tokens.join("");
  return TEAM_NAME_ALIASES.get(raw) || TEAM_NAME_ALIASES.get(withoutClubMarker) || withoutClubMarker;
};
const analysisCache = new Map();
const oddsApiCache = new Map();
const oddsApiRequests = new Map();
const boxscoreCache = new Map();
const boxscoreRequests = new Map();

function providerError(error) {
  if (error && error.name === "AbortError") return "Tiempo de espera agotado";
  return error && error.message ? error.message : "Error de consulta";
}

async function fetchJson(url, headers = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(url, { signal: controller.signal, headers });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function mapLimit(values, limit, task) {
  const output = new Array(values.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, values.length) }, async () => {
    while (next < values.length) {
      const index = next++;
      output[index] = await task(values[index]);
    }
  });
  await Promise.all(workers);
  return output;
}

function getCompetitors(competition) {
  const competitors = Array.isArray(competition && competition.competitors) ? competition.competitors : [];
  return {
    home: competitors.find(team => team.homeAway === "home") || competitors[0] || {},
    away: competitors.find(team => team.homeAway === "away") || competitors[1] || {}
  };
}

function competitorName(competitor) {
  const team = competitor && competitor.team;
  const athlete = competitor && competitor.athlete;
  return (athlete && (athlete.displayName || athlete.fullName))
    || (team && (team.displayName || team.shortDisplayName))
    || (competitor && (competitor.name || competitor.displayName))
    || "";
}

function parseScore(score) {
  const value = typeof score === "object" && score !== null ? score.displayValue : score;
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseForm(form, recordItems) {
  const letters = String(form || "").toUpperCase().replace(/[^WDL]/g, "");
  const formStats = {
    wins: [...letters].filter(value => value === "W").length,
    draws: [...letters].filter(value => value === "D").length,
    losses: [...letters].filter(value => value === "L").length,
    sequence: letters
  };

  let record = null;
  const records = Array.isArray(recordItems) ? recordItems : [];
  for (const recordItem of records) {
    const summary = String(recordItem.summary || "");
    const match = summary.match(/(\d+)\s*[-–]\s*(\d+)(?:\s*[-–]\s*(\d+))?/);
    if (match) {
      if (match[3] != null) {
        record = recordItem.type === "total" || recordItem.name === "All Splits"
          ? { wins: Number(match[1]), draws: Number(match[2]), losses: Number(match[3]) }
          : record;
      } else if (recordItem.type === "total" || recordItem.name === "Overall" || recordItem.name === "overall" || recordItem.abbreviation === "Game") {
        record = { wins: Number(match[1]), draws: 0, losses: Number(match[2]) };
      }
    }
  }
  return { formStats, record };
}

function buildQuickForecast(item) {
  const market = item.marketConsensus;
  const home = item.participants.home;
  const away = item.participants.away;
  const homeForm = home.formStats;
  const awayForm = away.formStats;
  const marketForecast = () => ({
    available: true,
    mainPick: market.picks[0].outcome,
    picks: market.picks,
    modelPicks: [],
    market,
    detail: "No hay suficiente récord estadístico para el modelo local; se muestra únicamente el consenso de casas.",
    basis: market.source === "The Odds API"
      ? `${market.source}, consenso de ${market.bookmakersCount} casas`
      : `Cuotas publicadas por ${market.bookmaker || market.source}; no es un consenso entre casas`,
    confidence: market.source === "The Odds API" ? "Consenso de mercado" : "Línea publicada de una casa"
  });
  const ratesFor = competitor => {
    const form = competitor.formStats || {};
    const sequence = [...String(form.sequence || "")].slice(-5);
    if (sequence.length) {
      const count = { W: 0, D: 0, L: 0 };
      sequence.forEach(result => { if (count[result] !== undefined) count[result]++; });
      return { ...count, sample: sequence.length, basis: "últimos partidos" };
    }
    if (competitor.record) {
      const { wins, draws, losses } = competitor.record;
      const sample = wins + draws + losses;
      if (sample > 0) return { W: wins, D: draws, L: losses, sample, basis: "récord de temporada" };
    }
    return null;
  };
  const homeRate = ratesFor(home);
  const awayRate = ratesFor(away);
  if (!homeRate || !awayRate) {
    if (market && market.picks && market.picks.length) return marketForecast();
    return {
      available: false,
      mainPick: "Sin pronóstico suficiente",
      picks: [],
      detail: "La fuente no entregó resultados o récords comparables para ambos participantes.",
      basis: "Datos insuficientes"
    };
  }

  let rawPicks;
  if (item.sport === "Fútbol") {
    rawPicks = [
      { outcome: `Gana ${home.name}`, probability: (homeRate.W / homeRate.sample + awayRate.L / awayRate.sample) / 2 },
      { outcome: "Empate", probability: (homeRate.D / homeRate.sample + awayRate.D / awayRate.sample) / 2 },
      { outcome: `Gana ${away.name}`, probability: (homeRate.L / homeRate.sample + awayRate.W / awayRate.sample) / 2 }
    ];
  } else {
    rawPicks = [
      { outcome: `Gana ${home.name}`, probability: (homeRate.W / homeRate.sample + awayRate.L / awayRate.sample) / 2 },
      { outcome: `Gana ${away.name}`, probability: (homeRate.L / homeRate.sample + awayRate.W / awayRate.sample) / 2 }
    ];
  }
  const totalProbability = rawPicks.reduce((total, pick) => total + pick.probability, 0);
  if (!totalProbability) {
    if (market && market.picks && market.picks.length) return marketForecast();
    return {
      available: false,
      mainPick: "Sin pronóstico suficiente",
      picks: [],
      detail: "La fuente no publicó resultados suficientes para comparar los participantes.",
      basis: "Datos insuficientes"
    };
  }
  const modelPicks = rawPicks
    .map(pick => ({ ...pick, probability: Math.round(pick.probability / totalProbability * 100) }))
    .sort((a, b) => b.probability - a.probability);
  const picks = market && Array.isArray(market.picks) && market.picks.length
    ? market.picks
    : modelPicks;
  const mainPick = picks[0].outcome;
  const homeDetail = `${homeRate.W}V-${homeRate.D}E-${homeRate.L}P (${homeRate.basis})`;
  const awayDetail = `${awayRate.W}V-${awayRate.D}E-${awayRate.L}P (${awayRate.basis})`;

  return {
    available: true,
    mainPick,
    picks,
    modelPicks,
    market,
    detail: `${home.name}: ${homeDetail} · ${away.name}: ${awayDetail}.`,
    basis: market
      ? market.source === "The Odds API"
        ? `${market.source}, consenso de ${market.bookmakersCount} casas · contrastado con frecuencias ESPN`
        : `Cuotas publicadas por ${market.bookmaker || market.source} · contrastadas con frecuencias ESPN`
      : "Frecuencias observadas en ESPN; no es una probabilidad calibrada",
    confidence: market
      ? market.source === "The Odds API" ? "Consenso de mercado" : "Línea publicada de una casa"
      : picks[0].probability >= 60 ? "Señal estadística más marcada" : "Señal estadística débil"
  };
}

function americanProbability(value) {
  const odds = Number.parseFloat(String(value || ""));
  if (!Number.isFinite(odds) || odds === 0) return null;
  return odds > 0 ? 100 / (odds + 100) : Math.abs(odds) / (Math.abs(odds) + 100);
}

function parseEspnMarketOdds(oddsItems, participants, sport) {
  const items = Array.isArray(oddsItems) ? oddsItems : [];
  for (const oddsItem of items) {
    if (!oddsItem || typeof oddsItem !== "object") continue;
    const moneyline = oddsItem.moneyline;
    if (!moneyline || !moneyline.home || !moneyline.away) continue;
    const raw = {
      home: americanProbability(moneyline.home.close && moneyline.home.close.odds)
        || americanProbability(moneyline.home.open && moneyline.home.open.odds),
      away: americanProbability(moneyline.away.close && moneyline.away.close.odds)
        || americanProbability(moneyline.away.open && moneyline.away.open.odds),
      draw: americanProbability(moneyline.draw && moneyline.draw.close && moneyline.draw.close.odds)
        || americanProbability(moneyline.draw && moneyline.draw.open && moneyline.draw.open.odds)
    };
    if (!raw.home || !raw.away || (sport === "Fútbol" && !raw.draw)) continue;
    const normalized = sport === "Fútbol"
      ? [raw.home, raw.draw, raw.away]
      : [raw.home, raw.away];
    const total = normalized.reduce((sum, probability) => sum + probability, 0);
    if (!total) continue;
    const percentages = normalized.map(probability => Math.round(probability / total * 100));
    percentages[0] += 100 - percentages.reduce((sum, probability) => sum + probability, 0);
    const outcomes = sport === "Fútbol"
      ? [`Gana ${participants.home.name}`, "Empate", `Gana ${participants.away.name}`]
      : [`Gana ${participants.home.name}`, `Gana ${participants.away.name}`];
    return {
      source: "ESPN",
      bookmaker: oddsItem.provider && (oddsItem.provider.displayName || oddsItem.provider.name) || "Casa no identificada",
      bookmakersCount: 1,
      method: "moneyline",
      picks: outcomes.map((outcome, index) => ({ outcome, probability: percentages[index] }))
        .sort((a, b) => b.probability - a.probability)
    };
  }
  return null;
}

function parseEspnEvents(feed, json) {
  const events = Array.isArray(json && json.events) ? json.events : [];
  const items = [];
  for (const event of events) {
    const competitions = Array.isArray(event.competitions) && event.competitions.length
      ? event.competitions
      : [{}];
    for (const competition of competitions) {
      const timestamp = new Date(competition.date || event.date || "").getTime();
      if (!Number.isFinite(timestamp)) continue;
      const { home, away } = getCompetitors(competition);
      const homeName = competitorName(home);
      const awayName = competitorName(away);
      const title = homeName && awayName
        ? `${homeName} vs. ${awayName}`
        : competition.name || event.name || event.shortName || "Evento deportivo";
      const status = (competition.status && competition.status.type)
        || (event.status && event.status.type)
        || {};
      const state = ["pre", "in", "post"].includes(status.state) ? status.state : "pre";
      const homeScore = parseScore(home.score);
      const awayScore = parseScore(away.score);
      const score = state !== "pre" && homeScore !== null && awayScore !== null
        ? `${homeScore} - ${awayScore}`
        : "";
      const round = (competition.notes || []).map(note => note.headline || note.text).filter(Boolean)[0]
        || (competition.round && (competition.round.text || competition.round.displayName))
        || "";
      const league = (event.league && event.league.name)
        || (json.leagues && json.leagues[0] && json.leagues[0].name)
        || feed.label;
      const homeParsed = parseForm(home.form, home.records);
      const awayParsed = parseForm(away.form, away.records);
      const participants = {
        home: { id: String(home.id || ""), name: homeName, formStats: homeParsed.formStats, record: homeParsed.record },
        away: { id: String(away.id || ""), name: awayName, formStats: awayParsed.formStats, record: awayParsed.record }
      };
      const marketConsensus = parseEspnMarketOdds(competition.odds, participants, feed.sport);
      const baseItem = { participants, marketConsensus };

      items.push({
        id: `espn:${event.id}:${competition.id || event.id}`,
        espn: {
          eventId: String(event.id),
          baseUrl: feed.url.replace(/\/scoreboard(?:\?.*)?$/, ""),
          homeId: String(home.id || (home.team && home.team.id) || ""),
          awayId: String(away.id || (away.team && away.team.id) || "")
        },
        sport: feed.sport,
        leagueId: feed.id,
        league,
        round,
        title,
        score,
        state,
        statusDetail: status.shortDetail || status.detail || "",
        timestamp,
        venue: (competition.venue && (competition.venue.fullName || competition.venue.name))
          || (event.venue && event.venue.fullName)
          || "",
        participants,
        ...(marketConsensus ? { marketConsensus } : {}),
        quickForecast: buildQuickForecast(baseItem),
        sources: ["ESPN"]
      });
    }
  }
  return items;
}

function parseOpenLigaEvents(meta, matches) {
  if (!Array.isArray(matches)) return [];
  const items = [];
  for (const match of matches) {
    const home = match.team1 && (match.team1.teamName || match.team1.shortName);
    const away = match.team2 && (match.team2.teamName || match.team2.shortName);
    const timestamp = new Date(match.matchDateTimeUTC || match.matchDateTime || "").getTime();
    if (!home || !away || !Number.isFinite(timestamp)) continue;
    const result = Array.isArray(match.matchResults)
      ? match.matchResults.find(value => value.resultTypeID === 2)
      : null;
    const finished = Boolean(match.matchIsFinished);
    items.push({
      id: `openliga:${match.matchID || `${meta.id}:${timestamp}`}`,
      sport: "Fútbol",
      leagueId: meta.leagueId,
      league: meta.label,
      round: "",
      title: `${home} vs. ${away}`,
      score: finished && result ? `${result.pointsTeam1} - ${result.pointsTeam2}` : "",
      state: finished ? "post" : "pre",
      statusDetail: finished ? "Finalizado" : "",
      timestamp,
      venue: (match.location && (match.location.locationStadium || match.location.locationCity)) || "",
      participants: { home: { id: "", name: home }, away: { id: "", name: away } },
      sources: ["OpenLigaDB"]
    });
  }
  return items;
}

function parseFootballDataMatches(json) {
  const matches = Array.isArray(json && json.matches) ? json.matches : [];
  return matches.flatMap(match => {
    const home = match.homeTeam && (match.homeTeam.shortName || match.homeTeam.name);
    const away = match.awayTeam && (match.awayTeam.shortName || match.awayTeam.name);
    const timestamp = new Date(match.utcDate || "").getTime();
    if (!home || !away || !Number.isFinite(timestamp)) return [];
    const competition = match.competition || {};
    const leagueId = FOOTBALL_DATA_LEAGUES[competition.code]
      || (competition.code ? `football-data:${competition.code}` : "");
    const state = match.status === "FINISHED"
      ? "post"
      : ["IN_PLAY", "PAUSED", "LIVE"].includes(match.status) ? "in" : "pre";
    const homeScore = match.score && match.score.fullTime && match.score.fullTime.home;
    const awayScore = match.score && match.score.fullTime && match.score.fullTime.away;
    return [{
      id: `football-data:${match.id}`,
      sport: "Fútbol",
      leagueId,
      league: competition.name || "Fútbol",
      round: match.matchday ? `Jornada ${match.matchday}` : "",
      title: `${home} vs. ${away}`,
      score: state !== "pre" && homeScore != null && awayScore != null ? `${homeScore} - ${awayScore}` : "",
      state,
      statusDetail: state === "post" ? "Finalizado" : state === "in" ? "En juego" : "",
      timestamp,
      venue: "",
      participants: { home: { id: "", name: home }, away: { id: "", name: away } },
      sources: ["Football-Data.org"]
    }];
  });
}

function median(values) {
  const sorted = values.slice().sort((a, b) => a - b);
  if (!sorted.length) return null;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

function oddsConsensusForEvent(item, oddsEvent) {
  const itemHome = teamKey(item.participants.home.name);
  const itemAway = teamKey(item.participants.away.name);
  const oddsHome = teamKey(oddsEvent.home_team);
  const oddsAway = teamKey(oddsEvent.away_team);
  const sameTeams = (itemHome === oddsHome && itemAway === oddsAway)
    || (itemHome === oddsAway && itemAway === oddsHome);
  const oddsTime = new Date(oddsEvent.commence_time || "").getTime();
  if (!sameTeams || !Number.isFinite(oddsTime) || Math.abs(oddsTime - item.timestamp) > 2 * 60 * 60 * 1000) {
    return null;
  }

  const outcomes = item.sport === "Fútbol"
    ? [`Gana ${item.participants.home.name}`, "Empate", `Gana ${item.participants.away.name}`]
    : [`Gana ${item.participants.home.name}`, `Gana ${item.participants.away.name}`];
  const bookmakerProbabilities = [];
  const bookmakers = Array.isArray(oddsEvent.bookmakers) ? oddsEvent.bookmakers : [];
  for (const bookmaker of bookmakers) {
    const market = (bookmaker.markets || []).find(entry => entry.key === "h2h");
    if (!market || !Array.isArray(market.outcomes)) continue;
    const prices = {};
    for (const outcome of market.outcomes) {
      const name = teamKey(outcome.name);
      const price = Number(outcome.price);
      if (!Number.isFinite(price) || price <= 1) continue;
      if (name === itemHome) prices.home = price;
      else if (name === itemAway) prices.away = price;
      else if (["draw", "tie", "empate"].includes(name)) prices.draw = price;
    }
    if (prices.home == null || prices.away == null || (item.sport === "Fútbol" && prices.draw == null)) continue;
    const probability = {
      home: 1 / prices.home,
      away: 1 / prices.away,
      draw: prices.draw == null ? 0 : 1 / prices.draw
    };
    const total = probability.home + probability.away + probability.draw;
    if (total <= 0) continue;
    bookmakerProbabilities.push({
      home: probability.home / total,
      away: probability.away / total,
      draw: probability.draw / total
    });
  }
  if (!bookmakerProbabilities.length) return null;

  const values = item.sport === "Fútbol"
    ? [
      median(bookmakerProbabilities.map(value => value.home)),
      median(bookmakerProbabilities.map(value => value.draw)),
      median(bookmakerProbabilities.map(value => value.away))
    ]
    : [
      median(bookmakerProbabilities.map(value => value.home)),
      median(bookmakerProbabilities.map(value => value.away))
    ];
  const total = values.reduce((sum, value) => sum + value, 0);
  if (!total) return null;
  const rounded = values.map(value => Math.round(value / total * 100));
  const roundingDelta = 100 - rounded.reduce((sum, value) => sum + value, 0);
  rounded[0] += roundingDelta;
  return {
    source: "The Odds API",
    bookmakersCount: bookmakerProbabilities.length,
    updatedAt: oddsEvent.bookmakers
      .map(bookmaker => new Date(bookmaker.last_update || "").getTime())
      .filter(Number.isFinite)
      .sort((a, b) => b - a)
      .map(timestamp => new Date(timestamp).toISOString())[0] || null,
    picks: outcomes.map((outcome, index) => ({ outcome, probability: rounded[index] }))
      .sort((a, b) => b.probability - a.probability)
  };
}

function applyMarketConsensus(items, oddsEvents) {
  let matched = 0;
  for (const item of items) {
    let consensus = null;
    for (const candidate of oddsEvents) {
      consensus = oddsConsensusForEvent(item, candidate);
      if (consensus) break;
    }
    if (!consensus) continue;
    matched++;
    item.marketConsensus = consensus;
    item.sources = [...new Set([...item.sources, consensus.source])];
    if (item.quickForecast) {
      item.quickForecast = buildQuickForecast({ ...item, marketConsensus: consensus });
    }
  }
  return matched;
}

function eventKey(item) {
  const names = [item.participants.home.name, item.participants.away.name]
    .map(teamKey)
    .sort();
  if (!names[0] || !names[1]) return `${norm(item.sport)}|id:${item.id}`;
  return `${norm(item.sport)}|${names.join("|")}`;
}

function mergeEvents(lists) {
  const merged = [];
  const grouped = new Map();
  for (const item of lists.flat()) {
    const key = eventKey(item);
    const candidates = grouped.get(key) || [];
    const existing = candidates.find(candidate =>
      (!candidate.leagueId || !item.leagueId || candidate.leagueId === item.leagueId)
      && Math.abs(candidate.timestamp - item.timestamp) <= 2 * 60 * 60 * 1000
    );
    if (existing) {
      existing.sources = [...new Set([...existing.sources, ...item.sources])];
      if (!existing.espn && item.espn) existing.espn = item.espn;
      if (!existing.venue && item.venue) existing.venue = item.venue;
      if (item.sources.includes("ESPN") && item.quickForecast) existing.quickForecast = item.quickForecast;
      const incomingHasNewerStatus = item.state === "post" && existing.state !== "post"
        || item.state === "in" && existing.state === "pre";
      const preferIncoming = item.sources.includes("ESPN") || incomingHasNewerStatus
        || !existing.sources.includes("ESPN");
      if (preferIncoming && (item.state === "in" || item.state === "post")) {
        existing.state = item.state;
        existing.statusDetail = item.statusDetail;
        existing.score = item.score;
      }
      continue;
    }
    merged.push(item);
    candidates.push(item);
    grouped.set(key, candidates);
  }
  return merged.sort((a, b) => a.timestamp - b.timestamp);
}

async function settleProvider(name, task) {
  try {
    const items = await task();
    return { name, items, error: null };
  } catch (error) {
    return { name, items: [], error: providerError(error) };
  }
}

async function loadTheOddsApi(leagueKey, now, daysAhead) {
  const region = process.env.ODDS_API_REGIONS || "eu";
  const cacheKey = `${leagueKey}|${region}|${dateParam(now)}|${daysAhead}`;
  const cached = oddsApiCache.get(cacheKey);
  if (cached && Date.now() - cached.at < ODDS_CACHE_TTL_MS) return cached.events;
  if (oddsApiRequests.has(cacheKey)) return oddsApiRequests.get(cacheKey);

  const request = (async () => {
    const from = new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString();
    const until = new Date(now.getTime() + Math.max(daysAhead, 1) * 24 * 60 * 60 * 1000).toISOString();
    const params = new URLSearchParams({
      regions: region,
      markets: "h2h",
      oddsFormat: "decimal",
      commenceTimeFrom: from,
      commenceTimeTo: until
    });
    const json = await fetchJson(
      `https://api.the-odds-api.com/v4/sports/${encodeURIComponent(leagueKey)}/odds?${params}`,
      { "x-api-key": process.env.ODDS_API_KEY }
    );
    const events = Array.isArray(json) ? json : [];
    oddsApiCache.set(cacheKey, { at: Date.now(), events });
    return events;
  })().finally(() => oddsApiRequests.delete(cacheKey));
  oddsApiRequests.set(cacheKey, request);
  return request;
}

function requestedRangeDays(range) {
  const ranges = { "3h": 1, "6h": 1, "12h": 1, "1d": 1, "2d": 2, "3d": 3, "7d": 7, upcoming: 7 };
  return ranges[range] || 0;
}

async function loadEvents(now = new Date(), filters = {}) {
  const selectedFeeds = filters.lg
    ? ESPN_LEAGUES.filter(feed => feed.id === filters.lg)
    : filters.sp
      ? ESPN_LEAGUES.filter(feed => feed.sport === filters.sp)
      : ESPN_LEAGUES;
  const daysAhead = requestedRangeDays(filters.rg);
  const canLoadFutureEspn = Boolean(filters.lg) || ["NBA", "UFC", "Tenis"].includes(filters.sp);
  const dates = [-1, 0];
  if (canLoadFutureEspn) {
    for (let day = 1; day <= daysAhead; day++) dates.push(day);
  }
  const scoreboardRequests = selectedFeeds.flatMap(feed => dates.map(day => {
    const date = new Date(now);
    date.setUTCDate(date.getUTCDate() + day);
    return { feed, date: dateParam(date) };
  }));
  const espnResults = await mapLimit(scoreboardRequests, 8, ({ feed, date }) =>
    settleProvider(`ESPN · ${feed.label} · ${date}`, async () => {
      const separator = feed.url.includes("?") ? "&" : "?";
      const json = await fetchJson(`${feed.url}${separator}limit=100&dates=${date}`);
      return parseEspnEvents(feed, json);
    })
  );

  const includeFootballProviders = !filters.sp || filters.sp === "Fútbol";
  const season = now.getUTCMonth() >= 6 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
  const openLigaLeagues = includeFootballProviders
    ? OPENLIGA_LEAGUES.filter(league => !filters.lg || league.leagueId === filters.lg)
    : [];
  const openLigaResults = await mapLimit(openLigaLeagues, 4, league =>
    settleProvider(`OpenLigaDB · ${league.label}`, async () => {
      const json = await fetchJson(`https://api.openligadb.de/getmatchdata/${league.id}/${season}`);
      return parseOpenLigaEvents(league, json);
    })
  );

  const optionalProviders = [];
  if (includeFootballProviders && process.env.FOOTBALL_DATA_KEY) {
    optionalProviders.push(settleProvider("Football-Data.org", async () => {
      const fromDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const until = new Date(now);
      until.setUTCDate(until.getUTCDate() + Math.max(daysAhead, 1));
      const from = dateParam(fromDate).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
      const to = dateParam(until).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
      const json = await fetchJson(`https://api.football-data.org/v4/matches?dateFrom=${from}&dateTo=${to}`, {
        "X-Auth-Token": process.env.FOOTBALL_DATA_KEY
      });
      return parseFootballDataMatches(json);
    }));
  }
  const oddsLeagueKey = filters.lg
    ? ODDS_API_LEAGUES[filters.lg]
    : filters.sp === "NBA" ? ODDS_API_LEAGUES.nba : null;
  const oddsProviderConfigured = Boolean(process.env.ODDS_API_KEY && oddsLeagueKey);
  if (oddsProviderConfigured) {
    optionalProviders.push(settleProvider("The Odds API", async () => {
      return loadTheOddsApi(oddsLeagueKey, now, daysAhead);
    }));
  }
  const optionalResults = await Promise.all(optionalProviders);
  const providerResults = [...espnResults, ...openLigaResults, ...optionalResults];
  const events = mergeEvents(providerResults.map(result => result.items));
  const oddsResult = optionalResults.find(result => result.name === "The Odds API");
  const oddsMatched = oddsResult && !oddsResult.error ? applyMarketConsensus(events, oddsResult.items) : 0;
  const providers = providerResults.map(result => ({
    name: result.name,
    status: result.error ? "error" : "ok",
    events: result.items.length,
    ...(result.error ? { error: result.error } : {})
  }));
  providers.push({
    name: "The Odds API",
    status: !process.env.ODDS_API_KEY
      ? "not_configured"
      : oddsResult && oddsResult.error
        ? "error"
        : oddsLeagueKey
          ? "ok"
          : filters.sp && filters.sp !== "Fútbol" && filters.sp !== "NBA"
            ? "unsupported_sport"
            : filters.lg
              ? "unsupported_league"
              : "select_league",
    events: oddsMatched,
    ...(!process.env.ODDS_API_KEY ? { note: "Configura ODDS_API_KEY para comparar cuotas de varias casas." } : {}),
    ...(process.env.ODDS_API_KEY && !oddsLeagueKey && !filters.lg ? { note: "Selecciona una liga compatible o NBA para consultar cuotas." } : {}),
    ...(process.env.ODDS_API_KEY && !oddsLeagueKey && filters.lg ? { note: "La liga seleccionada no está habilitada en el mapeo de The Odds API." } : {}),
    ...(process.env.ODDS_API_KEY && !oddsLeagueKey && filters.sp && filters.sp !== "Fútbol" && filters.sp !== "NBA"
      ? { note: "The Odds API aún no está habilitada para este deporte." }
      : {}),
    ...(oddsResult && oddsResult.error ? { error: oddsResult.error } : {})
  });
  providers.push(
    { name: "TheSportsDB", status: "unavailable", note: "El endpoint público consultado respondió HTTP 403; no se automatiza el acceso." },
    { name: "SofaScore", status: "unavailable", note: "Acceso al sitio respondido con HTTP 403; no se omiten sus bloqueos." },
    { name: "Scores24", status: "not_integrated", note: "No se validó una API pública autorizada para datos de pronóstico." },
    { name: "SportyTrader", status: "unavailable", note: "Acceso del servidor respondido con HTTP 403; no se automatiza ni sortea el bloqueo." },
    { name: "BetMines", status: "unavailable", note: "Acceso al sitio respondido con HTTP 403; no se omiten sus bloqueos." }
  );
  const hasSuccessfulProvider = providers.some(provider => provider.status === "ok");
  const coverageNote = daysAhead && !canLoadFutureEspn && !filters.lg
    ? "Para reducir consultas redundantes, ESPN amplía la ventana futura al filtrar NBA, UFC, Tenis o una liga concreta. OpenLigaDB aporta sus calendarios de temporada; con FOOTBALL_DATA_KEY, Football-Data.org consulta las fechas seleccionadas."
    : null;
  return {
    items: events,
    providers,
    sourcesUsed: [...new Set(events.flatMap(item => item.sources))],
    hasSuccessfulProvider,
    updatedAt: new Date().toISOString(),
    coverageNote
  };
}

function recordSummary(games) {
  return games.reduce((record, game) => {
    if (game.result === "W") record.wins++;
    else if (game.result === "D") record.draws++;
    else if (game.result === "L") record.losses++;
    return record;
  }, { wins: 0, draws: 0, losses: 0 });
}

function parseCompletedGames(schedule, teamId, beforeTimestamp) {
  const events = Array.isArray(schedule && schedule.events) ? schedule.events : [];
  const games = [];
  for (const event of events) {
    const timestamp = new Date(event.date || "").getTime();
    if (!Number.isFinite(timestamp) || timestamp >= beforeTimestamp) continue;
    const competition = (event.competitions || [])[0];
    if (!competition) continue;
    const status = competition.status && competition.status.type;
    if (!status || (status.state !== "post" && status.completed !== true)) continue;
    const { home, away } = getCompetitors(competition);
    const homeScore = parseScore(home.score);
    const awayScore = parseScore(away.score);
    if (homeScore === null || awayScore === null) continue;
    const isHome = String(home.id) === String(teamId);
    const isAway = String(away.id) === String(teamId);
    if (!isHome && !isAway) continue;
    const ownScore = isHome ? homeScore : awayScore;
    const opponentScore = isHome ? awayScore : homeScore;
    games.push({
      id: String(event.id),
      timestamp,
      teamId: String(teamId),
      team: competitorName(isHome ? home : away),
      opponentId: String(isHome ? away.id || "" : home.id || ""),
      homeId: String(home.id || ""),
      awayId: String(away.id || ""),
      opponent: competitorName(isHome ? away : home),
      venue: isHome ? "local" : "visita",
      score: `${homeScore} - ${awayScore}`,
      homeGoals: homeScore,
      awayGoals: awayScore,
      goalsFor: ownScore,
      goalsAgainst: opponentScore,
      result: ownScore > opponentScore ? "W" : ownScore < opponentScore ? "L" : "D"
    });
  }
  return games.sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
}

function statisticValue(statistics, names) {
  const stat = (statistics || []).find(entry => names.includes(entry.name));
  if (!stat || stat.displayValue == null || stat.displayValue === "") return null;
  const value = Number(stat.displayValue);
  return Number.isFinite(value) ? value : null;
}

function parseBoxscoreSummary(summary) {
  const teams = new Map();
  for (const teamBox of (summary && summary.boxscore && summary.boxscore.teams) || []) {
    const teamId = String(teamBox.team && teamBox.team.id || "");
    if (!teamId) continue;
    const stats = teamBox.statistics || [];
    teams.set(teamId, {
      corners: statisticValue(stats, ["wonCorners", "corners"]),
      shots: statisticValue(stats, ["totalShots"]),
      shotsOnTarget: statisticValue(stats, ["shotsOnTarget"]),
      fouls: statisticValue(stats, ["foulsCommitted", "fouls"]),
      yellowCards: statisticValue(stats, ["yellowCards"]),
      redCards: statisticValue(stats, ["redCards"])
    });
  }
  const competitors = (summary && summary.header && summary.header.competitions
    && summary.header.competitions[0] && summary.header.competitions[0].competitors) || [];
  const halves = new Map();
  for (const competitor of competitors) {
    const values = Array.isArray(competitor.linescores)
      ? competitor.linescores.map(line => {
        const score = parseScore(line.displayValue);
        return score === null ? parseScore(line.value) : score;
      })
      : [];
    halves.set(String(competitor.id || ""), values);
  }
  return { teams, halves };
}

function enrichHistoricalGame(game, boxscore) {
  const teamStats = boxscore.teams.get(game.teamId) || null;
  const opponentStats = boxscore.teams.get(game.opponentId) || null;
  const homeHalves = boxscore.halves.get(game.homeId) || [];
  const awayHalves = boxscore.halves.get(game.awayId) || [];
  const halfCount = Math.min(homeHalves.length, awayHalves.length);
  const ownHalves = game.venue === "local" ? homeHalves : awayHalves;
  const opposingHalves = game.venue === "local" ? awayHalves : homeHalves;
  const firstHome = homeHalves[0];
  const firstAway = awayHalves[0];
  const firstHalfResult = Number.isFinite(firstHome) && Number.isFinite(firstAway)
    ? (game.venue === "local"
      ? firstHome > firstAway ? "W" : firstHome < firstAway ? "L" : "D"
      : firstAway > firstHome ? "W" : firstAway < firstHome ? "L" : "D")
    : null;
  const hasCompleteHalves = halfCount >= 2
    && ownHalves.slice(0, 2).every(Number.isFinite)
    && opposingHalves.slice(0, 2).every(Number.isFinite);
  const halvesWon = hasCompleteHalves
    ? ownHalves.slice(0, 2).filter((score, index) => score > opposingHalves[index]).length
    : null;
  return {
    ...game,
    stats: teamStats,
    opponentStats,
    firstHalfResult,
    halvesWon,
    boxscoreAvailable: Boolean(teamStats && opponentStats)
  };
}

async function loadHistoricalBoxscore(item, eventId) {
  const cached = boxscoreCache.get(eventId);
  if (cached && Date.now() - cached.at < BOXSCORE_CACHE_TTL_MS) return cached.value;
  if (boxscoreRequests.has(eventId)) return boxscoreRequests.get(eventId);
  const request = fetchJson(`${item.espn.baseUrl}/summary?event=${encodeURIComponent(eventId)}`)
    .then(summary => {
      const value = parseBoxscoreSummary(summary);
      for (const [id, entry] of boxscoreCache) {
        if (Date.now() - entry.at > BOXSCORE_CACHE_TTL_MS) boxscoreCache.delete(id);
      }
      if (boxscoreCache.size >= 1000) boxscoreCache.delete(boxscoreCache.keys().next().value);
      boxscoreCache.set(eventId, { at: Date.now(), value });
      return value;
    })
    .finally(() => boxscoreRequests.delete(eventId));
  boxscoreRequests.set(eventId, request);
  return request;
}

function summarizeForm(games) {
  return {
    games,
    record: recordSummary(games),
    winRate: games.length
      ? (games.filter(game => game.result === "W").length + games.filter(game => game.result === "D").length * 0.5) / games.length
      : null
  };
}

function venueRecord(games, venue) {
  const selected = games.filter(game => game.venue === venue);
  return { ...recordSummary(selected), played: selected.length };
}

const NO_VERIFIED_DATA = "Sin datos verificables en fuente";

function average(values) {
  const valid = values.filter(value => Number.isFinite(value));
  return {
    value: valid.length ? Number((valid.reduce((sum, value) => sum + value, 0) / valid.length).toFixed(2)) : null,
    sampleSize: valid.length
  };
}

function observedRate(values, predicate) {
  const valid = values.filter(value => value !== null && value !== undefined);
  const hits = valid.filter(predicate).length;
  return {
    probability: valid.length ? Math.round(hits / valid.length * 100) : null,
    hits,
    sampleSize: valid.length
  };
}

function combineResultRates(homeGames, awayGames, selectResult) {
  const homeResults = homeGames.map(selectResult).filter(Boolean);
  const awayResults = awayGames.map(selectResult).filter(Boolean);
  if (!homeResults.length || !awayResults.length) {
    return { available: false, sampleSize: homeResults.length + awayResults.length, message: NO_VERIFIED_DATA, outcomes: [] };
  }
  const homeRecord = recordSummary(homeResults.map(result => ({ result })));
  const awayRecord = recordSummary(awayResults.map(result => ({ result })));
  const raw = [
    { outcome: "Gana el local", probability: (homeRecord.wins / homeResults.length + awayRecord.losses / awayResults.length) / 2 },
    { outcome: "Empate", probability: (homeRecord.draws / homeResults.length + awayRecord.draws / awayResults.length) / 2 },
    { outcome: "Gana el visitante", probability: (homeRecord.losses / homeResults.length + awayRecord.wins / awayResults.length) / 2 }
  ];
  const total = raw.reduce((sum, outcome) => sum + outcome.probability, 0);
  if (!total) return { available: false, sampleSize: homeResults.length + awayResults.length, message: NO_VERIFIED_DATA, outcomes: [] };
  const outcomes = raw.map(outcome => ({
    outcome: outcome.outcome,
    probability: Math.round(outcome.probability / total * 100)
  }));
  outcomes[0].probability += 100 - outcomes.reduce((sum, outcome) => sum + outcome.probability, 0);
  return {
    available: true,
    sampleSize: homeResults.length + awayResults.length,
    split: { homeTeamGames: homeResults.length, awayTeamGames: awayResults.length },
    outcomes
  };
}

function makeObservedMarket(outcomes, sampleSize) {
  if (!sampleSize) return { available: false, message: NO_VERIFIED_DATA, sampleSize: 0, outcomes: [] };
  const results = outcomes.map(({ outcome, ...rate }) => ({
    outcome,
    probability: rate.probability,
    hits: rate.hits,
    sampleSize: rate.sampleSize
  }));
  return { available: true, sampleSize, outcomes: results };
}

function uniqueHistoricalGames(...groups) {
  const games = new Map();
  for (const group of groups) {
    for (const game of group) {
      if (!games.has(game.id)) games.set(game.id, game);
    }
  }
  return [...games.values()];
}

function teamAverage(games, field) {
  return average(games.map(game => game[field]));
}

function pairProjection(first, second) {
  if (first.value === null || second.value === null) return { value: null, sampleSize: 0 };
  return {
    value: Number(((first.value + second.value) / 2).toFixed(2)),
    sampleSize: Math.min(first.sampleSize, second.sampleSize)
  };
}

function totalLineMarkets(values, lines) {
  return lines.map(line => {
    const over = observedRate(values, value => value > line);
    const under = observedRate(values, value => value < line);
    return {
      line,
      over: over.sampleSize ? over : { ...over, message: NO_VERIFIED_DATA },
      under: under.sampleSize ? under : { ...under, message: NO_VERIFIED_DATA }
    };
  });
}

function buildFootballMarkets(homeGames, awayGames, homeName, awayName, tournamentContext = null) {
  const homeRecent = homeGames.slice(0, 5);
  const awayRecent = awayGames.slice(0, 5);
  const allGames = uniqueHistoricalGames(homeRecent, awayRecent);
  const fullTime = combineResultRates(homeRecent, awayRecent, game => game.result);
  const resultMap = fullTime.available
    ? Object.fromEntries(fullTime.outcomes.map(entry => [entry.outcome, entry.probability]))
    : null;
  const doubleChance = resultMap
    ? {
      available: true,
      sampleSize: fullTime.sampleSize,
      outcomes: [
        { outcome: "Local o empate (1X)", probability: resultMap["Gana el local"] + resultMap.Empate },
        { outcome: "Empate o visitante (X2)", probability: resultMap.Empate + resultMap["Gana el visitante"] },
        { outcome: "Local o visitante", probability: resultMap["Gana el local"] + resultMap["Gana el visitante"] }
      ].sort((a, b) => b.probability - a.probability)
    }
    : { available: false, message: NO_VERIFIED_DATA, sampleSize: fullTime.sampleSize, outcomes: [] };

  const firstHalf = combineResultRates(homeRecent, awayRecent, game => game.firstHalfResult);
  const halfWins = [
    { team: homeName, ...observedRate(homeRecent.map(game => game.halvesWon), value => value > 0) },
    { team: awayName, ...observedRate(awayRecent.map(game => game.halvesWon), value => value > 0) }
  ];
  const halfWinSampleSize = halfWins.reduce((sum, entry) => sum + entry.sampleSize, 0);
  const atLeastOneHalf = {
    available: halfWinSampleSize > 0,
    message: halfWinSampleSize ? null : NO_VERIFIED_DATA,
    teams: halfWins,
    sampleSize: halfWinSampleSize
  };

  const homeGoalsFor = teamAverage(homeRecent, "goalsFor");
  const homeGoalsAgainst = teamAverage(homeRecent, "goalsAgainst");
  const awayGoalsFor = teamAverage(awayRecent, "goalsFor");
  const awayGoalsAgainst = teamAverage(awayRecent, "goalsAgainst");
  const projectedHomeGoals = pairProjection(homeGoalsFor, awayGoalsAgainst);
  const projectedAwayGoals = pairProjection(awayGoalsFor, homeGoalsAgainst);
  const totalGoals = allGames.map(game =>
    Number.isFinite(game.homeGoals) && Number.isFinite(game.awayGoals)
      ? game.homeGoals + game.awayGoals
      : null
  ).filter(value => value !== null);
  const bothTeamsScored = allGames.map(game =>
    Number.isFinite(game.homeGoals) && Number.isFinite(game.awayGoals)
      ? game.homeGoals > 0 && game.awayGoals > 0
      : null
  ).filter(value => value !== null);
  const totalCards = allGames.map(game => {
    if (!game.stats || !game.opponentStats
      || game.stats.yellowCards === null || game.stats.redCards === null
      || game.opponentStats.yellowCards === null || game.opponentStats.redCards === null) return null;
    return game.stats.yellowCards + game.stats.redCards
      + game.opponentStats.yellowCards + game.opponentStats.redCards;
  }).filter(value => value !== null);
  const totalCorners = allGames.map(game => {
    if (!game.stats || !game.opponentStats
      || game.stats.corners === null || game.opponentStats.corners === null) return null;
    return game.stats.corners + game.opponentStats.corners;
  }).filter(value => value !== null);
  const totalShotsOnTarget = allGames.map(game => {
    if (!game.stats || !game.opponentStats
      || game.stats.shotsOnTarget === null || game.opponentStats.shotsOnTarget === null) return null;
    return game.stats.shotsOnTarget + game.opponentStats.shotsOnTarget;
  }).filter(value => value !== null);

  const goals = {
    averages: {
      home: { scored: homeGoalsFor, conceded: homeGoalsAgainst },
      away: { scored: awayGoalsFor, conceded: awayGoalsAgainst }
    },
    projection: {
      homeGoals: projectedHomeGoals,
      awayGoals: projectedAwayGoals,
      totalGoals: projectedHomeGoals.value === null || projectedAwayGoals.value === null
        ? null
        : Number((projectedHomeGoals.value + projectedAwayGoals.value).toFixed(2))
    },
    totals: totalLineMarkets(totalGoals, [1.5, 2.5, 3.5]),
    bothTeamsScore: makeObservedMarket([
      { outcome: "Sí", ...observedRate(bothTeamsScored, Boolean) },
      { outcome: "No", ...observedRate(bothTeamsScored, value => !value) }
    ], bothTeamsScored.length)
  };

  const homeCornersFor = teamAverage(homeRecent.map(game => game.stats || {}), "corners");
  const homeCornersAgainst = teamAverage(homeRecent.map(game => game.opponentStats || {}), "corners");
  const awayCornersFor = teamAverage(awayRecent.map(game => game.stats || {}), "corners");
  const awayCornersAgainst = teamAverage(awayRecent.map(game => game.opponentStats || {}), "corners");
  const projectedHomeCorners = pairProjection(homeCornersFor, awayCornersAgainst);
  const projectedAwayCorners = pairProjection(awayCornersFor, homeCornersAgainst);
  const corners = {
    averages: {
      home: { for: homeCornersFor, against: homeCornersAgainst },
      away: { for: awayCornersFor, against: awayCornersAgainst }
    },
    projection: {
      home: projectedHomeCorners,
      away: projectedAwayCorners,
      total: projectedHomeCorners.value === null || projectedAwayCorners.value === null
        ? null
        : Number((projectedHomeCorners.value + projectedAwayCorners.value).toFixed(2))
    },
    totals: totalLineMarkets(totalCorners, [8.5, 9.5]),
    sampleSize: totalCorners.length,
    message: totalCorners.length ? null : NO_VERIFIED_DATA
  };

  const makeShotProjection = field => {
    const homeFor = teamAverage(homeRecent.map(game => game.stats || {}), field);
    const homeAgainst = teamAverage(homeRecent.map(game => game.opponentStats || {}), field);
    const awayFor = teamAverage(awayRecent.map(game => game.stats || {}), field);
    const awayAgainst = teamAverage(awayRecent.map(game => game.opponentStats || {}), field);
    const homeExpected = pairProjection(homeFor, awayAgainst);
    const awayExpected = pairProjection(awayFor, homeAgainst);
    return {
      home: { for: homeFor, against: homeAgainst, projected: homeExpected },
      away: { for: awayFor, against: awayAgainst, projected: awayExpected },
      total: homeExpected.value === null || awayExpected.value === null
        ? null
        : Number((homeExpected.value + awayExpected.value).toFixed(2))
    };
  };
  const shooting = {
    shots: makeShotProjection("shots"),
    shotsOnTarget: makeShotProjection("shotsOnTarget"),
    totalShotsOnTarget,
    sampleSize: totalShotsOnTarget.length,
    message: totalShotsOnTarget.length ? null : NO_VERIFIED_DATA
  };

  const homeYellow = teamAverage(homeRecent.map(game => game.stats || {}), "yellowCards");
  const awayYellow = teamAverage(awayRecent.map(game => game.stats || {}), "yellowCards");
  const homeRed = teamAverage(homeRecent.map(game => game.stats || {}), "redCards");
  const awayRed = teamAverage(awayRecent.map(game => game.stats || {}), "redCards");
  const homeFouls = teamAverage(homeRecent.map(game => game.stats || {}), "fouls");
  const awayFouls = teamAverage(awayRecent.map(game => game.stats || {}), "fouls");
  const discipline = {
    home: { yellow: homeYellow, red: homeRed, fouls: homeFouls },
    away: { yellow: awayYellow, red: awayRed, fouls: awayFouls },
    projectedTotalCards: totalCards.length ? average(totalCards).value : null,
    cardsSampleSize: totalCards.length,
    totals: totalLineMarkets(totalCards, [3.5, 4.5]),
    projectedTotalFouls: homeFouls.value === null || awayFouls.value === null
      ? null
      : Number((homeFouls.value + awayFouls.value).toFixed(2)),
    foulsSampleSize: Math.min(homeFouls.sampleSize, awayFouls.sampleSize)
  };

  const averageGoalsRecent = average(totalGoals);
  const homeRecord = recordSummary(homeRecent);
  const awayRecord = recordSummary(awayRecent);
  const homeAtHome = homeRecent.filter(game => game.venue === "local");
  const awayAway = awayRecent.filter(game => game.venue === "visita");
  const contextShort = [
    homeRecent.length && awayRecent.length
      ? `${homeName} ${homeRecord.wins}V-${homeRecord.draws}E-${homeRecord.losses}P · ${awayName} ${awayRecord.wins}V-${awayRecord.draws}E-${awayRecord.losses}P`
      : null,
    homeAtHome.length && awayAway.length
      ? `casa ${homeAtHome.length} · visita ${awayAway.length}`
      : null
  ].filter(Boolean).join(" · ");
  const context = [
    homeRecent.length && awayRecent.length
      ? `forma: ${homeName} ${homeRecord.wins}-${homeRecord.draws}-${homeRecord.losses} y ${awayName} ${awayRecord.wins}-${awayRecord.draws}-${awayRecord.losses} en sus últimos partidos`
      : null,
    homeAtHome.length
      ? `${homeName} en casa: ${recordSummary(homeAtHome).wins}-${recordSummary(homeAtHome).draws}-${recordSummary(homeAtHome).losses} (${homeAtHome.length} partidos)`
      : null,
    awayAway.length
      ? `${awayName} fuera: ${recordSummary(awayAway).wins}-${recordSummary(awayAway).draws}-${recordSummary(awayAway).losses} (${awayAway.length} partidos)`
      : null,
    averageGoalsRecent.value === null
      ? null
      : `promedio real de ${averageGoalsRecent.value} goles totales en ${averageGoalsRecent.sampleSize} partidos`,
    homeGoalsFor.value === null || homeGoalsAgainst.value === null
      ? null
      : `${homeName} promedia ${homeGoalsFor.value} goles anotados y ${homeGoalsAgainst.value} recibidos`,
    awayGoalsFor.value === null || awayGoalsAgainst.value === null
      ? null
      : `${awayName} promedia ${awayGoalsFor.value} goles anotados y ${awayGoalsAgainst.value} recibidos`,
    tournamentContext ? `instancia indicada por ESPN: ${tournamentContext}` : null,
    homeCornersFor.value === null || awayCornersFor.value === null
      ? null
      : `córners a favor: ${homeName} ${homeCornersFor.value} y ${awayName} ${awayCornersFor.value} por partido`
  ].filter(Boolean);

  const candidateGroups = [];
  const addMarketCandidate = (category, market, outcome, selection, minimumSample = 8) => {
    if (!market || !market.available || market.sampleSize < minimumSample || outcome.probability == null) return;
    candidateGroups.push({
      category,
      selection,
      probability: outcome.probability,
      hits: outcome.hits == null ? null : outcome.hits,
      sampleSize: outcome.sampleSize || market.sampleSize
    });
  };
  const addBestOutcome = (category, market, selectionFor, minimumSample = 8) => {
    if (!market || !market.available || market.sampleSize < minimumSample) return;
    const outcome = (market.outcomes || [])
      .filter(entry => entry.probability != null)
      .sort((a, b) => b.probability - a.probability)[0];
    if (outcome) addMarketCandidate(category, market, outcome, selectionFor(outcome));
  };
  addBestOutcome("resultado", fullTime, outcome =>
    outcome.outcome === "Gana el local" ? `Gana ${homeName}`
      : outcome.outcome === "Gana el visitante" ? `Gana ${awayName}` : "Empate");
  addBestOutcome("primer-tiempo", firstHalf, outcome =>
    `1.ª mitad · ${outcome.outcome === "Gana el local" ? `Gana ${homeName}`
      : outcome.outcome === "Gana el visitante" ? `Gana ${awayName}` : "Empate"}`);
  const halfWinCandidate = atLeastOneHalf.teams
    .filter(team => team.probability != null && team.sampleSize >= 5)
    .sort((a, b) => b.probability - a.probability || b.sampleSize - a.sampleSize)[0];
  if (halfWinCandidate) {
    addMarketCandidate("ganar-una-mitad", atLeastOneHalf,
      { probability: halfWinCandidate.probability, hits: halfWinCandidate.hits, sampleSize: halfWinCandidate.sampleSize },
      `${halfWinCandidate.team} gana al menos una mitad`, 5);
  }
  const goalCandidates = [];
  for (const market of goals.totals) {
    for (const [direction, observation] of [["Más", market.over], ["Menos", market.under]]) {
      if (observation.sampleSize >= 8) {
        goalCandidates.push({
          outcome: { probability: observation.probability, hits: observation.hits, sampleSize: observation.sampleSize },
          selection: `${direction} de ${market.line} goles`
        });
      }
    }
  }
  const bestGoalCandidate = [...goalCandidates, ...(goals.bothTeamsScore.available
    ? goals.bothTeamsScore.outcomes.map(outcome => ({
      outcome,
      selection: `Ambos marcan: ${outcome.outcome}`
    }))
    : [])].filter(candidate => candidate.outcome.sampleSize >= 8)
    .sort((a, b) => b.outcome.probability - a.outcome.probability || b.outcome.sampleSize - a.outcome.sampleSize)[0];
  if (bestGoalCandidate) {
    addMarketCandidate("goles", { available: true, sampleSize: bestGoalCandidate.outcome.sampleSize },
      bestGoalCandidate.outcome, bestGoalCandidate.selection);
  }
  const addBestTotalLine = (category, markets, suffix) => {
    const options = markets.flatMap(market => [
      { observation: market.over, selection: `Más de ${market.line} ${suffix}` },
      { observation: market.under, selection: `Menos de ${market.line} ${suffix}` }
    ]).filter(option => option.observation.sampleSize >= 8)
      .sort((a, b) => b.observation.probability - a.observation.probability
        || b.observation.sampleSize - a.observation.sampleSize)[0];
    if (options) {
      addMarketCandidate(category, { available: true, sampleSize: options.observation.sampleSize },
        options.observation, options.selection);
    }
  };
  addBestTotalLine("corners", corners.totals, "córners");
  addBestTotalLine("tarjetas", discipline.totals, "tarjetas");
  const rankedPicks = [];
  for (const candidate of candidateGroups.sort((a, b) =>
    b.probability - a.probability || b.sampleSize - a.sampleSize
  )) {
    if (rankedPicks.some(pick => pick.category === candidate.category)) continue;
    rankedPicks.push({
      ...candidate,
      support: candidate.hits == null
        ? `${candidate.sampleSize} partidos`
        : `${candidate.hits}/${candidate.sampleSize}`
    });
  }
  const recommendedPicks = rankedPicks.slice(0, 4);
  const principal = recommendedPicks[0] || null;

  return {
    available: true,
    source: "ESPN · resúmenes/boxscores históricos",
    windowPerTeam: 5,
    minimumPrincipalSample: 8,
    methodology: "Frecuencias y promedios observados en partidos finalizados anteriores al evento. Porcentajes empíricos; no son probabilidades calibradas. Cada apartado informa su muestra y omite estadísticas ausentes.",
    principal: principal
      ? { ...principal, context: contextShort, explanation: `Observado en ${principal.sampleSize} apariciones de los últimos encuentros${context.length ? `; ${context.join("; ")}` : ""}.` }
      : { selection: NO_VERIFIED_DATA, probability: null, sampleSize: 0, explanation: "No hay una señal con muestra verificable suficiente." },
    recommendedPicks,
    resultAndHalves: {
      fullTime,
      doubleChance,
      firstHalf,
      atLeastOneHalf
    },
    goals,
    corners,
    shooting,
    discipline,
    matchesUsed: allGames.map(game => ({
      id: game.id,
      date: game.timestamp,
      team: game.team,
      opponent: game.opponent,
      venue: game.venue,
      score: game.score,
      stats: game.stats,
      opponentStats: game.opponentStats,
      firstHalfResult: game.firstHalfResult,
      halvesWon: game.halvesWon,
      boxscoreAvailable: game.boxscoreAvailable
    }))
  };
}

function makeTendency(homeForm, awayForm, homeVenue, awayVenue) {
  if (homeForm.games.length < 5 || awayForm.games.length < 5) {
    return {
      available: false,
      label: "No disponible: se requieren al menos 5 resultados recientes verificables por participante.",
      method: "No se imputan resultados faltantes ni se generan cuotas."
    };
  }
  const hasVenueSample = homeVenue.played >= 3 && awayVenue.played >= 3;
  const homeRate = hasVenueSample
    ? homeForm.winRate * 0.7 + ((homeVenue.wins + homeVenue.draws * 0.5) / homeVenue.played) * 0.3
    : homeForm.winRate;
  const awayRate = hasVenueSample
    ? awayForm.winRate * 0.7 + ((awayVenue.wins + awayVenue.draws * 0.5) / awayVenue.played) * 0.3
    : awayForm.winRate;
  const difference = Number((homeRate - awayRate).toFixed(3));
  let label = "Sin inclinación clara entre las muestras disponibles.";
  if (difference >= 0.15) label = `Tendencia de forma hacia el local (${(difference * 100).toFixed(0)} puntos de índice).`;
  if (difference <= -0.15) label = `Tendencia de forma hacia el visitante (${(Math.abs(difference) * 100).toFixed(0)} puntos de índice).`;
  return {
    available: true,
    label,
    method: hasVenueSample
      ? "Heurística descriptiva: 70% índice de últimos 5 partidos y 30% rendimiento local/visita observado (mínimo 3 partidos en cada sede). H2H, bajas, desgaste e instancia se informan por separado y no se ponderan. No es una probabilidad calibrada."
      : "Heurística descriptiva: índice de resultados de los últimos 5 partidos. Rendimiento local/visita insuficiente y excluido. H2H, bajas, desgaste e instancia se informan por separado y no se ponderan. No es una probabilidad calibrada.",
    sample: { homeRate: Number(homeRate.toFixed(3)), awayRate: Number(awayRate.toFixed(3)) }
  };
}

function parseHeadToHead(summary, homeId, awayId) {
  const series = summary && summary.seasonseries;
  const events = Array.isArray(series) ? series : (series && Array.isArray(series.events) ? series.events : []);
  const games = [];
  for (const event of events) {
    const timestamp = new Date(event.date || "").getTime();
    const competition = (event.competitions || [])[0];
    if (!Number.isFinite(timestamp) || !competition) continue;
    const { home, away } = getCompetitors(competition);
    const ids = [String(home.id || ""), String(away.id || "")];
    if (!ids.includes(String(homeId)) || !ids.includes(String(awayId))) continue;
    const homeScore = parseScore(home.score);
    const awayScore = parseScore(away.score);
    if (homeScore === null || awayScore === null) continue;
    games.push({
      timestamp,
      title: `${competitorName(home)} vs. ${competitorName(away)}`,
      score: `${homeScore} - ${awayScore}`,
      state: competition.status && competition.status.type && competition.status.type.state
    });
  }
  return { summary: series && series.summary || null, games };
}

function extractOdds(summary) {
  const pickcenter = Array.isArray(summary && summary.pickcenter) ? summary.pickcenter : [];
  return pickcenter.flatMap(entry => {
    const provider = entry.provider && entry.provider.name;
    if (!provider) return [];
    const markets = [];
    if (entry.details) markets.push({ market: "Línea", value: String(entry.details) });
    if (entry.overUnder != null && entry.overUnder !== "" && Number.isFinite(Number(entry.overUnder))) {
      markets.push({ market: "Total", value: String(entry.overUnder) });
    }
    if (entry.homeTeamOdds && entry.homeTeamOdds.moneyLine != null) {
      markets.push({ market: "Moneyline local", value: String(entry.homeTeamOdds.moneyLine) });
    }
    if (entry.awayTeamOdds && entry.awayTeamOdds.moneyLine != null) {
      markets.push({ market: "Moneyline visitante", value: String(entry.awayTeamOdds.moneyLine) });
    }
    return markets.length ? [{ provider, markets, source: "ESPN" }] : [];
  });
}

function extractInjuries(data, homeId, awayId) {
  const teams = Array.isArray(data && data.injuries) ? data.injuries : [];
  const idSet = new Set([String(homeId), String(awayId)]);
  const found = [];
  for (const team of teams) {
    if (!idSet.has(String(team.id))) continue;
    for (const injury of team.injuries || []) {
      found.push({
        team: team.displayName || team.name || "",
        athlete: injury.athlete && injury.athlete.displayName || "",
        status: injury.status || (injury.type && injury.type.description) || "",
        detail: injury.details && injury.details.type || "",
        updatedAt: injury.date || null
      });
    }
  }
  return found;
}

async function loadAnalysis(item) {
  if (!item || !item.espn) {
    return {
      available: false,
      message: "El proveedor del evento no ofrece un historial verificable para generar este análisis.",
      dimensions: { form: false, headToHead: false, venue: false, injuries: false, tournament: Boolean(item && item.round), fatigue: false }
    };
  }
  const cached = analysisCache.get(item.id);
  if (cached && Date.now() - cached.at < ANALYSIS_TTL_MS) return cached.value;

  const tasks = [
    settleProvider("ESPN · resumen", () =>
      fetchJson(`${item.espn.baseUrl}/summary?event=${encodeURIComponent(item.espn.eventId)}`)
    ),
    settleProvider(`ESPN · historial ${item.participants.home.name}`, () =>
      fetchJson(`${item.espn.baseUrl}/teams/${encodeURIComponent(item.espn.homeId)}/schedule`)
    ),
    settleProvider(`ESPN · historial ${item.participants.away.name}`, () =>
      fetchJson(`${item.espn.baseUrl}/teams/${encodeURIComponent(item.espn.awayId)}/schedule`)
    )
  ];
  if (item.sport === "NBA") {
    tasks.push(settleProvider("ESPN · bajas NBA", () =>
      fetchJson(`${item.espn.baseUrl}/injuries`)
    ));
  }
  const [summaryResult, homeHistoryResult, awayHistoryResult, injuryResult] = await Promise.all(tasks);
  const summary = summaryResult.items;
  const homeGames = homeHistoryResult.error
    ? []
    : parseCompletedGames(homeHistoryResult.items, item.espn.homeId, item.timestamp);
  const awayGames = awayHistoryResult.error
    ? []
    : parseCompletedGames(awayHistoryResult.items, item.espn.awayId, item.timestamp);
  const homeRecent = homeGames.slice(0, 5);
  const awayRecent = awayGames.slice(0, 5);
  const recentGames = uniqueHistoricalGames(homeRecent, awayRecent);
  const boxscoreWarnings = [];
  const enrichedGames = item.sport === "Fútbol"
    ? await mapLimit(recentGames, 4, async game => {
      try {
        return enrichHistoricalGame(game, await loadHistoricalBoxscore(item, game.id));
      } catch (error) {
        boxscoreWarnings.push(`ESPN · boxscore ${game.id}: ${providerError(error)}`);
        return enrichHistoricalGame(game, { teams: new Map(), halves: new Map() });
      }
    })
    : recentGames.map(game => enrichHistoricalGame(game, { teams: new Map(), halves: new Map() }));
  const enrichedById = new Map(enrichedGames.map(game => [game.id, game]));
  const warnings = [summaryResult, homeHistoryResult, awayHistoryResult, injuryResult]
    .filter(result => result && result.error)
    .map(result => `${result.name}: ${result.error}`);
  warnings.push(...boxscoreWarnings);
  const enrichedHomeGames = homeRecent.map(game => enrichedById.get(game.id));
  const enrichedAwayGames = awayRecent.map(game => enrichedById.get(game.id));
  const homeForm = summarizeForm(enrichedHomeGames);
  const awayForm = summarizeForm(enrichedAwayGames);
  const footballMarkets = item.sport === "Fútbol"
    ? buildFootballMarkets(enrichedHomeGames, enrichedAwayGames, item.participants.home.name, item.participants.away.name, item.round)
    : null;
  const homeVenue = venueRecord(homeGames, "local");
  const awayVenue = venueRecord(awayGames, "visita");
  const h2h = summaryResult.error
    ? { summary: null, games: [] }
    : parseHeadToHead(summary, item.espn.homeId, item.espn.awayId);
  const injuriesAvailable = Boolean(injuryResult && !injuryResult.error);
  const round = item.round
    || (summary && summary.header && summary.header.competitions && summary.header.competitions[0]
      && summary.header.competitions[0].notes && summary.header.competitions[0].notes[0]
      && (summary.header.competitions[0].notes[0].headline || summary.header.competitions[0].notes[0].text))
    || null;
  const homeLast = homeForm.games[0] && homeForm.games[0].timestamp;
  const awayLast = awayForm.games[0] && awayForm.games[0].timestamp;
  const value = {
    available: true,
    updatedAt: new Date().toISOString(),
    source: "ESPN",
    participants: item.participants,
    quickForecast: item.quickForecast || buildQuickForecast(item),
    markets: footballMarkets,
    form: [
      { side: "Local", team: item.participants.home.name, ...homeForm },
      { side: "Visitante", team: item.participants.away.name, ...awayForm }
    ],
    venuePerformance: [
      { side: "Local en casa", team: item.participants.home.name, ...homeVenue },
      { side: "Visitante fuera", team: item.participants.away.name, ...awayVenue }
    ],
    headToHead: h2h,
    injuries: injuriesAvailable
      ? extractInjuries(injuryResult.items, item.espn.homeId, item.espn.awayId)
      : null,
    injuriesNote: item.sport === "NBA"
      ? injuriesAvailable
        ? "Reporte ESPN consultado. La ausencia de un jugador en el feed no confirma que esté disponible."
        : "Reporte de bajas no disponible; no se infieren jugadores ausentes."
      : "No se consultó un feed verificable de bajas para este deporte; esta variable se excluye.",
    tournament: round
      ? { value: round, source: "ESPN" }
      : { value: null, source: null, note: "Instancia o importancia del torneo no disponible en la fuente." },
    fatigue: [
      { team: item.participants.home.name, daysSinceLastGame: homeLast ? Math.max(0, Math.floor((item.timestamp - homeLast) / 86400000)) : null },
      { team: item.participants.away.name, daysSinceLastGame: awayLast ? Math.max(0, Math.floor((item.timestamp - awayLast) / 86400000)) : null }
    ],
    odds: summaryResult.error ? [] : extractOdds(summary),
    tendency: makeTendency(homeForm, awayForm, homeVenue, awayVenue),
    warnings,
    dimensions: {
      form: !homeHistoryResult.error && !awayHistoryResult.error && homeGames.length > 0 && awayGames.length > 0,
      headToHead: !summaryResult.error && h2h.games.length > 0,
      venue: homeVenue.played > 0 || awayVenue.played > 0,
      injuries: injuriesAvailable,
      tournament: Boolean(round),
      fatigue: Boolean(homeLast && awayLast)
    }
  };
  for (const [id, entry] of analysisCache) {
    if (Date.now() - entry.at > ANALYSIS_TTL_MS) analysisCache.delete(id);
  }
  if (analysisCache.size >= 500) analysisCache.delete(analysisCache.keys().next().value);
  analysisCache.set(item.id, { at: Date.now(), value });
  return value;
}

function isSameLocalDay(timestamp, now) {
  const date = new Date(timestamp);
  return date.getFullYear() === now.getFullYear()
    && date.getMonth() === now.getMonth()
    && date.getDate() === now.getDate();
}

function withinRange(item, range, now) {
  if (item.state === "post") return false;
  if (range === "live") return item.state === "in";
  if (range === "today") return item.state === "in" || isSameLocalDay(item.timestamp, now);
  if (range === "upcoming") {
    return item.state === "in"
      || (item.timestamp >= now.getTime() && item.timestamp <= now.getTime() + 7 * 24 * 3600000);
  }
  const hoursByRange = { "3h": 3, "6h": 6, "12h": 12, "1d": 24, "2d": 48, "3d": 72, "7d": 168 };
  const hours = hoursByRange[range];
  if (!hours) return item.state === "in" || isSameLocalDay(item.timestamp, now);
  return item.state === "in" || (item.timestamp >= now.getTime() && item.timestamp <= now.getTime() + hours * 3600000);
}

function searchItems(items, query = {}) {
  const now = query.now instanceof Date ? query.now : new Date();
  const terms = norm(query.q || "").split(/\s+/).filter(Boolean);
  return items.filter(item => {
    if (query.sp && item.sport !== query.sp) return false;
    if (query.lg && item.leagueId !== query.lg) return false;
    if (!withinRange(item, query.rg || "today", now)) return false;
    const haystack = norm(`${item.title} ${item.sport} ${item.league} ${item.venue}`);
    return terms.every(term => haystack.includes(term));
  });
}

function listLeagues() {
  const seen = new Set();
  const leagues = ESPN_LEAGUES.filter(league => {
    if (seen.has(league.id)) return false;
    seen.add(league.id);
    return true;
  }).map(({ id, sport, label }) => ({ id, sport, label }));
  for (const league of OPENLIGA_LEAGUES) {
    if (!league.leagueId.startsWith("opendb:") || seen.has(league.leagueId)) continue;
    seen.add(league.leagueId);
    leagues.push({ id: league.leagueId, sport: "Fútbol", label: league.label });
  }
  return leagues;
}

module.exports = {
  CACHE_TTL_MS,
  ESPN_LEAGUES,
  buildQuickForecast,
  buildFootballMarkets,
  enrichHistoricalGame,
  extractOdds,
  listLeagues,
  loadAnalysis,
  loadEvents,
  makeTendency,
  mergeEvents,
  oddsConsensusForEvent,
  parseFootballDataMatches,
  parseEspnMarketOdds,
  parseBoxscoreSummary,
  parseCompletedGames,
  parseEspnEvents,
  parseOpenLigaEvents,
  searchItems
};
