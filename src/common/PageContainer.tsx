import { ReactNode } from "react"

import { useRouter } from "next/router"

import { motion } from "framer-motion"

import DescribeRoute, { DescribeRouteProps } from "./DescribeRoute"
import Footer from "./Footer"
import NavBar from "./Nav"

export default function PageContainer({
  title,
  description,
  imgURL,
  children,
}: DescribeRouteProps) {
  const router = useRouter()

  return (
    <DescribeRoute imgURL={imgURL} title={title} description={description}>
      <div className="font-display">
        <div>
          <NavBar />
        </div>
        <motion.div initial="initial" animate="animate" key={router.pathname}>
          {children}
        </motion.div>
        <div>
          <Footer />
        </div>
      </div>
    </DescribeRoute>
  )
}
