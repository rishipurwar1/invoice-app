import React from "react";
import moment from "moment";

const InvoiceCardDetails = ({ data }) => {
  if (data.length > 0) {
    return (
      <div className="bg-primaryOne rounded-md mt-6 p-6">
        <div className="flex justify-between">
          <div>
            <h1 className="text-white text-base font-bold">
              <span className="text-secondaryThree">#</span>
              {data[0]._id.substring(data[0]._id.length - 6)}
            </h1>
            <small className="text-neutral text-xs">
              {data[0].description}
            </small>
          </div>
          <address className="text-neutral text-xs not-italic text-left">
            <p className="text-neutral text-xs text-right">
              {data[0].streetAddress}
            </p>
            <p className="text-neutral text-xs text-right">{data[0].city}</p>
            <p className="text-neutral text-xs text-right">
              {data[0].postCode}
            </p>
            <p className="text-neutral text-xs text-right">{data[0].country}</p>
          </address>
        </div>
        <div className="flex justify-between my-10">
          <div>
            <div>
              <small className="text-neutral text-xs">Invoice Date</small>
              <h2 className="text-sm text-white font-bold">
                {moment(data[0].createdAt).format("MMM Do YY")}
              </h2>
            </div>
            <div className="mt-5">
              <small className="text-neutral text-xs">Payment Due</small>
              <h2 className="text-sm text-white font-bold">
                {moment(data[0].paymentDue).format("MMM Do YY")}
              </h2>
            </div>
          </div>
          <address className="text-neutral not-italic">
            <div>
              <small className="text-neutral text-xs">Bill To</small>
              <h2 className="text-sm text-white font-bold">
                {data[0].clientName}
              </h2>
            </div>
            <div className="mt-2">
              <p className="text-neutral text-xs">
                {data[0].clientStreetAddress}
              </p>
              <p className="text-neutral text-xs">{data[0].clientCity}</p>
              <p className="text-neutral text-xs">{data[0].clientPostCode}</p>
              <p className="text-neutral text-xs">{data[0].clientCountry}</p>
            </div>
          </address>
          <div>
            <small className="text-neutral text-xs">Sent to</small>
            <h2 className="text-sm text-white font-bold">
              {data[0].clientEmail}
            </h2>
          </div>
        </div>
        <div className="bg-borderOne rounded-lg overflow-hidden">
          <table className="w-full border-separate pt-8 border-spacing-px">
            <thead>
              <tr className="mb-5">
                <th className="text-left pl-6 pb-6 text-neutral font-medium text-xs">
                  Item Name
                </th>
                <th className="text-left pb-6 text-neutral font-medium text-xs">
                  QTY.
                </th>
                <th className="text-right pb-6 text-neutral font-medium text-xs">
                  Price
                </th>
                <th className="text-right pr-6 pb-6 text-neutral font-medium text-xs">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {data[0].invoices.map((item, index) => (
                <tr key={index}>
                  <td className="text-left pl-6 pb-6 text-neutral font-medium text-xs">
                    {item.name}
                  </td>
                  <td className="text-left pb-6 text-neutral font-medium text-xs">
                    {item.quantity}
                  </td>
                  <td className="text-right pb-6 text-neutral font-medium text-xs">
                    ${item.price}
                  </td>
                  <td className="text-right pr-6 pb-6 text-neutral font-medium text-xs">
                    ${item.total}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-black text-neutral">
              <tr>
                <td className="py-8 pl-6 font-bold text-xs">Amount Due</td>
                <td></td>
                <td></td>
                <td className="text-right pr-6 text-2xl font-bold">
                  ${data[0].total}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  } else {
    return <h1 className="text-white text-center">Loading....</h1>;
  }
};

export default InvoiceCardDetails;
