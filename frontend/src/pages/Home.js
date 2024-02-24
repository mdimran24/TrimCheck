import React, { useEffect, useState } from "react";

import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import AppointmentDetails from "../components/AppointmentDetails";
import AppointmentForm from "../components/AppointmentForm";



const Home = () => {
  const { appointments, dispatch } = useAppointmentsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("/api/appointments", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_APPOINTMENTS", payload: json });
      }
    };

    if (user) {
      fetchAppointments();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="appointment">
        {appointments &&
          appointments.map((appointment) => (
            <AppointmentDetails
              appointment={appointment}
              key={appointment._id}
            />
          ))}
      </div>
      <AppointmentForm />

    </div>
  );
};

export default Home;
