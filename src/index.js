const express = require('express');
const app = express();

const connect = require("./config/database")
const apiRoutes = require("./routers/index");
const bodyParser = require('body-parser');
// const Tweet = require("./models/tweet")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));



app.use("/api" , apiRoutes);

const setupAndConfigServer = async () => {
     app.listen(3000, ()=>{
          console.log('Server is running on port 3000');
          // Connect to MongoDB database
          connect();
          // console.log("Database created successfully")
     })
     // const tweet =  await Tweet.create({
     //      content : "This is a tweet from Instagram",
     //      userEmail : "user@example.com",
     // })

     // console.log(tweet);
}


setupAndConfigServer();