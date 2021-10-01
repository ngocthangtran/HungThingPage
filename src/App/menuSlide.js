const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: MenuApi } = require("Api/MenuApi");

export const getFoodCategory = createAsyncThunk('Menu-getlistFood', async (params) => {
    const res = await MenuApi.getFoodCategoryServer(params)
    return res;
})

export const getCategory = createAsyncThunk('menuSlide-getListcategory', async (params) => {
    const res = await MenuApi.getCategoryServer();
    return res;
})

export const getFoodForID = createAsyncThunk('menu-getfood', async (id, thunkApi) => {
    const res = await MenuApi.getFoodForIdServer(id);
    if (res.status) {
        return thunkApi.rejectWithValue({
            status: res.status,
            message: "lol"
        })
    }
    return res

})

export const deleteFoodServerSlide = createAsyncThunk('menu-delete', async (id) => {
    const res = await MenuApi.deleteFoodServer(id);
    return res
})

const menuSlide = createSlice({
    name: 'menu-slide',
    initialState: {
        listCategory: [],
        listProduct: [],
        categorySeleter: null,
        loading: false,
        selectFood: {},
        error: ''
    },
    reducers: {
        upDateListFood: (state, action) => {
            const { type, data } = action.payload;
            if (type === 'delete') {
                const newData = [...state.listProduct]
                newData.splice(data.index, 1)
                state.listProduct = newData
            }
            if (type === 'add') {
                const newData = [...state.listProduct]
                newData.push(data)
                state.listProduct = newData
            }
        },
    },
    extraReducers: {
        [getCategory.pending]: (state) => {
            state.loading = true
        },
        [getCategory.fulfilled]: (state, action) => {
            state.listCategory = action.payload;
            state.loading = false;
        },
        [getFoodCategory.pending]: (state) => {
            state.loading = true
        },
        [getFoodCategory.fulfilled]: (state, action) => {
            state.listProduct = action.payload;
            state.loading = false;
        },
        [getFoodCategory.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        [getFoodForID.pending]: (state) => {
            state.loading = true
        },
        [getFoodForID.fulfilled]: (state, action) => {
            state.selectFood = action.payload;
            state.loading = false;
        },
        [getFoodForID.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [deleteFoodServerSlide.pending]: (state) => {
            state.loading = true
        },
        [deleteFoodServerSlide.fulfilled]: (state) => {
            state.loading = false;
        },
        [deleteFoodServerSlide.rejected]: (state) => {
            state.loading = false;
        },
    }

})

const { reducer: MenuServerReducer, actions } = menuSlide
export const { upDateListFood } = actions
export default MenuServerReducer;