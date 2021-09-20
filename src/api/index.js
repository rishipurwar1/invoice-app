import axios from 'axios';

const baseUrl = process.env.BASE_URL;

export const fetchInvoices = () => axios.get(`${baseUrl}/invoices`);

export const fetchInvoice = (id) => axios.get(`${baseUrl}/invoices/${id}`);

export const createInvoice = (newInvoice) => axios.create(`${baseUrl}/invoices`, newInvoice);