import React from "react";
import InvoiceCard from "./InvoiceCard";
// import data from '../data.json'
import { useSelector } from "react-redux";
import SkeletonCard from "../skeletons/SkeletonCard";

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);
  return (
    <div className="text-white w-full">
      {invoices.length > 0
        ? invoices.map((cardData) => (
            <InvoiceCard data={cardData} key={cardData._id} />
          ))
        : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard key={n} />)}
    </div>
  );
};
export default Invoices;
