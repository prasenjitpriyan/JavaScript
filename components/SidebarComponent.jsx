"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { FaSquareRootVariable } from "react-icons/fa6";
import SidebarToggleButton from "./SidebarToggleButton";

const SidebarComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the sidebar
  const closeSidebar = () => {
    const sidebar = document.getElementById("separator-sidebar");
    if (sidebar) {
      sidebar.classList.add("-translate-x-full");
    }
  };

  return (
    <section className="flex">
      {/* Toggle Button */}
      <SidebarToggleButton />

      {/* Sidebar */}
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 min-h-screen transition-transform -translate-x-full sm:translate-x-0 bg-extends-dark-charcoal"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* Home Link */}
            <li>
              <Link
                href="/"
                onClick={closeSidebar}
                className="flex items-center p-2 text-extends-minion-yellow rounded-lg hover:bg-extends-minion-yellow group"
              >
                <FaHome className="w-5 h-5 text-extends-minion-yellow transition duration-75 group-hover:text-extends-dark-charcoal" />
                <span className="ms-3 group-hover:text-extends-dark-charcoal">
                  Home
                </span>
              </Link>
            </li>

            {/* E-commerce Dropdown */}
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-extends-minion-yellow transition duration-75 rounded-lg group hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                aria-controls="dropdown-example"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <FaSquareRootVariable className="flex-shrink-0 w-5 h-5 text-extends-minion-yellow transition duration-75 group-hover:text-extends-dark-charcoal" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  All About Variables
                </span>
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul
                id="dropdown-example"
                className={`${isDropdownOpen ? "block" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="/products"
                    onClick={closeSidebar}
                    className="flex items-center w-full p-2 text-extends-minion-yellow transition duration-75 rounded-lg pl-11 group hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                  >
                    Variable Declarations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/billing"
                    onClick={closeSidebar}
                    className="flex items-center w-full p-2 text-extends-minion-yellow transition duration-75 rounded-lg pl-11 group hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                  >
                    Hoisting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/invoice"
                    onClick={closeSidebar}
                    className="flex items-center w-full p-2 text-extends-minion-yellow transition duration-75 rounded-lg pl-11 group hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                  >
                    Variable Naming Rules
                  </Link>
                  <Link
                    href="/invoice"
                    onClick={closeSidebar}
                    className="flex items-center w-full p-2 text-extends-minion-yellow transition duration-75 rounded-lg pl-11 group hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                  >
                    Variable Scopes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default SidebarComponent;
