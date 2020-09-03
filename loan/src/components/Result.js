import React from 'react';
const Result = (props) => {
    return ( 
        <div className="u-full-width results">
            <h2>Results are:</h2>
            <p>The loan amount is: $ {props.amount}</p>
            <p>Months to repay: {props.months}</p>
            <p>Total payment: $ {props.total}</p>
            <p>Monthly payment: $ {(props.total / props.months).toFixed(2)}</p>
        </div>
     );
}
 
export default Result;