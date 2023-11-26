import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	options: []
};

const selectSlice = createSlice({
	name: "select",
	initialState,
	reducers: {
		addOption(state, action) {
			state.options = [...state.options, action.payload];
		},

		removeOption(state, action) {
			state.options = state.options.filter((item) => item !== action.payload);
		}
	}
});

export const { addOption, removeOption } = selectSlice.actions;

export default selectSlice.reducer;
