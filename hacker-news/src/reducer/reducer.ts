// import { StateType } from '../context/context';
import { ActionTypes } from '../context/context';
import { initialState } from '../context/context';
import { REDUCER_ACTION_TYPE } from '../context/context';
export const reducer = (state: typeof initialState, action: ActionTypes) => {
  if (action.type === REDUCER_ACTION_TYPE.SET_LOADING) {
    return { ...state, isLoading: true };
  }
};
