const express = require('express');
const app = express();
const port = 5005;
require("./api-routes")(app)

const pgp = require('pg-promise')();
const connect = require('./config');
const db = pgp(connect);

const Album = require('./Models/Album')(db);
const User = require('./Models/User')(db);


//gooder
Album.findAll()
.then(async albums=>{
    let result = await Promise.all(albums.map(album=>Album.findById(album.id)))
    console.log(result);
    //do something with result
});

//less good
Album.findAll()
.then(albums=>{
    let newAlbums= [];    
    albums.forEach(async album=>{
        newAlbums.push(await Album.findById(album.id))
        if(newAlbums.length === albums.length){
            console.log(newAlbum)
        }
    })
})


app.use(express.json())
app.use(express.static('public'))



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});