const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: MenuApi } = require("Api/MenuApi");

export const ActionCategory = createAsyncThunk('SlideCategory', async (params, thunkApi) => {
    const res = await MenuApi.getCategory();
    return res;
})

export const ActionGetFoodByCategoty = createAsyncThunk('SlideGetListFood', async (params, thunkApi) => {
    const res = await MenuApi.getFoodCategory(params);
    return res;
})

const slideMenu = createSlice({
    name: 'slideMenu',
    initialState: {
        classify: [],
        category: {},
        foodCategory: {},
        loadingCategory: false,
        loadingFood: false,
        error: ''
    },
    extraReducers: {
        [ActionCategory.pending]: (state) => {
            state.loadingCategory = true;
        },
        [ActionCategory.rejected]: (state, action) => {
            state.loadingCategory = false;
            state.error = action.error;
        },
        [ActionCategory.fulfilled]: (state, action) => {
            state.loadingCategory = false;
            state.category = action.payload;
        },
        [ActionGetFoodByCategoty.pending]: (state) => {
            state.loadingFood = true;
        },
        [ActionGetFoodByCategoty.rejected]: (state, action) => {
            state.loadingFood = false;
            state.error = action.error;
        },
        [ActionGetFoodByCategoty.fulfilled]: (state, action) => {
            state.loadingFood = false;
            state.foodCategory = action.payload;
        }
    }
})

const { reducer: MenuReducer } = slideMenu;
export default MenuReducer;