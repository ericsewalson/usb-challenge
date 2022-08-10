import React from "react";

/**
 * Bank employee component has been made stateless and logic is located in the parent (App.js)
 * @param {*} props 
 */
const BankEmployee = (props) => {
  return (
    <div className="bank-employee">
      <span>{props.user.userName}</span>
      <br/>
      <span>Name: { props.user.name }</span>
      <br/>
      <span>Customer Satisfaction Rating: {props.user.satisfactionRating}</span> 
    </div>
  )

};

export default React.memo(BankEmployee);
