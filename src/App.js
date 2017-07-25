import React from 'react';
import './App.css';

import Header from "./components/Header";
import SFWritingForm from "./components/SFWritingForm";
import SFResult from "./components/SFResult";
import StatefulInput from "./components/StatefulInput";

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
                        <div>
                            <SFWritingForm write={this.write}/>
                            <br />
                            <SFResult written={this.state.written}/>
                        </div>
                        <hr />
                        <StatefulInput />
                    </div>
                    <p>Next up: Draggable and Google Material Design components!</p>
                    <p>https://github.com/react-materialize/react-materialize</p>
                    <p>https://github.com/mzabriskie/react-draggable</p>
                </div>
            </div>
        );
    };
}

export default App;
