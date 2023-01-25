import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { setCategories, setFilter, setTransactions } from "../features/transactionSlice";
import { formatDate } from "../../utils/date";

export const getTransactions = (id, filter) => async (dispatch) => {
    try {
        const api = new Api();
        let transactions = await api.apiPrivate().get('/transactions');
        let balance = 0;

        if (transactions) {
            transactions = transactions.data.body.map(data => {
                data.user.fullname = data.user.firstName + " " + data.user.lastName;

                if (data.toUser) {
                    data.toUser.fullname = data.user.firstName + " " + data.user.lastName;
                }

                if (!data.toUserId) {
                    data.pay = "Pago del servicio"
                    data.type = "Egreso"
                } else if (data.userId === data.toUserId) {
                    data.pay = "Carga de saldo"
                    data.type = "Ingreso"
                }
                else if (id !== data.userId) {
                    data.pay = "Transferencia recibida"
                    data.type = "Ingreso";
                } else if (id !== data.toUserId) {
                    data.pay = "Transferencia enviada"
                    data.type = "Egreso";
                }

                if (data.type === 'Egreso') {
                    balance -= data.amount
                } else {
                    balance += data.amount
                }

                return { ...data, createdAt: formatDate(data.createdAt) }
            })
        }

        const transactionsFilter = transactions.filter(t => t.type.includes(filter));

        dispatch(setTransactions({ transactions, balance, transactionsFilter }))

    } catch (error) {
        dispatch(setTransactions({ transactions: [], balance: 0 }));
        return error.message
    }
}

export const setFiltered = (filter = "") => async (dispatch) => {
    try {
        dispatch(setFilter(filter));

    } catch (error) {
        return error.message;
    }
}

export const getCategories = () => async (dispatch) => {
    try {
        const api = new Api();
        const response = await api.apiPrivate().get('/categories')

        const categories = response.data.body(c => {
            return { id: c.id, name: c.name }
        })
    } catch (error) {
        dispatch(setCategories({ transactions: [], balance: 0 }));
        return error.message
    }
}

export const createTransaction = createAsyncThunk(
    'createTransaction',
    async ({ amount, description, userId, categoryId }) => {
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