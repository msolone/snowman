import React, { Component } from 'react';

class Button extends Component {
    render() {

        if (this.props.pickedLetters.includes(this.props.letter)) {
            return <button disabled>{this.props.letter}</button>
        } else {
        return (
            <button onClick={() => this.props.addingPickedLetters(this.props.letter)}>
                {this.props.letter}
            </button>
        )}
    }
}

export default Button;
