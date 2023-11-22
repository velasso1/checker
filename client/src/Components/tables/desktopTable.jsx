import React from "react";
import BackForm from "../backForm";

const DesktopTable = ({ user }) => {
	return (
		<>
			<div className="results">
				<table className="results__table">
					<tbody>
						<tr>
							<td rowSpan="2">Идентификатор</td>
							<td colSpan="3">ЭКЗАМЕНЫ</td>
							<td rowSpan="2">СУММА БАЛЛОВ</td>
						</tr>
						<tr>
							<td>ФИЛОСОФИЯ</td>
							<td>ГРАЖДАНСКОЕ ПРАВО</td>
							<td>УГОЛОВНОЕ ПРАВО</td>
						</tr>
						<tr>
							<td>{user.person_id}</td>
							<td>{user.res_phil}</td>
							<td>{user.res_civil}</td>
							<td>{user.res_crim}</td>
							<td>{+user.res_phil + +user.res_crim + +user.res_civil}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<BackForm />
		</>
	);
};

export default DesktopTable;
