const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const CalculateInvestment = (userInput) => {
  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...

  const yearlyData = []; // per-year results

  let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
  let yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput.expectedInterest / 100;
  const duration = +userInput.investmentDuration;
  let totalInterest = 0;

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    totalInterest += yearlyInterest;
    const investedCapitol = currentSavings - totalInterest;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: formatter.format(yearlyInterest),
      savingsEndOfYear: formatter.format(currentSavings),
      totalInterest: formatter.format(totalInterest),
      investedCapitol: formatter.format(investedCapitol),
    });
  }
  return yearlyData;
};
export default CalculateInvestment;
