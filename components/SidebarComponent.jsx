"use client";

import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import SidebarToggleButton from "./SidebarToggleButton";

const SidebarComponent = () => {
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
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default SidebarComponent;
