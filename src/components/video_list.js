import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem video={video} />
  });
  // props.property for functional compoents bu this.props.perperty anywhere in a class component
  // const videos = props.videos
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
