const express = require('express');
const app = express();
const cors = require('cors');
const videosRoutes = require('./routes/videosRoutes');
const commentRoutes = require('./routes/commentRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/',express.static('public'));

app.use("/videos", videosRoutes);
app.use("/", commentRoutes);


app.listen(PORT, ()=>{
    console.log(`Listening on port🌦 ${PORT}`)
})

