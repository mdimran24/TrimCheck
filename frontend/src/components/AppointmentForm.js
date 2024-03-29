import { useState } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

import { DatePicker, message, TimePicker } from "antd";

import moment from "moment";

const AppointmentForm = ({ appointment }) => {
  // if(appointment){
  //   console.log(appointment.appointee)
  // }
  const { dispatch } = useAppointmentsContext();

  const { user } = useAuthContext();

  const [appointee, setAppointee] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [barber, setBarber] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user/' + user.email)
      const json = await response.json()

      if (response.ok) {
        setAppointee(json.firstName + " " + json.lastName)
      }
    }
    if(user){
      fetchUser();
    }
  }, []);


  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    if (barber == "") {
      setError("Select A Barber");
      return;
    }
    
   
    const appointment = { appointee, date, barber };

    const response = await fetch("/api/appointments", {
      method: "POST",
      body: JSON.stringify(appointment),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setAppointee("");
      setDate("");
      setTime("")
      setBarber("");
      alert("New Appointment Added:", json.date);
      console.log("New Appointment Added:", json);
      dispatch({ type: "CREATE_APPOINTMENT", payload: json });
      window.location.reload();
    }
  };

  const handleUpdateSubmit = async () => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    if (barber == "") {
      setError("Select A Barber");
      return;
    }

    const updatedAppointment = { appointee, date, barber };
    
    const response = await fetch('./api/appointments/' + appointment._id, {
        method: 'PATCH',
        body: JSON.stringify(updatedAppointment),
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user.token}`,
        }
    })
    const json = await response.json()

    if (response.ok){
        dispatch({type: 'UPDATE_APPOINTMENT', payload: json})
    }
  }







  return (
    <form className="mt-2 m-auto p-4 bg-white rounded min-w-[500px]" onSubmit={appointment ? handleUpdateSubmit : handleCreateSubmit}>
      <h3 className="font-bold text-xl">Book Appointment</h3>

      <DatePicker
        className="mt-2"
        format="DD-MM-YYYY"
        value={date}
        onChange={(date) => {
          setDate(date)
          if(time != ""){
            const timeSlot = (moment(time.toISOString()).format("hh:mm:ss"))    
            const day = (moment(date.toISOString()).format("YYYY-MM-DD"))
  
            const dateTime = moment(day + ' ' + timeSlot, 'YYYY-MM-DD HH:mm');
            setDate(dateTime)
            }
  
          
        }}
      />
      <TimePicker
        format="HH mm"
        className="m-2"
        minuteStep={30}
        value={time}
        onChange = {(time) => {
          setTime(time)
          if(date != ""){
          const timeSlot = (moment(time.toISOString()).format("hh:mm:ss"))    
          const day = (moment(date.toISOString()).format("YYYY-MM-DD"))

          const dateTime = moment(day + ' ' + timeSlot, 'YYYY-MM-DD HH:mm');
          setDate(dateTime)
          }

        }}
      />

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
          <option value="Raz">Raz</option>
          <option value="Tav">Tav</option>
          <option value="Ali">Ali</option>
          <option value="Negassi">Negassi</option>
        </select>
      </div>


      <button className="mt-4 bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Book Appointment</button>
      {error && <div className=" p-3 bg-red-100 border-b-2 border-b-red-400 text-rose-600 mt-5 m-0">{error}</div>}
    </form>
  );
};

export default AppointmentForm;
