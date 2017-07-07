import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    input: "",
    message: ""
  };
  increment = (incrementAmount) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementAmount
    }));
  };
  decrement = (decrementAmount) => {
    this.setState((prevState) => ({
      counter: prevState.counter - decrementAmount
    }));
  };
  write = (input) => {
    console.log("input", this.state.input);
    console.log("message", this.state.message);
    this.setState(() => ({
      input: input,
      message: input
    }));
  };
  render() {
    return (
      <div>
        <div className="mainDiv">
          <div className="Header">
            <Header />
          </div>
          <div className="Content">
            <ButtonUp incrementAmount={1} onClickFunction={this.increment} />
            <ButtonUp incrementAmount={5} onClickFunction={this.increment} />
            <ButtonDown decrementAmount={1} onClickFunction={this.decrement} />
            <ButtonDown decrementAmount={5} onClickFunction={this.decrement} />
            <Result counter={this.state.counter} />
          </div>
          <div className="notes">
            <NoteInput onChangeFunction={this.write} />
            <div className="messages">
              <Message />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const Header = () => {
  return (
    <div>
      <h1>You may add or subtract</h1>
    </div>
  );
}

class ButtonUp extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementAmount);
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementAmount}
      </button>
    );
  };
}

class ButtonDown extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.decrementAmount);
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        -{this.props.decrementAmount}
      </button>
    );
  };
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
}

class NoteInput extends React.Component {
  handleChange = () => {
    this.props.onChangeFunction(this.props.input);
    console.log("input2", this.props.input);
    console.log("message2", this.props.message);
  };
  render() {
    return (
      <input type="text" value={this.props.input} onChange={this.handleChange}></input>
    );
  };
}

const Message = (props) => {
  return (
    <div>{props.message}</div>
  );
}

export default App;
