import React from 'react';

const VideoList = (props) => {
  // props.property for functional compoents bu this.props.perperty anywhere in a class component
  // const videos = props.videos
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;
