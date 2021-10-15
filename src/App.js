import "./App.css";
import "./assets/output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInvoices } from "./actions/invoices";

// custom components
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/layouts/Sidebar";
import CreateInvoice from "./components/invoice/CreateInvoice";
import InvoiceDetails from "./components/invoice/InvoiceDetails";
import Auth from "./components/authForm/Auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);
  return (
    <Router>
      <div className="App grid grid-cols-1 md:grid-cols-body grid-rows-mobile md:grid-rows-1 gap-16 md:gap-0 bg-primaryTwo font-display">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={CreateInvoice} />
          {/* <Route path="/edit/:id" component={UpdateInvoice} /> */}
          <Route path="/invoice/:id" component={InvoiceDetails} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
