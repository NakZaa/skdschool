import { ReactElement } from "react"

import { Metadata } from "next"

import Head from "next/head"
import { useRouter } from "next/router"

export interface DescribeRouteProps {
  title: string
  description: string
  imgURL?: string
  children?: ReactElement
}

export default function DescribeRoute({
  title,
  description,
  imgURL,
  children,
}: DescribeRouteProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content="Siam Kid D School" />
        <meta name="description" content={description} />
        <meta name="manifest" content="/manifest.json" />
        <meta name="author" content="Nak" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.basePath} />
        <meta property="og:title" content="Siam Kid D School" />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="th_TH" />
        {imgURL && <meta property="og:image" content={imgURL} />}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={router.basePath} />
        <meta property="twitter:title" content="Siam Kid D School" />
        <meta property="twitter:description" content={description} />
        {imgURL && <meta property="twitter:image" content={imgURL} />}
      </Head>
      {children}
    </>
  )
}