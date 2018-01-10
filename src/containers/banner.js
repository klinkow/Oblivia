import React, { Component } from 'react';
import { connect } from 'react-redux';

class Banner extends Component {

  render() {
    return (
      <div>
        <p>{this.props.questionNumber}</p>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    questionNumber: state.currentQuestion,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Banner);
