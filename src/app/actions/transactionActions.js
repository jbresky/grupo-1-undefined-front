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
              if(data.type === 'Egreso'){
                balance -= data.amount
              } else {
                balance += data.amount
              }

              return { ...data }
            })
        }

        dispatch(setTransactions({ transactions, balance }))

    } catch (error) {
        dispatch(setTransactions({ transactions: [], balance: 0 }));
        return error.message
    }
}

export const createTransaction = createAsyncThunk(
    'createTransaction',
    async({ amount, description, userId, toUserId, categoryId }) => {
        try {
            const apiService = new Api();
            const response = await apiService.apiPrivate().post('/transactions', {
                description,
                amount,
                userId,
                toUserId,
                categoryId
            });
            const transactions = response.data.transactions;

            return transactions;
        } catch (error) {
            return error.response.data;
        }
    }
)