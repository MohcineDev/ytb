const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const fs = require('fs');


const app = express()


app.use(cors());


app.listen(4000, () => {
    console.log("Server Works !!! At port 4000")
})

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;
    console.log(URL)

 
    res.header('Content-Disposition', 'attachment; filename="video.mp4"'); 
    
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});