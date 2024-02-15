import Image from "next/image"

export const FeatureCard = ({
  title,
  description,
  icon,
  width,
  height,
  alt,
}: {
  title: string
  description: string
  icon: any
  width: number
  height: number
  alt: string
}) => {
  return (
    <article className="relative rounded-lg bg-white py-6 text-center shadow-lg">
      <div className="absolute -top-10 left-1/2 inline-block -translate-x-1/2 ">
        <Image
          src={icon}
          width={width}
          height={height}
          alt={alt}
          className="z-10 min-w-0"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-12 py-4 text-center">
        <h3 className="mb-4 pt-4 text-xl font-semibold">{title}</h3>
        <p className="whitespace-pre-wrap font-light">{description}</p>
      </div>
    </article>
  )
}
