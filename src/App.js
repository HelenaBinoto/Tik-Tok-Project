import React, { useEffect, useState } from 'react'
import './App.css'
import Video from './pages/Video.js'
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {
  let maxHeight
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos()
  }, []) // para não criar loop

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app_videos">
        {video.map(item => {
          return (
            <Video
              likes={item.likes}
              commentaries={item.commentaries}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}

        {/* <Video
          likes={100}
          commentaries={200}
          shares={300}
          name="Helena"
          description="Gatinho pulando"
          music="epic song"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        /> */}

        {/* <Video
          likes={111}
          commentaries={222}
          shares={333}
          name="Victor"
          description="Gatinho fofo"
          music="clap your hands"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da"
        /> */}
      </div>
    </div>
  )
}

export default App
