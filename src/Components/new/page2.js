import React, { useState } from 'react';
import './page2.css'; 

function Page2({ onSave }) {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    date: '',
    items: [],
    totalPrice: 0,
    totalTax: 0,
    grandTotal: 0,
  });

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...formData.items];
    newItems[index][name] = value;

    const price = parseFloat(newItems[index].price) || 0;
    const tax = parseFloat(newItems[index].tax) || 0;
    const subtotal = (price + (price * tax) / 100).toFixed(2);
    newItems[index].subtotal = subtotal;

    const totalPrice = newItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0);

    const totalTax = newItems.reduce((acc, item) => acc + (parseFloat(item.subtotal) - parseFloat(item.price) || 0), 0);

    const grandTotal = totalPrice + totalTax;

    setFormData({ ...formData, items: newItems, totalPrice, totalTax, grandTotal });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { itemId: '', itemName: '', price: '', tax: '', subtotal: '' }],
    });
  };

  const handleSaveClick = () => {
    onSave(formData);
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Create Invoice</h2>
      </div>
      <div className="row">
        <div className="inputContainer">
          <label>Invoice Number:</label>
          <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })} />
        </div>
        <div className="inputContainer">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        </div>
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div className="row">
        <div className="column">Item ID</div>
        <div className="column">Item Name</div>
        <div className="column">Price</div>
        <div className="column">Tax</div>
        <div className="column">Sub Total</div>
      </div>
      {formData.items.map((item, index) => (
        <div className="row" key={index}>
          <input type="text" name="itemId" value={item.itemId} onChange={(e) => handleInputChange(index, e)} />
          <input type="text" name="itemName" value={item.itemName} onChange={(e) => handleInputChange(index, e)} />
          <input type="text" name="price" value={item.price} onChange={(e) => handleInputChange(index, e)} />
          <input type="text" name="tax" value={item.tax + '.00%'} onChange={(e) => handleInputChange(index, e)} />
          <input type="text" name="subtotal" value={item.subtotal} readOnly />
        </div>
      ))}
      <div className="row">
        <div className="column">Total Price:</div>
        <div className="column">
          <input type="text" value={formData.totalPrice.toFixed(2)} readOnly />
        </div>
      </div>
      <div className="row">
        <div className="column">Total Tax:</div>
        <div className="column">
          <input type="text" value={formData.totalTax.toFixed(2)} readOnly />
        </div>
      </div>
      <div className="row">
        <div className="column">Grand Total:</div>
        <div className="column">
          <input type="text" value={formData.grandTotal.toFixed(2)} readOnly />
        </div>
      </div>
      <div className="row">
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

export default Page2;
