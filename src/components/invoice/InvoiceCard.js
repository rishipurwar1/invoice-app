import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const InvoiceCard = ({ data }) => {
  let badgeClass = "";
  let dotClass = "";
  switch (data.status) {
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
  return (
    <Link
      to={`/invoice/${data._id}`}
      className="flex justify-between items-center w-full px-6 py-4 bg-primaryOne mb-4 rounded-lg shadow-md cursor-pointer transition border border-transparent hover:border-purple-500"
    >
      <div className="flex w-1/2 justify-between flex-col md:flex-row">
        <h2 className="text-white text-xs font-bold">
          <span className="text-secondaryThree">#</span>
          {data._id.substring(data._id.length - 6)}
        </h2>
        <small className="py-2 md:py-0 text-neutral text-xs font-extralight">{`Due ${moment(
          data.paymentDue
        ).format("MMM Do YY")}`}</small>
        <small className="text-xs font-extralight">{data.clientName}</small>
      </div>

      <div className="flex items-center flex-col md:flex-row">
        <small className="text-base font-bold pb-2 md:pb-0 md:pr-9">
          ${data.total}
        </small>
        <div
          className={`${badgeClass} flex items-center justify-center w-28 p-4 md:mr-4 rounded-lg shadow-sm`}
        >
          <div className={`${dotClass} h-2 w-2 rounded-full mr-2`}></div>
          <small>
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </small>
        </div>
        <i className="hidden md:inline-block fas fa-chevron-right text-xs text-purple-500"></i>
      </div>
    </Link>
  );
};

export default InvoiceCard;
