import React,{ Component} from "react";

class Event extends Component{

    click(){
        alert("Good One");
    }

    render(){
        return(
            <div>
                <button onClick={() => {this.click()}}>Click Here</button>
            </div>
        )
    }
}

export default Event;