// especifica as mudanças de estados da aplicação em respostas a mudanças no contexto e os repassa para os componentes
// por causa do paradigma funcional, do react, na verdade AppReducer cria um novo estado e o repassa
export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}