const { createSlice } = require("@reduxjs/toolkit");

const userSlide = createSlice({
    name: 'user-slide',
    initialState: {
        login: false,
        username: '',
        id: '',
        roles: true
    }
})

const { reducer: userReducer } = userSlide;
export default userReducer;