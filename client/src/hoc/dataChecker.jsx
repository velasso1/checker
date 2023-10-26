/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Components/loading";
import UserNotFound from "../Components/userNotFound";
import { getRequestStatus } from "../store/slices/dataSlice";

function DataChecker(Component) {
	return function () {
		const requestStatus = useSelector(getRequestStatus());
		const userData = useSelector((state) => state.data.currentResult);

		if (requestStatus) {
			return <Loading />;
		}

		return !userData || !userData[0] ? (
			<UserNotFound />
		) : (
			<Component userData={userData} />
		);
	};
}

export default DataChecker;
