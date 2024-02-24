import { useState } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

import { DatePicker, message, TimePicker } from "antd";

import moment from "moment";

const AppointmentForm = () => {
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

    if(appointee != null){
      fetchUser();
    }
  }, []);
  
  const handleSubmit = async (e) => {
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
      alert("New Appointment Added:", json);
      console.log("New Appointment Added:", json);
      dispatch({ type: "CREATE_APPOINTMENT", payload: json });
    }
  };



  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Appointment</h3>

      <DatePicker
        className="m-2"
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

      <label>Barber:</label>
      <div className="custom-select">
        <select
          id="barbers"
          onChange={(e) => setBarber(e.target.value)}
          value={barber}
          required="required"
        >
          <option>Select Barber</option>
          <option value="Raz">Raz</option>
          <option value="Tav">Tav</option>
          <option value="Ali">Ali</option>
          <option value="Negassi">Negassi</option>
        </select>
      </div>

      <button>Add Appointment</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AppointmentForm;
