import React, { Component } from 'react';
import Score from '../containers/score';
import Banner from '../containers/banner';
import Footer from '../containers/footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class App extends Component {

  render() {
    return (
      <div>
        <Score />
        <Banner />
        <Footer />
      </div>
    );
  }
}
