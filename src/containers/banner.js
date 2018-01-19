import React, { Component } from 'react';
import { connect } from 'react-redux';

class Banner extends Component {

  render() {
    if (this.props.gameState === 1 ) {
      return (
        <div>
          <h1>Obvlivia</h1>
          <h3>2-Player Trivia</h3>
        </div>
      );
    } else if (this.props.gameState === 2 ) {
      return (
        <div>
          <h3>Player 1, enter your name:</h3>
        </div>
      );
    } else if (this.props.gameState === 3) {
      return (
        <div>
          <h3>Player 2, enter your name:</h3>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.props.question}</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    question: state.question,
    gameState: state.gameState
  };
}

export default connect(mapStateToProps)(Banner);
