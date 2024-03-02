"use client"
import React, { useEffect, useState } from 'react';

export default function Page(props) {
  const userId = props.params.user;
  const [Products, setProducts] = useState([]);
  const [Data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await fetch('http://localhost:5000/api/getorphanage');
        let data = await resp.json();
        setProducts(data.data);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        console.log('loading');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Products.length > 0) {
      const foundProduct = Products.find((product) => product._id === userId);
      if (foundProduct) {
        console.log(foundProduct);
        setData(foundProduct);
      }
    }
  }, [Products, userId]);

  return (
    <div>
      {Data && (
          <div className="">{Data.nameorg}</div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
}
