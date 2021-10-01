const { createSlice } = require("@reduxjs/toolkit");

const userSlide = createSlice({
    name: 'user-slide',
    initialState: {
        login: false,
        username: '',
        id: '',
        roles: false
    },
    reducers: {
        removeUser: (state) => {
            state.id = '';
            state.username = '';
            state.roles = false
            state.login = false
        },
        addUserAction: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.user;
            state.roles = action.payload.roles
            state.login = true
        }
    },
})

const { reducer: userReducer, actions } = userSlide;
export const { addUserAction, removeUser } = actions
export default userReducer;