import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// state inicial
const initialState = {
    transactions: []
}

// cria contexto
export const GlobalContext = createContext(initialState);

// componente Provider. dá acesso a outros componenets a este GlobalState
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions, fazem chamadas para AppReducer
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}