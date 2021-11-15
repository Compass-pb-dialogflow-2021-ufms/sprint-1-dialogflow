const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const API_KEY ='27081df1dd8e437fa867ef624b08662f';
const cors = require('cors');
const axios = require('axios');
const path = require('path');
app.use(cors());
app.use(express.urlencoded({extended:'false'}));
app.use(express.json());

const date = new Date();
let dateCurrent = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
let dateWeek = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+7}`;


 
app.use('/',express.static(path.join(__dirname,"Front")));

app.get('/api/:code', async (req, res) => {

    const codee = req.params.code.slice(1);
    const {data} = await axios({
        headers: { 'X-Auth-Token': API_KEY },
        url: `https://api.football-data.org/v2/matches?competitions=${codee}&dateFrom=${dateCurrent}&dateTo=${dateWeek}`
    });

        
        return res.json(data['matches']);
});

app.listen(port);