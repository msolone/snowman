import React, { Component } from "react";
import "./App.css";
import words from "./Data/snowman-word-list.json";
import animals from "./Data/animals.json";
import states from "./Data/states.json"
import snowman0 from "./Images/snowman/frostys_melted.jpg";
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
      category: words,
      secret: words[Math.floor(Math.random() * words.length)],
      blanks: [],
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
      picked: [],
      image: snowman7,
      winner: '',
    };
  }

  componentDidMount() {
    console.log(this.state.secret);
    console.log(this.state.category.length)
    const newBlank = this.state.secret.split('').map((l,i) => {
      if (l === ' ') {
        return ' '
      } else {
      return '_'
      }
    })
    this.setState({
      blanks: newBlank
    })
    
  }
  componentDidUpdate() {
    console.log(this.state.secret);
 
 }

  addChosenLetter = letter => {
    const newPicked = this.state.picked.slice();
    newPicked.push(letter);
    const correctPicked = [];
    const newBlanks = this.state.secret.split("").map((l, i) => {
      if (newPicked.includes(l.toUpperCase())) {
        correctPicked.push(l);
        return l.toUpperCase();
      } else {
        return "_";
      }
      
    });
    console.log(correctPicked, newPicked)
    if (correctPicked.length === this.state.secret.length) {
      this.setState({
        winner: 'You Win!'
      })
    }
    if (newPicked.length - correctPicked.length === 0) {
      this.setState({
        image: snowman7
      });
    } else if (newPicked.length - correctPicked.length === 1) {
      this.setState({
        image: snowman6
      });
    } else if (newPicked.length - correctPicked.length === 2) {
      this.setState({
        image: snowman5
      });
    } else if (newPicked.length - correctPicked.length === 3) {
      this.setState({
        image: snowman4
      });
    } else if (newPicked.length - correctPicked.length === 4) {
      this.setState({
        image: snowman3
      });
    } else if (newPicked.length - correctPicked.length === 5) {
      this.setState({
        image: snowman2
      });
    } else if (newPicked.length - correctPicked.length === 6) {
      this.setState({
        image: snowman1
      });
    } else if (newPicked.length - correctPicked.length === 7) {
      this.setState({
        image: snowman0,
        winner: 'You Lose!',
      });

    }
    this.setState({
      picked: newPicked,
      blanks: newBlanks
    });
  };

  restartGame = () => {
    const newSecretWord = this.state.category[Math.floor(Math.random() * this.state.category.length)]
    const newBlank = '_'.repeat(newSecretWord.length).split('')
    console.log(newBlank)
    this.setState({
      secret: newSecretWord,
      blanks: newBlank,
      picked: [],
      image: snowman7,
      winner: ''
    })
  }

  animalsCategory = () => {
    const newSecretWord = animals[Math.floor(Math.random() * animals.length)]
    const newBlank = '_'.repeat(newSecretWord.length).split('')
    console.log("setting state to animals")
    this.setState({
      category: animals,
      secret: newSecretWord,
      blanks: newBlank,
      picked: [],
      image: snowman7,
      winner: ''
    })
  }

  statesCategory = () => {
    const newSecretWord = states[Math.floor(Math.random() * states.length)]
    const newBlank = '_'.repeat(newSecretWord.length).split('')
    console.log("setting state to states")
    this.setState({
      category: states,
      secret: newSecretWord,
      blanks: newBlank,
      picked: [],
      image: snowman7,
      winner: ''
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Don't Let The Snowman Melt!</h1>
        <h2>{this.state.winner}</h2>
        <section className="snowman-images">
          <img src={this.state.image} alt="snowman-steps" />
        </section>

        <section className="blank-letters">
          {this.state.blanks.map((blank, i) => {
            return (
              <span className="hidden-letters" key={i}>
                {blank}
              </span>
            );
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
        <button className='restart-button' onClick={this.restartGame}>New Game</button>
        <section className='categories'>
          <h3>Select a Category</h3>
          <button onClick={this.animalsCategory}>Animals</button>
          <button onClick={this.statesCategory}>States</button>
        </section>
      </div>
    );
  }
}

export default App;
