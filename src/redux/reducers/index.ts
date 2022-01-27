import {combineReducers} from 'redux';
import {DetailsReducer} from "./details";



const rootReducer = combineReducers({
    detailsReducer: DetailsReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
