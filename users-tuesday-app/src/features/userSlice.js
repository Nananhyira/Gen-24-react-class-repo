import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

let initialState = {
	users: [
		{ name: "robert", email: "rob@example.com", gen: 24, id: uuid() },
		{ name: "Al", email: "ali@example.com", gen: 24, id: uuid() },
		{ name: "Seth", email: "seth@example.com", gen: 24, id: uuid() },
	],
	count: 0,
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action) => {
			state.users.push(action.payload);
			// = [...state.users, action.payload];
		},

		incrememtAction: (state, action) => {},
	},
});

export const { addNewUser, incrememtAction } = userSlice.actions;
export default userSlice.reducer;
