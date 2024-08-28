import Image from "next/image"
import Link from "next/link"

import { JoinButton } from "@/components/common/Button"
import PageContainer from "@/components/common/PageContainer"
import { Video } from "@/components/common/YoutubePlayer"
import { Button } from "@/components/ui/button"
import Boat from "@/images/boat.png"
import Happy from "@/images/happy.png"

export default function Activities() {
  return (
    <PageContainer
      title="Siam Kid D School"
      imgURL="/og.png"
      description="Siam Kid D School. For more information please call 044 602 070."
    >
      <main className="flex min-h-screen flex-col items-center justify-start pt-24 sm:pt-12">
        <section className="mb-4 px-10 text-center">
          <p className="text-3xl font-bold leading-[1] sm:text-4xl">
            <span className="text-skd-primary-600 block">ACTIVITIES</span>
          </p>
        </section>

        <section className="relative flex w-full justify-center overflow-hidden pb-4 pt-10">
          <Image
            src={Happy}
            alt="Siam Kid D School"
            priority
            className="z-10 min-w-0 max-w-[80vh]"
          />
        </section>

        <section className="w-full bg-white py-4">
          <p className="mx-auto mb-8 max-w-xl px-10 text-center text-xl">
            Throughout the year, we organise a variety of activities and
            performances for both our students and our parents.
          </p>
          <p className="mx-auto mb-8 max-w-xl px-10 text-center text-xl">
            A lot of thought, preparation and hard work goes in to ensuring that
            we raise the bar higher every year.
          </p>
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-6 bg-white p-6 sm:p-12">
          <h2 className=" text-center text-xl sm:text-2xl">
            <span className="text-2xl font-medium">
              Siam Kid D School&apos;s
              <br />
              10th Year Anniversary Party
            </span>
          </h2>
          <Video src="https://www.youtube.com/embed/UxuSFlipUHs?si=jlMnJoRQkMiqrKa1" />
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-6 bg-white p-6 sm:p-12">
          <h2 className=" text-center text-xl sm:text-2xl">
            <span className="text-2xl font-medium">Annual Christmas Party</span>
          </h2>
          <Video src="https://www.youtube.com/embed/PUMKXerAOek?si=kipECo5kqvKZxjky" />
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-6 bg-white p-6 sm:p-12">
          <h2 className=" text-center text-xl sm:text-2xl">
            <span className="text-2xl font-medium">
              The Buriram City Pillar Shrine
            </span>
          </h2>
          <Video src="https://www.youtube.com/embed/HDtZTA_qGrA?si=SfiTCE8wvLA-LJQs" />
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-6 bg-white p-6 sm:p-12">
          <h2 className=" text-center text-xl sm:text-2xl">
            <span className="text-2xl font-medium">Children&apos;s Day</span>
          </h2>
          <Video src="https://www.youtube.com/embed/nY-PUgFL56c?si=ffKvvK_vIORaTirO" />
        </section>

        <section className="relative flex w-full justify-center overflow-hidden pt-10">
          <Image
            src={Boat}
            alt="Siam Kid D School"
            priority
            className="z-10 min-w-0 max-w-[100vh]"
          />
        </section>

        <section className="flex w-full flex-col justify-center bg-gray-100 px-16 py-20 text-center">
          <p className="font-semibold leading-tight">
            <span className="text-skd-primary-600 text-2xl sm:text-4xl">
              Interested?
            </span>
          </p>
          <div className="mt-4">
            <JoinButton>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">JOIN US</Link>
              </Button>
            </JoinButton>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}
