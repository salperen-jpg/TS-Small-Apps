import { useContext, createContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducer/reducer';
import { API_ENDPOINT } from '../utils/constants';
import axios from 'axios';
type NewContextType = {
  hits: [];
  query: string;
  handleQuery: (v: string) => void;
  isLoading: boolean;
  page: number;
  numberOfPages: number;
  handlePage: (a: string) => void;
  removeFromUI: (id: string) => void;
};

interface Children {
  children: React.ReactNode;
}

export const enum REDUCER_ACTION_TYPE {
  SET_LOADING = 'SET_LOADING',
  SET_NEWS = 'SET_NEWS',
  SET_QUERY = 'SET_QUERY',
  HANDLE_PAGE = 'HANDLE_PAGE',
  REMOVE_NEWS = 'REMOVE_NEWS',
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
  numberOfPages: 0,
};

const NewsContext = createContext<NewContextType>({
  hits: [],
  query: '',
  isLoading: false,
  page: 0,
  numberOfPages: 0,
  handleQuery: () => {},
  handlePage: () => {},
  removeFromUI: (id: string) => {},
});

export const AppProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (query: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LOADING });
    try {
      const { data } = await axios(
        `${API_ENDPOINT}search?query=${query}&page=${state.page}`
      );
      const { hits, nbHits, nbPages } = data;
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_NEWS,
        payload: { hits, nbHits, nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuery = (val: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_QUERY, payload: { val } });
  };

  const handlePage = (val: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.HANDLE_PAGE, payload: { val } });
  };

  const removeFromUI = (id: string) => {
    dispatch({ type: REDUCER_ACTION_TYPE.REMOVE_NEWS, payload: { id } });
  };

  useEffect(() => {
    fetchStories(state.query);
  }, [state.query, state.page]);

  return (
    <NewsContext.Provider
      value={{ ...state, handleQuery, handlePage, removeFromUI }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);
