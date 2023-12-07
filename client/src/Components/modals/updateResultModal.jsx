import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getId } from "../../store/slices/idToUpdate";
import {
	updateResult,
	fetchingData,
	getAllResults
} from "../../store/slices/dataSlice";
import NumberField from "../fields/numberField";
import TextField from "../fields/textField";
import config from "../../auxiliary.json";

const UpdateResultModal = ({ setOpen }) => {
	const currentId = useSelector(getId());
	const data = useSelector((state) => state.data.data);
	const updateStatus = useSelector((state) => state.data.respStatus);

	let currentUser = data.filter((item) => item.person_id === currentId);
	const { person_id, res_phil, res_civil, res_crim, res_eng } = currentUser[0];

	const [state, setState] = useState({
		personId: `${person_id}`,
		resPhil: `${res_phil}`,
		resCivil: `${res_civil}`,
		resCrim: `${res_crim}`,
		resEng: `${res_eng}`
	});
	const [error, setError] = useState(false);

	const dispatch = useDispatch();

	const body = state;

	const update = () => {
		setError(false);
		for (let key in body) {
			if (!body[key].length) {
				setError(true);
				return;
			}
		}

		dispatch(updateResult(currentId, body));
		setTimeout(() => {
			dispatch(fetchingData());
			setOpen(false);
			currentUser = getAllResults();
		}, 200);
	};

	return (
		<div className="modal">
			{/* {showSucModal && <SuccessStatus/>} */}
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<h1 className="modal__title">Редактирование результатов</h1>
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

				<div className="modal__results modal_update">
					<div className="modal__results-labels">
						{config.labelResults.map((item, index) => (
							<label
								key={index}
								htmlFor={item.htmlFor}
								className="modal__label"
							>
								{item.text}
							</label>
						))}
					</div>

					<div className="modal__results-inputs">
						{config.numberField.map((item, index) => (
							<NumberField
								item={item}
								key={index}
								state={state}
								setState={setState}
								error={error}
							/>
						))}
					</div>
				</div>

				<div className="modal__buttons">
					<button
						className="modal__cancel button"
						onClick={() => {
							setOpen(false);
						}}
					>
						Отмена
					</button>
					<button
						className="modal__save button"
						onClick={() => {
							update();
						}}
					>
						Сохранить
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateResultModal;
