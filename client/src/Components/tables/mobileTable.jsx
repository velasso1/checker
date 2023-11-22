import React from "react";
import BackForm from "../backForm";

const MobileTable = ({ user }) => {
	return (
		<>
			<div className="results">
				<table className="results__table">
					<tbody>
						<tr>
							<td colSpan="2">{`Идентификатор: ${user.person_id}`}</td>
						</tr>
						<tr>
							<td>Гражданское право</td>
							<td>{user.res_civil}</td>
						</tr>
						<tr>
							<td>Уголовное право</td>
							<td>{user.res_crim}</td>
						</tr>
						<tr>
							<td>Философия</td>
							<td>{user.res_phil}</td>
						</tr>
						<tr>
							<td>Английский язык</td>
							<td>{user.res_eng}</td>
						</tr>
						<tr>
							<td>Сумма</td>
							<td>
								{+user.res_phil +
									+user.res_crim +
									+user.res_civil +
									+user.res_eng}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<BackForm />
		</>
	);
};

export default MobileTable;
