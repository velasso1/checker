import React from "react";

const TextField = ({ error, setState, state, item }) => {
	return (
		<input
			type="number"
			value={state[`${item.value}`]}
			name={item.name}
			style={{
				borderColor:
					error && !state[`${item.value}`].length ? "#a61717" : "#bbbbbb"
			}}
			onChange={(e) => {
				setState({ ...state, personId: e.target.value });
			}}
			className="modal__input"
		/>
	);
};

export default TextField;
