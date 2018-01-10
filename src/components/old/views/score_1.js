import React from 'react';

const Score1 = (props) => {

  return (
    <div className="score1">
      <p>{props.player1Name}: {props.player1Score}</p>
    </div>
  );
}

export default Score1
