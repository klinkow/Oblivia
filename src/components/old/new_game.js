import React from 'react'
import Banner from './views/banner'

const NewGame = (props) => {

  return (
    <div>
      <Banner text="Welcome to Obvlivia, a 2-player trivia game"></Banner>
      <a className="footer" onClick={() => props.startGame()}>New Game</a>
    </div>
  )
}

export default NewGame;
