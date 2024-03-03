"use client";
import Navbar from "@/app/components/Navbar";
import React, { useEffect, useState } from "react";

export default function Page(props) {
  const userId = props.params.user;
  const [Products, setProducts] = useState([]);
  const [Data, setData] = useState();
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

  useEffect(() => {
    if (Products.length > 0) {
      const foundProduct = Products.find((product) => product._id === userId);
      if (foundProduct) {
        console.log(foundProduct);
        setData(foundProduct);
      }
    }
  }, [Products, userId]);
  const [img, setimg] = useState();
  const handleNext = () => {
    //   console.log("next");
    if (img === Data.extphoto.image1) {
      setimg(Data.extphoto.image2);
    } else if (img === Data.extphoto.image2) {
      setimg(Data.extphoto.image3);
    } else {
      setimg(Data.extphoto.image1);
    }
  };

  const handlePre = () => {
    // console.log("pre");
    if (img === Data.extphoto.image3) {
      setimg(Data.extphoto.image2);
    } else if (img === Data.extphoto.image2) {
      setimg(Data.extphoto.image1);
    } else {
      setimg(Data.extphoto.image3);
    }
  };

  return (
    <div>
      <Navbar />
      {Data && (
        <div>
          <div className="mx-10 my-20">
            {/* {Data.nameorg} */}
            <div className="flex">
              <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-10">
                <div class="flex justify-end px-4 pt-4">
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span class="sr-only">Open dropdown</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdown"
                    class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul class="py-2" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Export Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex flex-col items-center pb-10 ">
                  <img
                    class="w-36 h-36 mb-3 rounded-full shadow-lg"
                    src={Data.pfp}
                    alt="Bonnie image"
                  />
                  <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {Data.nameorg}
                  </h5>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {" "}
                    <span className="text-black"> Manager :</span>
                    {Data.ownername}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-black"> Address :</span>{" "}
                    {Data.address}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-black"> Since : </span>{" "}
                    {Data.update_date.slice(0, 10)}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-black"> Email :</span> {Data.email}
                  </span>
                  {/* <span class="text-sm text-black dark:text-gray-400 my-2">
                    Description
                  </span> */}
                  {/* <span class="text-sm text-gray-500 dark:text-gray-400 w-10/12">
                   {Data.description}
                </span> */}
                </div>
              </div>
              <div className="border w-2/3 rounded-lg bg-cover h-96 my-4">
                <img
                  src={img == null ? Data.extphoto.image1 : img}
                  className="bg-cover w-full h-full rounded-lg"
                  alt=""
                />
                <div>
                  <button onClick={handlePre}>
                    <img
                      className="w-10 h-10 relative -top-56 -left-9 hover:translate-y-1"
                      src="../arrow1.png"
                      alt=""
                    />
                  </button>
                </div>
                <div>
                  <button onClick={handleNext}>
                    <img
                      className="w-10 h-10 relative -top-[260px] left-[800px] hover:translate-y-1"
                      src="../arrow2.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="border text-gray-700 ">
            <span className="my-4  text-3xl flex justify-center">About US</span>
            <div className="mx-10 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt, minus reiciendis esse ipsam quis aut hic neque rerum vitae reprehenderit impedit perspiciatis voluptatibus, dolorum velit quod possimus adipisci! Modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum aliquid est laudantium, ea aspernatur non nam expedita excepturi, minus eaque, iusto natus maiores fugiat laboriosam quidem dolore vero quos laborum?
              Illo ad, odio quis ratione inventore id, nobis deleniti non officiis autem reiciendis distinctio animi tenetur nam odit ea laboriosam magni aliquam! Quia, adipisci consequatur? Mollitia saepe quod ad? Non.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
