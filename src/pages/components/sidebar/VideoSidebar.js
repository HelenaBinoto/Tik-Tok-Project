import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatIcon from '@mui/icons-material/Chat'
import ShareIcon from '@mui/icons-material/Share'

function VideoSidebar({ likes, commentaries, shares }) {
  const [liked, setLiked] = useState(false)

  function handdleLike() {
    setLiked(!liked)
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_heart" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? likes + 1 : likes} </p>
      </div>
      <div className="videoSidebar_commentary">
        <ChatIcon fontSize="large" />
        <p>{commentaries}</p>
      </div>
      <div className="videoSidebar_share">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
