import Image from "next/image"

import { ContactCard } from "@/common/ContactCard"
import PageContainer from "@/common/PageContainer"
import Turtle from "@/images/turtle.png"
import { Mail } from "@/svg/Mail"
import { Phone } from "@/svg/Phone"
import { Pin } from "@/svg/Pin"
import { FacebookLogo } from "@/svg/Socials"

export default function Contact() {
  return (
    <PageContainer
      title="Siam Kid D School"
      imgURL="/src/images/Default.png"
      description="Siam Kid D School Contacts"
    >
      <main className="flex min-h-screen flex-col items-center justify-start pt-24 sm:pt-12">
        <section className="mb-4 px-10 text-center">
          <p className="text-2xl font-semibold leading-[1] sm:text-4xl">
            <span className="block text-skd-primary-600">CONTACTS</span>
          </p>
        </section>

        <section className="w-full max-w-xl bg-white px-4 py-10">
          <h2 className=" text-center text-xl sm:text-2xl">
            <span className="text-skd-primary-600">How to Reach Us</span>
            <br />
            <span className="text-xl ">
              If you’d like to arrange a viewing of our school, contact us using
              the methods below.
            </span>
          </h2>
        </section>

        <section className="w-full bg-white p-6 sm:p-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-3">
            <ContactCard
              title="Address"
              description={`43/8-9 Thani Road, Nai Mueang, Buriram 31000 Thailand`}
              link="https://maps.app.goo.gl/nK9X814XjuFv1iGf7"
              Icon={Pin}
            />
            <ContactCard
              title="Phone"
              description={`044 602 070`}
              link="tel:+6644602070"
              Icon={Phone}
            />
            <ContactCard
              title="Facebook"
              description={`SiamKidDSchool`}
              link="https://www.facebook.com/SiamKidDSchool"
              Icon={FacebookLogo}
            />
          </div>
        </section>

        <section className="relative flex w-full justify-center overflow-hidden pb-5 pt-10 sm:pb-0">
          <Image
            src={Turtle}
            alt="Siam Kid D School"
            priority
            className="z-10 min-w-0 max-w-[35vh] sm:max-w-[80vh]"
          />
        </section>
      </main>
    </PageContainer>
  )
}
