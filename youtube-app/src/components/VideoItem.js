import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="ui items">
      <div className="item" onClick={() => onVideoSelect(video)}>
        <div className="ui tiny image">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
        <div className="middle aligned content">
          <a className="header">{video.snippet.title}</a>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
