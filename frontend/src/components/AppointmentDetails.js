import { useAppointmentsContext } from "../hooks/useAppointmentsContext"

const AppointmentDetails = ({ appointment }) => {
    const { dispatch } = useAppointmentsContext()
    
    const handleClick = async () => {
        const response = await fetch('./api/appointments/' + appointment._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_APPOINTMENT', payload: json})
        }
    }
    return (
        <div className="appointment-details">
            <h4><strong>Appointee: </strong>{appointment.appointee}</h4>
            <p><strong>Date: </strong>{appointment.date}</p>
            <p><strong>Barber: </strong>{appointment.barber}</p>
            <p>{appointment.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default AppointmentDetails