import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  name: string;
  email: string;
};


const initialState: InitialState = {
  name: "",
  email: "",
};


export const userAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNameState: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setNameState } = userAuth.actions;


export default userAuth.reducer;