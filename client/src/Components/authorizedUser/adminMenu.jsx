import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../../store/slices/dataSlice";
import { updateValue, getSearch } from "../../store/slices/search";
import { putId } from "../../store/slices/idToUpdate";
import CreateResultModal from "../modals/createResultModal";
import UpdateResultModal from "../modals/updateResultModal";
import ConfirmAction from "../modals/confirmAction";

const AdminMenu = () => {
	const [state, setState] = useState([]);
	const [openCreateModal, setOpenCreateModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const [openConfirmModal, setOpenConfirmModal] = useState(false);
	const result = useSelector((state) => state.data.data);
	const searchValue = useSelector(getSearch());
	const dispatch = useDispatch();

	const setSearchValue = (e) => {
		dispatch(updateValue(e.target.value));
	};

	// filter by surname in table
	const newDataTable =
		searchValue === ""
			? state
			: state.filter((people) => {
					return people.last_name
						.toLowerCase()
						.includes(searchValue.toLowerCase());
			  });

	// receiving data
	useEffect(() => {
		dispatch(fetchingData());
	}, [dispatch]);

	// writing data to state when result is updated
	useEffect(() => {
		setState(result);
	}, [result]);

	const deleteItem = (id) => {
		setOpenConfirmModal(true);
		dispatch(putId(id));
	};

	const updateResult = (id) => {
		setOpenUpdateModal(true);
		dispatch(putId(id));
	};

	return (
		<>
			{openCreateModal && (
				<CreateResultModal setOpenModal={setOpenCreateModal} />
			)}
			{openUpdateModal && <UpdateResultModal setOpen={setOpenUpdateModal} />}
			{openConfirmModal && (
				<ConfirmAction
					setOpenConfirm={setOpenConfirmModal}
					state={state}
					setState={setState}
				/>
			)}
			<div className="admin-menu">
				<input
					className="admin-menu__input"
					placeholder="Поиск по фамилии"
					onChange={setSearchValue}
				/>
				<button
					className="admin-menu__button button"
					onClick={() => setOpenCreateModal(true)}
				>
					Добавить новые результаты
				</button>
			</div>
			<table className="admin-menu__results-table">
				<tbody>
					<tr className="admin-menu__header-table">
						<th>Фамилия</th>
						<th>Имя</th>
						<th>Отчество</th>
						<th>Идентификатор</th>
						<th colSpan={2}>Действие</th>
					</tr>
					{!state.length && (
						<tr>
							<td colSpan={5}>Данные отсутствуют</td>
						</tr>
					)}
					{newDataTable.map((item) => (
						<tr className="admin-menu__content" key={item.person_id}>
							<td>{item.last_name}</td>
							<td>{item.first_name}</td>
							<td>{item.second_name}</td>
							<td>{item.person_id}</td>

							<td>
								<button
									className="admin-menu__edit-button"
									onClick={() => {
										updateResult(item.person_id);
									}}
								>
									Редактировать
								</button>
							</td>

							<td>
								<button
									className="admin-menu__delete-button"
									onClick={() => deleteItem(item.person_id)}
								>
									Удалить
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default AdminMenu;
