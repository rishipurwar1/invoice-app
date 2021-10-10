import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "react-avatar";

const ProfileModal = ({ logout, user }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <div className="relative block">
      {user && (
        <Avatar
          name={user.result.name}
          size="50"
          round={true}
          onClick={() => setIsOpen(!isOpen)}
          className="block overflow-hidden focus:outline-none cursor-pointer"
        />
      )}
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
