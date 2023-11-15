import "@testing-library/jest-dom";
import store from "../../store";
import {
	currentResultReceives,
	dataReceived
} from "../../store/slices/dataSlice";
import { addUser } from "../mocks/mockUsers";

describe("data slice redux", () => {
	test("request for one result", () => {
		store.dispatch(currentResultReceives(addUser));
		const reduxState = store.getState().data;
		expect(reduxState.currentResult).toBe(addUser);
	});

	test("full data", () => {
		store.dispatch(dataReceived(addUser));
		const reduxState = store.getState().data;
		expect(reduxState.data).toBe(addUser);
	});
});
