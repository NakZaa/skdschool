import { useMemo } from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Logo from "@/images/Default.png"

import { Button } from "../ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
]

export default function Footer() {
  const currentYear = useMemo(() => +new Date().getFullYear(), [])

  const phone = "+6644602070"

  const pathname = usePathname()
  const location = useMemo(() => {
    return pathname?.split("/")[1]
  }, [pathname])

  return (
    <footer
      className="flex w-full flex-col items-center bg-white px-10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex w-full max-w-5xl flex-col items-center">
        <div className="font-display flex w-full max-w-md flex-col items-center justify-between space-y-3 p-8 md:flex-row md:space-y-0">
          {navigation.map((item) => (
            <Button key={item.name} variant="link">
              <Link
                href={item.href}
                className={`text-md font-medium ${
                  `/${location}` == item.href
                    ? "text-skd-primary-600 hover:text-skd-primary-300"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex w-full justify-center border-t-[0.5px]">
          <div className="flex max-w-sm flex-col items-center gap-2 py-8">
            <Link href="/">
              <Image src={Logo} width={50} height={50} alt="SKD Logo" />
            </Link>
            <div className="text-xl font-bold">SIAM KID D SCHOOL</div>
            <p className="text-center text-sm">
              43/8-9 Thani Road, Nai Mueang, Buriram 31000 Thailand <br />
              <a href={`tel:${phone}`} className="text-base">
                Tel: 044602070
              </a>
            </p>
            <div className="w-full pt-4 text-center text-sm font-medium leading-4 text-gray-500 ">
              © {currentYear} SIAM KID D SCHOOL. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
