import React, { Component } from 'react';
import { submitName } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// TODO: move this whole file to containers, since it now uses redux
class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ name: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.submitName(this.state.name, this.props.currentPlayer);
    this.setState({ name: '' });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } >
        <input
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitName }, dispatch);
}

export default connect(null, mapDispatchToProps)(FormInput);
