import React, { Component } from 'react';
import { connect } from 'react-redux';

class Banner extends Component {
  render() {
    if (this.props.gameState === 1 ) {
      return (
        <div className="banner fade_out">
          <h1 className="fade-in one"><span className="shake-little">OBLIVIA</span></h1>
          <h3 className="fade-in two">2-Player Trivia</h3>
        </div>
      );
    } else if (this.props.gameState === 2 ) {
      return (
        <div className="banner">
          <h3
          className="fade-in">
            Player <span className="width pulse fade_out">1</span>, enter your name:
          </h3>
        </div>
      );
    } else if (this.props.gameState === 3) {
      return (
        <div className="banner fade_out">
          <h3>Player <span className="width pulse"><span className="fade-in">2</span></span>, enter your name:</h3>
        </div>
      );
    } else if (this.props.gameState === 12) {
      if (this.props.currentWinner === 'tie game') {
        return (
          <div className="banner">
            <h3>And the winner is.... a tie! Everyone is a winner! Enjoy your prize.</h3>
            <p>Come back tomorrow and play again!</p>
          </div>
        )
      } else {
        return (
          <div className="banner">
            <h3>Congratulations {this.props.currentWinner}, you won! Enjoy your prize</h3>
            <p>Come back tomorrow and play again!</p>
          </div>
        )
      }
    }  else {
      return (
        <div className="banner">
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
