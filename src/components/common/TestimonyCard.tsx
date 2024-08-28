import { QuoteVector } from "@/svg/Quote"

export const TestimonyCard = (props: {
  title: string
  description: string
  role: string
}) => {
  const { title, description, role } = props

  return (
    <article className="relative rounded-lg bg-white p-3 py-4 text-center shadow-lg">
      <QuoteVector className="mx-auto mb-4" />
      <p className="flex h-auto items-center justify-center px-12 sm:h-48 md:h-28">
        {description}
      </p>
      <div className="flex items-center justify-center">
        <div className=" flex flex-col pt-4 text-center">
          <h3 className="font-semibold">{title}</h3>
          <span className="w-48 whitespace-pre-wrap text-skd-primary-600">
            {role}
          </span>
        </div>
      </div>
    </article>
  )
}
