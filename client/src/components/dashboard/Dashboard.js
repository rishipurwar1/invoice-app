import React, { useState } from "react";
import CreateInvoice from "../invoice/CreateInvoice";
import Header from "./Header";
import Invoices from "../invoice/Invoices";

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <main className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-2 row-end-3 md:row-start-1 md:row-end-2 flex flex-col items-center px-4 md:px-12 md:py-16 w-full max-w-3xl mx-auto">
      <Header openForm={openForm} setOpenForm={setOpenForm} />
      <Invoices />
      <CreateInvoice openForm={openForm} setOpenForm={setOpenForm} />
    </main>
  );
};

export default Dashboard;
