import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.gender}</p>
    </div>
  );
}

export default Services;
