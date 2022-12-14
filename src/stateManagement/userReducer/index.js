import axios from "axios";
import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const login = createAsyncThunk("login", async (params) => {
  const response = await axios.post("/auth/login", params);

  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.body?.ok) {
        state.user = action.payload.body.userInfo;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export { login };

const selectUser = (state) => state.user;

export const userSelector = createSelector([selectUser], (user) => user);

export default userSlice.reducer;
