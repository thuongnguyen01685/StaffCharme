import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";

export default configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
