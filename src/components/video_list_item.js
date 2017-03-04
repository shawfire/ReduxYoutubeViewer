import React from 'react';

const VideoListItem = ({video}) => {  // ES6 syntaxs
  // const video = props.video;
  return (
    <li>
      {video.snippet.title}
    </li>
  );
};

export default VideoListItem;
