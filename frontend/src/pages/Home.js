import { useEffect } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";

import AppointmentDetails from '../components/AppointmentDetails'
import AppointmentForm from "../components/AppointmentForm";


const Home = () => {
  const {appointments, dispatch} = useAppointmentsContext()
  
  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("/api/appointments");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_APPOINTMENTS', payload: json})
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="home">
      <div className="appointment">
        {appointments && appointments.map(appointment => (
          <AppointmentDetails appointment={appointment} key={appointment._id} />
        ))}
      </div>
      <AppointmentForm />
    </div>
  );
};

export default Home;
