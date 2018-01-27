import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {

  renderPlayers() {
    var scores = [this.props.player1Score, this.props.player2Score]
    var counter = -1;
    return this.props.players.map((player) => {
      counter += 1;
      return (
        <p key={counter} className={"score".concat(counter)}>
          {player}: {scores[counter]}
        </p>
      )
    });
  }

  render() {
    if (this.props.players.length < 1) {
      return (<div className="header"></div>)
    } else {
    return (
      <div className="header fade-in fade_out">
        {this.renderPlayers()}
      </div>
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
