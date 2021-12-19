import React, { useState } from "react";
import DeleteModal from "../utils/DeleteModal";
import CreateInvoice from "./CreateInvoice";
import { useDispatch } from "react-redux";
import { paidInvoice } from "../../actions/invoices";

const InvoiceFooter = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  let id = "";
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (user?.result?.googleId) {
    id = user?.result?.googleId;
  } else {
    id = user?.result?._id;
  }
  return (
    <div className="block md:hidden mt-6">
      {user?.result && id === data[0]?.creator ? (
        <div className="flex justify-end bg-primaryOne p-6">
          <button
            className="text-white text-xs font-bold px-6 py-4 rounded-full bg-borderOne transition bg-borderOne hover:bg-gray-200 hover:text-borderOne"
            onClick={() => setOpenForm(!openForm)}
          >
            Edit
          </button>
          <button
            className="text-white text-xs font-bold px-4 py-2 sm:px-6 md:py-4 rounded-full bg-buttonOne hover:bg-red-400 transition mx-3"
            onClick={() => setShowModal(!showModal)}
          >
            Delete
          </button>
          {data[0].status !== "paid" && (
            <button
              className="text-white text-xs font-bold bg-secondaryTwo px-6 py-4 rounded-full hover:bg-purple-500 transition"
              onClick={() => dispatch(paidInvoice(data[0]._id))}
            >
              Mark As Paid
            </button>
          )}
        </div>
      ) : null}
      {showModal && (
        <DeleteModal
          invoiceId={data[0]._id}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {openForm && (
        <CreateInvoice
          invoice={data[0]}
          openForm={openForm}
          setOpenForm={setOpenForm}
        />
      )}
    </div>
  );
};

export default InvoiceFooter;
