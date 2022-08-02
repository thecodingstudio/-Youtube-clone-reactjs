import React from "react";

const VideoDetail = ( {video} ) => {
    if(!video) {
        return(
            <div>
            <div>Loading...</div>
            <div className = "video-detail col-md-8">
                <div className = "embed-responsive embed-responsive-16by9">
                    <iframe className = "embed-responsive-item" src="https://www.youtube.com"></iframe>
                </div>
                <div className = "details">
                    <div>
                        Loading...
                    </div>
                    <div>
                        Loading...
                    </div>
                </div>
            </div>
            </div>
        )
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    const channel   = video.snippet.channelTitle;
    const channelURL = "https://www.youtube.com/c/" + channel;

    return(
        <div className = "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = {url} ></iframe>
            </div>
            <div className = "details">
                <div style={
                    {
                        fontSize : "20px",
                        color : "black",
                        marginTop : "20px"
                    }
                }>
                    { video.snippet.title }
                </div>
                <a 
                    href = {channelURL}
                    style = {
                        {
                            fontFamily : "sans-serif",
                            fontSize : "15px",
                            color : "GrayText"
                        }
                    }>
                        { channel }
                </a>
                <div style={
                    {
                        fontFamily : "sans-serif",
                        fontSize : "14px",
                        color : "darkgray"
                    }
                }>
                    { video.snippet.description }
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;