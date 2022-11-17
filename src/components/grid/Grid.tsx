/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import useFetch from '../../hooks/useFetch';

const Grid = () => {
  const { dataSource } = useFetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

  console.log('dataSource');
  console.log(dataSource);

  return (
    <div>
      <table title='table grid'>
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
};

export default Grid;
