import React, { useState } from "react";
import { createResult } from "../../store/slices/dataSlice";
import { useDispatch } from "react-redux";
import SuccessStatus from "./successStatus";
import { fetchingData } from "../../store/slices/dataSlice";
import TextField from "../fields/textField";
import ModalSelect from "./modalSelect";
import { removeOption, clearOptionsArr } from "../../store/slices/selectSlice";
import config from "../../auxiliary.json";

const CreateResultModal = ({ setOpenModal }) => {
	const [state, setState] = useState({
		personId: "",
		resPhil: "",
		resCivil: "",
		resCrim: "",
		resEng: ""
	});
	const [error, setError] = useState(false);
	const [showSucModal, setShowSucModal] = useState(false);
	const [subjects, setSubjects] = useState([{ id: 0, value: "" }]);
	const dispatch = useDispatch();

	const body = state;

	const addSubject = () => {
		if (subjects.length >= 4) {
			return;
		}

		if (subjects.length === 0) {
			setSubjects([{ id: 0, value: "" }]);
			return;
		}

		setSubjects([
			...subjects,
			{ id: subjects[subjects.length - 1].id + 1, value: "" }
		]);
	};

	const createNewResult = (e) => {
		setError(false);

		for (let key of subjects) {
			if (key.value <= 0 || typeof key.value !== "number") {
				setError(true);
				return;
			}
		}

		dispatch(createResult(body));
		setShowSucModal(true);
		setTimeout(() => {
			dispatch(clearOptionsArr());
			dispatch(fetchingData());
		}, 200);

		setTimeout(() => {
			setOpenModal(false);
			setShowSucModal(false);
		}, 800);
	};

	const deleteSubject = (id, selectValue) => {
		setSubjects(
			subjects.filter((item) => {
				return item.id !== id;
			})
		);
		dispatch(removeOption(selectValue));
	};

	return (
		<div className="modal">
			{showSucModal && <SuccessStatus />}
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<h1 className="modal__title">Добавление новых результатов</h1>
				{error && (
					<span className="modal__error-message">Не все поля заполнены</span>
				)}

				<span className="modal__tagline">Персональная информация</span>

				<div className="modal__perosnal-info">
					<div className="modal__info-labels">
						{config.labelInfo.map((item, index) => (
							<label
								key={index}
								htmlFor={item.htmlFor}
								className="modal__label"
							>
								{item.text}
							</label>
						))}
					</div>

					<div className="modal__info-inputs">
						{config.textField.map((item, index) => (
							<TextField
								key={index}
								item={item}
								error={error}
								state={state}
								setState={setState}
							/>
						))}
					</div>
				</div>

				<span className="modal__tagline">
					Результаты вступительных испытаний
				</span>

				<div className="modal__results">
					{subjects.map((item) => (
						<ModalSelect
							key={item.id}
							state={state}
							setState={setState}
							error={error}
							setError={setError}
							deleteField={deleteSubject}
							subjects={subjects}
							setSubjects={setSubjects}
							id={item.id}
						/>
					))}

					<div className="modal__results-add-button">
						<button
							disabled={subjects.length >= 4}
							onClick={() => addSubject()}
							className="modal__results-button"
						>
							Добавить результат
						</button>
					</div>
				</div>

				<div className="modal__buttons">
					<button
						className="modal__cancel button"
						onClick={() => {
							setOpenModal(false);
							dispatch(clearOptionsArr());
						}}
					>
						Отмена
					</button>
					<button
						className="modal__save button"
						disabled={showSucModal}
						onClick={() => {
							createNewResult();
						}}
					>
						Сохранить
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateResultModal;
