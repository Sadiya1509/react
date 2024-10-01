import React from "react";

class Lifecycle1 extends React.Component {          //Lifecycle Component
  constructor(props) {                             //constructor
    super(props);                                  //initialize base class constructor as a best practice
    this.state = {                                 //state
        instrument: "Guitar"                        //props 
    }
}

/*static getDerivedStateFromProps(props){ //The attribute temp="Drums" gets passed here by the system return {instrument: props.temp}
//system defined lifecycle hook
 }*/

shouldComponentUpdate(){
    return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Before update : ' + prevState.instrument);
    return null;                          //must return the snapshot object or null
}

componentDidUpdate(){
    console.log('Update value: ' + this.state.instrument);
}

componentDidMount() {
   setTimeout(  ()=>{
        this.setState( {instrument:"Drums"} )
   }, 3000);
}

render() {
    return (
        <div id="lifecycle">
            <h1>I know how to play the {this.state.instrument}</h1>
        </div>
    );
}

}

export default Lifecycle1;