import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { ACTIONS } from './actions';
import FirstLoading from '../components/loading/FirstLoading';

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const initialProps = {
    user: null,
    initialAppLoad: true,
    loading: false,
    toastMessege: '',
    showToast: false,
    socket: null,
    onlineUsers: [],
    notifications: [],
  };
  const [state, dispatch] = useReducer(reducer, initialProps);
  useEffect(() => {
    getUser();
  }, []);

  //user interface controllers
  const handleToast = () => {
    dispatch({ type: ACTIONS.CLOSE_TOAST });
  };
  const openToast = payload => {
    console.log('opening toast');
    dispatch({ type: ACTIONS.OPEN_TOAST, payload });
  };
  const getUser = async () => {
    dispatch({ type: ACTIONS.GET_USER });
  };
  const setSocket = async payload => {
    dispatch({ type: ACTIONS.SET_SOCKET, payload });
  };
  const updateOnlineUsers = async payload => {
    dispatch({ type: ACTIONS.UPDATE_ONLINE_USERS, payload });
  };
  const updateNotifications = async payload => {
    dispatch({ type: ACTIONS.UPDATE_NOTIFICATIONS, payload });
  };
  const setUser = async payload => {
    dispatch({ type: ACTIONS.SET_USER, payload });
  };
  const login = async payload => {
    dispatch({ type: ACTIONS.LOGIN, payload });
  };
  const logout = async () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const share = {
    login,
    handleToast,
    openToast,
    setUser,
    setSocket,
    updateOnlineUsers,
    updateNotifications,
    logout,
  };
  return (
    <AppContext.Provider value={{ ...state, ...share }}>
      {state.initialAppLoad ? <FirstLoading /> : children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
