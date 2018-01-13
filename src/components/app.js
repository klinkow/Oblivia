import React, { Component } from 'react';
import Score from '../containers/score';
import Banner from '../containers/banner';
import Footer from '../containers/footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// TODO: I'm pretty sure you want to get rid of the gameState prop, once you've got state imported into the actions index successfully
class App extends Component {

  render() {
    return (
      <div>
        <Score gameState={this.props.gameState} />
        <Banner gameState={this.props.gameState} />
        <Footer gameState={this.props.gameState} nextQuestion={this.props.nextGameState}/>
      </div>
    );
  }
}

// TODO: try replacing with the following
// function mapStateToProps({ gameState }) {
//   return { gameState };
// }

function mapStateToProps(state) {
  return {
    gameState: state.gameState
  };
}

export default connect(mapStateToProps)(App);
