import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../assets/images/icon-arrow-left.svg'
import InvoiceDetailsHeader from './InvoiceDetailsHeader';
// import { useSelector } from 'react-redux';
// remove this after adding DB
import data from '../data.json'
import InvoiceCardDetails from './InvoiceCardDetails';

const InvoiceDetails = (props) => {
    const [invoiceData, setInvoiceData] = useState([]);
    const id = props.match.params.id;
    // const invoice = useSelector((state) => state.invoices.find(invoice => invoice._id == id));
    useEffect(() => {
        const invoiceData = data.filter(invoice => invoice.id === id);
        setInvoiceData(invoiceData);
        // will need to add data as a dependency
    }, [id]);

    return (
        <div className="mx-auto px-12 py-16 w-full max-w-3xl">
            <Link to="/" className="text-neutral text-xs"><img className="inline -mt-1 mr-4" src={backIcon} alt="back" /> Go back</Link>
            <InvoiceDetailsHeader data={invoiceData} />
            <InvoiceCardDetails data={invoiceData} />
        </div>
    )
}

export default InvoiceDetails
