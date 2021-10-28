import React from "react";
import "./App.css";
import "./assets/output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense } from "react";
import { getInvoices } from "./actions/invoices";
import Sidebar from "./components/layouts/Sidebar";

// custom components
const Dashboard = React.lazy(() => import("./components/dashboard/Dashboard"));
const CreateInvoice = React.lazy(() =>
  import("./components/invoice/CreateInvoice")
);
const InvoiceDetails = React.lazy(() =>
  import("./components/invoice/InvoiceDetails")
);
const Auth = React.lazy(() => import("./components/authForm/Auth"));

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);
  return (
    <Router>
      <div className="App grid grid-cols-1 md:grid-cols-body grid-rows-mobile md:grid-rows-1 gap-16 md:gap-0 bg-primaryTwo font-display">
        <Sidebar />
        <Switch>
          <Suspense fallback={<div>Loading..</div>}>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <CreateInvoice />
            </Route>
            <Route path="/invoice/:id">
              <InvoiceDetails />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
