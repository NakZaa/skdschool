import { UrlObject } from "url"

import * as React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { motion } from "framer-motion"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "block",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const itemNames = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
]

export const MenuItem = () => {
  const pathname = usePathname()
  const location = React.useMemo(() => {
    return pathname?.split("/")[1]
  }, [pathname])

  return (
    <>
      {itemNames.map((item: { name: string; href: string | UrlObject }) => (
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-5 flex cursor-pointer list-none flex-col items-center"
          key={item.name}
        >
          <Link
            key={item.name}
            href={item.href}
            className={`block px-3 py-2 text-xl  ${
              `/${location}` == item.href
                ? " font-medium text-black"
                : "text-gray-400 "
            }`}
          >
            {item.name}
          </Link>
        </motion.li>
      ))}
    </>
  )
}
