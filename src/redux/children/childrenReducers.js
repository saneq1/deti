import {combineReducers} from "redux";
import {childrenActions} from "./childrenActions";
import {getType} from "../utils";

export const childrenReducers = combineReducers({
  data: (state = [], action) => {
    switch (action.type) {
      case getType(childrenActions.list.success):
        return action.payload.rows;
      case getType(childrenActions.list.failure):
        return [];
      default:
        return state;
    }
  },
  total: (state = "", action) => action.type === getType(childrenActions.list.success) ? action.payload.meta.total : state,
  pages: (state = 0, action) => action.type === getType(childrenActions.list.success) ? action.payload.meta.pages : state,
});