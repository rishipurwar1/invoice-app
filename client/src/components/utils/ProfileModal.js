import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "react-avatar";

const ProfileModal = ({ logout, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <div className="relative block">
      {user && (
        <div className="m-2">
          <Avatar
            name={user.result.name}
            size="50"
            round={true}
            onClick={() => setIsOpen(!isOpen)}
            className="block overflow-hidden focus:outline-none cursor-pointer"
          />
        </div>
      )}
      {isOpen && (
        <ul
          className="absolute right-2 top-20 md:-top-4 md:-right-40 p-2 mt-2 space-y-2 text-gray-300 bg-primaryOne rounded-md shadow-md"
          aria-label="sub-menu"
        >
          <li>
            <button
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
