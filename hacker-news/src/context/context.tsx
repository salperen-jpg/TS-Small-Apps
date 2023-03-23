import { useContext, createContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducer/reducer';
import { API_ENDPOINT } from '../utils/constants';
import axios from 'axios';
interface NewContextType {}

interface Children {
  children: React.ReactNode;
}

// export interface StateType {
//   query: string;
//   hits: [];
//   isLoading: boolean;
//   page: number;
// }

export const enum REDUCER_ACTION_TYPE {
  SET_LOADING,
  SET_NEWS,
}

export interface ActionTypes {
  type: REDUCER_ACTION_TYPE;
  payload?: object;
}

export const initialState = {
  query: 'React',
  hits: [],
  numberOfHits: 0,
  isLoading: false,
  page: 0,
};

const NewsContext = createContext<NewContextType>({});

export const AppProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async () => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LOADING });
    try {
      const { data } = await axios(
        `${API_ENDPOINT}search?query=${state.query}`
      );
      const { hits, nbHits, nbPages } = data;
      dispatch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return <NewsContext.Provider value='hi'>{children}</NewsContext.Provider>;
};

export const useNewsContext = () => useContext(NewsContext);
