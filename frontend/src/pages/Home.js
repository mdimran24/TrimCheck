import React, { useEffect, useState } from "react";

import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import AppointmentDetails from "../components/AppointmentDetails";
import AppointmentForm from "../components/AppointmentForm";
import PricesDetails from "../components/PricesDetails";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const Home = () => {
  const { appointments, dispatch } = useAppointmentsContext();
  const [ allAppointments, setAllAppointments] = useState();
  const { user } = useAuthContext();
  const [barber, setBarber] = useState("");
  const [prices, setPrices] = useState();
  const [selectedBarber, setSelectedBarber] = useState("");

  const localizer = momentLocalizer(moment);
  useEffect(() => {
    const fetchPrices = async () => {
      const response = await fetch("/api/prices/");
      const json = await response.json();

      if (response.ok) {
        setPrices(json);
      }
    };

    const fetchUser = async () => {
      const response = await fetch("/api/user/" + user.email);
      const json = await response.json(barber);

      if (response.ok) {
        setBarber(json.barber);
      }
    };

    const fetchAllAppointments = async () =>{
      const response = await fetch("/api/appointments/all", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        setAllAppointments(json)
      }
    }

    const fetchAppointments = async () => {
      if (barber) {
        const response = await fetch("/api/appointments/barber/" + barber, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_APPOINTMENTS", payload: json });
        }
      } else {
        const response = await fetch("/api/appointments", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_APPOINTMENTS", payload: json });
        }
      }
    };

    if (user) {
      fetchAppointments();
      fetchUser();
      fetchPrices();
      fetchAllAppointments();
    }
  }, [dispatch, user, barber]);


  let filteredList = []
  const events = [];

    if(allAppointments){
      if(selectedBarber){
          allAppointments.forEach(function(appointment){
            if(appointment.barber == selectedBarber && !filteredList.includes(appointment)){
              filteredList.push(appointment)
            }
          })
        }else{
          filteredList = allAppointments
        }
    }



  // console.log(filteredList)
  filteredList &&
    filteredList.map((appointment) => {
      events.push({
        id: appointment._id,
        start: new Date(appointment.date),
        end: new Date(moment(appointment.date).add(30, "m").toDate()),
        title: appointment.barber + " Booked",
        barber: appointment.barber,
      });
    });




  return (
    <>
      
      <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-2 mt-24 m-4">
        <div className="appointment col-span-2">
          <div className="lg:h-[65vh] hidden lg:block">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="week"
            showMultiDayTimes
            step={30}
            min={new Date(0, 0, 0, 9, 0, 0)}
            max={new Date(0, 0, 0, 19, 0, 0)}
          />
          <div className="m-1 flex justify-center">
          <button className= " bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSelectedBarber("Ali")}>Ali</button>
          <button className= "bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSelectedBarber("Raz")}>Raz</button>
          <button className= " bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSelectedBarber("Negassi")}>Negassi</button>
          <button className= " bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSelectedBarber("Tav")}>Tav</button>
          <button className= " bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSelectedBarber("")}>All</button>
          </div>

          </div>
          <h2 className="text-xl font-bold mt-16">Your Appointments</h2>
          {appointments &&
            appointments.map((appointment) => (
              <AppointmentDetails
                appointment={appointment}
                key={appointment._id}
              />
            ))}
        </div>
        <div>
          {!barber ? <AppointmentForm /> : null}
          {prices ? <PricesDetails prices={prices[0]} barber={barber} /> : null}
        </div>
        
      </div>
    </>
  );
};

export default Home;
