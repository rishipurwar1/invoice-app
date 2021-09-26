import React, { useState } from 'react'
import CreateInvoice from './CreateInvoice'
import Header from './Header'
import Invoices from './Invoices'

const Dashboard = () => {
    const [openForm, setOpenForm] = useState(false);
    return (
        <main className="col-start-2 col-end-3 row-start-1 row-end-2 flex flex-col items-center px-12 py-16 w-full max-w-3xl mx-auto">
            <Header openForm={openForm} setOpenForm={setOpenForm} />
            <Invoices />
            <CreateInvoice openForm={openForm} setOpenForm={setOpenForm} />
        </main>
    )
}

export default Dashboard
