const axios = require('axios');
const {SECRET_ID} = require('./secret.js');

const fs = require('fs');
const html = fs.readFileSync('./dist/index.html');

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send(html.toString('utf8')));

app.get('/js/index.js', (req, res) => {
    const js = fs.readFileSync('./dist/js/index.js');
    res.send(js.toString('utf8'))
});

app.get('/token', (req, res) => {

    const {
        client_id,
        redirect_uri,
        code
    } = req.query;

    axios.get(fourSquareTokenUrl ({ client_id, redirect_uri, code })).then((tokenRes) => {
        res.send(JSON.stringify(tokenRes.data))
    }).catch(function (err) {
        res.status(500)
        res.send(err)
    })
});

function fourSquareTokenUrl ({ client_id, redirect_uri, code }) {
    return `https://foursquare.com/oauth2/access_token
                ?client_id=${client_id}
                &client_secret=${SECRET_ID}
                &grant_type=authorization_code
                &redirect_uri=${encodeURIComponent(redirect_uri)}
                &code=${code}`.replace(/\s/g, '')
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
