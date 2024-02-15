import { useMemo } from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Logo from "@/images/Default.png"
import { FacebookLogo } from "@/svg/Socials"

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
        <div className="font-display flex w-full max-w-md flex-col items-center justify-between space-y-6 p-8 md:flex-row md:space-y-0">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={`text-md font-medium ${
                `/${location}` == item.href
                  ? "text-skd-primary-600 hover:text-skd-primary-300"
                  : "text-gray-500 hover:text-gray-600 "
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full justify-center border-y-[0.5px]">
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
          </div>
        </div>
        <div className="flex w-full flex-col justify-center md:flex-row md:py-10">
          <div className="flex flex-col items-center justify-center space-x-4 space-y-4 border-b-[0.5px] py-6 md:flex-row md:space-y-0 md:border-none md:py-0">
            <div className="flex justify-center">
              <Link
                href="https://www.facebook.com/SiamKidDSchool/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookLogo className="text-[#64748B]" />
              </Link>
            </div>
            <div className="w-full text-center text-sm font-medium leading-4 text-gray-500 ">
              © {currentYear} SIAM KID D SCHOOL. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
