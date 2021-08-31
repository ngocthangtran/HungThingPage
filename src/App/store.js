import NavbarReducer from "./NavbarSlide";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    'NavbarReducer': NavbarReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;