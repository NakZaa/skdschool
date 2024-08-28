import Image from "next/image"
import Link from "next/link"

import { ActivitiesButton, JoinButton } from "@/components/common/Button"
import { FeatureCard } from "@/components/common/FeatureCard"
import PageContainer from "@/components/common/PageContainer"
import { TestimonyCard } from "@/components/common/TestimonyCard"
import { Video } from "@/components/common/YoutubePlayer"
import { Button } from "@/components/ui/button"
import Bee from "@/images/bee.png"
import Candy from "@/images/candy.png"
import Cat from "@/images/cat.png"
import Fish from "@/images/fish.png"
import Kids from "@/images/kids.png"
import Pencil from "@/images/pencil.png"
import Stars from "@/images/stars.png"
import Trees from "@/images/tree.png"
import Rainbow from "@/images/rainbow.png"

import landingPic from "/src/images/Default.png"

const IndexPage = () => {
  return (
    <PageContainer
      title="Siam Kid D School"
      imgURL="/og.png"
      description="Siam Kid D School. For more information please call 044 602 070."
    >
      <main>
        <div className="flex min-h-screen flex-col items-center justify-start pt-24 sm:pt-12">
          <section className="px-10 text-center">
            <div className="text-2xl font-semibold leading-[1] sm:text-4xl">
              <h1 className=" block">
                WELCOME TO <br />
                <span className="text-skd-primary-600 text-3xl font-bold">
                  SIAM KID D SCHOOL
                </span>
              </h1>
            </div>
          </section>

          <section className="relative flex w-full justify-center overflow-hidden">
            <Image
              src={landingPic}
              alt="Siam Kid D School"
              priority
              className="z-10 min-w-0 max-w-[40vh]"
            />
          </section>

          <section className="flex items-center justify-center pb-8">
            <JoinButton>
              <Button size="lg" className="w-full gap-2 px-10 py-6 text-2xl" asChild>
                <Link href="/contact">Join us</Link>
              </Button>
            </JoinButton>
          </section>

          <section className="w-full bg-white pb-4">
            <p className="mx-auto mb-8 max-w-xl px-10 text-center font-serif text-xl">
              Memories of childhood stay with us forever, so let’s make those
              memories count!
            </p>
            <h2 className=" text-center text-xl sm:text-2xl">
              <span className="text-skd-primary-600">Why</span>
              <br />
              <span className="text-2xl font-medium">SIAM KID D</span>
            </h2>
          </section>

          <section className="relative flex w-full justify-center overflow-hidden pb-6">
            <Image
              src={Stars}
              alt="Siam Kid D School"
              className="z-10 min-w-0 max-w-[30vh]"
            />
          </section>

          <section className="flex w-full justify-center bg-white p-6 sm:px-12">
            <Video src="https://www.youtube.com/embed/VJrZXDt-tgE?si=S0gPLgdczg3wGkME" />
          </section>

          <section className="relative flex w-full justify-center overflow-hidden py-3">
            <Image
              src={Kids}
              alt="Siam Kid D School"
              className="z-10 min-w-0 max-w-[20vh] sm:max-w-[25vh]"
            />
          </section>

          <section className="w-full bg-white p-6 pt-10 sm:px-12 sm:pt-12">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2">
              <FeatureCard
                title="Our Priorities"
                description={`At Siam Kid D School we know that children learn best\nthrough play, so creating fun and engaging activities\nfor our students helps form the recipe for success.\nPriority number one is for our students to love coming to school.`}
                icon={Cat}
                width={150}
                height={150}
                alt="Cat"
              />
              <FeatureCard
                title="Importance of Eduaction"
                description={`The early years of education form the foundation\nfor the building blocks of life.\nIt is essential for young learners to be presented\nwith challenging experiences in a supportive environment.`}
                icon={Candy}
                width={130}
                height={130}
                alt="Candy"
              />
              <FeatureCard
                title="English Proficiency"
                description={`Learning a language can be a fun and natural experience,\nand young leaners acquire language with ease.\nThey just need the right mentors and a positive environment\nto make that magic happen.`}
                icon={Fish}
                width={100}
                height={100}
                alt="Fish"
              />
              <FeatureCard
                title="Our Curriculum"
                description={`We follow the UK based Early Years Foundation Stage (EYFS) curriculum. This is used in all early years schools in the UK and provides the framework for learning and development.`}
                icon={Bee}
                width={80}
                height={80}
                alt="Bee"
              />
            </div>
          </section>

          <section className="relative flex w-full justify-center overflow-hidden">
            <Image
              src={Trees}
              alt="Siam Kid D School"
              className="z-10 min-w-0 max-w-[20vh] sm:max-w-[25vh]"
            />
          </section>

          <section className="w-full bg-white pb-2 pt-10">
            <h2 className=" text-center text-xl sm:text-2xl">
              <span className="text-skd-primary-600">Our</span>
              <br />
              <span className="text-2xl font-medium">Students & Activites</span>
            </h2>
          </section>

          <section className="flex w-full justify-center bg-white p-6 sm:px-12">
            <Video src="https://www.youtube.com/embed/YEAPMbVVoeY?si=uIdbj0FozmSgDqVS" />
          </section>

          <section className="flex items-center justify-center pb-8">
            <ActivitiesButton>
              <Button size="lg" className="w-full gap-2 text-xl px-8 py-6" asChild>
                <Link href="/activities">Activities</Link>
              </Button>
            </ActivitiesButton>
          </section>

          <section className="relative flex w-full justify-center overflow-hidden py-3">
            <Image
              src={Pencil}
              alt="Siam Kid D School"
              className="z-10 min-w-0 max-w-[15vh] sm:max-w-[20vh]"
            />
          </section>

          <section className="w-full bg-white">
            <h2 className=" text-center text-xl sm:text-2xl">
              <span className="text-skd-primary-600">What</span>
              <br />
              <span className="text-2xl font-medium">People Say</span>
            </h2>
          </section>

          <section className="w-full bg-white p-5 md:p-10">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2">
              <TestimonyCard
                title="Duangchai Sawang Arom"
                description="I am very glad that my daughter joined this school. I'm happy to see her developing well and she always comes home with so many stories. We love you Siam Kid D School."
                role="Parent"
              />
              <TestimonyCard
                title="Andrew Harrison"
                description="The school's security is one of the main reasons we chose Siam Kid D School. Also a real plus for me was the native English teachers it employs."
                role="Parent"
              />
              <TestimonyCard
                title="Thitaporn Srisaeng"
                description="การอยู่ร่วมกันกับผู้อื่น ซึ่งสิ่งต่าง ๆ เหล่านี้ สยามคิดดี ก็ได้เตรียมความพร้อมให้กับน้องอย่างเหมาะสมที่สุด"
                role="Parent"
              />
              <TestimonyCard
                title="ปิยะดา ธณเตชทัต"
                description="เปิดโอกาสให้เด็กได้เตรียมความพร้อมตามวัยอย่างมีความสุข"
                role="Parent"
              />
            </div>
          </section>

          <section className="relative flex w-full justify-center overflow-hidden py-1">
            <Image
              src={Rainbow}
              alt="Siam Kid D School"
              className="z-10 min-w-0 max-w-[15vh] sm:max-w-[25vh]"
            />
          </section>

          <section className="flex w-full flex-col justify-center bg-gray-100 px-16 py-20 text-center">
            <p className="font-semibold leading-tight">
              <span className="text-skd-primary-600 text-2xl sm:text-4xl">
                Interested?
              </span>
            </p>
            <div className="mt-4 flex items-center justify-center">
              <JoinButton>
                <Button size="lg" className="w-full gap-2" asChild>
                  <Link href="/contact">JOIN US</Link>
                </Button>
              </JoinButton>
            </div>
          </section>
        </div>
      </main>
    </PageContainer>
  )
}

export default IndexPage
