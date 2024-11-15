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
    <main className="flex">
      {/* Toggle Button */}
      <SidebarToggleButton />

      {/* Sidebar */}
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                onClick={closeSidebar}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default SidebarComponent;
