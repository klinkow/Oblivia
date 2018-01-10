import React from 'react';
import Banner from './views/banner'
import TextInputFooter from './views/text_input_footer'

const player1name = (props) => {

  return (
    <div className="text">
      <Banner text="Player {props.inputId}, Enter your name"></Banner>
      <TextInputFooter
        inputId={props.inputId}
        newGameState={(name) => props.newGameState(name)} />
    </div>
  )

}

export default player1name;
