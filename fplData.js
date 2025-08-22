const BASE_URL = 'https://fantasy.premierleague.com/api/';

async function getFPLData() {
    const url = BASE_URL + 'bootstrap-static/';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching FPL data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return { error: 'Failed to fetch FPL data' };
    }
}


async function getLeagueStandings(leagueID) {
    const url = BASE_URL + 'leagues-classic/' + leagueID + '/standings/'
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching league standings data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return { error: 'Failed to fetch league standings data' };
    }
}

module.exports = {
    getFPLData,
    getLeagueStandings
};