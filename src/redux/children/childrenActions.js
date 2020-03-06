import axios from 'axios';

export const childrenActions = {
  getChildren: (params) => (dispatch) => {
    dispatch(childrenActions.list.request());
    axios.get('http://deti.dev.eit.edu.ru/api/children', {params}).then(response => {
      if (response.status === 200) {
        dispatch(childrenActions.list.success(response.data))
      } else {
        throw response.statusText
      }
    }).catch(res => dispatch(childrenActions.list.failure(res)));
  },
  list: {
    request: () => ({type: '@CHILDREN/LIST_REQUEST'}),
    success: (data) => ({type: '@CHILDREN/LIST_SUCCESS', payload: data}),
    failure: error => ({type: '@CHILDREN/LIST_FAILURE', payload: error})
  }
};