// eslint-disable-next-line
export default (invoices = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_A_INVOICE":
      return action.payload;
    case "UPDATE":
    case "PAID":
      return invoices.map(invoice => invoice._id === action.payload._id ? action.payload : invoice);
    case "DELETE":
      return invoices.filter((invoice) => invoice._id !== action.payload);
    case "CREATE":
      return [...invoices, action.payload];
    default:
      return invoices;
  }
};
