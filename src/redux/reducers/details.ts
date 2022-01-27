import {DetailsAction} from "../actions/details";

export interface DetailState {
    movieDetails: any;
}
const initialState: DetailState =
{
    movieDetails: []
}

const DetailsReducer = (
    state: DetailState = initialState,
    action: DetailsAction,
) => {
    switch (action.type) {

        case "GET_MOVIES":
            return{...state, movieDetails: action.movies};
        default:
            return state;
    }
}

export {DetailsReducer};
