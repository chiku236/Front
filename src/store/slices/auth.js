import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      localStorage.clear();
      sessionStorage.removeItem("pos-access");
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {},
});

export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
