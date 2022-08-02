import React, { Component } from "react";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state  = { term: '' }
    }

    render() {
        return (
            <div>
            {/* <center> */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png" 
                    style = {
                        {
                            height : "40px",
                            width : "85px"
                        }
                    }>
                </img>
                <input 
                    value = { this.state.term }
                    onChange = { event => this.setState({ term   : event.target.value }) }
                    style = {
                        {
                            width : "45%",
                            margin : "20px",
                            marginLeft : "330px",
                            border: '2px solid',
                            borderRadius: "8px",
                            height : "40px"
                        }
                    }
                />
                <button className = "search-button"
                    onClick = { () => this.props.onSearchTermChange(this.state.term) }>
                    Search
                </button>
                {/* </center> */}
            </div>
        )
    }

    handelInputChange() {
        console.log(this.state);
    }
}

export default SearchBar;