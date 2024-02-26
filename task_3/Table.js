
import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    
    fetchData('https://jsonplaceholder.typicode.com/todos/1');
  }, []); 
  return (
    <div>
      <button onClick={() => fetchData('https://jsonplaceholder.typicode.com/todos/1')}>
        Load Data 1
      </button>
      <button onClick={() => fetchData('https://jsonplaceholder.typicode.com/todos/2')}>
        Load Data 2
      </button>
      <button onClick={() => fetchData('https://jsonplaceholder.typicode.com/todos/3')}>
        Load Data 3
      </button>
      <table border="1">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            <tr key={data.id}>
              <td>{data.userId}</td>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.completed ? 'Yes' : 'No'}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
