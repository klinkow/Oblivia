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
      return (
        <div className="banner fade-in" key={this.props.round2[questionIndex][1]}>
          <div className="fade_out">
            <p>{this.props.players[this.props.currentPlayer - 1]}, {this.props.round2[questionIndex][1]}</p>
          </div>
        </div>
      );
    } else if (this.props.gameState === 8 || this.props.gameState === 9) {
      var questionIndex = (this.props.round3[2] - 8);
      return (
        <div className="banner fade-in" key={this.props.round3[questionIndex][1]}>
          <div className="fade_out">
            <p>{this.props.players[this.props.currentPlayer - 1]}, what is the current temperature in {this.props.round3[questionIndex][1]}?</p>
          </div>
        </div>
      );
    } else if (this.props.gameState === 10 || this.props.gameState === 11) {
      var questionIndex = (this.props.round4[2] - 10);
      return (
        <div className="banner fade-in" key={this.props.round4[questionIndex][1]}>
          <div className="fade_out">
            <p>{this.props.players[this.props.currentPlayer - 1]}, {this.props.round4[questionIndex][1]}</p>
          </div>
        </div>
      );
    } else if (this.props.gameState === 12) {
      if (this.props.currentWinner === 'tie game') {
        return (
          <div className="banner fade-in">
            <p>And the winner is.... a tie! Everyone is a winner!</p>
            <p>Come back tomorrow for new questions</p>
          </div>
        )
      } else {
        return (
          <div className="banner fade-in">
            <p><span className="pulse">Congratulations {this.props.currentWinner}, you won!</span></p>
            <p>Come back tomorrow for new questions</p>
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
    round2: state.round2,
    round3: state.round3,
    round4: state.round4
  };
}

export default connect(mapStateToProps)(Banner);
