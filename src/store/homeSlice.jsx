import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catagories: [],
  rooms: [],
  loading: true,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    add_catagory(state, action) {
      state.catagories = action.payload;
    },
    add_rooms(state, action) {
      state.rooms = action.payload;
      state.loading = false;
    },
  },
});
export const { add_catagory, add_rooms } = homeSlice.actions;
export default homeSlice.reducer;
