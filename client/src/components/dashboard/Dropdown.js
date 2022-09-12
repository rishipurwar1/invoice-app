import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterInvoices, getInvoices } from "../../actions/invoices";

const options = [
  { name: "Paid", value: "paid" },
  { name: "Pending", value: "pending" },
  { name: "Draft", value: "draft" },
];

const Dropdown = () => {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);

  const handleOnChange = (position) => {
    options.forEach((option, index) => {
      console.log(position, index);
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
            console.log(checked);
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
    </>
  );
};

export default Dropdown;
