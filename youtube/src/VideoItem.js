import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>{
    return (
        <div onClick={()=> onVideoSelect(video)} class="video-item item">
            <img className="ui image"  alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
                <div class="content">
                <div style={{color:'white'}} class="header">{video.snippet.title}</div>
                </div>
         </div>
    )
}

export default VideoItem;