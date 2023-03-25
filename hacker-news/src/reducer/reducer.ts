// import { StateType } from '../context/context';
import { ActionTypes } from '../context/context';
import { initialState } from '../context/context';
import { REDUCER_ACTION_TYPE } from '../context/context';
export const reducer = (state: typeof initialState, action: ActionTypes) => {
  if (action.type === REDUCER_ACTION_TYPE.SET_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === REDUCER_ACTION_TYPE.SET_NEWS) {
    const { hits, nbHits, nbPages } = action.payload;
    return {
      ...state,
      hits,
      numberOfHits: nbHits,
      numberOfPages: nbPages,
      isLoading: false,
    };
  }
  if (action.type === REDUCER_ACTION_TYPE.SET_QUERY) {
    const { val } = action.payload;
    return { ...state, query: val };
  }
  if (action.type === REDUCER_ACTION_TYPE.HANDLE_PAGE) {
    const { val } = action.payload;
    const { page } = state;
    let newPage;
    if (val === 'inc') {
      newPage = page + 1;
      if (newPage > state.numberOfPages - 1) {
        newPage = 0;
      }
    }
    if (val === 'dec') {
      newPage = page - 1;
      if (newPage < 0) {
        newPage = state.numberOfPages - 1;
      }
    }
    return { ...state, page: newPage };
  }
  if (REDUCER_ACTION_TYPE.REMOVE_NEWS) {
    return {
      ...state,
      hits: state.hits.filter(
        (single) => single.objectID !== action.payload.id
      ),
    };
  }
  throw new Error(`The action type (${action.type})  is not found`);
};
