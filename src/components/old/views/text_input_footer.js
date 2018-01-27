import React from 'react';

const TextInputFooter = (props) => {

  const submitName = () => {
    name = document.querySelector(".name").value;
    props.newGameState(name);
  }

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      submitName();
    }
  })

  return (
    <div className="footer">
      <input className="name" />
    </div>
  );
}


export default TextInputFooter;
