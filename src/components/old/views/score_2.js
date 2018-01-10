import React from 'react';

const Score2 = (props) => {

  return (
    <div className="score2">
      <p>{props.player2Name}: {props.player2Score}</p>
    </div>
  );
}

export default Score2
