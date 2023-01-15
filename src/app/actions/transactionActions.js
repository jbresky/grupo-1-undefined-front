import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { setTransactions } from "../features/transactionSlice";

export const getTransactions = (id, filter) => async (dispatch) => {
    try {
        const api = new Api();
        let transactions = await api.apiPrivate().get('/transactions');
        let balance = 0;

        if(transactions) {
            transactions = transactions.data.body.map( data => {
                
            })
        }

    } catch (error) {

    }
}