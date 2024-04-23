import { ACTIONS } from './actions';
import {
  closeToast,
  fetchError,
  fetchStart,
  fetchSuccess,
  getUser,
  login,
  logout,
  openToast,
  setSocket,
  setUser,
  updateNotifications,
  updateOnlineUsers,
} from './controller';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return fetchStart(state);
    case ACTIONS.FETCH_SUCCESS:
      return fetchSuccess(state);
    case ACTIONS.FETCH_ERROR:
      return fetchError(state, action.payload);
    case ACTIONS.LOGIN:
      return login(state, action.payload);
    case ACTIONS.LOGOUT:
      return logout(state);
    case ACTIONS.CLOSE_TOAST:
      return closeToast(state);
    case ACTIONS.OPEN_TOAST:
      return openToast(state, action.payload);
    case ACTIONS.GET_USER:
      return getUser(state);
    case ACTIONS.SET_USER:
      return setUser(state, action.payload);
    case ACTIONS.SET_SOCKET:
      return setSocket(state, action.payload);
    case ACTIONS.UPDATE_NOTIFICATIONS:
      return updateNotifications(state, action.payload);
    case ACTIONS.UPDATE_ONLINE_USERS:
      return updateOnlineUsers(state, action.payload);
    default:
      throw new Error('unhandled action type!!! ' + action.type);
  }
};
