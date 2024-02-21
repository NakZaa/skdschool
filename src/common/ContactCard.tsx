import { ComponentProps } from "react"

import Link from "next/link"

import { motion } from "framer-motion"

export const ContactCard = ({
  title,
  description,
  link,
  Icon,
}: {
  title: string
  description: string
  link: string
  Icon: (_props: ComponentProps<"svg">) => JSX.Element
}) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <article className="relative rounded-lg bg-white py-6 text-center">
        <div className="absolute -top-6 left-1/2 inline-block -translate-x-1/2 rounded-full bg-skd-primary-600 p-3 shadow-lg transition-all hover:scale-110 hover:bg-skd-primary-300">
          <Icon className="h-10 w-10 text-white" />
        </div>
        <div className="flex flex-col items-center justify-center px-12 py-6 text-center">
          <h3 className="mb-4 pt-4 text-xl font-semibold">{title}</h3>
          <p className="whitespace-pre-wrap">{description}</p>
        </div>
      </article>
    </Link>
  )
}
