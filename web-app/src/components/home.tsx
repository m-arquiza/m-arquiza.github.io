import React, { Component } from "react";

class Home extends Component{
    render() {
        return (
            <div id="home">
                <div className="title">it’s michelle here.</div>
                <div className="subtitle">hello, world!</div>
                <div className="bio">Currently a full-time student studying computer science at
                                     the University of Washington. I’m interested in software
                                     engineering and graphics & vision.</div>
            </div>
        );
    }

}
export default Home;