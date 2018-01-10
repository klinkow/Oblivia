import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {

  renderPlayers() {
    return this.props.players.map((player) => {
      return (
        <li key={player.name}>
          {player.name}: {player.score}
        </li>
      )
    });
  }

  render() {
    return (
      <ul>
        {this.renderPlayers()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(Score);
