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
    const time = dateTime.getHours() + ':' + dateTime.getMinutes();
    const date = dateTime.getDate() + '/' + dateTime.getMonth() + '/' + dateTime.getFullYear();

    return (
        <div className="appointment-details">
            <h4><strong>Appointee: </strong>{appointment.appointee}</h4>
            <p><strong>Date: </strong>{date}</p>
            <p><strong>Time: </strong>{time}</p>
            <p><strong>Barber: </strong>{appointment.barber}</p>
            {/* <p>{appointment.createdAt}</p> */}
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default AppointmentDetails
