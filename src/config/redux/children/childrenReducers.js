import {combineReducers} from "redux";
import {childrenActions} from "./childrenActions";
import {getActionType} from "../utils";

export const childrenReducers = combineReducers({
  isLoading: (state = false, action) => {
    switch (action.type) {
      case getActionType(childrenActions.list.request):
        return true;
      case getActionType(childrenActions.list.failure):
      case getActionType(childrenActions.list.success):
        return false;
    }
  },
  data: (state = [], action) => {
    switch (action.type) {
      case getActionType(childrenActions.list.success):
        return action.payload;
      case getActionType(childrenActions.list.failure):
        return [];
      default:
        return state;
    }
  },
});