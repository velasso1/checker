import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./slices/idSlice";
import userReducer from "./slices/userSlice";
import dataReducer from "./slices/dataSlice";
import searchReducer from "./slices/search";
import idToUpdateReducer from "./slices/idToUpdate";

export default configureStore({
	reducer: {
		id: idReducer,
		user: userReducer,
		data: dataReducer,
		search: searchReducer,
		idToUpdate: idToUpdateReducer
	}
});
