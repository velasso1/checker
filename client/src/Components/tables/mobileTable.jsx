import React from "react";
import BackForm from "../backForm";

const MobileTable = ({ user }) => {
	return (
		<>
			<div className="results">
				<table className="results__table">
					<tbody>
						<tr>
							<td colSpan="2">
								{" "}
								{user.last_name +
									" " +
									user.first_name +
									" " +
									user.second_name}
							</td>
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
							<td>Сумма</td>
							<td>{+user.res_phil + +user.res_crim + +user.res_civil}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<BackForm />
		</>
	);
};

export default MobileTable;
