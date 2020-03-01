import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// state inicial
const initialState = {
    transactions: [ // transações mocadas temporárias
            {id: 1, text: 'Flower', amount: -20},
            {id: 2, text: 'Salary', amount: 300},
            {id: 3, text: 'Book', amount: -10},
            {id: 4, text: 'Camera', amount: 150},
        ]
}

// cria contexto
export const GlobalContext = createContext(initialState);

// componente Provider. dá acesso a outros componenets a este GlobalState
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
        {children}
    </GlobalContext.Provider>)
}