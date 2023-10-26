import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: ""
};

const search = createSlice({
	name: "search",
	initialState,
	reducers: {
		updateSearchValue(state, action) {
			state.value = action.payload;
		}
	}
});

// Actions

export const updateValue = (value) => {
	return (dispatch) => {
		dispatch(updateSearchValue(value));
	};
};

// Selectors

export function getSearch() {
	return (state) => {
		return state.search.value;
	};
}

const { updateSearchValue } = search.actions;

export default search.reducer;
