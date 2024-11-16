"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { FaSquareRootVariable } from "react-icons/fa6";
import SidebarToggleButton from "./SidebarToggleButton";

const SidebarComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
                className={`flex items-center p-2 rounded-lg ${
                  pathname === "/"
                    ? "bg-extends-minion-yellow text-extends-dark-charcoal"
                    : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                }`}
                onClick={closeSidebar}
              >
                <FaHome
                  className={`w-5 h-5 transition duration-75 ${
                    pathname === "/"
                      ? "text-extends-dark-charcoal"
                      : "text-extends-minion-yellow"
                  }`}
                />
                <span className="ms-3">Home</span>
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li>
              <button
                type="button"
                className={`flex items-center w-full p-2 text-base transition duration-75 rounded-lg group ${
                  pathname.includes("variables")
                    ? "bg-extends-minion-yellow text-extends-dark-charcoal"
                    : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                }`}
                aria-controls="dropdown-example"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <FaSquareRootVariable
                  className={`flex-shrink-0 w-5 h-5 transition duration-75 ${
                    pathname.includes("variables")
                      ? "text-extends-dark-charcoal"
                      : "text-extends-minion-yellow"
                  }`}
                />
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
                    className={`flex items-center w-full p-2 pl-11 rounded-lg ${
                      pathname === "/products"
                        ? "bg-extends-minion-yellow text-extends-dark-charcoal"
                        : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                    }`}
                    onClick={closeSidebar}
                  >
                    Variable Declarations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/billing"
                    className={`flex items-center w-full p-2 pl-11 rounded-lg ${
                      pathname === "/billing"
                        ? "bg-extends-minion-yellow text-extends-dark-charcoal"
                        : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                    }`}
                    onClick={closeSidebar}
                  >
                    Hoisting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/invoice"
                    className={`flex items-center w-full p-2 pl-11 rounded-lg ${
                      pathname === "/invoice"
                        ? "bg-extends-minion-yellow text-extends-dark-charcoal"
                        : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                    }`}
                    onClick={closeSidebar}
                  >
                    Variable Naming Rules
                  </Link>
                </li>
                <li>
                  <Link
                    href="/invoice"
                    className={`flex items-center w-full p-2 pl-11 rounded-lg ${
                      pathname === "/invoice"
                        ? "bg-extends-minion-yellow text-extends-dark-charcoal"
                        : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
                    }`}
                    onClick={closeSidebar}
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
