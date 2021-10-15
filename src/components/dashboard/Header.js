import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterInvoices, getInvoices } from "../../actions/invoices";
import iconPlus from "../../assets/images/icon-plus.svg";
import Modal from "../utils/Modal";

const options = [
  { name: "Paid", value: "paid" },
  { name: "Pending", value: "pending" },
  { name: "Draft", value: "draft" },
];

const Header = ({ openForm, setOpenForm }) => {
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const invoices = useSelector((state) => state.invoices);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const handleClick = () => {
    if (user?.result?.name) {
      setOpenForm(!openForm);
    } else {
      setShowModal(true);
    }
  };

  const handleOnChange = (position) => {
    options.forEach((option, index) => {
      if (position === index) {
        if (option.checked) {
          option.checked = false;
          dispatch(getInvoices());
        } else {
          option.checked = true;
          dispatch(filterInvoices(option.value));
        }
      } else {
        option.checked = false;
      }
    });
  };
  return (
    <>
      <div className="col-start-2 col-end-3 flex justify-between items-center w-full mb-14">
        <h1 className="text-white text-3xl font-bold">
          Invoices
          <p className="text-xs font-extralight tracking-wide text-neutral">{`There are ${invoices.length} total invoices.`}</p>
        </h1>
        <div className="flex relative">
          <button
            className="text-white text-xs font-bold"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter by status{" "}
            <i className="fas fa-chevron-down text-secondaryTwo pl-2"></i>
          </button>
          {showFilter && (
            <ul className="absolute top-14 -left-5 shadow-xl bg-primaryOne rounded-md py-5 pb-2 px-6 transition">
              {options.map(({ name, value, checked }, index) => {
                return (
                  <div key={index}>
                    <li className="flex mb-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        value={value}
                        onChange={() => {
                          handleOnChange(index);
                        }}
                        name={value}
                        id={value}
                        onClick={() => setShowFilter(!showFilter)}
                        className="mr-4 mt-0.5 w-4 h-4 border cursor-pointer border-transparent hover:border-purple-500"
                      />
                      <span className="text-xs text-white font-bold self-center pr-8">
                        {name}
                      </span>
                    </li>
                  </div>
                );
              })}
            </ul>
          )}
          <button
            className="text-white text-xs font-semibold flex bg-secondaryTwo hover:bg-purple-500 transition px-2 py-2 pr-4 ml-4 rounded-full items-center"
            onClick={() => handleClick()}
          >
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white mr-2">
              <img src={iconPlus} alt="add new invoice" />
            </div>
            New Invoice
          </button>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
