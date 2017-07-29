import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Icon } from "react-materialize";
import "./App.css";

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
                        <Card title="Stateless Functional Input">
                            <SFWritingForm write={this.write}/>
                            <br />
                            <SFResult written={this.state.written}/>
                        </Card>
                        <div className="separator">
                        </div>
                        <Card title="Stateful Input">
                            <StatefulInput />
                        </Card>
                    </div>
                    <hr />
                    <div>
                        <Icon large>pool</Icon>
                    </div>
                    <hr />
                    <div>
                        <p>Next up: Draggable components!</p>
                        <p>https://github.com/mzabriskie/react-draggable</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;
