# Fuentes de datos y pronósticos

ORACULUS no atribuye datos a un proveedor si no recibió una respuesta verificable.

## Fuentes activas

- **ESPN:** calendarios, resultados, forma y, cuando el evento lo incluye, mercado moneyline de una casa publicado por ESPN. La probabilidad mostrada se calcula quitando el margen proporcionalmente; no es una predicción oficial de ESPN.
- **OpenLigaDB:** partidos de las competiciones compatibles. Además de las competiciones compartidas con ESPN, se consultan calendarios disponibles de 2. Bundesliga, 3. Liga, Eredivisie, DFB-Pokal y Frauen-Bundesliga. Esos torneos se identifican con filtros propios para no asociarlos a otra liga. Los eventos de copas europeas se unen a ESPN solo si coinciden competición, equipos normalizados y hora dentro de dos horas.
- **The Odds API (opcional):** compara mercados moneyline de varias casas y muestra el consenso sin margen. Para activarla, crea una clave y configura la variable de entorno `ODDS_API_KEY`. Por ejemplo, en Windows:

  ```powershell
  setx ODDS_API_KEY "tu_clave"
  ```

  Cierra y vuelve a abrir ORACULUS para que el proceso reciba la variable. Se consulta al filtrar NBA o una liga compatible: Premier League, LaLiga, Serie A, Bundesliga, Ligue 1 o MLS. `ODDS_API_REGIONS` permite cambiar la región; por defecto es `eu`. La clave se envía en el encabezado HTTP, no se expone al navegador.
- **Football-Data.org (opcional):** configura `FOOTBALL_DATA_KEY` para añadir calendarios dentro del rango solicitado. La clave permanece en el backend.

## Fuentes solicitadas que no se automatizan

En el entorno de ejecución actual, TheSportsDB, SofaScore, SportyTrader y BetMines respondieron con HTTP 403. No se evaden sus bloqueos. Para Scores24 no se validó una API pública autorizada de pronósticos; sus rutas de datos automatizadas que se revisaron están excluidas en `robots.txt`. Se muestran como no disponibles y no se usan para fabricar picks.

Los nombres se normalizan conservando una lista pequeña de alias explícitos. Dos calendarios solo se fusionan cuando coinciden los equipos, la hora difiere como máximo dos horas y, si ambos proveedores identifican la liga, sus competiciones coinciden. Esto prefiere mostrar un posible duplicado a fusionar un encuentro de otra competición o una hora desactualizada.

El análisis de fútbol elige como principal el mercado descriptivo con la mayor frecuencia observada entre los que tienen al menos ocho observaciones; «ganar una mitad» requiere cinco partidos de ese equipo. Si no se alcanza esa muestra, no fuerza una selección. Los porcentajes son frecuencias históricas, no probabilidades calibradas ni garantías de resultado.
