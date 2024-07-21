import React, { useState } from 'react';

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="col-span-12 md:col-span-12 lg:col-span-2 sticky top-0 w-1/">
      <ul className={`p-0 ${isNavOpen ? 'block' : 'hidden'} lg:block`}>
        <li className="border-b border-gray-200">
          <a href="#" className="flex items-center p-4 hover:bg-gray-100">
            <img
              src="https://boxigo.in//includes/img/customerDashboard/my_moves.png"
              className="w-6 h-6 mr-2"
              alt="My Moves"
            />
            <span>MY MOVES</span>
          </a>
        </li>
        <li className="border-b border-gray-200">
          <a href="#-profile" className="flex items-center p-4 hover:bg-gray-100">
            <img
              src="https://boxigo.in//includes/img/customerDashboard/my_profile.png"
              className="w-6 h-6 mr-2"
              alt="My Profile"
            />
            <span>MY PROFILE</span>
          </a>
        </li>
        <li className="border-b border-gray-200">
          <a href="#-and-movers-relocation-services/get-quote" className="flex items-center p-4 hover:bg-gray-100">
            <img
              src="https://boxigo.in//includes/img/customerDashboard/create_estimate.png"
              className="w-6 h-6 mr-2"
              alt="Get Quote"
            />
            <span>GET QUOTE</span>
          </a>
        </li>
        <li className="border-b border-gray-200">
          <button className="flex items-center p-4 w-full text-left hover:bg-gray-100">
            <img
              src="https://boxigo.in//includes/img/customerDashboard/logout.png"
              className="w-6 h-6 mr-2"
              alt="Logout"
            />
            <span>LOGOUT</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;