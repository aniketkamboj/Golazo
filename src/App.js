import React, { useEffect, useState } from 'react'
import Video from './Video.js'
// import db from './firebase'
import './App.css';
// const puppeteer = require('puppeteer');

function App() {
  const [videos,setVideos] = useState([]);
  
  useEffect(()=>{
    // db.collection('videos').onSnapshot(snapshot => (
    //   setVideos(snapshot.docs.map(doc => doc.data()))
    // ))
    
    const data = require("./server/data.json");
    setVideos(data)
  },[videos])
  
  return (
    <div className="app">
      {/* <h1>Hello</h1> */}
       <div className="app__videos">

        {videos.map(({url,channel,description,song,likes,messages,shares}) => (
          <Video
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}

            />
        ))}
          
        
       </div>
    </div>
  ); 
}

export default App;
