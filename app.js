const express = require('express');
const app = express();
const port = 5005;
require("./api-routes")(app)


app.use(express.json())
app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});