"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const linkBase =
    "block py-2 px-3 rounded md:p-0"

  const activeClass = "text-(--theme)"
  const inactiveClass =
    "text-heading hover:text-(--theme)"

  return (
    <nav className="bg-background fixed w-full z-20 top-0 border-b border-default py-2">
      <div className="page-container flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="text-xl text-heading font-semibold flex-none">
          {pathname !== "/" ? "arne rubehn" : ""}
        </Link>

        {/* Navigation */}
        <div
          className={`
            ${isOpen ? "block" : "hidden"}
            w-full md:block md:w-auto bg-background md:flex-none mt-40 md:mt-0
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-40 md:mt-0 p-4 md:p-0 border md:border-0 rounded-base bg-neutral-secondary-soft">
            
            <li>
              <Link
                href="/"
                className={`${linkBase} ${
                  pathname === "/" ? activeClass : inactiveClass
                }`}
                onClick={() => setIsOpen(false)}
              >
                home
              </Link>
            </li>

            <li>
              <Link
                href="/news"
                className={`${linkBase} ${
                  pathname.startsWith("/news")
                    ? activeClass
                    : inactiveClass
                 }`
            }
            onClick={() => setIsOpen(false)}
              >
                news
              </Link>
            </li>

            <li>
              <Link
                href="/publications"
                className={`${linkBase} ${
                  pathname.startsWith("/publications")
                    ? activeClass
                    : inactiveClass
                 }`
            }
            onClick={() => setIsOpen(false)}
              >
                publications
              </Link>
            </li>

            <li>
              <Link
                href="/talks"
                className={`${linkBase} ${
                  pathname.startsWith("/talks")
                    ? activeClass
                    : inactiveClass
                 }`
            }
            onClick={() => setIsOpen(false)}
              >
                talks
              </Link>
            </li>

            <li>
              <Link
                href="/teaching"
                className={`${linkBase} ${
                  pathname.startsWith("/teaching")
                    ? activeClass
                    : inactiveClass
                 }`
            }
            onClick={() => setIsOpen(false)}
              >
                teaching
              </Link>
            </li>

            <li>
              <Link
                href="/cv"
                className={`${linkBase} ${
                  pathname.startsWith("/cv")
                    ? activeClass
                    : inactiveClass
                 }`
            }
            onClick={() => setIsOpen(false)}
              >
                cv
              </Link>
            </li>

          </ul>
        </div>

          {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 md:hidden rounded-base hover:bg-neutral-secondary-soft"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
      </div>
    </nav>
  )
}