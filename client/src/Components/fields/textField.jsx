import React from "react";

const TextField = ({ error, setState, state, item }) => {
	const handleChange = (targetValue, targetName) => {
		switch (true) {
			case targetName === "firstName":
				setState({ ...state, firstName: targetValue });
				break;

			case targetName === "secondName":
				setState({ ...state, secondName: targetValue });
				break;

			case targetName === "lastName":
				setState({ ...state, lastName: targetValue });
				break;

			default:
				return null;
		}
	};

	return (
		<input
			type="text"
			value={state[`${item.value}`]}
			name={item.name}
			style={{
				borderColor:
					error && !state[`${item.value}`].length ? "#a61717" : "#bbbbbb"
			}}
			onChange={(e) => {
				handleChange(e.target.value, e.target.name);
			}}
			className="modal__input"
		/>
	);
};

export default TextField;
