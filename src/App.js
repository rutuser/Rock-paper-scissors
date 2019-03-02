import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rock: false,
      paper: false,
      scissors: false,
      localCounter: 0,
      userCounter: 0,
      localSelection: ''
    };
    this.play = this.play.bind(this);
  }

  computerOption() {
    var options = ['r', 'p', 's'];
    var LocalOption = Math.floor(Math.random() * 3);
    console.log(LocalOption);
    switch (LocalOption) {
      case 0:
        this.setState(state => ({
          localSelection: 'rock'
        }));
        break;
      case 1:
        this.setState(state => ({
          localSelection: 'paper'
        }));
        break;
      case 2:
        this.setState(state => ({
          localSelection: 'scissors'
        }));
        break;
      default:
        console.log('no selection');
    }
    return options[LocalOption];
  }

  play(option) {
    switch (option + this.computerOption()) {
      case 'rs':
      case 'pr':
      case 'sp':
        console.log('WIN');
        this.setState(state => ({
          userCounter: this.state.userCounter + 1
        }));
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        console.log('LOSE');
        this.setState(state => ({
          localCounter: this.state.localCounter + 1
        }));
        break;
      case 'ss':
      case 'pp':
      case 'rr':
        console.log('TIE');
        break;
      default:
        console.log('no option');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="ResultContainer">
          <div className="UserScore">{this.state.userCounter}</div>
          <div className="LocalOutput">{this.state.localSelection}</div>
          <div className="LocalScore">{this.state.localCounter}</div>
        </div>
        <div className="RPSContainer">
          <div className="rock" onClick={() => { this.play('r') }}>ROCK</div>
          <div className="paper" onClick={() => { this.play('p') }}>PAPER</div>
          <div className="scissors" onClick={() => { this.play('s') }}>SCISSORS</div>
        </div>
      </div>
    );
  }
}

export default App;
