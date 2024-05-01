import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
import {useState} from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
   });  

  const validInput = userInput.duration >= 1;

   function handleChange(label, newValue){
       setUserInput(prevInput => {
           return{
               ...prevInput,
                [label]: +newValue, // part 102, convert this string value to a number value.
           };   
       });
   }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!validInput && <p className="center">Please enter a Duration number greater than zero!</p>}
      {validInput && <Results input={userInput}/>}
    </>
  )
}

export default App
