import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSameple from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";

class App extends Component {
    state = {
        color: "#000000"
    };

    _handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    };

    render() {
        return (
            <React.Fragment>
                <LifeCycleSample color={this.state.color} />
                <button onClick={this._handleClick}>Random</button>
                <IterationSameple />
                <ScrollBox ref={ref => (this.ScrollBox = ref)} />
                <button onClick={() => this.ScrollBox._scrollToBottom()}>
                    To bottom
                </button>
                <MyComponent name="Terry Yang" age={36} />
                <EventPractice />
                <ValidationSample />
            </React.Fragment>
        );
    }
}

const getRandomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
export default App;
