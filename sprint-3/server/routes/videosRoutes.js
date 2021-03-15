

const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');


router.get('/',(req, res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    res.status(200).json(parsedVideos)
});

router.get('/:videoId',(req,res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    const pickedVideo =parsedVideos.find(video=> video.id===req.params.videoId);
    res.status(200).json(pickedVideo)
})

router.post('/', (req, res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    const getTime = new Date().getTime()
   const newVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: 'Supreet Gill',
        image: 'http://localhost:8080/Upload.jpg',
        description: req.body.description,
        views: '1,001,023',
        likes: '110,985',
        duration: '4:01',
        video: 'https://project-2-api.herokuapp.com/stream',
        timestamp: getTime,
        comments: [{
                name: 'Micheal Lyons',
                comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.',
                id: uniqid(),
                likes: 0,
                timestamp: getTime
            }  
        ]
    }
    parsedVideos.push(newVideo)
    fs.writeFileSync("./data/video.json", JSON.stringify(parsedVideos));

    res.status(200).json(newVideo)
})

//Implement a PUT endpoint at /videos/:videoId/likes that increments

router.put('/:videoId/likes',(req,res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
  
   const likedVideo = parsedVideos.find(video=>video.id===req.params.videoId);
   likedVideo.likes = (parseInt(likedVideo.likes) + 1).toString();

   const updatedVideo = parsedVideos.filter(video=> video.id!==req.params.videoId);
   updatedVideo.push(likedVideo);

   fs.writeFileSync('./data/video.json', JSON.stringify(parsedVideos));
   res.status(200).json(likedVideo)
})


module.exports = router