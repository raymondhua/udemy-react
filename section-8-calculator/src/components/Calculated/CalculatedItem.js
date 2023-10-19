import React from 'react';

function CalculatedItem (props) {

    return (
    <tr>
        <td>{props.year}</td>
        <td>{props.savingsEndOfYear}</td>
        <td>{props.yearlyInterest}</td>
        <td>{props.totalInterest}</td>
        <td>{props.investedCapitol}</td>
    </tr>
    )
}

export default CalculatedItem;