"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const SidebarDropdown = ({
  label,
  icon: Icon,
  items,
  pathname,
  closeSidebar,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li>
      <button
        type="button"
        className={`flex items-center w-full p-2 text-base transition duration-75 rounded-lg ${
          items.some((item) => pathname.includes(item.href))
            ? "bg-extends-minion-yellow text-extends-dark-charcoal"
            : "text-extends-minion-yellow hover:bg-extends-minion-yellow hover:text-extends-dark-charcoal"
        }`}
        onClick={toggleDropdown}
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span className="flex-1 ms-3 text-left whitespace-nowrap">{label}</span>
        <FaChevronDown
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <ul className={`${isOpen ? "block" : "hidden"} py-2 space-y-2`}>
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={pathname === item.href}
            closeSidebar={closeSidebar}
          />
        ))}
      </ul>
    </li>
  );
};

export default SidebarDropdown;
