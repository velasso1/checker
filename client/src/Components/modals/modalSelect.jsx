import React, { useState } from "react";

const ModalSelect = ({ state, setState, error }) => {
	const [vision, setVision] = useState(true);
	const [selectValue, setSelectValue] = useState("default");
	const hasValue =
		selectValue && selectValue !== "default"
			? !state[`${selectValue}`].length
			: true;
	// добавить проверку на выбранный селект, чтобы было нельзя выбрать 2 одинаковых
	// добавить проверку на то, что в селекте не выбран дефолтный

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

	return vision ? (
		<>
			<div className="modal__results-current-result">
				<select
					defaultValue={"default"}
					className="modal__results-select"
					name="select-labels"
					id={"select-labels"}
					onChange={(e) => setSelectValue(e.target.value)}
				>
					<option disabled value="default">
						Выберите предмет
					</option>
					<option value="resCrim" id="res_crim">
						Уголовное право
					</option>
					<option value="resCivil" id="res_civil">
						Гражданское право
					</option>
					<option value="resPhil" id="res_phil">
						Философия
					</option>
					<option value="resEng" id="res_eng">
						Английский язык
					</option>

					{/* options change to auxuliary array */}
				</select>
				<input
					style={{
						borderColor: error && hasValue ? "#a61717" : "#bbbbbb"
					}}
					className="modal__input result-input"
					type="number"
					placeholder="Введите количество баллов"
					value={state[`${selectValue}`]}
					onChange={(e) => handleChange(e.target.value)}
				/>
				<button
					onClick={(e) => {
						setVision(false);
					}}
					className="modal__delete-button"
				>
					&#10006;
				</button>
			</div>
		</>
	) : null;
};

export default ModalSelect;
