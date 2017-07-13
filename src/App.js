import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    written: "",
  };

  write = (written) => {
    this.setState(() => ({
      written: written
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
            <WritingForm write={this.write}/>
            <Result written={this.state.written}/>
          </div>
        </div>
      </div>
    );
  };
}

const Header = () => {
  return (
    <div>
      <h1>Write your message!</h1>
    </div>
  );
}

const WritingForm = ({ write }) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => input = node} />
            <button onClick={() => write(input.value)}>Write!</button>
        </div>
    );
}

const Result = ({written}) => {
  return (
    <div>
      <h2>Message:</h2>
      <p>{written}</p>
    </div>
  );
}

export default App;
