import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  useForm,
  Controller,
  useFieldArray,
  FormProvider,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from "./Label";
import Input from "./Input";
import Item from "./Item";
import moment from "moment";
import { useDispatch } from "react-redux";
import { createInvoice, updateInvoice } from "../actions/invoices";

const CreateInvoice = ({ openForm, setOpenForm, invoice }) => {
  let history = useHistory();
  const formMethods = useForm();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = formMethods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "invoices",
  });

  const dispatch = useDispatch();

  // submit handler
  const onSubmit = (data) => {
    if (invoice) {
      dispatch(updateInvoice(invoice._id, data));
      setOpenForm(!openForm);
      history.push("/");
      reset("", {
        keepValues: false,
      });
    } else {
      data.status = "pending";
      dispatch(createInvoice(data));
      setOpenForm(!openForm);
      history.push("/");
      //   reset('', {
      //     keepValues: false,
      // })
    }
  };

  useEffect(() => {
    if (invoice) {
      for (const key in invoice) {
        switch (key) {
          case "paymentDue":
            setValue(key, moment(invoice[key]).toDate());
            break;
          case "createdAt":
            setValue(key, moment(invoice[key]).toDate());
            break;
          case "updatedAt":
            setValue(key, moment(invoice[key]).toDate());
            break;
          default:
            setValue(key, invoice[key]);
        }
      }
    }
  }, [invoice, setValue]);

  return (
    <div
      className={`transition ${
        !openForm ? "transform translate-x-full hidden" : "-translate-x-full"
      }`}
    >
      <div
        className="fixed top-0 left-0 flex items-center justify-center w-full h-screen z-10 bg-white bg-opacity-10"
        onClick={() => setOpenForm(!openForm)}
      ></div>
      <div className="fixed top-0 left-0 z-20 ml-24">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-screen max-w-2xl h-screen bg-primaryTwo p-14"
          >
            <h1 className="text-white text-2xl font-bold mb-10">
              Create Invoice
            </h1>
            <div className="overflow-scroll w-full h-full flex flex-col pr-7 content-area pb-10">
              <small className="text-secondaryTwo font-bold text-xs">
                Bill Form
              </small>
              <div>
                <Label labelName="Street Address" />
                <Input inputName="streetAddress" type="text" />
              </div>
              <div className="flex justify-between flex-wrap md:flex-nowrap">
                <div>
                  <Label labelName="City" />
                  <Input inputName="city" errors={errors} type="text" />
                </div>
                <div className="mx-2">
                  <Label labelName="Post Code" />
                  <Input inputName="postCode" type="text" appearance />
                </div>
                <div>
                  <Label labelName="Country" />
                  <Input inputName="country" type="text" />
                </div>
              </div>
              <small className="text-secondaryTwo font-bold text-xs mt-8">
                Bill To
              </small>
              <div>
                <Label labelName="Client Name" />
                <Input inputName="clientName" type="text" />
              </div>
              <div>
                <Label labelName="Client Email" />
                <Input inputName="clientEmail" type="email" />
              </div>
              <div>
                <Label labelName="Street Address" />
                <Input inputName="clientStreetAddress" type="text" />
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-between">
                <div>
                  <Label labelName="City" />
                  <Input inputName="clientCity" type="text" />
                </div>
                <div className="mx-2">
                  <Label labelName="Post Code" />
                  <Input inputName="clientPostCode" type="text" appearance />
                </div>
                <div>
                  <Label labelName="Country" />
                  <Input inputName="clientCountry" type="text" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2 mr-2">
                  <Label labelName="Invoice Date" />
                  <Controller
                    control={control}
                    name="paymentDue"
                    render={({ field }) => (
                      <DatePicker
                        className="w-full bg-primaryOne p-3 rounded-md shadow-md border border-borderOne focus:outline-none focus:border-secondaryOne transition text-white font-bold text-xs"
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <Label labelName="Payment Terms" />
                  <select
                    className="w-full bg-primaryOne p-3 rounded-md shadow-md border border-borderOne focus:outline-none focus:border-secondaryOne transition text-white font-bold text-xs"
                    name="paymentTerms"
                    id="paymentTerms"
                    {...register("paymentTerms", { required: true })}
                  >
                    <option value="1">Next 1 Day</option>
                    <option value="7">Next 7 Days</option>
                    <option value="14">Next 14 Days</option>
                    <option value="30">Next 30 Days</option>
                  </select>
                </div>
              </div>
              <div>
                <Label labelName="Descriptions" />
                <Input inputName="description" />
              </div>
              <p className="text-gray-500 text-lg mt-6 mb-2 font-bold">
                Item List
              </p>
              <div>
                {fields.map((invoice, index) => (
                  <Item
                    key={invoice.id}
                    index={index}
                    fieldId={`invoices.${index}`}
                    remove={remove}
                  />
                ))}
              </div>
              <button
                className="w-full bg-borderOne hover:bg-primaryOne transition text-white border-none rounded-full mt-4 p-4 text-xs font-bold flex justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  append({ name: "", quantity: "", price: "", total: 0 });
                }}
              >
                <span className="font-semibold mr-1">+</span>Add New Item
              </button>
            </div>
            <div className="flex justify-between py-4">
              jsx
              <button
                type="button"
                className="rounded-full text-neutral text-xs bg-primaryOne outline-none px-8 py-4 font-bold"
                onClick={() => setOpenForm(!openForm)}
              >
                Discard
              </button>
              <div className="pr-7">
                <button
                  type="button"
                  className="rounded-full text-neutral text-xs bg-primaryOne outline-none px-8 py-4 font-bold"
                >
                  Save as Draft
                </button>
                <button
                  className="rounded-full text-neutral text-xs bg-secondaryTwo outline-none ml-2 px-8 py-4 font-bold"
                  type="submit"
                >
                  Save & Send
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateInvoice;
