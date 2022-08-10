import React, { useEffect, useState } from "react";
import BankEmployee from './components/BankEmployee'
import Banner from './components/Banner';
import Customer from './components/Customer';
import Footer from './components/Footer';
import employees from './data/employees.json';
export default function App() {
  const [bankers, setBankers] = useState([]);
   
  /**
   * Initialize state and calls sortBankers function
   */
  useEffect(() => {
    const bankerList = [];
    employees.map((employee) => {
      if (employee.type === "banker") {
        bankerList.push(employee)
      }
    });
    sortBankers(bankerList);

  }, [])

  /**
   * Sorts bankers list and sets state
   * @param {*} bankers 
   */
  const sortBankers = (bankers) => {
    bankers.sort((a, b) => {
      return a.satisfactionRating - b.satisfactionRating;
    })
    setBankers(bankers)
  }

  /**
   * renders the bankers list using the sorted bankers array.
   * Calls BankEmployee component to display the values from the employees.json array
   */
  const bankersList = () => {
    const list = bankers.map((banker, index) => {
      return (
        <div className="bank-employee-info" key={"banker-" + index} alt={"banker-" + banker.username}>
          <BankEmployee user={banker}/> 
        </div>
      )
    })
    return list;
  }

  /**
   * Return function which renders the JSX code and calls all components for the app.
   */
  return (
    <>
      {/* Banner/Header element includes a logo */}
      <Banner/>
      {/* Main element of the app which includes Customer and bank employees. */}
      <main role="main">
        <Customer name="Firstname Lastname" username="x1234"/>
        <h2>Employees</h2>
        {bankersList()}
      </main>
      {/* Footer element which includes the US Bank copyright. */}
      <Footer/>
    </>
  );
}
