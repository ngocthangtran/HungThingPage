const { createSlice } = require("@reduxjs/toolkit");

const userSlide = createSlice({
    name: 'user-slide',
    initialState: {
        login: false,
        username: '',
        id: '',
        roles: null
    }
})

const { reducer: userReducer } = userSlide;
export default userReducer;