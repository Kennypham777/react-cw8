import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div className="counter">
                {/* Display the value of count */}
                <p>Count: {this.state.count}</p>

                {/* Button to increment the count */}
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default Counter;