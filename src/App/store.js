import ShopcontenReducer from "Page/Menu/Components/ShopConten/slideShop";
import MenuReducer from "Page/Menu/slideMenu";
import DeskReducer from "./deskSlide";
import NavbarReducer from "./NavbarSlide";
import userReducer from "./UserSlide";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    'NavbarReducer': NavbarReducer,
    'MenuReducer': MenuReducer,
    'ShopcontenReducer': ShopcontenReducer,
    'UserReducer': userReducer,
    'DeskReducer': DeskReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;