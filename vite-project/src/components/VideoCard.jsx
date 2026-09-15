import React from 'react'
import './VideoCard.css'

const VideoCard = ({video, count}) => {
    // const video = props.video
    // const count = props.count
    // const {video, count} = props
  return (
    <div className='video-card'>
        {/* 썸네일 이미지 */}
        <img 
            src={video.sumbnail}
            alt={video.title}
            className='video-thumbnail' 
        />

        {/* 채널로고, 타이틀, 채널명, 조회수... */}
        <div className='channel-info'>
            <img 
                src={video.channelLogo}
                alt={video.channelName}
                className='channel-logo' 
            />
            <div className='channel-details'>
                <h3 className='video-title'>{video.title}</h3>
                <p className='video-views'>{video.views} 조회 • {video.date}</p>
            </div>
        </div>

    </div>
  )
}

export default VideoCard