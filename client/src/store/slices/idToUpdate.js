import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: null
};

const idToUpdate = createSlice({
	name: "idToUpdate",
	initialState,
	reducers: {
		getIdToUpdate(state, action) {
			state.id = action.payload;
		}
	}
});

// Actions

export const putId = (id) => {
	return (dispatch) => {
		dispatch(getIdToUpdate(id));
	};
};

// Selectors

export const getId = () => {
	return (state) => {
		return state.idToUpdate.id;
	};
};

export const { getIdToUpdate } = idToUpdate.actions;

export default idToUpdate.reducer;
