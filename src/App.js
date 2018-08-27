import React, { Component } from "react";
import "./App.css";
import words from "./Data/snowman-word-list.json";
import snowman1 from "./Images/snowman/step_0.png";
import Button from "./Components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: words[Math.floor(Math.random() * 1024)],
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
    this.setState({
      picked: newPicked
    });
    
  
    
  };

  render() {
    console.log(this.state.picked)
    return (
      <div className="App">
        <section className="snowman-images">
          <img src={snowman1} alt="snowman-steps" />
        </section>

        <section className="blank-letters">
          <p> _ _ _ _ _ _ _ </p>
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
