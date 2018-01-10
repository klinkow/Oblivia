import React from 'react';
import axios from 'axios'


export default class ResumeGameComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = { allgames: [], currentgame: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/api.json')
    .then(response => {
      this.setState({ allgames: response.data })
      console.log(this.state.allgames)
    })
    .catch(error => console.log(error))
  }


  render() {
    if (this.state.currentgame === [] ) {
      return (
        <Newgame/>
      )
    } else if (this.state.allgames["player2"] === null) {
      return (
        <div>
          Player 2 === null
        </div>
      );
    } else {
      return (
        <div>
          Else statement
        </div>
      );
    }
  }
}
