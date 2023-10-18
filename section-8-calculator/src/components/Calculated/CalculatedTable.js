import React from 'react';
import CalculatedItem from './CalculatedItem';
import CalculatedHeader from './CalculatedHeader';

const CalculatedTable = props => {
    if (props.items.length === 0){
        return <p className='centreAligned'>No investment calculated yet.</p>
    }

    return (      
        <table className="result">
        <CalculatedHeader />
        <tbody>
        {props.items.map((yearData) => (<CalculatedItem />))}
        <CalculatedItem />
        </tbody>
        </table>
    )
}


export default CalculatedTable;