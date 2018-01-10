import React from 'react'
import Banner from './views/banner'
import MultChoiceFooter from './views/mult_choice_footer'

const Question = (props) => {
  return (
    <div className="text">
      <Score1 name={props.player1Name} score={props.player1Score}/>
      <Score2 name={props.player2Name} score={props.player2Score}/>
      <Banner text={props.text}/>
      <MultChoiceFooter a={props.a} b={props.b} c={props.c} d={props.d}/>
    </div>
  )
}

export default Question;
