import React from 'react';

import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const { dataSource } = useFetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

  console.log('dataSource');
  console.log(dataSource);

  return (
    <div className='App'>
      <h1>Prueba Test Grid and Fetch</h1>

      <table>
        <tbody>
          <tr>
            <th>Nation</th>
            <th>Year</th>
            <th>Population</th>
          </tr>
          
            {dataSource?.map((data, index) => (
              <tr key={index}>
              <th>{data.Nation}</th>
              <th>{data.Year}</th>
              <th>{data.Population}</th>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
