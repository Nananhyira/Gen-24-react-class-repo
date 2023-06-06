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

		deleteUser: (state, action) => {
			state.users = state.users.filter((user) => {
				if (user.id !== action.payload) {
					return state.users;
				}
			});
		},

		editUser: (state, action) => {
			state.users = state.users.map((user) => {
				if (user.id === action.payload.id) {
					return action.payload.newInfo;
				}
				return user;
			});
			//
			// const {id, updatedUser}= action.payload
			// state.users = state.users.map(
			// 	(user) => (user.id === id?updatedUser  : state.users
			// 		//  console.log(action)
			// 		)
			// );

			// const { id, updatedData } = action.payload;
			// state.users = state.users.map((user) => {
			// 	if (user.id === id) {
			// 		return { ...user, ...updatedData };
			// 		console.log(action);
			// 	}
			// 	return user;
			// });

			// state.users=state.users.map((user,index)=>user.id===action.payload.id?action.payload.data:user)
		},

		incrememtAction: (state, action) => {},
	},
});

export const { addNewUser, incrememtAction, deleteUser, editUser } =
	userSlice.actions;
export default userSlice.reducer;
