import React, { useState } from "react";
import { createResult } from "../../store/slices/dataSlice";
import { useDispatch } from "react-redux";
import SuccessStatus from "./successStatus";
import { fetchingData } from "../../store/slices/dataSlice";
import TextField from "../fields/textField";
// import NumberField from "../fields/numberField";
import ModalSelect from "./modalSelect";
import config from "../../auxiliary.json";

const CreateResultModal = ({ setOpenModal }) => {
	const [state, setState] = useState({
		firstName: "",
		lastName: "",
		secondName: "",
		resPhil: "",
		resCivil: "",
		resCrim: "",
		resEng: ""
	});

	const [error, setError] = useState(false);
	const [showSucModal, setShowSucModal] = useState(false);
	const [modalState, setModalState] = useState({ count: 1 });
	const dispatch = useDispatch();
	// const respStatus = useSelector(getResponseStatus());

	const body = state;

	const createNewResult = (e) => {
		setError(false);
		for (let key in body) {
			if (!body[key].length) {
				setError(true);
				return;
			}
		}

		dispatch(createResult(body));
		setShowSucModal(true);
		setTimeout(() => dispatch(fetchingData()), 100);
		setTimeout(() => {
			setOpenModal(false);
			setShowSucModal(false);
		}, 800);
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

				{/* /////////////////////////////////////////////////////////////////// */}

				<div className="modal__results">
					{[...Array(modalState.count)].map((item, index) => (
						<ModalSelect
							key={index}
							state={state}
							setState={setState}
							error={error}
						/>
					))}
					<div className="modal__results-add-button">
						<button
							onClick={() =>
								setModalState({ ...modalState, count: modalState.count + 1 })
							}
							className="modal__results-button"
						>
							Добавить результат
						</button>
					</div>
				</div>

				{/* /////////////////////////////////////////////////////////////////// */}

				<div className="modal__buttons">
					<button
						className="modal__cancel button"
						onClick={() => setOpenModal(false)}
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
