import {configureStore} from "@reduxjs/toolkit";
import {sliceCard} from "./slices/SliceCard.ts";

export const store = configureStore({
  reducer: {
    cards: sliceCard.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
