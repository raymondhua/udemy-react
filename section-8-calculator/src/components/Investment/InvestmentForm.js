import React, {useState} from 'react';


const InvestmentForm = props => {
    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
    const [enteredYearlySavings, setEnteredYearlySavings] = useState('');
    const [enteredExpectedInterest, setEnteredExpectedInterest] = useState('');
    const [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        const investmentData = {
            currentSavings: enteredCurrentSavings,
            yearlySavings: enteredYearlySavings,
            expectedInterest: enteredExpectedInterest,
            investmentDuration: enteredInvestmentDuration
        };
        props.onSubmitInvestmentForm(investmentData);
    };
    const resetHandler = (event) => {
        props.onResetInvestmentForm();
        setEnteredCurrentSavings('0');
        setEnteredYearlySavings('0');
        setEnteredExpectedInterest('0');
        setEnteredInvestmentDuration('0');
    };

    const currentSavingsChangeHandler = (event) => {
        setEnteredCurrentSavings(event.target.value);
    };
    const yearlySavingsChangeHandler = (event) => {
        setEnteredYearlySavings(event.target.value);
    };
    const expectedInterestChangeHandler = (event) => {
        setEnteredExpectedInterest(event.target.value);
    };
    const investmentDurationChangeHandler = (event) => {
        setEnteredInvestmentDuration(event.target.value);
    };
    return (     
        <form onSubmit={submitHandler} className="form">
        <div className="input-group">
        <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={enteredCurrentSavings} onChange={currentSavingsChangeHandler} id="current-savings" />
        </p>
        <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={enteredYearlySavings} onChange={yearlySavingsChangeHandler} id="yearly-contribution" />
        </p>
        </div>
        <div className="input-group">
        <p>
            <label htmlFor="expected-return">
            Expected Interest (%, per year)
            </label>
            <input type="number" value={enteredExpectedInterest} onChange={expectedInterestChangeHandler} id="expected-return" />
        </p>
        <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value={enteredInvestmentDuration} onChange={investmentDurationChangeHandler} id="duration" />
        </p>
        </div>
        <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
        </button>
        <button type="submit" className="button">
            Calculate
        </button>
        </p>
        </form>
    )
}

export default InvestmentForm;