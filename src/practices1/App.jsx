import React, {useState} from 'react'
import Header from './components/Header'
import Results from './components/Results'
import UserInput from './components/UserInput'
import "../practices1/components/index.css";
const Apps = () => {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
       return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
       }
    })

}

  return (
    <div>
      <Header />
      <Results input={userInput} />
      <UserInput userInput={userInput} onChange={handleChange} />
    </div>
  )
}

export default Apps
