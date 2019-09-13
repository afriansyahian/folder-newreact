import React from "react";
import axios from "axios";

class JsonPlaceHolder extends React.Component {
  constructor () {
  super();
  this.state = {
  data: [] 
  };
  } 

componentDidMount() {
  axios
  .get (`https://swap.co/api/planets/1/`)
  .then(result => {
    console.log(result);
    this.setState({
      data: result.data.films 
  });
 })
 .catch(error => console.log(error));
}

render() {
  return(
    <div>
      API from JSON PLACEHOLDER
      <br />
      <ul>
        {this.state.data.map((item, index) =>{
          return <li key={index}> {item}</li>;
        })}  
        </ul>
    </div>
  );
}
}

export default JsonPlaceHolder