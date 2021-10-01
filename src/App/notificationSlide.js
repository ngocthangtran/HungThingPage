const { createSlice } = require("@reduxjs/toolkit");

const notificationSlide = createSlice({
    name: 'notification',
    initialState: {
        listNotification: []
    },
    reducers: {
        addNotification: (state, action) => {
            state.listNotification.push(action.payload)
        }
    }
})

const { reducer: NotificationReducer, actions } = notificationSlide;
export const { addNotification } = actions;
export default NotificationReducer