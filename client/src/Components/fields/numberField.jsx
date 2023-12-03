import React from "react";

const NumberField = ({ error, setState, state, item }) => {
	const handleChange = (targetValue, targetName) => {
		switch (true) {
			case targetName === "resPhil":
				setState({ ...state, resPhil: targetValue });
				break;

			case targetName === "resCrim":
				setState({ ...state, resCrim: targetValue });
				break;

			case targetName === "resCivil":
				setState({ ...state, resCivil: targetValue });
				break;

			case targetName === "resEng":
				setState({ ...state, resEng: targetValue });
				break;

			default:
				return null;
		}
	};

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
				handleChange(e.target.value, e.target.name);
			}}
			className="modal__input result-input"
		/>
	);
};

export default NumberField;
