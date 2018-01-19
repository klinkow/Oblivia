import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChoice, startGame } from '../actions/index';
import FormInput from '../components/form-input';

class Footer extends Component {


  renderChoices() {
    return this.props.answers.map((choice) => {
      return (
        <div
        key={choice}
        onClick={() => this.props.selectChoice(choice)}>
          {choice}
        </div>
      )
    });
  }

  render() {
    if (this.props.gameState === 1) {
      return (
        <div onClick={() => this.props.startGame()}>
          New Game
        </div>
      )
    } else if ((this.props.gameState === 2) || (this.props.gameState === 3)) {
      return (
        <FormInput currentPlayer={this.props.currentPlayer} />
      )
    }
    return (
      <div>
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
