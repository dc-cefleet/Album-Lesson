

const apiRoutes = (app) =>{
    app.get("/api/albums", async (req,res)=>{
        let albums = await Album.findAll();
        res.send(albums);
    })
};

module.exports = apiRoutes;