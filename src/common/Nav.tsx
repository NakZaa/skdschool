import { useMemo } from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Disclosure, Transition } from "@headlessui/react"
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"

import Logo from "@/images/Default.png"
import { useScrollPosition } from "@/utils/scrollPosition"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
]

export default function Nav() {
  const scrollPosition = useScrollPosition()
  const pathname = usePathname()

  const location = useMemo(() => {
    return pathname?.split("/")[1]
  }, [pathname])

  return (
    <Disclosure
      as="header"
      className={clsx(
        scrollPosition > 0
          ? "bg-skd-primary-600 sm:bg-transparent"
          : "sm:bg-transparent",
        "fixed left-0 top-0 z-50 w-full px-6 transition-all duration-150 ease-out sm:relative sm:py-4",
      )}
    >
      {({ open }) => (
        <>
          <div className="py-1">
            <nav
              className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-14"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center justify-between">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/" className="relative z-50 block py-2 sm:hidden">
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
                    <Link
                      href={item.href}
                      key={item.name}
                      className={`text-md font-medium ${
                        `/${location}` == item.href
                          ? "text-skd-primary-600 hover:text-skd-primary-300"
                          : "text-gray-500 hover:text-gray-600 "
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile menu */}
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className={clsx(
                          scrollPosition > 0 ? "text-white" : "text-black",
                          "block h-6 w-6 ",
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars2Icon
                        className={clsx(
                          scrollPosition > 0 ? "text-white" : "text-black",
                          "block h-6 w-6 ",
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </nav>
          </div>

          {/* {mobile menu} */}
          <Transition
            show={open}
            as="div"
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-y-full opacity-0"
            enterTo="-translate-y-0 opacity-100"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="-translate-y-0 opacity-100"
            leaveTo="-translate-y-full opacity-0"
            className="absolute left-0 z-10 flex min-h-screen w-full justify-center bg-white text-center sm:hidden"
          >
            <Disclosure.Panel as="div">
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
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
