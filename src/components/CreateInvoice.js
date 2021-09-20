import React from 'react'
import { useForm, Controller, useFieldArray, FormProvider } from "react-hook-form";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Label from './Label';
import Input from './Input';
import Item from './Item';
// import { useDispatch } from 'react-redux';
// import { createInvoice } from '../actions/invoices';

const CreateInvoice = ({ openForm, setOpenForm }) => {
    const formMethods = useForm();
    const { register, control, handleSubmit } = formMethods;

    const { fields, append, remove } = useFieldArray({
        control,
        name: "invoices"
    });
    // const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        // dispatch(createInvoice(data));
    };
    return (
        <div className={`transition ${!openForm ? 'transform translate-x-full hidden' : '-translate-x-full'}`}>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen z-10" onClick={() => setOpenForm(!openForm)}></div>
            <div className="fixed top-0 left-0 z-20 ml-24">
                <FormProvider {...formMethods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-screen max-w-2xl h-screen bg-primaryTwo p-14">
                        <h1 className="text-white text-2xl font-bold mb-10">Create Invoice</h1>
                        <div className="overflow-scroll w-full h-full flex flex-col pr-7 content-area pb-10">
                            <small className="text-secondaryTwo font-bold text-xs">Bill Form</small>
                            <div>
                                <Label labelName="Street Address" />
                                <Input inputName="streetAddress" />
                            </div>
                            <div className="flex justify-between flex-wrap">
                                <div>
                                    <Label labelName="City" />
                                    <Input inputName="city" />
                                </div>
                                <div>
                                    <Label labelName="Post Code" />
                                    <Input inputName="postCode" />
                                </div>
                                <div>
                                    <Label labelName="Country" />
                                    <Input inputName="country" />
                                </div>
                            </div>
                            <small className="text-secondaryTwo font-bold text-xs mt-8">Bill To</small>
                            <div>
                                <Label labelName="Client Name" />
                                <Input inputName="clientName" />
                            </div>
                            <div>
                                <Label labelName="Client Email" />
                                <Input inputName="clientEmail" />
                            </div>
                            <div>
                                <Label labelName="Street Address" />
                                <Input inputName="clientStreetAddress" />
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div>
                                    <Label labelName="City" />
                                    <Input inputName="clientCity" />
                                </div>
                                <div>
                                    <Label labelName="Post Code" />
                                    <Input inputName="clientPostCode" />
                                </div>
                                <div>
                                    <Label labelName="Country" />
                                    <Input inputName="clientCountry" />
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
                                    <select className="w-full bg-primaryOne p-3 rounded-md shadow-md border border-borderOne focus:outline-none focus:border-secondaryOne transition text-white font-bold text-xs" name="Payments Term" id="Payments Term" {...register("Payments Term", { required: true })}>
                                        <option value="1">Next 1 Day</option>
                                        <option value="7">Next 7 Days</option>
                                        <option value="14">Next 14 Days</option>
                                        <option value="30">Next 30 Days</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <Label labelName="Descriptions" />
                                <Input inputName="descriptions" />
                            </div>
                            <p className="text-gray-500 text-lg mt-6 mb-2 font-bold">Item List</p>
                            <div>
                                {fields.map((invoice, index) => <Item key={invoice.id} index={index} remove={remove} />)}
                            </div>
                            <button className="w-full bg-borderOne hover:bg-primaryOne transition text-white border-none rounded-full mt-4 p-4 text-xs font-bold flex justify-center" onClick=
                                {e => {
                                    e.preventDefault();
                                    append({});
                                }}
                            >
                                <span className="font-semibold mr-1">+</span>Add New Item
                            </button>
                        </div>
                        <div className="flex justify-between py-4">jsx

                            <button className="rounded-full text-neutral text-xs bg-primaryOne outline-none px-8 py-4 font-bold" onClick={() => setOpenForm(!openForm)}>Discard</button>
                            <div className="pr-7">
                                <button className="rounded-full text-neutral text-xs bg-primaryOne outline-none px-8 py-4 font-bold">Save as Draft</button>
                                <input className="rounded-full text-neutral text-xs bg-secondaryTwo outline-none ml-2 px-8 py-4 font-bold" type="submit" value="Save & Send" />
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div >

        </div >
    )
}

export default CreateInvoice
