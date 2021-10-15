import * as api from "../api";

//ACTIONS CREATOR
export const getInvoices = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInvoices();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const filterInvoices = (query) => async (dispatch) => {
  console.log(query);
  try {
    const { data } = await api.filterInvoices(query);
    dispatch({ type: "FETCH_FILTER_INVOICES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createInvoice = (invoice) => async (dispatch) => {
  try {
    const { data } = await api.createInvoice(invoice);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteInvoice = (id) => async (dispatch) => {
  try {
    await api.deleteInvoice(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateInvoice = (id, invoice) => async (dispatch) => {
  try {
    const { data } = await api.updateInvoice(id, invoice);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const paidInvoice = (id) => async (dispatch) => {
  try {
    const { data } = await api.paidInvoice(id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
