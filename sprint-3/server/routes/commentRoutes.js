const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');


//POST /videos/:id/comments
router.post('/videos/:videoId/comments',(req,res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    commentBody = {
        name: 'Preeti Gill',
        comment: req.body.comment,
        id: uniqid(),
        likes: 0,
        timestamp: new Date().getTime()
    }
   const videoPicked = parsedVideos.find(v=> v.id===req.params.videoId)
   const commentsArr = videoPicked.comments
   commentsArr.push(commentBody)

   // filer  ..+ push updated video obj
   const updatedVideosArr = parsedVideos.filter(v=> v.id!==req.params.videoId);
   updatedVideosArr.push(videoPicked)

   fs.writeFileSync("./data/video.json", JSON.stringify(updatedVideosArr));
   res.status(200).json(commentBody)
})



//DELETE /videos/:videoId/comments/:commentId f
router.delete('/videos/:videoId/comments/:commentId',(req, res)=>{
    const videos = fs.readFileSync('./data/video.json');
    const parsedVideos = JSON.parse(videos);
    //picked video obj
    const videoPicked = parsedVideos.find(v=> v.id===req.params.videoId);
    //picked videos --comment arry
    let commentsArr = videoPicked.comments

    const deletedComment = commentsArr.find(c=> c.id === req.params.commentId)
    //new commentArr ->after deleting the comment
    const updatedCommArr= commentsArr.filter(c=> c.id!== req.params.commentId);
    videoPicked.comments = updatedCommArr;
    // commentsArr.push(updatedCommArr);

    const latestvideoArr=  parsedVideos.filter(v=> v.id!==req.params.videoId);
    latestvideoArr.push(videoPicked);

    fs.writeFileSync("./data/video.json", JSON.stringify(latestvideoArr));
    res.status(200).json(deletedComment)
})

module.exports = router