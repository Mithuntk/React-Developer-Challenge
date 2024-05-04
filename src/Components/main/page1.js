import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './page1.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function Page1() {
  const location = useLocation();
  const { state } = location;
  const { invoiceNumber, date, totalPrice, totalTax, grandTotal } = state || {};

  const [customerName, setCustomerName] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    // You can implement your save logic here
    // For demonstration purposes, just logging the customer number
    console.log('Customer Name:', customerName);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Invoice</h1>
      </div>
      <div className="row">
        <button onClick={() => navigate('/page2')}>Create</button>
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
      <div className="row">
        <div className="column">Invoice Number</div>
        <div className="column">Date</div>
        <div className="column">Customer Name</div>
        <div className="column">Total</div>
        <div className="column">Tax</div>
        <div className="column">Grand Total</div>
      </div>
      <div className="row">
        <div className="column">{invoiceNumber}</div>
        <div className="column">{formatDate(date)}</div>
        <div className="column">
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
          />
        </div>
        <div className="column">{totalPrice}</div>
        <div className="column">{totalTax}</div>
        <div className="column">{grandTotal}</div>
        {/* Render other columns below */}
      </div>
      <div className="row">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Page1;
