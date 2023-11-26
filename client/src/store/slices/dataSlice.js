import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	currentResult: [],
	error: false,
	loading: false,
	respStatus: null
};

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		dataRequested(state) {
			state.loading = true;
			state.respStatus = null;
		},

		dataReceived(state, action) {
			state.data = action.payload;
			state.loading = false;
		},

		dataSent(state, action) {
			state.loading = false;
			state.respStatus = action.payload;
		},

		currentResultReceives(state, action) {
			state.currentResult = action.payload;
			state.loading = false;
		},

		failedRequest(state) {
			state.error = true;
			state.loading = false;
		}
	}
});

// Actions

// get all results

export function fetchingData() {
	return (dispatch) => {
		dispatch(dataRequested());
		fetch("http://localhost:8080/allres")
			.then((resp) =>
				resp.json().then((data) => {
					dispatch(dataReceived(data));
				})
			)
			.catch((error) => {
				dispatch(failedRequest());
				console.error(error.message);
			});
	};
}

// create result

export function createResult(body) {
	console.log(body);
	return async (dispatch) => {
		dispatch(dataRequested());
		const response = await fetch("http://localhost:8080/create", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		dispatch(dataSent(response.status));
		// response.catch((err) => {
		// 	dispatch(failedRequest());
		// 	console.error(err.message);
		// });
	};
}

// delete result

export function deleteResult(id) {
	return () => {
		fetch(`http://localhost:8080/delete/${id}`, {
			method: "DELETE"
		}).catch((err) => {
			console.error(err.message);
		});
	};
}

// update result

export function updateResult(id, body) {
	return (dispatch) => {
		const response = fetch(`http://localhost:8080/update/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		dispatch(dataSent(response.status));
	};
}

// get current result

export function getCurrentResult(id) {
	return (dispatch) => {
		dispatch(dataRequested());
		fetch(`http://localhost:8080/current/${id}`)
			.then((resp) =>
				resp.json().then((data) => {
					dispatch(currentResultReceives(data));
				})
			)
			.catch((err) => {
				dispatch(failedRequest());
				console.error(err.message);
			});
	};
}

// Selectors

export const getResponseStatus = () => {
	return (state) => {
		return state.data.respStatus;
	};
};

export const getRequestStatus = () => {
	return (state) => {
		return state.data.loading;
	};
};

export const getRequestError = () => {
	return (state) => {
		return state.data.error;
	};
};

export const {
	dataRequested,
	dataReceived,
	failedRequest,
	currentResultReceives,
	dataSent
} = dataSlice.actions;

export default dataSlice.reducer;
