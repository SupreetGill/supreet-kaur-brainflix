
const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

const incLikes =(likes)=>{
    return likes + 1;
}

router.get('/',(req, res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    // console.log(`from get request 🎨${parsedVideos}`)
    res.status(200).json(parsedVideos)
});

router.get('/:videoId',(req,res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    // const videoId = req.params.videoId
    const pickedVideo =parsedVideos.find(video=> video.id===req.params.videoId);
    res.status(200).json(pickedVideo)
    // console.log(pickedVideo)
})

router.post('/', (req, res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    // console.log(`is this parsed one🧘‍♂️${parsedVideos}`)
    const getTime = new Date().getTime()
   const newVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: 'Radio mirchi',
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
    // console.log(parsedVideos)
})

//Implement a PUT endpoint at /videos/:videoId/likes that increments
// the like count of the video specified by video.

router.put('/:videoId/likes',(req,res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
  
   const likedVideo = parsedVideos.find(video=>video.id===req.params.videoId);
   const videoLikes = likedVideo.likes;
   incLikes(videoLikes);
   res.send(parsedVideos)

})


module.exports = router