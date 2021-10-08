import React, { useState } from "react";
import CreateInvoice from "./CreateInvoice";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { paidInvoice } from "../actions/invoices";

const InvoiceDetailsHeader = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  let badgeClass = "";
  let dotClass = "";
  switch (data.length > 0 && data[0].status) {
    case "pending":
      badgeClass = "bg-badgeBgTwo text-badgeTwo";
      dotClass = "bg-badgeTwo";
      break;
    case "paid":
      badgeClass = "bg-badgeBgOne text-badgeOne";
      dotClass = "bg-badgeOne";
      break;
    default:
      badgeClass = "bg-badgeBgThree text-neutral";
      dotClass = "bg-neutral";
  }
  if (data.length > 0) {
    return (
      <>
        <div className="flex justify-between items-center w-full bg-primaryOne p-6 mt-6 rounded-lg">
          <div className="flex items-center">
            <small className="text-neutral text-xs">Status</small>
            <div
              className={`${badgeClass} ml-4 flex items-center w-28 p-4 rounded-lg shadow-sm`}
            >
              <div className={`${dotClass} h-2 w-2 rounded-full mr-2`}></div>
              <small>
                {data[0].status.charAt(0).toUpperCase() +
                  data[0].status.slice(1)}
              </small>
            </div>
          </div>
          <div className="flex">
            <button className="text-white text-xs font-bold px-6 py-4 rounded-full bg-borderOne" onClick={() => setOpenForm(!openForm)}>
              Edit
            </button>
            <button
              className="text-white text-xs font-bold px-6 py-4 rounded-full bg-buttonOne mx-3"
              onClick={() => setShowModal(!showModal)}
            >
              Delete
            </button>
            {data[0].status !== "paid" && <button className="text-white text-xs font-bold bg-secondaryTwo px-6 py-4 rounded-full" onClick={() => dispatch(paidInvoice(data[0]._id))}>
              Mark As Paid
            </button>}
          </div>
        </div>
        {showModal && (
          <Modal
            invoiceId={data[0]._id}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
        {openForm ? <CreateInvoice invoice={data[0]} openForm={openForm} setOpenForm={setOpenForm} /> : null}
      </>
    );
  }
  return null;
};

export default InvoiceDetailsHeader;
