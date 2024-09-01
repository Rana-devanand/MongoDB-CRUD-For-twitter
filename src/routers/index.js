const express = require('express');

const router = express.Router();
const TweetController = require("../controllers/tweet-controllers");

router.post("/createTweets" , TweetController.create);
router.get("/allTweets", TweetController.getAllTweets);
router.delete("/deleteTweets/:id" , TweetController.deleteTweet);

module.exports = router;
