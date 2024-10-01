import React from "react";

class TextState extends React.Component{
    constructor(){
        super();
        this.state = { text: "Welcome Participants"}
    }

    changeText(event){
        this.setState ( {text: "This is a React session"} );
    }

    render(){
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={(event) => this.changeText(event)}>Next</button>
            </div>
        );
    }
};

export default  TextState;