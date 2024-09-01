const TweetRepository = require("../repository/tweet-repository");

class TweetService {

     constructor(){
          this.TweetRepository = new TweetRepository();
     }

     async createTweet (data) {
          try {
               // console.log("Creating Tweet" , data);
               const CreateTweetResponse = await this.TweetRepository.createTweet(data);
               return CreateTweetResponse;
          } catch (error) {
               console.error("Something went wrong in service layer : ",error);
          }
     }
     async deleteTweet(id) {
          try {
               const deleteTweet = await this.TweetRepository.deleteTweet(id);
               return deleteTweet;
          } catch (error) {
               console.error("Something went wrong in service layer : ",error);
          }
     }

     async UpdateTweets (id , data) {
          try {
               const updateTweet = await this.TweetRepository.updateTweet(id , data);
               return updateTweet;
          } catch (error) {
               console.error("Error updating Tweets", error);
          }
     }

     async getAllTweets () {
          try {
               const tweets = await this.TweetRepository.getAllTweets();
               return tweets;
          } catch (error) {
               console.error("Something went wrong in service layer : ",error);
          }
     }
}

module.exports = TweetService;