import React, { useEffect, useState } from "react";

import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import AppointmentDetails from "../components/AppointmentDetails";
import AppointmentForm from "../components/AppointmentForm";
import UpdateModal from "../components/UpdateModal";

const Home = () => {
  const { appointments, dispatch } = useAppointmentsContext();
  const { user } = useAuthContext();
  const [barber, setBarber] = useState("");


  useEffect(() => {

    const fetchUser = async () => {
      const response = await fetch("/api/user/" + user.email);
      const json = await response.json(barber);

      if (response.ok) {
        setBarber(json.barber);
      }
    };
    if (user) {
      fetchUser();
    }
    const fetchAppointments = async () => {
    if(barber){
        const response = await fetch("/api/appointments/barber/" + barber, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await response.json();
  
        if (response.ok) {

          dispatch({ type: "SET_APPOINTMENTS", payload: json });
        }

    }else{
      const response = await fetch("/api/appointments", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_APPOINTMENTS", payload: json });
      }
    };

  }

    if (user) {
      fetchAppointments();
    }
  }, [dispatch, user, barber ]);

  return (
    <div className=" grid grid-cols-2 gap-24">
      <div className="appointment col-span-2">
        <h2>Your Appointments</h2>
        {appointments &&
          appointments.map((appointment) => (
            <AppointmentDetails
              appointment={appointment}
              key={appointment._id}
            />
          ))}
      </div>
      {!barber ? (<AppointmentForm />) : (null)}
      
    </div>
  );
};

export default Home;
