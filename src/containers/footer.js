import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChoice } from '../actions/index';
import FormInput from '../components/form-input';

class Footer extends Component {


  renderChoices() {
    return this.props.answers.map((choice) => {
      return (
        <div
        key={choice}
        onClick={() => this.props.selectChoice(choice, this.props.gameState)}>
          {choice}
        </div>
      )
    });
  }

  render() {
    if (!this.props.answers) {
      return <div>Need to start a new game</div>;
    }
    return (
      <div>
        {this.renderChoices()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answers: state.answers
  };
}

// TODO: try ES6 syntax for selectChoice
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChoice: selectChoice }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
