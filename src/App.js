
import React, { Component } from 'react'
import Counter from './component/Counter'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={show:true}
  }
  render() {
    return (
      <div>
{ this.state.show  && <Counter/>}
<button onClick={()=>this.setState({show:!this.state.show})} >show | hide</button>
      </div>
    )
  }
}
