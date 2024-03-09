import { useAppointmentsContext } from "../hooks/useAppointmentsContext"
import { useAuthContext } from "../hooks/useAuthContext"

import UpdateModal from "./UpdateModal"

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
        <div className="bg-white rounded m-10 relative shadow-lg p-5 text-gray-800">
            <h4 className="text-xl text-blue-600"><strong>Appointment At: </strong>{dateTime.toLocaleDateString()}</h4>
            <p><strong>Time: </strong>{dateTime.toLocaleTimeString()}</p>
            <p><strong>Appointee Name: </strong>{appointment.appointee}</p>
            <p><strong>Selected Barber: </strong>{appointment.barber}</p>
            {/* <p>{appointment.createdAt}</p> */}
            <span className= "absolute top-5 right-5 cursor-pointer bg-red-600 text-white p-1 rounded-xl" onClick={handleClick}>Cancel</span>
            <UpdateModal/>

        </div>
    )
}

export default AppointmentDetails
