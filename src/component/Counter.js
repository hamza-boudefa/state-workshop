import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0,count:0 };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    },1000);
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render() {

    const handlePlusBtn=()=>{
        this.setState({count:this.state.count+1})
    }
    const handleMinusBtn=()=>{
        if(this.state.count>0){
        this.setState({count:this.state.count-1})}
    }
    return (
      <div>
        <h1> {this.state.timer} </h1>
<button onClick={handleMinusBtn} >-</button>
<p>{this.state.count} </p>
<button onClick={handlePlusBtn} >+</button>
      </div>
    );
  }
}
