import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Icon } from "react-materialize";
import Draggable from 'react-draggable';
import "./App.css";

import Header from "./components/Header";
import SFWritingForm from "./components/SFWritingForm";
import SFResult from "./components/SFResult";
import StatefulInput from "./components/StatefulInput";

class App extends React.Component {
    state = {
        written: "",
        activeDrags: 0,
    };

    write = (written) => {
        this.setState(() => ({
            written: written
        }));
    };

    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
        this.setState({ activeDrags: --this.state.activeDrags });
    };

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
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
                        <h4>You can drag the star anywhere!</h4>
                        <Draggable>
                            <div>
                                <Icon large>star</Icon>
                            </div>
                        </Draggable>
                        <h4>The puppy can only be dragged 100 pixels.</h4>
                        <Draggable bounds={{top: -100, left: -100,
                            right: 100, bottom: 100}} {...dragHandlers}>
                            <div>
                                <Icon large>pets</Icon>
                            </div>
                        </Draggable>
                        <h4>This one snaps to a grid!</h4>
                        <Draggable grid={[25, 25]} {...dragHandlers}>
                            <div>
                                <Icon large>dashboard</Icon>
                            </div>
                        </Draggable>
                        <h4>You can drag the swimmer sideways only.</h4>
                        <Draggable axis="x" {...dragHandlers}>
                            <div>
                                <Icon large>pool</Icon>
                            </div>
                        </Draggable>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;
