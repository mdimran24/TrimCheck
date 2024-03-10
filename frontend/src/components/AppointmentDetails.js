import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";

const AppointmentDetails = ({ appointment }) => {
  const { dispatch } = useAppointmentsContext();

  const { user } = useAuthContext();




  const CheckIfPast = (inputDate) => {
    const currentDate = new Date();
    const givenDate = new Date(inputDate);
    return(givenDate < currentDate);

  };

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("./api/appointments/" + appointment._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_APPOINTMENT", payload: json });
    }
  };
  // const time = appointment.date.getHours() + ':' + appointment.date.getMinute();
  const dateTime = new Date(appointment.date);

  return (
    <div className="bg-white rounded m-10 relative shadow-lg p-5 text-gray-800">
      <h4 className="text-xl text-sky-600">
        <strong>Appointment At: </strong>
        {dateTime.toLocaleDateString()}
      </h4>
      <p>
        <strong>Time: </strong>
        {dateTime.toLocaleTimeString()}
      </p>
      <p>
        <strong>Appointee Name: </strong>
        {appointment.appointee}
      </p>
      <p>
        <strong>Selected Barber: </strong>
        {appointment.barber}
      </p>
      {/* <p>{appointment.createdAt}</p> */}
      <span
        className="absolute top-16 right-5 bg-red-600 text-white font-bold uppercase text-sm px-[70px] py-2 rounded shadow hover:bg-red-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={handleClick}
      >
        {CheckIfPast(dateTime) ? "Remove" : "Cancel"}
      </span>
      <UpdateModal appointment={appointment} />
    </div>
  );
};

export default AppointmentDetails;
