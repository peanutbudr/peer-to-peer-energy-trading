import './App.css'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function MainButton({message , navigateTo}){
const navigate = useNavigate()

    return(
        <>
        <div className='mainButton'>
        <button className="button-89" role="button" onClick={(e) => {navigate('/' + navigateTo)}}>{message}</button>
      </div>
        
        </>
    )
}


export function Assumptions(){

  return (
    <>
    <div>
      <h2>Assumptions</h2>
    </div>
    <div>
      <p>The following assumptions have been taken into account while creating the simulation</p>
      <ul>
        <li>The data has been taken form bitscoop where everyday has been considered as a separate prosumer or consumer.</li>
        <li>The time lag of transfer of energy between buyer and seller and any time delay due to transaction is assumed to be 0</li>
        <li>The per unit cost proposed by the sellers is obtained by calculating LCOE (Levelized Cost of Energy) more information can be found here</li>
        <li>The default grid price of selling a unit of energy is Rs 2</li>
        <li>The default grid price of purchasing a unit of energy is Rs 1</li>
        <li>The buyers Come in a sequential manner, i.e for this model simultaneous trade of energy between prosumers and consumers are not taken into account</li>
      </ul>
    </div>

    
    
    
    </>
  )
}

export function TableComponent () {
  const [data, setData] = useState([]);
  const [rowCounter, setRowCounter] = useState(0);


  const array1 = [
  '00:00', '', '', '03:00', '04:00', '05:00', '', '07:00',
  '08:00', '09:00', '10:00', '', '', '13:00', '14:00', '15:00',
  '16:00', '', '', '19:00', '20:00', '', '22:00', '23:00'
];

const array2 = [
  'P1', 'P2', 'P1', 'P3', 'P2', 'P1', 'P3', 'P2',
  'P1', 'P1', 'P3', 'P2', 'P3', 'P1', 'P1', 'P3',
  'P3', 'P2', 'P1', 'P3', 'Pr', 'P2', 'P2', 'P1'
];


const array3 = [
  'c2', 'c1', 'c2', 'P1', 'c3', 'P2', 'c2', 'P3',
  'P3', 'c2', 'P1', 'P3', 'P2', 'Pr', 'P3', 'c2',
  'P1', 'c3', 'P2', 'c1', 'P2', 'c1', 'c1', 'P2'
];






  // Arrays with random values
  //const array1 = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
  //const array2 = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
  //const array3 = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
  const array4 = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
  const array5 = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
  const array6 = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));


  useEffect(() => {
    const interval = setInterval(() => {
      if (rowCounter < 24) {
        setData(prevData => [...prevData, [array1[rowCounter], array2[rowCounter], array3[rowCounter], array4[rowCounter], array5[rowCounter], array6[rowCounter]]]);
        setRowCounter(prevCounter => prevCounter + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rowCounter]);

  return (
    <table>
      <thead>
        <tr>
          <th>Time Stamp</th>
          <th>Seller</th>
          <th>Buyer</th>
          <th>Energy Transfered </th>
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
};

export default MainButton