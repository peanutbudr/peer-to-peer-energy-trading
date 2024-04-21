import React, { useState, useEffect } from 'react';
import fs from 'fs'; // Import file system module for Node.js
import MainButton from './dontSwitch'; // Import the function from dontSwitch.js

function TableComponent() {
  const [data, setData] = useState([]);
  const [rowCounter, setRowCounter] = useState(0);
  const [outputData, setOutputData] = useState([]);

  useEffect(() => {
    // Read the JSON file using Node.js fs module
    fs.readFile('dontSwitch.js', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      // Now you have the contents of dontSwitch.js file in the data variable
      // You can execute this code by using eval or Function constructor
      // For security reasons, eval is generally discouraged, so we'll use the Function constructor
      const dontSwitchCode = new Function(data);
      
      // Now execute the dontSwitchCode function to get the output
      const output = dontSwitchCode();

      // Set the output data in the state
      setOutputData(output);
    });

    const interval = setInterval(() => {
      if (rowCounter < outputData.length) {
        setData(prevData => [...prevData, outputData[rowCounter]]);
        setRowCounter(prevCounter => prevCounter + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rowCounter, outputData]);

  return (
    <table>
      <thead>
        <tr>
          <th>Time Stamp</th>
          <th>Seller</th>
          <th>Buyer</th>
          <th>Energy Transfered</th>
          <th>Trade Price</th>
          <th>Total Benefit Provided</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, i) => (
              <td key={i}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
