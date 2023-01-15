import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./features/authSlice";
import transactionSlice from "./features/transactionSlice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        transactions: transactionSlice
    },
})

export default store