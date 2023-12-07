import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOption, addOption } from "../../store/slices/selectSlice";
import config from "../../auxiliary.json";

const ModalSelect = ({ state, setState, error, deleteField, id }) => {
	const selectedOptions = useSelector((state) => state.select.options);
	const [selectValue, setSelectValue] = useState("");
	const [disableInput, setDisable] = useState(true);
	const dispatch = useDispatch();
	const options = useSelector((state) => state.select.options);

	const hasValue =
		selectValue && selectValue !== "default"
			? !state[`${selectValue}`].length
			: true;

	const handleChange = (targetValue) => {
		switch (true) {
			case selectValue === "resPhil":
				setState({ ...state, resPhil: targetValue });
				break;

			case selectValue === "resCrim":
				setState({ ...state, resCrim: targetValue });
				break;

			case selectValue === "resCivil":
				setState({ ...state, resCivil: targetValue });
				break;

			case selectValue === "resEng":
				setState({ ...state, resEng: targetValue });
				break;

			default:
				return null;
		}
	};

	const switchControl = (e) => {
		if (options.includes(selectValue)) {
			dispatch(removeOption(selectValue));
		}
		setSelectValue(e.target.value);
		setDisable(false);
		dispatch(addOption(e.target.value));
	};

	return (
		<>
			<div className="modal__results-current-result">
				<select
					defaultValue={"default"}
					className="modal__results-select"
					name="select-labels"
					id={"select-labels"}
					onChange={(e) => {
						switchControl(e);
					}}
				>
					{config.options.map((item, index) => {
						return (
							<option
								key={index}
								disabled={index === 0 || selectedOptions.includes(item.value)}
								value={item.value}
								id={item.id}
							>
								{item.text}
							</option>
						);
					})}
				</select>
				<input
					disabled={disableInput}
					style={{
						borderColor: error && hasValue ? "#a61717" : "#bbbbbb"
					}}
					className="modal__input result-input"
					placeholder={
						disableInput ? "Выберите предмет" : "Введите количетсво баллов"
					}
					value={state[`${selectValue}`] || ""}
					onChange={(e) => handleChange(e.target.value)}
				/>
				<button
					// disabled={id === 0}
					onClick={() => {
						deleteField(id, selectValue);
					}}
					className="modal__delete-button"
				>
					&#10006;
				</button>
			</div>
		</>
	);
};

export default ModalSelect;
