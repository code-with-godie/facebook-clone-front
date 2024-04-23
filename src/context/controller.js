export const setSocket = (state, payload) => {
  return { ...state, socket: payload };
};
export const updateOnlineUsers = (state, payload) => {
  return { ...state, onlineUsers: payload };
};
export const updateNotifications = (state, payload) => {
  return { ...state, notifications: payload };
};
export const login = (state, { token, user }) => {
  return { ...state, user, token };
};
export const logout = state => {
  localStorage.setItem('facebook-godie-user', JSON.stringify(null));
  localStorage.setItem('facebook-godie-token', JSON.stringify(null));
  return { ...state, user: null, token: null };
};
export const getUser = state => {
  const user = JSON.parse(localStorage.getItem('facebook-godie-user'));
  const token = JSON.parse(localStorage.getItem('facebook-godie-token'));
  return { ...state, user, token, initialAppLoad: false };
};
export const setUser = (state, { user, token }) => {
  localStorage.setItem('facebook-godie-user', JSON.stringify(user));
  localStorage.setItem('facebook-godie-token', JSON.stringify(token));
  return { ...state, user, token };
};
export const sendMessage = (state, payload) => {
  try {
  } catch (error) {}
  return state;
};
export const deleteMessage = (state, payload) => {
  try {
  } catch (error) {}
  return state;
};
export const getMessages = state => {
  try {
  } catch (error) {}
  return state;
};
export const updateMessage = (state, payload) => {
  try {
  } catch (error) {}
  return state;
};

export const closeToast = state => {
  return { ...state, showToast: false, toastMessege: '' };
};
export const openToast = (state, payload) => {
  return { ...state, showToast: true, toastMessege: payload };
};
export const fetchStart = state => {
  return { ...state, loading: true };
};

export const fetchError = (state, payload) => {
  console.log(payload);
  return { ...state, loading: false, error: payload };
};
export const fetchSuccess = state => {
  return { ...state, loading: false, error: null };
};
