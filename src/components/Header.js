import React from 'react'
import iconPlus from '../assets/images/icon-plus.svg'


const Header = ({ openForm, setOpenForm }) => {
    return (
        <div className="col-start-2 col-end-3 flex justify-between items-center w-full mb-14">
            <h1 className="text-white text-3xl font-bold">Invoices<p className="text-xs font-extralight tracking-wide text-neutral">There are 8 total invoices.</p></h1>
            <button className="text-white text-xs font-semibold flex bg-secondaryTwo px-2 py-2 pr-4 rounded-full items-center" onClick={() => setOpenForm(!openForm)}><div className="rounded-full h-8 w-8 flex items-center justify-center bg-white mr-2"><img src={iconPlus} alt="add new invoice" /></div>New Invoice</button>
        </div>
    )
}

export default Header
