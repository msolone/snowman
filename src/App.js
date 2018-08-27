import React, { Component } from "react";
import "./App.css";
import words from "./Data/snowman-word-list.json";
import snowman0 from "./Images/snowman/step_0.png";
import snowman1 from "./Images/snowman/step_1.png";
import snowman2 from "./Images/snowman/step_2.png";
import snowman3 from "./Images/snowman/step_3.png";
import snowman4 from "./Images/snowman/step_4.png";
import snowman5 from "./Images/snowman/step_5.png";
import snowman6 from "./Images/snowman/step_6.png";
import snowman7 from "./Images/snowman/step_7.png";
import Button from "./Components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: words[Math.floor(Math.random() * 1024)],
      blanks: ['_','_','_','_','_','_','_'],
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      picked: []
    };
  }

  componentDidMount() {
    console.log(this.state.secret)
  }

  addChosenLetter = (letter) => {
    const newPicked = this.state.picked.slice();
    newPicked.push(letter);
    const newBlanks = this.state.secret.split('').map((l, i) => {
      if (l.toUpperCase() === letter.toUpperCase()) {
        return l.toUpperCase() 
      } else {
        return "_"
      }
    })
    console.log(newBlanks, letter, newPicked)
    this.setState({
      picked: newPicked,
      blanks: newBlanks
    });
  };

  render() {
    console.log(this.state.picked)
    return (
      <div className="App">
        <section className="snowman-images">
          <img src={snowman0} alt="snowman-steps" />
        </section>

        <section className="blank-letters">
          {this.state.blanks.map((blank, i) => {
            return <span className='hidden-letters' key={i}>{blank}</span>
          })}
        </section>
        <section className="alphabet-bank">
          {this.state.alphabet.map((letter, i) => {
            return (
              <Button
                key={i}
                letter={letter}
                addingPickedLetters={this.addChosenLetter}
                pickedLetters={this.state.picked}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
