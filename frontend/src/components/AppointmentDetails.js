import { useAppointmentsContext } from "../hooks/useAppointmentsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const AppointmentDetails = ({ appointment }) => {
    const { dispatch } = useAppointmentsContext()

    const { user } = useAuthContext()
    
    
    const handleClick = async () => {
        if(!user){
            return
          }
        const response = await fetch('./api/appointments/' + appointment._id, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`,
            }
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_APPOINTMENT', payload: json})
        }



    }
    // const time = appointment.date.getHours() + ':' + appointment.date.getMinute();
    const dateTime  = new Date(appointment.date)


    return (
        <div className="appointment-details">
            <h4><strong>Appointment At: </strong>{dateTime.toLocaleDateString()}</h4>
            <p><strong>Time: </strong>{dateTime.toLocaleTimeString()}</p>
            <p><strong>Appointee Name: </strong>{appointment.appointee}</p>
            <p><strong>Selected Barber: </strong>{appointment.barber}</p>
            {/* <p>{appointment.createdAt}</p> */}
            <span onClick={handleClick}>Cancel</span>
        </div>
    )
}

export default AppointmentDetails
