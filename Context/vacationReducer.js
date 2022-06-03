import {
    FETCH_ALL_VACATION_ERROR,
    FETCH_ALL_VACATION_REQUEST,
    FETCH_ALL_VACATION_SUCCESS,
    FETCH_ALL_CITY_ERROR,
    FETCH_ALL_CITY_REQUEST,
    FETCH_ALL_CITY_SUCCESS
} from "./constants";

export default (state = {}, action) => {
    switch (action.type){
        case FETCH_ALL_VACATION_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_ALL_VACATION_SUCCESS:
            return {
                ...state,
                loading: false,
                vacation: action.payload
            };

        case FETCH_ALL_VACATION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_ALL_CITY_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_ALL_CITY_SUCCESS:
            return {
                ...state,
                loading: false,
                city: action.payload
            };

        case FETCH_ALL_CITY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default :
            return state

    }
}