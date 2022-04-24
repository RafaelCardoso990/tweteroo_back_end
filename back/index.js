import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());

let users = []
let tweets = []

app.post("/sign-up", (req, res) => {
    
    const user = req.body;
    users.push(user);
   
    res.send("OK")
})

app.post("/tweets", (req, res) => {

    const username = req.body.username;
    const tweet = req.body.tweet;
    
    tweets.push({
        avatar: users.find(user => user.username === username).avatar,
        username,
        tweet
    })
     
    res.send("OK")
})

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(tweets.length - 10));
})

app.listen(5000, () =>{
    console.log("Ta rodando")
});

