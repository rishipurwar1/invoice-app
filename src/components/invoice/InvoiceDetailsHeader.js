import React, { useState } from "react";
import CreateInvoice from "./CreateInvoice";
import { useDispatch } from "react-redux";
import { paidInvoice } from "../../actions/invoices";
import DeleteModal from "../utils/DeleteModal";
import { capitalizeFirstLetter } from "../utils/utils";

const InvoiceDetailsHeader = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  let badgeClass = "";
  let dotClass = "";
  switch (data[0]?.status) {
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
          <div className="flex items-center justify-between w-full md:justify-start md:w-max">
            <small className="text-neutral text-xs">Status</small>
            <div
              className={`${badgeClass} ml-4 flex items-center w-28 p-4 rounded-lg shadow-sm`}
            >
              <div className={`${dotClass} h-2 w-2 rounded-full mr-2`}></div>
              <small>{capitalizeFirstLetter(data[0]?.status)}</small>
            </div>
          </div>
          {user?.result?._id === data[0]?.creator ? (
            <div className="md:flex hidden">
              <button
                className="text-white text-xs font-bold px-6 py-4 rounded-full transition bg-borderOne hover:bg-gray-200 hover:text-borderOne"
                onClick={() => setOpenForm(!openForm)}
              >
                Edit
              </button>
              <button
                className="text-white text-xs font-bold px-6 py-4 rounded-full bg-buttonOne hover:bg-red-400 transition mx-3"
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
        </div>
        {showModal && (
          <DeleteModal
            invoiceId={data[0]._id}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
        {openForm ? (
          <CreateInvoice
            invoice={data[0]}
            openForm={openForm}
            setOpenForm={setOpenForm}
          />
        ) : null}
      </>
    );
  }
  return null;
};

export default InvoiceDetailsHeader;
