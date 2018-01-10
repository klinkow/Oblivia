import React, { Component } from 'react';
import Score from '../containers/score';
import Banner from '../containers/banner';
import Footer from '../containers/footer';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { allGames: [], gameState: "newGame" };
  // }
  //
  // componentDidMount() {
  //   axios.get('http://localhost:5000/api/v1/api.json')
  //   .then(response => {
  //     this.setState((prevState) => {
  //       var currentGame = Object.assign(response.data[0], {state: prevState.gameState}, [response.data]);
  //       return currentGame
  //     })
  //     console.log("Main Component Mounted")
  //   })
  //   .catch(error => console.log(error));
  // }

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
