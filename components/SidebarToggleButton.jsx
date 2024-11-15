"use client";

import React from "react";
import { FaBars } from "react-icons/fa";

const SidebarToggleButton = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("separator-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("-translate-x-full");
    }
  };

  return (
    <button
      onClick={toggleSidebar}
      type="button"
      className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-extends-minion-yellow rounded-lg sm:hidden hover:text-extends-dark-charcoal hover:bg-extends-minion-yellow focus:outline-none focus:ring-2 focus:ring-extends-dark-charcoal"
    >
      <span className="sr-only">Open sidebar</span>
      <FaBars className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default SidebarToggleButton;
