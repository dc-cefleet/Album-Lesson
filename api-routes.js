const pgp = require('pg-promise')();
const connect = require('./config');
const db = pgp(connect);

const Album = require('./Models/Album')(db);
const User = require('./Models/User')(db);

const apiRoutes = (app) =>{
    app.get("/api/albums", async (req,res)=>{
        let albums = await Album.findAll();
        res.send(albums);
    })
};

module.exports = apiRoutes;