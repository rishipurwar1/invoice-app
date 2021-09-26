import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchInvoices = () => axios.get(`${baseUrl}/invoices`);

export const fetchInvoice = (id) => axios.get(`${baseUrl}/invoices/${id}`);

export const createInvoice = (newInvoice) =>
  axios.post(`${baseUrl}/invoices`, newInvoice);

export const deleteInvoice = (id) => axios.delete(`${baseUrl}/invoices/${id}`);

export const updateInvoice = (id, updateInvoice) => axios.patch(`${baseUrl}/invoices/${id}`, updateInvoice)