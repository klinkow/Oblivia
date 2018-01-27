import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChoice, startGame } from '../actions/index';
import FormInput from '../components/form-input';

class Footer extends Component {
  componentDidMount() {
    document.getElementById("start").focus();
  }

  // TODO rename to resetCSS
  removeFadeOut() {
    var elements = Array.from(document.getElementsByClassName("fade-out"));
    elements.map((element) => element.classList.remove("fade-out"));
    var elements = Array.from(document.getElementsByClassName("scores"));
    elements.map((element) => element.classList.add("pulse"));
  }

  // TODO rename to applyCSS
  fadeOut(choice) {
    var chosen = document.getElementById(choice)
    if (chosen) {
      if (choice === this.props.correctAnswer) {
        chosen.classList.add("green")
      } else {
        chosen.classList.add("red")
      }
    }
    var elements = Array.from(document.getElementsByClassName("fade_out"));
    elements.map((element) => element.classList.add("fade-out"));
    var elements = Array.from(document.getElementsByClassName("scores"));
    elements.map((element) => element.classList.remove("pulse"));
  }

  renderChoices() {
    return this.props.answers.map((choice) => {
      return (
        <p
        key={choice}
        id={choice}
        className="slanty"
        onClick={() => {
          this.fadeOut(choice);
          setTimeout(() => {
            this.removeFadeOut();
            this.props.selectChoice(choice)
          }, 1300)}}>
          <span className="fade-in two"><span className="fade_out">{choice}</span></span>
        </p>
      )
    });
  }

  fadeAndStartGame() {
    this.fadeOut();
    setTimeout(() => {
      this.props.startGame();
    }, 700);
  }

  render() {
    if (this.props.gameState === 1) {
      return (
        <div
        id="start"
        className="center slanty fade-in three"
        onClick={() => this.fadeAndStartGame()}>
          <h3 className="fade_out">New Game</h3>
        </div>
      )
    } else if (this.props.gameState === 2) {
      return (
        <div className="center">
          <FormInput
          currentPlayer={this.props.currentPlayer} />
        </div>
      )
    } else if (this.props.gameState === 3) {
      return (
        <div className="center fade_out">
          <FormInput
          currentPlayer={this.props.currentPlayer} />
        </div>
      )
    } else if (this.props.gameState === 12) {
      return (
        <div className="footer"> </div>
      )
    }
    return (
      <div className="footer">
        {this.renderChoices()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    answers: state.answers,
    gameState: state.gameState,
    currentPlayer: state.currentPlayer,
    correctAnswer: state.correctAnswer
  };
}

// TODO: try ES6 syntax for selectChoice and startGame
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChoice: selectChoice, startGame: startGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
