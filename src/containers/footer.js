import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChoice } from '../actions/index';
import FormInput from '../components/form-input';

class Footer extends Component {

  renderChoices() {
    return this.props.questions[0]["answers"].map((choice) => {
      return (
        <div
        key={choice}
        onClick={() => this.props.selectChoice(choice)}>
          {choice}
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        {this.renderChoices()}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChoice: selectChoice }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
