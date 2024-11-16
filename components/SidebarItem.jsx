"use client";

import React from "react";
import Link from "next/link";

const SidebarItem = ({ href, label, icon: Icon, isActive, closeSidebar }) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center p-2 rounded-lg ${
          isActive
            ? "bg-extends-minion-yellow text-extends-dark-charcoal"
            : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
        }`}
        onClick={closeSidebar}
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span className="ms-3">{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
