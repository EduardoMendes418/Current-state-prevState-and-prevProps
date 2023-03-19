
import { Component } from 'react';
import './styles.css';

export class Home extends Component{
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(
    (prevState,prevProps) => {
      console.log('PREV', prevState.counter);
      console.log('PREVPROPS', prevProps.numberToAdd)
      return {counter: prevState.counter + prevProps.numberToAdd}
    }, 
    () => {
      console.log('POST',this.state.counter)
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
