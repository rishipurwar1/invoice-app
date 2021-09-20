import React from 'react'

const InvoiceDetailsHeader = ({ data }) => {
    let badgeClass = '';
    let dotClass = '';
    switch (data.length > 0 && data[0].status) {
        case 'pending':
            badgeClass = 'bg-badgeBgTwo text-badgeTwo';
            dotClass = 'bg-badgeTwo'
            break;
        case 'paid':
            badgeClass = 'bg-badgeBgOne text-badgeOne';
            dotClass = 'bg-badgeOne'
            break;
        default:
            badgeClass = 'bg-badgeBgThree text-neutral';
            dotClass = 'bg-neutral'
    }
    if (data.length > 0) {
        return (
            <div className="flex justify-between items-center w-full bg-primaryOne p-6 mt-6 rounded-lg">
                <div className="flex items-center">
                    <small className="text-neutral text-xs">Status</small>
                    <div className={`${badgeClass} ml-4 flex items-center w-28 p-4 rounded-lg shadow-sm`}>
                        <div className={`${dotClass} h-2 w-2 rounded-full mr-2`}></div>
                        <small>{data[0].status.charAt(0).toUpperCase() + data[0].status.slice(1)}</small>
                    </div>
                </div>
                <div className="flex">
                    <button className="text-white text-xs font-bold px-6 py-4 rounded-full bg-borderOne">Edit</button>
                    <button className="text-white text-xs font-bold px-6 py-4 rounded-full bg-buttonOne mx-3">Delete</button>
                    <button className="text-white text-xs font-bold bg-secondaryTwo px-6 py-4 rounded-full">Mark As Paid</button>
                </div>
            </div>
        )
    }
    else {
        return <h1 className="text-white text-center">Loading....</h1>
    }
}

export default InvoiceDetailsHeader
