"use client"

import * as React from "react"

import Link from "next/link"
import { useRouter } from "next/router"

import clsx from "clsx"
import { SVGMotionProps, motion } from "framer-motion"

import { useScrollPosition } from "@/utils/scrollPosition"

export const JoinButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const onClick = () => {
    router.push("/contact")
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

export const ActivitiesButton = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const router = useRouter()
  const onClick = () => {
    router.push("/activities")
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={clsx(
      useScrollPosition() > 0 ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 18%)",
    )}
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({ toggle }: { toggle: () => any }) => (
  <button
    onClick={toggle}
    className="absolute -left-5 -top-2.5 flex h-[50px] w-[50px] cursor-pointer rounded-lg border-0 bg-transparent outline-0"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)
