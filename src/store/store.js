import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/eventSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "event-root",
    storage
}

// Persist redux state to store events even after page reload
const persistedEventReducer = persistReducer(persistConfig, eventReducer);

export const store = configureStore({
    reducer: {
        event: persistedEventReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);
export default store;