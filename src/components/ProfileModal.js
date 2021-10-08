import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const ProfileModal = ({ logout, user }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  // console.log(user.result.imageUrl);
  return (
    <div className="relative block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block h-10 w-10 rounded-full overflow-hidden focus:outline-none"
      >
        <img
          className=" h-full w-full object-cover cursor-pointer"
          src={user?.result.imageUrl}
          alt="user profile"
        />
      </button>
      {isOpen && (
        <ul
          className="absolute -top-4 -right-40 p-2 mt-2 space-y-2 text-gray-300 bg-primaryOne rounded-md shadow-md"
          aria-label="sub-menu"
        >
          <li>
            <button
              disabled={loading}
              onClick={() => {
                logout();
                setIsOpen(!isOpen);
                history.push("/auth");
              }}
              className="block px-2 py-1 text-white"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileModal;
