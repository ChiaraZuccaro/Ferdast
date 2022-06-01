import { createContext, useContext, useReducer } from "react";
import vacationReducer from "./vacationReducer";
import {
    FETCH_ALL_VACATION_ERROR,
    FETCH_ALL_VACATION_REQUEST,
    FETCH_ALL_VACATION_SUCCESS
} from "./constants"
import axios from "axios";

const defaultState = {
    loading: false,
    error: null,
    vacation: [],
    totalPrice: 2,
    cart:["Palermo", "milano"]
}

const VacationContext = createContext(defaultState);

export const useVacationContext = () => useContext(VacationContext);

export default ({children}) => {
    const [state, dispatch] = useReducer(vacationReducer, defaultState)

    const fetchAll = async (par) => {
        dispatch({type: FETCH_ALL_VACATION_REQUEST})
        try {
            const {data: vacation} = await axios.get(`https://sandbox.musement.com/api/v3${par}`)
            dispatch({type: FETCH_ALL_VACATION_SUCCESS, payload: vacation})
        } catch (e) {
            dispatch({type: FETCH_ALL_VACATION_ERROR, payload: e})
        }
    }


    const value = {state, fetchAll}

    return (
        <VacationContext.Provider value={value}>
            {children}
        </VacationContext.Provider>
    )
}