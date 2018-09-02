import React, { Component } from "react";

class EventPractice extends Component {
    constructor(props) {
        super(props);

        //this._handleChange = this._handleChange.bind(this);
        //this._handleClick = this._handleClick.bind(this);
    }

    state = {
        username: "",
        message: ""
    };

    _handleChange = e => {
        console.log(e.target.name);
        //_handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    _handleClick = () => {
        //_handleClick() {
        alert(this.state.username + ":" + this.state.message);
        this.setState({
            username: "",
            message: ""
        });
    };

    _handleKeyPress = e => {
        if (e.key === "Enter") {
            this._handleClick();
        }
    };

    render() {
        return (
            <div>
                <p>Event Practice</p>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this._handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="type anything"
                    value={this.state.message}
                    onChange={this._handleChange}
                    onKeyPress={this._handleKeyPress}
                />
                <button onClick={this._handleClick}>Ok</button>
            </div>
        );
    }
}

export default EventPractice;
