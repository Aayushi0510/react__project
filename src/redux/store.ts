import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import sideNaveLayoutSlice from "./slice/sideNaveLayoutSlice";

 const store = configureStore({
    reducer: {
      sideNavLayout: sideNaveLayoutSlice,
    },
  })
  setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

