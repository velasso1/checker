import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
	name: "Id",
	initialState: {
		id: null
	},
	reducers: {
		getId(state, action) {
			state.id = action.payload;
		},

		removeId(state) {
			state.id = null;
		}
	}
});

export const { getId, removeId } = idSlice.actions;

export default idSlice.reducer;
