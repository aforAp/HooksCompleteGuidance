import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    //under current i amaccessing onyl the value
    //in the current property the actual input value might be stored.
    //now i can access all the elements which was avaialbel in the input element when it was haev palyerNmae.current
    playerName.current.value = "";
    //imperative code guiding the react to clear directly via DOM its react way.
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
