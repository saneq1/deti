import axios from 'axios';

const actions = {
  listGenders: () => (dispatch) => {
    dispatch(actions.genders.request());
    axios.get('http://deti.dev.eit.edu.ru/api/gender').then(
        (response) => {
          if (response.status === 200) {
            dispatch(actions.genders.success(response.data))
          } else {
            throw response.statusText
          }
        }
    ).catch(error => dispatch(actions.genders.failure(error)))
  },
  genders: {
    request: () => ({type: '@FILTERS/GENDERS_REQUEST'}),
    success: data => ({type: '@FILTERS/GENDERS_SUCCESS', payload: data}),
    failure: error => ({type: '@FILTERS/GENDERS_FAILURE', payload: error})
  }
};

export {actions as filtersActions}