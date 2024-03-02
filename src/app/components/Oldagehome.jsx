"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Oldagehome(props) {
  const [Products, setProducts] = useState([]);
  const [next, setNext] = useState(0); // Set your default value for 'next'
  const [prono, setProno] = useState(5); // Set your default value for 'prono'
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await fetch("http://localhost:5000/api/getorphanage");
        let data = await resp.json();
        setProducts(data.data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        console.log("loading");
      }
    };

    fetchData();
  }, []);

  const visibleProducts = Products.slice(next, next + prono);

  const handleNextClick = () => {
    if (next < Products.length - prono) {
      setNext(next + prono);
    }
  };

  const handlePrevClick = () => {
    if (next > 0) {
      setNext(next - prono);
    }
  };

  return (
    <div>
      <div className="font-semibold text-2xl text-gray-600">
        Near By OLD AGE HOME
      </div>
      <div className="my-4 flex mx-6">
        {visibleProducts &&
          visibleProducts.map((product) => (
            <div key={product._id}>
              <Link href={`/profile/${product._id}`}>
                <div className="flex justify-evenly">
                  <div className="border p-4 w-52 mx-2">
                    <div>
                      <img className="w-44 h-28" src={product.pfp} alt="" />
                    </div>
                    <div className="text-blue-600">{product.nameorg}</div>
                    <div>{product.address}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
        <div className="flex justify-between mx-16">
          <button onClick={handlePrevClick} className="bg-blue-500 text-white p-2 h-10 rounded-lg">
            Previous
          </button>
          <button onClick={handleNextClick} className="bg-blue-500 text-white p-2 h-10 rounded-lg">
            Next
          </button>
        </div>
    </div>
  );
}
