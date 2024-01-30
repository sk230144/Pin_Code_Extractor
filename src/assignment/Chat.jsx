import React, { useState } from 'react';
import './chat.css'; // Import CSS file

const initialData = [
  { id: 1, name: 'Activa', type: 'Do', customer: 'Chris Friedkly', store: 'Supermarket Villanova' },
  { id: 2, name: 'Maggie Johnson', type: 'Oasis Organic Inc.' },
  { id: 3, name: 'Gael Harry', type: 'New York Finest Fruits', id: 3 },
  { id: 4, name: 'Ei', type: 'Jenna Sullivan', store: 'Walmart' },
];

const Chat = () => {
  const [data, setData] = useState(initialData);

  const sortBy = (field) => {
    setData((prevData) => {
      return prevData.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortBy('name')}>Name</th>
            <th onClick={() => sortBy('type')}>Type</th>
            <th onClick={() => sortBy('customer')}>Customer</th>
            <th onClick={() => sortBy('store')}>Store</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.customer}</td>
              <td>{item.store}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chat;
