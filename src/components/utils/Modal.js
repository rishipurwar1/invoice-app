import React from "react";

const Modal = ({ setShowModal, text }) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-2xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none">
            <small
              className="absolute top-3 right-3 font-bold text-base cursor-pointer text-black"
              onClick={() => setShowModal(false)}
            >
              X
            </small>
            {/* body */}
            <div className="relative flex-auto">
              <p className="my-6 text-gray-500 text-center text-lg leading-relaxed">
                Oops! You&apos;re not Logged In! 😔
              </p>
              <p className="my-6 text-gray-800 text-center text-lg leading-relaxed">
                {text}
              </p>
            </div>
            {/* footer */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
