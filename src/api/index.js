import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const fetchInvoices = () => API.get(`/invoices`);

export const fetchInvoice = (id) => API.get(`/invoices/${id}`);

export const createInvoice = (newInvoice) => API.post(`/invoices`, newInvoice);

export const deleteInvoice = (id) => API.delete(`/invoices/${id}`);

export const updateInvoice = (id, updateInvoice) =>
  API.patch(`/invoices/${id}`, updateInvoice);

export const paidInvoice = (id) =>
  API.patch(`/invoices/${id}/paid`, updateInvoice);
