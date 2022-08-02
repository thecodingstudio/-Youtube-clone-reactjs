import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {

    const image     = video.snippet.thumbnails.default.url;
    const title     = video.snippet.title;
    const channel   = video.snippet.channelTitle;
    const channelURL = "https://www.youtube.com/c/" + channel;

    return (
        <li className = "list-group-item" >
            <div className = "video-list media">
                <div className = "media-left">
                    <img 
                        style={
                            { cursor: "pointer" }
                        }
                        onClick = { () => onVideoSelect(video) } 
                        className="media-object" src = { image } 
                    />
                </div>
                <div className = "media-body">
                    <div 
                    style={
                        { cursor: "pointer" }
                    } 
                    onClick = { () => onVideoSelect(video) } 
                    className = "media-heading">
                        { title }
                    </div>
                    <a 
                        href = {channelURL}
                        style = {
                            {
                                fontFamily : "sans-serif",
                                fontSize : "13px",
                                color : "GrayText"
                            }
                        }>
                        { channel }
                    </a>
                    <div style={
                        {
                            fontFamily : "sans-serif",
                            fontSize : "12px",
                            color : "darkgray"
                        }
                    }>
                        { video.snippet.description }
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;