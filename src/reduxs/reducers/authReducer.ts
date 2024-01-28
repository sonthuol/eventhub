import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  id: string;
  email: string;
  accesstoken: string;
  isRemember: boolean;
}

const initialState: AuthState = {
  id: '',
  email: '',
  accesstoken: '',
  isRemember: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authDate: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.authDate = action.payload;
    },

    removeAuth: (state, _action) => {
      state.authDate = initialState;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {addAuth, removeAuth} = authSlice.actions;

export const authSelector = (state: any) => state.authReducer.authDate;
