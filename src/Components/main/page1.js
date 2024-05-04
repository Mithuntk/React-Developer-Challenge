import React from 'react';
import { useHistory } from 'react-router-dom';
import './page1.css';

function Page1() {

  return (
    <div className="container">
      <div className="row">
        <h1>Invoice</h1>
      </div>
      <div className="row">
        <button onClick={() => ('/page2')}>Create</button>
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
      <div className="row">
        <div className="column">Invoice Number</div>
        <div className="column">Date</div>
        <div className="column">Customer Number</div>
        <div className="column">Total</div>
        <div className="column">Tax</div>
        <div className="column">Grand Total</div>
      </div>
    </div>
  );
}

export default Page1;
