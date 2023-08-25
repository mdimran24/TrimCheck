import { AppointmentContext } from "../context/AppointmentContext";
import { useContext } from "react";

export const useAppointmentsContext = () => {
    const context = useContext(AppointmentContext)

    if (!context){
        throw Error('useAppointmentContext must be use inside an AppointmentContextProvider')
    }

    return context
}