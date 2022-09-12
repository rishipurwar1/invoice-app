import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchInvoices = () => API.get(`/invoices`);
export const filterInvoices = (query) => API.get(`/invoices?status=${query}`);

export const createInvoice = (newInvoice) => API.post(`/invoices`, newInvoice);

export const deleteInvoice = (id) => API.delete(`/invoices/${id}`);

export const updateInvoice = (id, updateInvoice) =>
  API.patch(`/invoices/${id}`, updateInvoice);

export const paidInvoice = (id) =>
  API.patch(`/invoices/${id}/paid`, updateInvoice);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
