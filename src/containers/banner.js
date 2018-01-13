import React, { Component } from 'react';
import { connect } from 'react-redux';

class Banner extends Component {

  render() {
    if (!this.props.question) {
      return <div>Need to start a new game</div>
    }
    return (
      <div>
        <p>{this.props.question}</p>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    question: state.question
  };
}

export default connect(mapStateToProps)(Banner);
