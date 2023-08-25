

const AppointmentDetails= ({ appointment }) => {
    return (
        <div className="appointment-details">
            <h4><strong>Appointee: </strong>{appointment.appointee}</h4>
            <p><strong>Date: </strong>{appointment.date}</p>
            <p><strong>Barber: </strong>{appointment.barber}</p>
            <p>{appointment.createdAt}</p>
        </div>
    )
}

export default AppointmentDetails