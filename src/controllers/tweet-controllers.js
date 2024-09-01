const TweetService = require("../services/tweet-Services");

const tweetService = new TweetService();

const create =  async (req, res) => {
     // Simulate creating a tweet
     try {
          // console.log("Tweet created:", req.body);
          const response = await tweetService.createTweet(req.body);
          return res.status(201).json({
          result: response,
          message: "Tweet created successfully",
          success : true,
          err : {},
          })
     } catch (error) {
          console.error(error);
          return res.status(400).json({
          tweet: {},
          message: "Failed to create tweet",
          success : false,
          err : error,
          })
     }  
}

const deleteTweet = async (req, res) => {
     try {
          console.log(req.params.id);
          const response = await tweetService.deleteTweet(req.params.id);
          return res.status(200).json({
               result : response,
               message: "Tweet deleted successfully",
               success : true,
               err : {},
          });
     } catch (error) {
          console.error(error);
          return res.status(500).json({
               tweet: {},
               message: "Failed to delete tweet",
               success : false,
               err : error,
          });
     }
}

const getAllTweets = async (req,res) => {
     try {
          const response = await tweetService.getAllTweets();
          return res.status(200).json({
               tweets: response,
               message: "Fetched all tweets successfully",
               success : true,
               err : {},
          })
     } catch (error) {
          console.error(error);
          return res.status(500).json({
               tweets: {},
               message: "Failed to fetch tweets",
               success : false,
               err : error,
          })
     }
}

const updateTweet = async (req, res) => {
     try {
          const response = await tweetService.UpdateTweets(req.params.id , req.body);
          return res.status(200).json({
               tweet: response,
               message: "Tweet updated successfully",
               success : true,
               err : {},
          })
     } catch (error) {
          console.error(error);
          return res.status(400).json({
               tweet: {},
               message: "Failed to update tweet",
               success : false,
               err : error,
          })
     }
}

module.exports = {
     create,
     deleteTweet,
     getAllTweets,
     updateTweet
}