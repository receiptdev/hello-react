import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSameple from "./IterationSample";

class App extends Component {
    render() {
        return (
            <React.Fragment>
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

export default App;
