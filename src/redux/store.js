import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import patientReducer from './features/patientSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

 const persistedReducer = persistReducer(persistConfig, userReducer);

export const store= configureStore({
  reducer: {
    user: persistedReducer,
    patient:patientReducer
  },
});
export const persistor = persistStore(store);
