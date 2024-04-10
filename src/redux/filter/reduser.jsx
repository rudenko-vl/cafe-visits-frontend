import { createReducer } from "@reduxjs/toolkit";
import { inputСhange } from "./action";

const filter = createReducer("", (builder) => {
  builder
    .addCase(inputСhange, (_, { payload }) => payload,)
})

export { filter };