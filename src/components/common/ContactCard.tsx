import { ComponentProps } from "react"

import Link from "next/link"

import { Button } from "../ui/button"

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
        <Button className="h-full rounded-full p-4 transition-all hover:scale-110">
          <Icon className="h-10 w-10 text-white" />
        </Button>
        <div className="flex flex-col items-center justify-center px-12 py-6 text-center">
          <h3 className="mb-4 pt-4 text-xl font-semibold">{title}</h3>
          <p className="whitespace-pre-wrap">{description}</p>
        </div>
      </article>
    </Link>
  )
}
