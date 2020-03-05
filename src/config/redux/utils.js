// calls action creator and get action type, not working with thunks
export const getActionType = (actionCreator) => actionCreator().type;