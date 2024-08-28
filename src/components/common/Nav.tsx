import { useMemo, useRef } from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import clsx from "clsx"
import { motion, useCycle } from "framer-motion"

import Logo from "@/images/Default.png"
import { useScrollPosition } from "@/utils/scrollPosition"

import { MenuToggle } from "./Button"
import { Navigation } from "./Navigation"
import { Button } from "../ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
]

const sidebar = {
  open: (height = 1000) => ({
    display: "block",
    clipPath: `circle(2200px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    display: "none",
    clipPath: "circle(30px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function Nav() {
  const scrollPosition = useScrollPosition()
  const pathname = usePathname()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)

  const location = useMemo(() => {
    return pathname?.split("/")[1]
  }, [pathname])

  return (
    <header
      className={clsx(
        scrollPosition > 0
          ? "bg-skd-primary-600/75 sm:bg-transparent"
          : "sm:bg-transparent",
        "fixed left-0 top-0 z-40 w-full px-6 transition-all duration-150 ease-out sm:relative sm:py-4",
      )}
    >
      <>
        <div className="py-1">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-14"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center justify-between">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link
                  href="/"
                  className="relative z-50 -ml-3 block pb-2 pt-1.5 sm:hidden"
                >
                  <Image src={Logo} width={45} height={45} alt="SKD" />
                </Link>
                <Link
                  href="/"
                  className="hidden h-auto w-full sm:flex sm:justify-center"
                >
                  <Image src={Logo} width={60} height={60} alt="SKD" />
                </Link>
              </div>

              <div className="hidden items-center space-x-8 md:ml-10 md:flex">
                {navigation.map((item) => (
                  <Button key={item.name} variant='link'>
                    <Link
                      href={item.href}
                      className={`text-md font-medium ${
                        `/${location}` == item.href
                          ? "text-skd-primary-600 hover:text-skd-primary-300"
                          : "text-gray-500 hover:text-gray-600 "
                      }`}
                    >
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>

              {/* Mobile menu */}
              <div className="relative -mr-2 flex items-center sm:hidden">
                <motion.div
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  className="absolute bottom-0 left-0 right-0 top-0 z-50 w-[300px]"
                  ref={containerRef}
                >
                  <motion.div
                    className="absolute bottom-0 right-0 top-0 z-50 w-[300px] bg-white"
                    variants={sidebar}
                  />
                  <MenuToggle toggle={() => toggleOpen()} />
                </motion.div>
                {/* Mobile menu button */}
                {/* <button className="inline-flex items-center justify-center rounded-md p-2focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <motion.div
                        animate
                        className="top-18 right-15 absolute h-[50px] w-[50px] cursor-pointer "
                      >
                        <button>
                          <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            d="M 3 16.5 L 17 2.5"
                          />
                          <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            d="M 2 9.423 L 20 9.423"
                            opacity="0"
                            transition={{ duration: 0.1 }}
                          />
                          <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            d="M 3 2.5 L 17 16.346"
                          />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        animate
                        className="top-18 right-15 absolute h-[50px] w-[50px] cursor-pointer "
                      >
                        <button>
                          <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            d="M 2 2.5 L 20 2.5"
                          />
                          <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            d="M 2 9.423 L 20 9.423"
                            opacity="1"
                            transition={{ duration: 0.1 }}
                          />
                          <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            d="M 2 16.346 L 20 16.346"
                          />
                        </button>
                      </motion.div>
                      // <XMarkIcon
                      //   className={clsx(
                      //     scrollPosition > 0 ? "text-white" : "text-black",
                      //     "block h-6 w-6 ",
                      //   )}
                      //   aria-hidden="true"
                      // />
                      // <Bars2Icon
                      //   className={clsx(
                      //     scrollPosition > 0 ? "text-white" : "text-black",
                      //     "block h-6 w-6 ",
                      //   )}
                      //   aria-hidden="true"
                      // />
                    )}
                  </button> */}
              </div>
            </div>
          </nav>
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="absolute left-0 z-10 flex w-full justify-center  text-center sm:hidden"
          ref={containerRef}
        >
          <motion.div
            variants={sidebar}
            className="min-h-screen w-full bg-white"
          />
          <Navigation />
        </motion.nav>
        {/* {mobile menu} */}
        {/* <div className="absolute left-0 z-10 flex min-h-screen w-full justify-center bg-white text-center sm:hidden">
          <div>
            <div className="space-y-4 pb-4 pt-4">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={`block px-3 py-2 text-xl  ${
                    `/${location}` == item.href
                      ? " font-medium text-black"
                      : "text-gray-400 "
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div> */}
      </>
    </header>
  )
}
