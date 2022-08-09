import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';
import ReactDOM from 'react-dom';

import VideoList    from './components/video_list';
import SearchBar    from './components/serch_bar';
import VideoDetail  from './components/video_detail';

const API_KEY   = '<YOUR_YOUTUBE_V3_API_KEY>';

class App extends Component {

    constructor(props) {
        super(props);

        this.state  = {
            videos  : [],
            selectedVideo   : null
        };

        this.videoSearch('Dhruv Rathee')
    }

    videoSearch(term) {
        YTSearch(
            {
                key     : API_KEY,
                term    : term,
                maxResults : 5
            },
            (data) => {
                console.log(data);
                this.setState(
                    {
                        videos : data,
                        selectedVideo : data[0]
                    }
                );
            }
        )
    }

    render() {
        return(
            <div>
                <SearchBar onSearchTermChange = { term => this.videoSearch(term)  } />
                <VideoDetail video = { this.state.selectedVideo }/>
                <VideoList 
                    onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
                    videos = { this.state.videos }
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('.container')
);
