import React, { useEffect, useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
const { dispatch } = useAuthContext()

const RateBarber = () => {

  const [barber, setBarber] = useState("");
  const [rated, setRated] = React.useState();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    if (barber == "") {
      setError("Select A Barber");
      return;
    }

    const profile = { barber, rated };
    
    const response = await fetch('./api/user/ratebarber' + barber, {
        method: 'PATCH',
        body: JSON.stringify(profile),
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user.token}`,
        }
    })
    const json = await response.json()

    if (response.ok){
        dispatch({type: 'UPDATE_USER', payload: json})
    }
  }


  return (
    <>
      <h2 className="text-xl  font-bold m-4">Rate Your Barber</h2>
      <div className=" grid grid-cols-3 gap-2">
        <div className="appointment col-span-2">
          <form
            className="mt-2 m-auto p-4 bg-white rounded min-w-[500px]"
            // onSubmit={}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default RateBarber;
