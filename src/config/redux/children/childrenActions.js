import axios from 'axios';

export const childrenActions  = {
  getChildren: url => (dispatch) => {
    dispatch(childrenActions.list.request);
    axios.get(url).then(
        response => response.status === 200 &&
            dispatch(childrenActions.list.success(response.data))
    ).catch(res => dispatch(childrenActions.list.failure(res)));
  },
  list: {
    request: ({type: '@CHILDREN/LIST_REQUEST'}),
    success: data => ({type: '@CHILDREN/LIST_SUCCESS', payload: data}),
    failure: error => ({type: '@CHILDREN/LIST_FAILURE', payload: error})
  }
};