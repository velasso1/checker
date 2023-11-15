import "@testing-library/jest-dom";
import store from "../../store";
import { setUser, removeUser } from "../../store/slices/userSlice";
import { userToStorage } from "../mocks/mockUsers";

describe("user slice redux", () => {
	test("set user", () => {
		store.dispatch(setUser(userToStorage));
		const some = store.getState();
		expect(some.user).toStrictEqual(userToStorage);
	});

	test("remove user", () => {
		store.dispatch(removeUser());
		const some = store.getState().user;
		expect(some.email).toBe(null);
	});
});
