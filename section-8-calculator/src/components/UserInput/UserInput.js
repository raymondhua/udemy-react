import React, { useState } from "react";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";
import Label from "../UI/Label";
import Input from "../UI/Input";
import InputGroup from "../UI/InputGroup";
import Actions from "../UI/Actions";
import CalculateInvestment from "../utils/CalculateInvestment";

const UserInput = (props) => {
  const [userInput, setUserInput] = useState({
    currentSavings: 0,
    yearlySavings: 0,
    expectedInterest: 0,
    investmentDuration: 0,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitUserInput(CalculateInvestment(userInput));
  };
  const resetHandler = () => {
    props.onResetUserInput();
    setUserInput({
      currentSavings: 0,
      yearlySavings: 0,
      expectedInterest: 0,
      investmentDuration: 0,
    });
  };

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    })
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
            onChange={(event) => handleChange('currentSavings', event.target.value)}
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
            onChange={(event) => handleChange('yearlySavings', event.target.value)}
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
            onChange={(event) => handleChange('expectedInterest', event.target.value)}
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
            onChange={(event) => handleChange('investmentDuration', event.target.value)}
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

export default UserInput;
