export async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Fetch error ' + url + ' code=' + res.status);
  return res.json();
}

export async function getPlayers() {
  return fetchJSON('https://api.sleeper.app/v1/players/nfl');
}

export async function getProjections(season, week) {
  return fetchJSON(`https://api.sleeper.app/v1/projections/nfl/${season}/${week}`);
}

export async function getLeagueRosters(leagueId) {
  return fetchJSON(`https://api.sleeper.app/v1/league/${leagueId}/rosters`);
}

export async function getLeagueUsers(leagueId) {
  return fetchJSON(`https://api.sleeper.app/v1/league/${leagueId}/users`);
}

export async function getMatchups(leagueId, week) {
  return fetchJSON(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`);
}

export async function getState() {
  return fetchJSON('https://api.sleeper.app/v1/state/nfl');
}