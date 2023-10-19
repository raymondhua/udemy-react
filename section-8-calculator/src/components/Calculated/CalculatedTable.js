import React from "react";
import CalculatedItem from "./CalculatedItem";
import CalculatedHeader from "./CalculatedHeader";
import styles from "./CalculatedTable.module.css";

const CalculatedTable = (props) => {
  if (props.items.length === 0) {
    return (
      <p className={`${styles["centreAligned"]}`}>
        No investment calculated yet.
      </p>
    );
  }

  return (
    <table className={`${styles["result"]}`}>
      <CalculatedHeader />
      <tbody>
        {props.items.map((yearData) => (
          <CalculatedItem
            key={yearData.year}
            year={yearData.year}
            savingsEndOfYear={yearData.savingsEndOfYear}
            yearlyInterest={yearData.yearlyInterest}
            totalInterest={yearData.totalInterest}
            investedCapitol={yearData.investedCapitol}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CalculatedTable;
