import React from 'react';
import CalculatedItem from './CalculatedItem';

const CalculatedTable = props => {
/*     if (0 === 0){
        return <p className='centreAligned'>No investment calculated yet.</p>
    } */

    return (      
        <table className="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        <CalculatedItem />
        </tbody>
        </table>
    )
}

export default CalculatedTable;