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
    } else if (this.props.gameState === 4 || this.props.gameState === 5) {
      var questionIndex = (this.props.round1[2] - 4);
      return (
        <div className="banner fade-in" key={this.props.round1[questionIndex][1]}>
          <div className="fade_out">
            <p>{this.props.players[this.props.currentPlayer - 1]}, the following headline comes from the most recent New York Times. Fill in the BLANK.</p>
            <p>"{this.props.round1[questionIndex][1]}"</p>
          </div>
        </div>
      );
    } else if (this.props.gameState === 6 || this.props.gameState === 7) {
      var questionIndex = (this.props.round2[2] - 6);
      console.log(questionIndex)
      return (
        <div className="banner fade-in" key={this.props.round2[questionIndex][1]}>
          <div className="fade_out">
            <p>{this.props.players[this.props.currentPlayer - 1]}, the following headline comes from an open source trivia database.</p>
            <p>"{this.props.round2[questionIndex][1]}"</p>
          </div>
        </div>
      );
    } else if (this.props.gameState === 12) {
      if (this.props.currentWinner === 'tie game') {
        return (
          <div className="banner fade-in">
            <h3>And the winner is.... a tie! Everyone is a winner!</h3>
            <p>Come back later for new questions</p>
          </div>
        )
      } else {
        return (
          <div className="banner fade-in">
            <h3>Congratulations {this.props.currentWinner}, you won!</h3>
            <p>Come back later for new questions</p>
          </div>
        )
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.gameState,
    currentWinner: state.currentWinner,
    currentPlayer: state.currentPlayer,
    players: state.players,
    round1: state.round1,
    round2: state.round2
  };
}

export default connect(mapStateToProps)(Banner);
