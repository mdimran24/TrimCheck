import { useState } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext"

const AppointmentForm = () => {
  const { dispatch } = useAppointmentsContext();

  const { user }= useAuthContext()

  const [appointee, setAppointee] = useState("");
  const [date, setDate] = useState("");
  const [barber, setBarber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in')
      return
    }

    const appointment = { appointee, date, barber };

    const response = await fetch('/api/appointments', {
      method: 'POST',
      body: JSON.stringify(appointment),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setAppointee("");
      setDate("");
      setBarber("");
      alert("New Appointment Added:", json);
      console.log("New Appointment Added:", json);
      dispatch({ type: "CREATE_APPOINTMENT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Appointment</h3>

      <label>Appointee Title:</label>
      <input
        type="text"
        onChange={(e) => setAppointee(e.target.value)}
        value={appointee}
      />

      <label>Date & Time:</label>
      <input
        type="datetime-local"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <label>Barber:</label>
      <div className="custom-select">
      <select id="barbers" onChange={(e) => setBarber(e.target.value)}
        value={barber}>
        <option value="Raz">Raz</option>
        <option value="Tav">Tav</option>
        <option value="Ali">Ali</option>
        <option value="negassi">Negassi</option>
      </select>
      </div>

      <button>Add Appointment</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AppointmentForm;
