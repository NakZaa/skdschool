import * as React from "react"

import { motion } from "framer-motion"

import { MenuItem } from "./MenuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => {
  return (
    <motion.ul
      variants={variants}
      className="absolute left-1/2 -translate-x-1/2 top-10 w-[230px] p-6"
    >
      <MenuItem />
    </motion.ul>
  )
}
