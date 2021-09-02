const { createSlice } = require("@reduxjs/toolkit");

const shopSlide = createSlice({
    name: 'ShopSlide',
    initialState: {
        classify: ''
    },
    reducers: {
        setClassifyRedux: (state, action) => {
            state.classify = action.payload
        }
    }
})

const { reducer: ShopcontenReducer, actions } = shopSlide
export const { setClassifyRedux } = actions;
export default ShopcontenReducer;