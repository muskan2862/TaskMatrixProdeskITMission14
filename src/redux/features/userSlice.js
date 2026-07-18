import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  name: "",
  email: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },

    clearUser: (state) => {
      state.uid = "";
      state.name = "";
      state.email = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;