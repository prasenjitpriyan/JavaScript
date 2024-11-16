'use client'

import React from 'react'
import Link from 'next/link'

const SidebarItem = ({ href, label, icon: Icon, isActive, closeSidebar }) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center rounded-lg p-2 ${
          isActive
            ? 'bg-minion-yellow text-dark-charcoal'
            : 'text-minion-yellow hover:bg-minion-yellow hover:text-dark-charcoal'
        }`}
        onClick={closeSidebar}
      >
        {Icon && <Icon className="size-5" />}
        <span className="ms-3">{label}</span>
      </Link>
    </li>
  )
}

export default SidebarItem
