import React, { useState } from 'react'

const BintoDec = () => {
    const [binary, setBinary] = useState("0");

function BinaryCalculations(event) {
    setBinary(event.target.value);
}

function ShowMe() {
    let ans = 0;
    for(let i = Number(binary.length) - 1; i >= 0; i--) {
        if(binary.charAt(i) === "1" || binary.charAt(i) === "0"){

            ans += Math.pow(2, Number(i));
        }
        else {
            console.log("Invalid binary");
            setBinary(0);
            ans = 0;
        }
    }
    setBinary(ans);
}
  return (
    <div>
      <title>problem solving</title>
      <h1>Enter the user input</h1>
      <input value={binary} onChange={(event) => BinaryCalculations(event)} />
      <button onClick={ShowMe}>Click me</button>
     
    </div>
  )
}

export default BintoDec
