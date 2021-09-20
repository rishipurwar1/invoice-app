import React from 'react'
import InvoiceCard from './InvoiceCard'
import data from '../data.json'
// import { useSelector } from 'react-redux'


const Invoices = () => {
    // const invoices = useSelector((state) => state.invoices);

    return (
        <div className="text-white w-full">
            {data && data.map(cardData => <InvoiceCard data={cardData} key={cardData.id} />)}
        </div>
    )
}
export default Invoices;
