const axios = require('axios');
const {SECRET_ID} = require('./secret.js');

const url = require('url');
const path = require('path');
const fs = require('fs');
// cache html on server restart
// a smart solution for both js and html could've been created
// removing cache on dev env
const html = fs.readFileSync('./dist/index.html');

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send(html.toString('utf8')));

app.get('/**/*.js', (req, res) => {
    const {pathname} = url.parse(req.url);
    const js = fs.readFileSync(path.join('dist', pathname));
    res.send(js.toString('utf8'))
});

app.get('/token', (req, res) => {

    const {
        client_id,
        redirect_uri,
        code
    } = req.query;

    axios.get(fourSquareTokenUrl ({ client_id, redirect_uri, code })).then((tokenRes) => {
        console.log(tokenRes.data)
        res.send(JSON.stringify(tokenRes.data))
    }).catch(function (err) {
        res.status(500)
        res.send(err.message)
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
