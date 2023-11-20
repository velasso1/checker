import React from "react";
import DataChecker from "../hoc/dataChecker";
import MobileTable from "./tables/mobileTable";
import DesktopTable from "./tables/desktopTable";
import useMediaQuery from "@mui/material/useMediaQuery";

function Table({ userData }) {
	const user = userData[0];

	const isMobile = useMediaQuery("(max-width: 768px)");

	return isMobile ? <MobileTable user={user} /> : <DesktopTable user={user} />;
}

export default DataChecker(Table);
