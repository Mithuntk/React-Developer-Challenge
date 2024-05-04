// App.js
import React, { useState } from 'react';
import Page1 from './Components/main/page1';
import Page2 from './Components/new/page2'

function App() {
  const [invoiceData, setInvoiceData] = useState({});

  const handleSave = (data) => {
    setInvoiceData(data);
  };

  return (
    <div>
      <Page1 invoiceData={invoiceData} />
      <Page2 onSave={handleSave} />
    </div>
  );
}

export default App;
