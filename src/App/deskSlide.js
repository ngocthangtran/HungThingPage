import deskApi from "Api/DeskApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getTable = createAsyncThunk('deskSlide-getTable', async (params, thunkApi) => {
    const res = await deskApi.getTable(params);
    if (res) return res
    return null
})

const deskSlide = createSlice({
    name: 'deskSlide',
    initialState: {
        desk: null,
        dataOder: '',
        loading: false
    },
    reducers: {
        addKeyTable: (state, action) => {
            state.desk = action.payload
        }
    },
    extraReducers: {
        [getTable.pending]: (state) => {
            state.loading = true
        },
        [getTable.fulfilled]: (state, action) => {
            state.loading = false
            state.desk = action.payload
        },
        [getTable.rejected]: (state, action) => {
            state.loading = false
            state.desk = action.error
        }
    }
})

const { reducer: DeskReducer, actions } = deskSlide;
export const { addKeyTable } = actions;
export default DeskReducer;