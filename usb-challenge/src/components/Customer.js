import React from 'react'

/**
 * Customer component which takes customer data as a prod
 * @param {*} props 
 */
const Customer = (props) => {
  return (
    <React.Fragment>
      <h2>Customers</h2>
      <div>{props.username}</div>
      <div>{props.name}</div>
    </React.Fragment>
  )
}

export default Customer;