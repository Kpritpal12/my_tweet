import React from 'react'
import Tweet from "./statictweet/Tweet"

const testTweet1 = {
    message : "Something about cats.",
    gravator : "xyz",
    author : {
        handle : "catperson",
        name : "Cat Person ABC"
    },
    likes : 2,
    retweet : 0,
    timestamp : "3 hr ago"
}
const testTweet2 = {
    message : "Est incididunt laboris veniam ad sint duis nisi.",
    gravator : "xyz",
    author : {
        handle : "catperson",
        name : "Cat Person ABC"
    },
    likes : 2,
    retweet : 0,
    timestamp : "3 hr ago"
}

const testTweet3 = {
    message : "Magna ut proident commodo consequat officia velit dolore nostrud velit sunt deserunt.",
    gravator : "xyz",
    author : {
        handle : "pritpal",
        name : "Singh1699"
    },
    likes : 2,
    retweet : 0,
    timestamp : "3 hr ago"
}

const testTweet4 = {
    message : "Qui irure Lorem sunt minim est laborum labore.",
    gravator : "xyz",
    author : {
        handle : "catperson",
        name : "Cat Person ABC"
    },
    likes : 2,
    retweet : 0,
    timestamp : "3 hr ago"
}
const App = () => {
  return (
    <div>
        <Tweet data = {testTweet1}/>
        <Tweet data = {testTweet2}/>
        <Tweet data = {testTweet3}/>
        <Tweet data = {testTweet4}/>
    </div>
  )
}

export default App
