import { useState } from 'react'
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";

const AppointmentForm = () => {
  const { dispatch } = useAppointmentsContext()
  const [appointee, setAppointee] = useState('')
  const [date, setDate] = useState('')
  const [barber, setBarber] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const appointment = {appointee, date, barber}
    
    const response = await fetch('/api/appointments', {
      method: 'POST',
      body: JSON.stringify(appointment),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setAppointee('')
      setDate('')
      setBarber('')
      console.log('New Appointment Added:', json)
      dispatch({type: 'CREATE_APPOINTMENT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Appointment</h3>

      <label>Appointee Title:</label>
      <input 
        type="text" 
        onChange={(e) => setAppointee(e.target.value)} 
        value={appointee}
      />

      <label>Date:</label>
      <input 
        type="date" 
        onChange={(e) => setDate(e.target.value)} 
        value={date}
      />

      <label>Barber:</label>
      <input 
        type="text" 
        onChange={(e) => setBarber(e.target.value)} 
        value={barber} 
      />

      <button>Add Appointment</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default AppointmentForm