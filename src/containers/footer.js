import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChoice, startGame } from '../actions/index';
import FormInput from '../components/form-input';

class Footer extends Component {
  componentDidMount() {
    document.getElementById("start").focus();
  }


  removeFadeOut() {
    var elements = Array.from(document.getElementsByClassName("fade-out"));
    elements.map((element) => element.classList.remove("fade-out"));
  }

  fadeOut() {
    var elements = Array.from(document.getElementsByClassName("fade_out"));
    elements.map((element) => element.classList.add("fade-out"));
  }

  renderChoices() {
    return this.props.answers.map((choice) => {
      return (
        <p
        key={choice}
        className="slanty"
        onClick={() => {
          this.fadeOut();
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
    currentPlayer: state.currentPlayer
  };
}

// TODO: try ES6 syntax for selectChoice and startGame
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChoice: selectChoice, startGame: startGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
