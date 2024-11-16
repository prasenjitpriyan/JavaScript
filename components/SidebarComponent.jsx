'use client'

import React from 'react'
import SidebarToggleButton from './SidebarToggleButton'
import SidebarItem from './SidebarItem'
import SidebarDropdown from './SidebarDropdown'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaSquareRootVariable } from 'react-icons/fa6'

const SidebarComponent = () => {
  const pathname = usePathname()

  const closeSidebar = () => {
    const sidebar = document.getElementById('separator-sidebar')
    if (sidebar) {
      sidebar.classList.add('-translate-x-full')
    }
  }

  return (
    <section className="flex">
      <SidebarToggleButton />
      <aside
        id="separator-sidebar"
        className="fixed left-0 top-0 z-40 w-64 min-h-screen -translate-x-full transition-transform bg-dark-charcoal sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto px-3 py-4">
          <ul className="space-y-2 font-medium">
            {/* Static Sidebar Items */}
            <SidebarItem
              href="/"
              label="Home"
              icon={FaHome}
              isActive={pathname === '/'}
              closeSidebar={closeSidebar}
            />

            {/* Dropdown for "Introduction" */}
            <SidebarDropdown
              label="Introduction"
              icon={BiLogoJavascript}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/introduction/variable-declarations',
                  label: 'Variable Declarations'
                },
                { href: '/introduction/hoisting', label: 'Hoisting' }
              ]}
            />

            {/* Dropdown for "All About Variables" */}
            <SidebarDropdown
              label="All About Variables"
              icon={FaSquareRootVariable}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/variables/naming-rules',
                  label: 'Variable Naming Rules'
                },
                { href: '/variables/scopes', label: 'Variable Scopes' }
              ]}
            />
          </ul>
        </div>
      </aside>
    </section>
  )
}

export default SidebarComponent
