const CRUD = require('./CRUD')

const Album = (db)=>{
    const crud = CRUD(db, 'albums');   

    const findById = async (id, show_reviews=true)=> {
        let album = await crud.findItemById(id);
        if(!show_reviews) return album;

        //i have to write the connections
        let reviews = await db.any(`SELECT reviews.*, users.* from reviews JOIN users ON reviews.users_id=users.id WHERE reviews.album_id = '${id}';`)
        return {album, reviews};
    };

    return {
        findAll:crud.findAllItems,
        findById,
        createNew:crud.createNewItem,
        remove:crud.deleteItem
    }
}

module.exports = Album;