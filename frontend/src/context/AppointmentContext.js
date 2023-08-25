import { createContext, useReducer } from "react";

export const AppointmentContext = createContext()

export const appointmentReducer = (state, action) => {
    switch(action.type) {
        case 'SET_APPOINTMENTS':
            return{
                appointments: action.payload
            }
        case 'CREATE_APPOINTMENT':
            return {
                appointments: [action.payload, ...state.appointments]
            }
        default:
            return state
    }
}

export const AppointmentContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appointmentReducer, {
        appointments: null
    })

    
    return(
        <AppointmentContext.Provider value = {{...state, dispatch}}>
            { children }
        </AppointmentContext.Provider>

    )
}