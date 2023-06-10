import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
	users: [
		{ name: "ama", email: "ama@gmail.com", gen: 24, id: uuid() },
		{ name: "john", email: "john@gmail.com", gen: 24, id: uuid() },
		{ name: "ben", email: "ben@gmail.com", gen: 24, id: uuid() },
		{ name: "manuel", email: "man@gmail.com", gen: 24, id: uuid() },
	],
	count: 0,
	admin: [],
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action) => {
			state.users.push(action.payload);
		},
		// editUser:(state, action) => {
		// 	state.users=state.users.find((user)=>user.id===action.payload.id)
		// 	if(user){
		//   [...state.users, newInfo]
		// 	}
		// }

		editUser: (state, action) => {
			state.users = state.users.map((user) => {
				if (user.id === action.payload.id) {
					return action.payload.newInfo;
				}
				return user;
			});
		},
		deleteUser:(state, action) => {
			state.users=state.users.filter((user) =>user.id!==action.payload)
		}

		// incrementbyfive: (state) => {
		// 	state.count = state.count + 5;
		//},
	},
});

export const { addNewUser, editUser ,deleteUser} = userSlice.actions;
export default userSlice.reducer;
