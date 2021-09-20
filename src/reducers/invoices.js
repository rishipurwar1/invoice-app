export default (invoices = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_A_INVOICE':
            return action.payload;
        case 'CREATE':
            return [...invoices, action.payload];
        default:
            return invoices;
    }
}