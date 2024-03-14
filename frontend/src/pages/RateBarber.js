import React, { useEffect, useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";


const RateBarber = () => {

  const [barber, setBarber] = useState("");
  const [rated, setRated] = React.useState();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext()

  const handleSubmit = async () => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    if (barber == "") {
      setError("Select A Barber");
      return;
    }

    
    const star = 3
    const ratings = [{star}]
    

    
    const response = await fetch('./api/user/' + barber, {
        method: 'PATCH',
        body: JSON.stringify(ratings),
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user.token}`,
        }
    })
    const json = await response.json()

  }


  return (
    <>
      <h2 className="text-xl  font-bold m-4">Rate Your Barber</h2>
      <div className=" grid grid-cols-3 gap-2">
        <div className="appointment col-span-2">
          <form
            className="mt-2 m-auto p-4 bg-white rounded min-w-[500px]"
            onSubmit={handleSubmit}
          >
            <p className=" text-lg">Barber:</p>
            <div className="custom-select">
              <select
                id="barbers"
                onChange={(e) => setBarber(e.target.value)}
                value={barber}
                required="required"
                className="mt-2"
              >
                <option>Select Barber</option>
                <option value="raz@gmail.com">Raz</option>
                <option value="tav@gmail.com">Tav</option>
                <option value="ali@gmail.com">Ali</option>
                <option value="negassi@gmail.com">Negassi</option>
              </select>
            </div>
            <button className="mt-4 bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ">Book Appointment</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default RateBarber;
