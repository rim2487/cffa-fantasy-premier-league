const express = require('express');
const app = express()
const PORT = 3000
import { getFPLData, getLeagueStandings } from './fplData';

app.get('/getFPLData', async (req, res) => {
    try {
        const data = await getFPLData();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch FPL data' });
    }
})

app.get('/getLeagueStandings/:leagueID', async (req, res) => {
    try {
        const leagueID = req.params.leagueID;
        const data = await getLeagueStandings(leagueID);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch FPL data' });
    }
})

app.use(express.static(`${__dirname}/cffa-client/dist/cffa-client/browser`))

app.listen(PORT, () => {
    console.log(`Application is running`);
})

export default app;