import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localStorage from "../../utils/localStorage";
import auth from "../../services/auth";

const initialState = () => {
  if (!localStorage.read('alkybank')) {
    return {
      logged: false,
      loading: false,
      user: null,
      token: null
    }
  }
  const data = localStorage.read('alkybank')

  return {
    logged: true,
    loading: false,
    user: data.user,
    token: data.token
  }
}

export const authLogin = createAsyncThunk('login', ({ email, password }, thunkAPI) =>
  auth.login(email, password, thunkAPI)
)

export const authSlice = createSlice({
  name: 'user',
  initialState: initialState(),
  reducers: {
    logout: (state) => ({
      ...state,
      logged: false,
      loading: false,
      user: null,
      token: null,
    }),
     updateProfile: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        ...action.payload,
      },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      // console.log(action.payload)
      if (action.payload?.body?.ok) {
        state.user = action.payload.body.userInfo;
      }
    });
  }
})

const { logout } = authSlice.actions

export const { updateProfile } = authSlice.actions

export const authLogout = () => (dispatch) => {
  auth.logout()
  dispatch(logout())
}

export default authSlice.reducer