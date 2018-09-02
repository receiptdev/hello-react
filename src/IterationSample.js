import React, { Component } from "react";

class IterationSample extends Component {
    state = {
        names: ["snowman", "ice", "snow", "wind"],
        name: ""
    };

    _handleChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    _handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ""
        });
    };

    _handleRemove = index => {
        const { names } = this.state;

        this.setState({
            names: names.filter((name, i) => i !== index)
            // names: [
            //     ...names.slice(0, index),
            //     ...names.slice(index + 1, names.length)
            // ]
        });
    };

    render() {
        const nameList = this.state.names.map((name, index) => (
            <li key={index} onDoubleClick={() => this._handleRemove(index)}>
                {name}
            </li>
        ));
        return (
            <div>
                <input onChange={this._handleChange} value={this.state.name} />
                <button onClick={this._handleInsert}>Add</button>
                <ul>{nameList}</ul>
            </div>
        );
    }
}

export default IterationSample;
