import ShopcontenReducer from "Page/Menu/Components/ShopConten/slideShop";
import MenuReducer from "Page/Menu/slideMenu";
import DeskReducer from "./deskSlide";
import MenuServerReducer from "./menuSlide";
import NavbarReducer from "./NavbarSlide";
import NotificationReducer from "./notificationSlide";
import userReducer from "./UserSlide";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    'NavbarReducer': NavbarReducer,
    'MenuReducer': MenuReducer,
    'ShopcontenReducer': ShopcontenReducer,
    'UserReducer': userReducer,
    'DeskReducer': DeskReducer,
    //menu using server
    "MenuServerReducer": MenuServerReducer,
    "Notification": NotificationReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;