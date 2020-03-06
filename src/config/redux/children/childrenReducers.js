import {combineReducers} from "redux";
import {childrenActions} from "./childrenActions";
import {getType} from "../utils";

export const childrenReducers = combineReducers({
  isLoading: (state = false, action) => {
    switch (action.type) {
      case getType(childrenActions.list.request):
        return true;
      case getType(childrenActions.list.failure):
      case getType(childrenActions.list.success):
        return false;
      default:
        return state
    }
  },
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