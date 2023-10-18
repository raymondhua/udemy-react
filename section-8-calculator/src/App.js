import React, {useState} from 'react';

import Header from './components/Header/Header';
import CalculatedTable from './components/Calculated/CalculatedTable';
import InvestmentForm from './components/Investment/InvestmentForm';

function App() {
  const [calculatedData, setCalculatedData] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.investmentDuration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    return yearlyData;
    // do something with yearlyData ...
  };
  const resetCalculatedInfoHandler = (event) =>{
    const tempData = [];
    setCalculatedData(tempData);
    console.log(calculatedData);
  }
  const submitCalculatedInfoHandler = (enteredData) =>{
    const tempData = calculateHandler(enteredData);
    setCalculatedData(tempData);
  }

  return (
    <div>
      <Header />

      <InvestmentForm onSubmitInvestmentForm={submitCalculatedInfoHandler} onResetInvestmentForm={resetCalculatedInfoHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <CalculatedTable items={calculatedData}/>
    </div>
  );
}

export default App;
