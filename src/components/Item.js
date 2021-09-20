import React from 'react'
import Input from './Input'
import Label from './Label'

const Item = ({ index, remove }) => {

    return (
        <div className="flex justify-center items-end">
            <div className="w-3/5">
                <Label labelName="Item Name" />
                <Input inputName="inputName" />
            </div>
            <div className="w-2/12 mx-3">
                <Label labelName="Qty." />
                <Input inputName="quantity" />
            </div>
            <div className="w-1/3">
                <Label labelName="Price" />
                <Input inputName="price" />
            </div>
            <div className="mx-3">
                <Label labelName="Total" />
                <Input inputName="total" readOnly />
            </div>
            <button className="mb-4" aria-label="delete button" onClick={
                e => {
                    e.preventDefault();
                    remove(index);
                }}
            >
                <svg className="transition fill-current text-gray-400 hover:fill-current hover:text-red-400" width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fillRule="nonzero" /></svg></button>
        </div>
    )
}

export default Item
