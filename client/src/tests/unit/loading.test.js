import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "../../Components/loading";

test("loading component", () => {
	render(<Loading />);

	const loader = screen.getByText(/Подождите, идёт загрузка/i);

	expect(loader).toBeInTheDocument();
});
