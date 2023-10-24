import React from "react";
import ResultItem from "./ResultItem";
import Header from "./Header";
import styles from "./Table.module.css";

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
      <Header />
      <tbody>
        {props.items.map((yearData) => (
          <ResultItem
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
