const { createSlice } = require("@reduxjs/toolkit");

const NavBarSlide = createSlice({
    name:'NavbarSlide',
    initialState: {
        pageActive: 'home'
    },
    reducers: {
        setPageActive: (state, action) => {
            state.pageActive = action.payload;
        }
    }
})

const { reducer: NavbarReducer, actions } = NavBarSlide
export const { setPageActive } = actions;
export default NavbarReducer;