'use client'

import React from 'react'
import SidebarToggleButton from './SidebarToggleButton'
import SidebarItem from './SidebarItem'
import SidebarDropdown from './SidebarDropdown'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaSquareRootVariable } from 'react-icons/fa6'
import { MdOutlineDataThresholding } from 'react-icons/md'
import { VscTypeHierarchySub } from 'react-icons/vsc'
import { MdDataExploration } from 'react-icons/md'
import { LuCircleEqual } from 'react-icons/lu'
import { MdLoop } from 'react-icons/md'
import { TiFlowChildren } from 'react-icons/ti'

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
        <div
          className="h-full overflow-y-auto max-h-screen px-3 py-4 scroll-smooth pb-6"
          style={{
            scrollbarWidth: 'thin', // For Firefox
            scrollbarColor: '#323330 #323330' // Custom colors
          }}
        >
          <ul className="space-y-2 font-medium">
            <SidebarItem
              href="/"
              label="Home"
              icon={FaHome}
              isActive={pathname === '/'}
              closeSidebar={closeSidebar}
            />
            <SidebarDropdown
              label="Introduction"
              icon={BiLogoJavascript}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/introduction/javascript',
                  label: 'What is JavaScript'
                },
                {
                  href: '/introduction/history',
                  label: 'History of JavaScript'
                },
                {
                  href: '/introduction/versions',
                  label: 'JavaScript Versions'
                },
                { href: '/introduction/run', label: 'How to run JavaScript' }
              ]}
            />
            <SidebarDropdown
              label="All About Variables"
              icon={FaSquareRootVariable}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/variables/declarations',
                  label: 'Variable Declarations'
                },
                { href: '/variables/hoisting', label: 'Hoisting' },
                {
                  href: '/variables/naming-rules',
                  label: 'Variable Naming Rules'
                },
                { href: '/variables/scopes', label: 'Variable Scopes' }
              ]}
            />
            <SidebarDropdown
              label="Data Types"
              icon={MdOutlineDataThresholding}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/data-types/primitive-types',
                  label: 'Primitive Types'
                },
                { href: '/data-types/object', label: 'Object' }
              ]}
            />
            <SidebarDropdown
              label="Type Casting"
              icon={VscTypeHierarchySub}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/type-casting/conversion',
                  label: 'Type Conversion vs Coercion'
                },
                {
                  href: '/type-casting/implicit-type',
                  label: 'Implicit Type Casting'
                },
                {
                  href: '/type-casting/explicit-type',
                  label: 'Explicit Type Casting'
                }
              ]}
            />
            <SidebarDropdown
              label="Data Structures"
              icon={MdDataExploration}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/data-structure/keyed-collections',
                  label: 'Keyed Collections'
                },
                {
                  href: '/data-structure/indexed-collections',
                  label: 'Indexed Collections'
                },
                {
                  href: '/data-structure/structured-data',
                  label: 'Structured Data'
                }
              ]}
            />
            <SidebarDropdown
              label="Equality Comparisons"
              icon={LuCircleEqual}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/equality/comparison-operators',
                  label: 'Value Comparison Operators'
                },
                {
                  href: '/equality/equality-algorithms',
                  label: 'Equality Algorithms'
                }
              ]}
            />
            <SidebarItem
              href="/loops"
              label="Loops and Iterations"
              icon={MdLoop}
              isActive={pathname === '/loops'}
              closeSidebar={closeSidebar}
            />
            <SidebarDropdown
              label="Control Flow"
              icon={TiFlowChildren}
              pathname={pathname}
              closeSidebar={closeSidebar}
              items={[
                {
                  href: '/control-flow/conditional-statements',
                  label: 'Conditional Statements'
                },
                {
                  href: '/control-flow/exceptional-handling',
                  label: 'Exceptional Handling'
                }
              ]}
            />
          </ul>
        </div>
      </aside>
    </section>
  )
}

export default SidebarComponent
