"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
export default function Page() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [nameorg,setnameorg] = useState(null);
  const [ownername, setownername] = useState(null);
  const [mobile, setmobile] = useState(null);
  const [email, setemail] = useState(null);
  const [address, setaddress] = useState(null);
  const [description, setdescription] = useState(null);
  const [pfp, setpfp] = useState(null);
  const [image1, setimage1] = useState(null);
  const [image2, setimage2] = useState(null);
  const [image3, setimage3] = useState(null);
//   const [check, setcheck] = useState(null);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthString = months[monthIndex];
  const formattedDate = `${day}-${monthString}-${year}`;
  const extphoto = {image1,image2,image3}
  const saveData = async () => {
    const data = {
      nameorg,
      ownername,
      mobile,
      email,
      address,
      description,
      pfp,
      extphoto
    };

    const response = await fetch("http://localhost:5000/api/setorphanage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Registration Successful");
      window.location.reload();

    } else {
      alert("Registration Failed");
    }
  };

  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="mx-20 my-10">
      {/* Header and Date */}
      <div className="flex justify-between mx-4">
        <div>
          <div className="text-2xl">Create Account</div>
        </div>
        <div className="border border-gray-400 bg-blue-500 rounded-lg h-8 w-44">
          <div className="my-1 mx-2 text-white cursor-pointer">
            TODAY: {formattedDate}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div>
        <div>
          <h2 className="font-bold mx-20 mt-10 text-2xl text-gray-700">
            Enter Name Of Organisation
          </h2>
          <div>
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-4/6 mx-20 my-4"
              value={nameorg}
              onChange={(e) => setnameorg(e.target.value)}
              type="text"
              placeholder="Name of Organisation"
            />
          </div>
          <div>
            <h1 className="font-bold mx-20 my-4 text-2xl text-gray-700">
              Other details
            </h1>
            <div className="flex">
              <input
                className="border border-gray-400 text-black px-4 py-6 rounded-lg w-1/3 ml-20 my-4"
                type="text"
                value={ownername}
                onChange={(e) => setownername(e.target.value)}
                placeholder="Owner Name"
              />
              <input
                className="border border-gray-400 text-black px-4 py-6 rounded-lg w-1/3 mx-1 my-4"
                type="text"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                placeholder="Mobile No."
              />
            </div>
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-4/6 mx-20 my-4"
              type="emial"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-4/6 mx-20 my-4"
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Description"
            />
            <div className="flex">
              <input
                className="border border-gray-400 text-black px-4 py-6 rounded-lg w-1/3 ml-20 my-4"
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Address"
              />
              <input
                className="border border-gray-400 text-black px-4 py-6 rounded-lg w-1/3 mx-1 my-4"
                value={pfp}
                onChange={(e) => setpfp(e.target.value)}
                type="text"
                placeholder="Photo for Profile"
              />
            </div>
              <div className="mx-20"> 
              <div>
              <h2 className="font-bold mt-10 text-2xl text-gray-700">
            Optional
          </h2>
              </div>
              <input
                className="border border-gray-400 text-black px-4 py-6 rounded-lg w-[25%] mx-1 my-4"
                value={image1}
                onChange={(e) => setimage1(e.target.value)}
                type="text"
                placeholder="Add Photo"
              />
              <input
                className="border border-gray-400 text-black px-4 py-6 rounded-lg w-[25%] mx-1 my-4"
                value={image2}
                onChange={(e) => setimage2(e.target.value)}
                type="text"
                placeholder="Add Photo"
              />
              <input
                className="border border-gray-400 text-black px-4 py-6 rounded-lg w-[25%] mx-1 my-4"
                value={image3}
                onChange={(e) => setimage3(e.target.value)}
                type="text"
                placeholder="Add Photo"
              />
              </div>
          </div>
          <button
            className="cursor-pointer my-2 mx-20 w-60 items-center py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 focus:bg-blue-600 focus:text-white text-white"
            onClick={saveData}
          >
            Publish Product
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

