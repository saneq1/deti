import {combineReducers} from "redux";
import {getType} from "../utils";
import {filtersActions} from "./filtersActions";

export const filtersReducer = combineReducers({
  genders: (state = [], action) => action.type === getType(filtersActions.genders.success) ? action.payload : state,
});