const CRUD = require('./CRUD')

const User = (db)=>{
    const crud = CRUD(db, 'users');

    const findById = async (id, show_reviews=true)=> {
        let user = await crud.findItemById(id);
        if(!show_reviews) return album;

        let reviews = await db.any(`SELECT reviews.*, albums.* from reviews JOIN albums ON reviews.album_id=albums.id WHERE reviews.user_id='${req.params.id}`)
        return {user,reviews}
    }

    return {
        findAll:crud.findAllItems,
        findById,
        createNew:crud.createNewItem,
        remove:crud.deleteItem
    }
}

module.exports = User;