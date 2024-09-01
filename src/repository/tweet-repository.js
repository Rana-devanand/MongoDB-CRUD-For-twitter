const Tweet = require("../models/tweet");

class TweetRepository {
     async createTweet (data) {
          try {
               // console.log("Creating repo " , data);
               const response  = await Tweet.create(data);
               return response;
          } catch (error) {   
               throw new Error(error);
          }
     }

     async updateTweet (id , data ) {
          try {
               const updateTweet = await Tweet.findByIdAndUpdate(id , data , {new : true})
               return updateTweet;
          } catch (error) {
               throw new Error(error);
          }
     }

     async deleteTweet (id) {
          try {
               const deleteTweet = await Tweet.findByIdAndDelete(id);
               return deleteTweet;
          } catch (error) {
               throw new Error(error);
          }
     }
     async getAllTweets () {
          try {
               const tweets = await Tweet.find({});
               return tweets;
          } catch (error) {
               throw new Error(error);
          }
     }
}

module.exports = TweetRepository;