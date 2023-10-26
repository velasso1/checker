/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentResult } from "../store/slices/dataSlice";
import { getId } from "../store/slices/idSlice";

const DataLoader = (Children) => {
	return function () {
		const [state, setState] = useState("");
		const [error, setError] = useState(false);
		const dispatch = useDispatch();

		const getUserData = () => {
			dispatch(getCurrentResult(state));
			dispatch(getId(state));
		};

		const putData = (e) => {
			state.length ? getUserData() : setError(true);
		};

		return (
			<Children
				state={state}
				error={error}
				setState={setState}
				putData={putData}
			/>
		);
	};
};

export default DataLoader;
