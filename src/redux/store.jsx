import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { employesApi } from "./employesApi";
import { visitsApi } from "./visitsApi";
import authReducer from "./auth/auth-slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: combineReducers({
    [employesApi.reducerPath]: employesApi.reducer,
    [visitsApi.reducerPath]: visitsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  }),
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(employesApi.middleware)
      .concat(visitsApi.middleware),
  // devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
