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

  fadeOut() {
    var elements = Array.from(document.getElementsByClassName("fade_out"));
    elements.map((element) => element.classList.add("fade-out"));
  }

  onInputChange(event) {
    this.setState({ name: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.fadeOut();
    setTimeout(() => {
      this.props.submitName(this.state.name, this.props.currentPlayer);
      this.setState({ name: '' });
    }, 500);
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } >
        <input
          className="fade-in one"
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
