import React, { useEffect, useState } from "react";
// import Image from "next/image";
import { useAuthContext } from "../hooks/useAuthContext";
import BarberDetails from "../components/BarberDetails";

const RateBarber = () => {
  const [barber, setBarber] = useState("");
  const { user } = useAuthContext();
  const [star, setStar] = useState();
  const [error, setError] = useState();
  const [barbers, setBarbers] = useState("");



  const urls = ["/api/user/ali@gmail.com", "/api/user/tav@gmail.com", "/api/user/raz@gmail.com", "/api/user/negassi@gmail.com"]

  useEffect(() => {
    
    const fetchBarbers = async () => {
      const fetchPromises = urls.map( async url => await fetch(url));

      Promise.all(fetchPromises)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        setBarbers(data)
      })
      .catch(error => {
        // Handle any errors
        setError("Error getting barbers")
      });
    };
      fetchBarbers();
  }, [ barber ]);



  const handleSubmit = async () => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    if (barber == "") {
      setError("Select A Barber");
      return;
    }

    const ratings = [{ star }];

    const response = await fetch("./api/user/" + barber, {
      method: "PATCH",
      body: JSON.stringify(ratings),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
  };

  return (
    <>
            <div className="mt-10 grid grid-cols-4 gap-2">
        {barbers &&
          barbers.map((barber) => (
            <BarberDetails
              barber={barber}
              key={barber._id}
            />
          ))}
      </div>

      <form
        className="mt-10 m-auto p-4 bg-white rounded min-w-[500px] max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold my-4">Rate Your Barber</h2>

        <p className="text-gray-400 text-md my-2">
						We would love to know how we did, your input can help improve our services.
					</p>
        <p className=" text-lg">Barber:</p>
        <div className="custom-select">
          <select
            id="barbers"
            onChange={(e) => setBarber(e.target.value)}
            value={barber}
            required="required"
            className="my-2 w-[100%] border rounded-md"
          >
            <option>Select Barber</option>
            <option value="ali@gmail.com">Ali</option>
            <option value="negassi@gmail.com">Negassi</option>
            <option value="raz@gmail.com">Raz</option>
            <option value="tav@gmail.com">Tav</option>
          </select>
        </div>

        <div className=" max-w-md whitespace-nowrap overflow-hidden transition-all mx-auto mt-8">
        
          <div className="grid grid-cols-5 gap-10">
            {[1, 2, 3, 4, 5].map((value) => {
              return (
								<div
									key={value}
									className={`grid place-content-center  h-12 w-12 rounded-full cursor-pointer  transition-all ${
										value === star
											? "bg-blue-500  text-white"
											: "text-white hover:bg-blue-600 hover:text-white  bg-blue-900"
									}`}
									onClick={() => setStar(value)}
								>
									{value}
								</div>
              );
            })}
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 w-[100%]">
          Submit
        </button>
      </form>




      

    </>
  );
};

export default RateBarber;
