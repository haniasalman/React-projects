// import './ImageList.css';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  const videos_list = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>;
  });

  return <div className="image-list">{videos_list}</div>;
};

export default VideoList;
