import ShopcontenReducer from "Page/Menu/Components/ShopConten/slideShop";
import MenuReducer from "Page/Menu/slideMenu";
import NavbarReducer from "./NavbarSlide";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    'NavbarReducer': NavbarReducer,
    'MenuReducer': MenuReducer,
    'ShopcontenReducer': ShopcontenReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;