import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './page1.css';

function formatDate(dateString) {
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return ""; // Return an empty string if the date is invalid
  }

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
  const [isSaved, setIsSaved] = useState(false); // State to track whether the data is saved
  const navigate = useNavigate();

  const handleSave = () => {
    // You can implement your save logic here
    // For demonstration purposes, just logging the customer number
    console.log('Customer Name:', customerName);
    setIsSaved(true); // Set isSaved to true after saving
  };

  return (
    <div className="container1">
      <div className="row1">
        <div className='title'>
          <h1>Invoice</h1>
        </div>
      </div>
      <div className="row1" style={{ backgroundColor: "#fdece2", height: "60px" }}>
        <button onClick={() => navigate('/page2')} style={{ height: "30px", margin: "10px" }}>Create</button>
        <div className="searchBox" style={{ height: "30px", margin: "10px" }}>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
      <div className="row1" style={{ backgroundColor: "#fbaeb4" }}>
        <div className="column1">Invoice Number</div>
        <div className="column1">Date</div>
        <div className="column1">Customer Name</div>
        <div className="column1">Total</div>
        <div className="column1">Tax</div>
        <div className="column1">Grand Total</div>
      </div>
      <div className="row1" style={{ backgroundColor: "#fdece2" }}>
        <div className="column1">{invoiceNumber}</div>
        <div className="column1">{formatDate(date)}</div>
        <div className="column1">
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
            style={{ width: "90%", backgroundColor: "#fdece2" ,color:"black",fontWeight:'bolder'}}
            disabled={isSaved} // Disable input if data is saved
          />
        </div>
        <div className="column1">{totalPrice}</div>
        <div className="column1">{totalTax}</div>
        <div className="column1">{grandTotal}</div>
      </div>
      <div className="row1" style={{ backgroundColor: "#fdece2", color: '#f5e4e4' }}>
        {!isSaved && <button onClick={handleSave}>Save</button>} {/* Render button only if data is not saved */}
      </div>
    </div>
  );
}


export default Page1;
