import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {

  renderPlayers() {
    var counter = -1;
    return this.props.players.map((player) => {
      counter += 1;
      return (
        <li key={player}>
          {player}: {this.props.scores[counter]}
        </li>
      )
    });
  }

  render() {
    if (this.props.players.length < 2) {
      return (<div>Nothing</div>)
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
    scores: state.scores
  };
}

export default connect(mapStateToProps)(Score);
