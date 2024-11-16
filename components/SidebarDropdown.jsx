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
        className={`flex w-full items-center rounded-lg p-2 text-base transition duration-75 ${
          items.some((item) => pathname.includes(item.href))
            ? "bg-minion-yellow text-dark-charcoal"
            : "text-minion-yellow hover:bg-minion-yellow hover:text-dark-charcoal"
        }`}
        onClick={toggleDropdown}
      >
        {Icon && <Icon className="h-5 w-5" />}
        <span className="ms-3 flex-1 whitespace-nowrap text-left">{label}</span>
        <FaChevronDown
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <ul className={`${isOpen ? "block" : "hidden"} space-y-2 py-2`}>
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
