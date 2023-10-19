import React from 'react';

function CalculatedItem (props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
    <tr>
        <td>{props.year}</td>
        <td>{formatter.format(props.savingsEndOfYear)}</td>
        <td>{formatter.format(props.yearlyInterest)}</td>
        <td>{formatter.format(props.totalInterest)}</td>
        <td>{formatter.format(props.investedCapitol)}</td>
    </tr>
    )
}

export default CalculatedItem;