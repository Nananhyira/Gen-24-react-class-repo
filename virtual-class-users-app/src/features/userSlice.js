import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

let initialState = {
	users: [
		{ name: "Ocarlyn ghartey", email: "os@gmail.com", gen: 24, id: uuid() },
		{ name: "father Bernard", email: "father@gmail.com", gen: 24, id: uuid() },
		{ name: "Sander Twum", email: "sander@gmail.com", gen: 45, id: uuid() },
	],
	count: 0,
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action) => {
			// state.users=[...state.users, action.payload]
			state.users.push(action.payload);
		},

		deleteUser: (state, action) => {
			state.users = state.users.filter((item) => {
				if (item.id !== action.payload) return item;
			});
		},
		editUser: (state, action) => {
			state.users = state.users.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload.updatedInfo;
				}
				console.log(action.payload);
				return item;
			});
		},

		incrementone: (state, action) => {
			state.count = state.count + 1;
		},
	},
});

export const { addNewUser, incrementone, deleteUser, editUser } =
	userSlice.actions;

export default userSlice.reducer;
