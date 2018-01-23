import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {

  renderPlayers() {
    var scores = [this.props.player1Score, this.props.player2Score]
    var counter = -1;
    return this.props.players.map((player) => {
      counter += 1;
      return (
        <li key={counter}>
          {player}: {scores[counter]}
        </li>
      )
    });
  }

  render() {
    if (this.props.players.length < 2) {
      return (<div> </div>)
    } else {
    return (
      <ul>
        {this.renderPlayers()}
      </ul>
    )
    }
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    player1Score: state.player1Score,
    player2Score: state.player2Score
  };
}

export default connect(mapStateToProps)(Score);
