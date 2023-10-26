import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteResult } from "../../store/slices/dataSlice";
import { getId } from "../../store/slices/idToUpdate";

const ConfirmAction = ({ setOpenConfirm, setState, state }) => {
	const id = useSelector(getId());
	const dispatch = useDispatch();

	const deleteItem = () => {
		dispatch(deleteResult(id));
		setState(state.filter((item) => item.person_id !== id));
		setOpenConfirm(false);
	};

	return (
		<div className="confirm-modal modal">
			<div className="confirm-modal__content">
				<h1 className="confirm-modal__title">
					Вы уверены, что хотите удалить результаты?
				</h1>
				<span className="confirm-modal__tagline">
					данное действие будет невозможно отменить
				</span>
				<div className="confirm-modal__buttons">
					<button
						className="confirm-modal__cancel-button button"
						onClick={() => setOpenConfirm(false)}
					>
						Отмена
					</button>
					<button
						className="confirm-modal__delete-button button"
						onClick={deleteItem}
					>
						Да, удалить
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmAction;
