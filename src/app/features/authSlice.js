import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localStorage from "../../utils/localStorage";
import auth from "../../services/auth";

const initialState = () => {
  const data = localStorage.read('alkybank')
  // const data = localStorage.write('alkybank', {
  //   "id": 2,
  //   "firstName": "Deon",
  //   "lastName": "Okuneva",
  //   "email": "Deon_Okuneva7@hotmail.com",
  //   "password": "$2a$08$0uBuXaPV03x5Sfnjxzbh8OxEQ1ZbMf1q7HvZdg8ogfwJ3LyCMLxdK",
  //   "avatar": null,
  //   "roleId": 1,
  //   "createdAt": "2022-12-22T02:19:23.000Z",
  //   "updatedAt": "2022-12-22T03:57:30.000Z",
  // }
  //   )

  if (!data) {
    return {
      logged: false,
      loading: false,
      user: null,
      token: null
    }
  }

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
        state.user = action.payload.body.user;
        state.logged = true
        state.token = action.payload.body.token
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