import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";
import Button from "../UI/Button";
import Label from "../UI/Label";
import Input from "../UI/Input";
import InputGroup from "../UI/InputGroup";
import Actions from "../UI/Actions";

const InvestmentForm = (props) => {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearlySavings, setEnteredYearlySavings] = useState("");
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState("");
  const [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlySavings: enteredYearlySavings,
      expectedInterest: enteredExpectedInterest,
      investmentDuration: enteredInvestmentDuration,
    };
    props.onSubmitInvestmentForm(investmentData);
  };
  const resetHandler = (event) => {
    props.onResetInvestmentForm();
    setEnteredCurrentSavings("0");
    setEnteredYearlySavings("0");
    setEnteredExpectedInterest("0");
    setEnteredInvestmentDuration("0");
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
    <form onSubmit={submitHandler} className={`${styles["form"]}`}>
      <InputGroup>
        <p>
          <Label className="form" htmlFor="current-savings">
            Current Savings ($)
          </Label>
          <Input
            className="form"
            type="number"
            value={enteredCurrentSavings}
            onChange={currentSavingsChangeHandler}
            id="current-savings"
          />
        </p>
        <p>
          <Label className="form" htmlFor="yearly-contribution">
            Yearly Savings ($)
          </Label>
          <Input
            className="form"
            type="number"
            value={enteredYearlySavings}
            onChange={yearlySavingsChangeHandler}
            id="yearly-contribution"
          />
        </p>
      </InputGroup>
      <InputGroup>
        <p>
          <Label className="form" htmlFor="expected-return">
            Expected Interest (%, per year)
          </Label>
          <Input
            className="form"
            type="number"
            value={enteredExpectedInterest}
            onChange={expectedInterestChangeHandler}
            id="expected-return"
          />
        </p>
        <p>
          <Label className="form" htmlFor="duration">
            Investment Duration (years)
          </Label>
          <Input
            className="form"
            type="number"
            value={enteredInvestmentDuration}
            onChange={investmentDurationChangeHandler}
            id="duration"
          />
        </p>
      </InputGroup>
      <Actions>
        <Button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </Button>
        <Button type="submit" className="button">
          Calculate
        </Button>
      </Actions>
    </form>
  );
};

export default InvestmentForm;
