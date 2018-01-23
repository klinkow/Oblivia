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
    } else if (this.props.gameState === 12) {
      if (this.props.currentWinner === 'tie game') {
        return (
          <div>
            <h3>And the winner is.... a tie! Everyone is a winner! Enjoy your prize.</h3>
            <p>Come back tomorrow and play again!</p>
          </div>
        )
      } else {
        return (
          <div>
            <h3>Congratulations {this.props.currentWinner}, you won! Enjoy your prize</h3>
            <p>Come back tomorrow and play again!</p>
          </div>
        )
      }
    }  else {
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
    gameState: state.gameState,
    currentWinner: state.currentWinner
  };
}

export default connect(mapStateToProps)(Banner);
