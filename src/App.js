import React from 'react';
import './App.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementAmount);
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementAmount}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

class App extends React.Component {
  state = { counter: 0 };
  increment = (incrementAmount) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementAmount
    }));
  };
  render() {
    return (
      <div>
        <div className="mainDiv">
          <Button incrementAmount={1} onClickFunction={this.increment} />
          <Button incrementAmount={5} onClickFunction={this.increment} />
          <Result counter={this.state.counter} />
        </div>
      </div>
    );
  };
}
export default App;
