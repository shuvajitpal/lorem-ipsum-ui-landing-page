"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone, ChevronDown, ArrowLeft, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { features, repeatItems, cards, qna } from "@/lib/contant";
import Logo from "@/Buttons/Logo";
import { useState } from "react";

export default function Home() {
  const [openIndex, setIsOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-35 overflow-x-hidden">
      <section className="relative w-full min-h-px flex items-center bg-[#FFFFFF] px-4 pt-32 pb-20 mb-6">
        <div className="relative z-10 w-full max-w-4xl ml-12 mr-120">
          <motion.h1
            className="heading-lg mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Lorem ipsum dolor sit amet
          </motion.h1>

          <motion.p
            className="subheading-lg mb-8 typo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </motion.p>

          <motion.form
            className="flex flex-row gap-4 max-w-lg w-full mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="flex-2 px-5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <button
              type="submit"
              className="btn-primary flex items-center gap-1"
            >
              Submit <ArrowRight className="w-4 h-4 mt-0.5" />
            </button>
          </motion.form>

          <motion.div
            className="flex items-center gap-3 text-sm text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-medium">No credit card required!</span>
          </motion.div>
        </div>
        <motion.div
          className="absolute right-0  w-full max-w-md h-screen z-0 pointer-events-none"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "keyframes",
          }}>
          <div className=" w-full h-full">
            <Image
              src="/sec1.png"
              alt="Hero Section Image"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-3 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-white" />
          </div>
        </motion.div>
      </section>
      <section className="w-full py-20 relative overflow-hidden">
        <div className="max-w-7xl">
          <div className="ml-30 max-w-full bg-[#FFFFFF] border-[#D4D4D4] relative shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.1),0_-4px_8px_-2px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.1)]">
            <motion.div
              className="max-w-5xl py-6 pl-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="link-primary mb-4">
                Lorem ipsum dolor sit
              </div>
              <motion.h2
                className="heading-lg mb-4 leading-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                LOREM IPSUM <br />DOLOR SIT AMET
              </motion.h2>
              <motion.div
                className="subheading-lg mb-6 mr-110 typo"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
              </motion.div>

              <div className="space-y-12 mb-12 mr-105">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  >
                    <div className="shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={feature.imgSrc}
                        alt="image"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="mb-4 leading-relaxed text-sm sm:text-base typo">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="flex flex-row gap-6 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button className="btn-primary items-center flex gap-1">
                  Loerum Ipsum
                  <ArrowRight className="w-4 h-4 mt-1" />
                </button>
                <button className="text-[#043898] font-semibold flex gap-2 items-center hvav">
                  <Phone className="w-5 h-5" />
                  123456789
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute right-5 top-15 w-full max-w-lg h-full z-0 pointer-events-none"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "keyframes",
              }}>
              <Image
                src="/sec2-r.png"
                alt="Hero Section Image"
                width={1000}
                height={1000}
                className="w-120 h-130 object-fill"
                priority
              />
            </motion.div>
            <div className="absolute gradr bottom-0 left-0 right-20" />
          </div>
        </div>
      </section>
      <section className="w-full py-10 bg-[#FFFFFF] relative overflow-hidden overflow-x-hidden">
        <div className="ml-25">
          <div className="link-primary mb-4">Lorem ipsum dolor sit amet </div>
          <div className="heading-lg mr-200 flex-wrap leading-10 mb-4 uppercase">
            Lorem ipsum dolor sit amet consectetur. Eu elit.
          </div>
          <div className="mr-150 mb-8 font-['Inter'] typo">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
          </div>
          <div className="space-y-6 mr-150">
            {repeatItems.map((items, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-5 h-6 overflow-hidden shrink-0">
                  <Image
                    src={items.img}
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-left"
                  />
                </div>
                <div className="flex-1 typo">
                  <div className="flex items-center">
                    <p className="font-bold text-sm leading-tight">{items.title}</p>
                  </div>
                  <p className="text-sm mt-1">
                    {items.discript}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <motion.div
            className="absolute right-5 top-20 w-full max-w-lg h-full z-0 pointer-events-none"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: "keyframes",
            }}>
            <Image
              src="/s3r.png"
              alt="Hero Section Image"
              width={1000}
              height={1000}
              className="w-120 h-fit object-fill"
              priority
            />
          </motion.div>
          <div className="absolute gradr bottom-0 left-30 right-2" />
        </div>
      </section>
      <section className="w-full py-70 relative overflow-x-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/s4b.png"
            alt="section background"
            fill
            className="object-fit"
            priority
          />
        </div>
        <div className="absolute top-8 left-10 flex flex-col items-start">
          <Logo />
          <div className="text-[#FFFFFF]! mb-10">
            <div className="heading-lg text-white! leading-none px-18 uppercase text-center mb-4">
              Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
            </div>
            <div className="text-center px-60 mb-4">
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
            </div>
            <div className="text-center px-60 mb-6">
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
            </div>
            <button className="px-6 py-1 bg-white text-blue-600 rounded gap-2 flex items-center font-semibold mx-auto hvav">
              Loerum Ipsum
              <ArrowRight className="w-4 h-4 mt-0.5" />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-10 relative overflow-x-hidden">
        <div>
          <div className="uppercase items-center heading-lg text-center px-50 leading-tight mb-12">
            Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
          </div>
          <div className="grid grid-cols-4 gap-0 px-20 place-items-center">
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo1.png"
                alt="logo1"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo2.png"
                alt="logo2"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo3.png"
                alt="logo3"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo4.png"
                alt="logo4"
                width={170}
                height={170}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo5.png"
                alt="logo5"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo6.png"
                alt="logo6"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav hover:z-10">
              <Image
                src="/logo7.png"
                alt="logo7"
                width={100}
                height={100}
                className="object-contain z-1"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo8.png"
                alt="logo8"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo9.png"
                alt="logo9"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo10.png"
                alt="logo10"
                width={120}
                height={120}
                className="object-contain -mt-5"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo11.png"
                alt="logo11"
                width={200}
                height={200}
                className="object-contain -mt-12 z-0"
              />
            </div>
            <div className="flex items-center justify-center hvav">
              <Image
                src="/logo12.png"
                alt="logo12"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative overflow-x-hidden">
        <div className="ml-25">
          <div className="link-primary mb-4">Lorem ipsum dolor sit amet </div>
          <div className="heading-lg flex-wrap leading-10 mb-4 uppercase">
            Lorem ipsum dolor sit
          </div>
          <div className="mr-140 mb-15">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-12 px-40 py-10">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="card h-110 rounded-lg shadow-sm bg-white flex flex-col grid-rows-2 hover:scale-105 duration-300 transition-all hover:shadow-lg"
              >
                <div className="card-image mb-2">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full rounded-t-lg h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 typo">{card.title}</h3>
                  <p className="text-sm text-[#000000] flex-1">{card.descp}</p>

                  <div className="mt-6">
                    <button className="link-primary text-lg! underline underline-offset-3 hvav">Learn more</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-70 relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/s7b.png"
            alt="section background"
            fill
            className="object-fit"
            priority
          />
        </div>
        <div className="absolute top-8 left-10 flex flex-col items-start">
          <Logo />
          <div className="heading-lg text-[#FFFFFF]! pt-30 leading-none uppercase text-center text-md mb-4 px-30">
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi mi. dolor sit amet consectetur. Quis adipiscing.
          </div>
        </div>
      </section>
      <section className="w-full py-10 relative overflow-x-hidden">
        <div className="flex justify-center">
          <h1 className="heading-lg uppercase mb-20">request a quote</h1>
        </div>
        <div className="px-40 text-sm mb-10">
          <div className="flex flex-col gap-6">
            <div className="flex  gap-6">
              <div className="flex-1 text-[#0E0D0D]">
                <p className="mb-4">Name</p>
                <input type="text" className="bg-gray-100 border border-gray-300 rounded-sm w-full py-2 pl-4" />
              </div>
              <div className="flex-1">
                <p className="mb-4">E-mail</p>
                <input type="text" className="bg-gray-100 border border-gray-300 rounded-sm w-full py-2 pl-4" />
              </div>
            </div>
            <div className="flex  gap-6">
              <div className="flex-1">
                <p className="mb-4">Phone Number</p>
                <input type="text" className="bg-gray-100 border border-gray-300 rounded-sm w-full py-2 pl-4" />
              </div>
              <div className="flex-1">
                <p className="mb-4">Time Frame<span className="text-red-500">*</span></p>
                <div className="relative">
                  <input
                    type="text" className="bg-gray-100 border border-gray-300 rounded-sm w-full py-2 pl-4 pr-10" placeholder="Choose Time Frame" />
                  <ChevronDown
                    className="w-3 h-4 stroke-4 text-[#0E0D0D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="flex  gap-6">
              <div className="flex-1">
                <p className="mb-4">Size<span className="text-red-500">*</span></p>
                <div className="relative">
                  <input type="text" className="bg-gray-100 border border-gray-300 rounded-sm w-full py-2 pl-4 pr-10" placeholder="Choose Size" />
                  <ChevronDown
                    className="w-3 h-4 stroke-4 text-[#0E0D0D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="mb-4">Quantity<span className="text-red-500">*</span></p>
                <div className="relative">
                  <input type="text" className="bg-gray-100 border border-gray-300 rounded-sm w-full py-2 pl-4 pr-10" placeholder="Choose Quantity" />
                  <ChevronDown
                    className="w-3 h-4 stroke-4 text-[#0E0D0D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="flex  gap-6">
              <div className="flex-1">
                <p className="mb-4">Please Describe Your Project<span className="text-red-500">*</span></p>
                <div className="relative">
                  <input type="text" className="bg-gray-100 border border-gray-300 rounded-sm w-full pb-40 py-2 pl-4 pr-10" placeholder="Choose a project type" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-10 text-center">
          <h1 className="text-[#3C3C3C]">
            By submitting this form you agree to our{" "}
            <a
              href="https://tealpackaging.com/terms-and-condition/"
              className="underline underline-offset-3 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            {" "}and{" "}
            <a
              href="https://tealpackaging.com/privacy-policy/"
              className="underline underline-offset-3 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </h1>
        </div>
        <div className="flex justify-center">
          <button className="btn-primary items-center flex gap-1">
            Loerum Ipsum
            <ArrowRight className="w-4 h-4 mt-1" />
          </button>
        </div>
      </section>
      <section className="w-full relative bg-[#F3F3F3] overflow-x-hidden">
        <div>
          <div className="pt-30 pl-20 pb-20">
            <div className="link-primary mb-6">Lorem ipsum</div>
            <div className="heading-lg mr-210 leading-10 mb-6">Lorem ipsum dolor sit amet </div>
            <div className="mr-180 mb-12 typo">Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</div>
            <div className="flex flex-row gap-6">
              <Image src="/Google.png" alt="img" height={25} width={125} className="hvav" />
              <Image src="/apple.png" alt="img" height={25} width={125} className="hvav" />
            </div>
          </div>
        </div>
        <motion.div
          className="absolute top-0 right-0 bottom-6 h-full w-auto flex items-center z-0 pointer-events-none"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "keyframes",
          }}
        >
          <Image
            src="/hand-mobile.png"
            alt="img"
            width={1000}
            height={1500}
            className="h-full w-auto object-contain"
            priority
          />
        </motion.div>
      </section>
      <section className="w-full relative bg-[#F1F5F9] overflow-hidden overflow-x-hidden">
        <div className="pt-20 pl-20 pb-70 pr-20">
          <div className="mb-4 uppercase font-semibold text-lg text-gray-600">No Limits</div>
          <div className="heading-lg mr-180 leading-10 mb-6 uppercase">Lorem ipsum dolor sit amet </div>
          <div className="mr-180 mb-8 typo">Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.</div>
          <button className="btn-primary items-center flex gap-1">
            Loerum Ipsum
            <ArrowRight className="w-4 h-4 mt-1" />
          </button>
        </div>
        <div className="absolute top-20 right-20 w-98 h-50 overflow-hidden">
          <Image
            src="/s9rt2.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute top-30 right-125 w-30 h-40 overflow-hidden">
          <Image
            src="/s9rt1.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-left" />
        </div>
        <div className="absolute top-77 right-20 w-135 h-60 overflow-hidden">
          <Image
            src="/s9rm.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute top-60 left-125 w-30 h-50 overflow-hidden">
          <Image
            src="/s9lt.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute top-117 left-55 w-100 h-60 overflow-hidden">
          <Image
            src="/s9lb2.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute top-128 left-20 w-28 h-60 overflow-hidden">
          <Image
            src="/s9lb1.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute top-144 right-125 w-30 h-40 overflow-hidden">
          <Image
            src="/sec2-r.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top" />
        </div>
        <div className="absolute top-144 right-20 w-100 h-40 overflow-hidden">
          <Image
            src="/sec2-l2.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
      </section>
      <section className="w-full relative overflow-x-hidden">
        <div className="absolute top-0 left-4 w-120 h-137 z-1">
          <Image
            src="/s10.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
        <div className="bg-[#F8F8F8] relative z-0 mr-20 ml-2 mt-15 ">
          <div className="pl-143 pt-15 pr-25 pb-18">
            <div className="leading-10 mb-10">
              <h3 className="link-primary mb-4">Lorem ipsum</h3>
              <div className="heading-lg uppercase mb-6">
                Lorem ipsum dolor sit amet consectetur. Enim donec.
              </div>
              <p className="typo leading-tight mb-10 text-[18px]">
                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
              </p>
              <div className="typo font-semibold text-[20px] pr-20">
                <div className="flex justify-between cursor-pointer">
                  <div className="flex flex-col gap-2">
                    <h4 className="hvav">Lorem Ipsum</h4>
                    <h4 className="hvav">Lorem Ipsum</h4>
                    <h4 className="hvav">Lorem Ipsum</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="hvav">Lorem Ipsum</h4>
                    <h4 className="hvav">Lorem Ipsum</h4>
                    <h4 className="hvav">Lorem Ipsum</h4>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-primary  items-center flex gap-2 font-semibold">
              Lorem Ipsum
              <ArrowRight className="w-4 h-4 mt-1 stroke-3" />
            </button>
          </div>
          <div className="absolute gradr bottom-0 left-2 right-15" />
        </div>
      </section>
      <section className="w-full relative bg-[#155ADA] overflow-hidden overflow-x-hidden">
        <div className="text-white p-20 pb-15">
          <h3 className="text-[24px] font-[inter] font-semibold">Join other Sun harvesters</h3>
          <div className="flex justify-between items-center pr-30">
            <div className="heading-lg text-white! uppercase scale-y-110 scale-x-90 -ml-9 mb-4">
              Lorem ipsum dolor sit amet
            </div>
            <button className="bg-white shadow-2xl text-black px-12 pb-1.5 scale-y-95 font-semibold py-1 rounded self-start mt-4 hvav">
              Lorem Ipsum
            </button>
          </div>
          <p className="mr-120">Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
        </div>
        <div className="flex pl-20 pb-20 gap-6 items-center overflow-x-hidden overflow-y-hidden relative -mr-20">
          <div className="bg-white w-80 h-110 shadow-2xl rounded-lg p-8 pt-12 space-y-6 shrink-0">
            <Image
              src="/1st.png"
              alt="logo"
              height={500}
              width={500}
              className="w-15 h-15" />
            <p>Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.</p>
            <div className="flex items-center gap-4 hvav">
              <Image
                src="/1stp.jpg"
                alt="logo"
                height={500}
                width={500}
                className="w-15 h-15 rounded-full" />
              Jane Cooper
            </div>
          </div>
          <div className="bg-white w-80 shrink-0 h-100 shadow-2xl rounded-lg p-8 space-y-4">
            <Image
              src="/2nd.png"
              alt="logo"
              height={500}
              width={500}
              className="w-15 h-15" />
            <p>Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.</p>
            <div className="flex items-center gap-4 mt-10 hvav">
              <Image
                src="/2ndp.jpg"
                alt="logo"
                height={500}
                width={500}
                className="w-15 h-15 rounded-full object-cover object-top" />
              Jane Cooper
            </div>
          </div>
          <div className="bg-white w-80 shrink-0 h-100 shadow-2xl rounded-lg p-8 space-y-4">
            <Image
              src="/3rd.png"
              alt="logo"
              height={500}
              width={500}
              className="w-15 h-15" />
            <p>Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.</p>
            <div className="flex items-center gap-4 hvav">
              <Image
                src="/3rdp.jpg"
                alt="logo"
                height={500}
                width={500}
                className="w-15 h-15 rounded-full object-cover object-center" />
              Jane Cooper
            </div>
          </div>
          <div className="bg-white w-80 h-100 shadow-2xl rounded-lg p-8 space-y-4 shrink-0">
            <Image
              src="/4th.png"
              alt="logo"
              height={500}
              width={500}
              className="w-15 h-15" />
            <p>Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.</p>
            <div className="flex items-center gap-4 mt-10 hvav">
              <Image
                src="/4thp.jpg"
                alt="logo"
                height={500}
                width={500}
                className="w-15 h-15 rounded-full object-cover object-top" />
              Jane Cooper
            </div>
          </div>
        </div>
        <div className="flex gap-6 pl-20 mb-20 text-white ">
          <div className="rounded-full border-2 w-11 h-11 flex items-center justify-center hvav">
            <ArrowLeft className="w-4 h-4" />
          </div>

          <div className="rounded-full border-2 w-11 h-11 flex items-center justify-center hvav">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </section>
      <section className="w-full py-40 relative">
        <div className="pl-20 pr-164">
          <h4 className="uppercase heading-lg scale-x-80 scale-y-90 -ml-15 whitespace-nowrap mb-2">Lorem ipsum dolor sit amet</h4>
          <div className="flex text-[#0F172A] mb-4">
            <div className="px-8 py-1 border border-[#CBD5E1] rounded-l-md bg-[#F1F5F9]">Research</div>
            <div className="px-8 py-1 border border-[#CBD5E1]">Plan</div>
            <div className="px-8 py-1 border border-[#CBD5E1] rounded-r-md">Design</div>
          </div>
          <p className="text-[#475569] mb-6">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
          <div className="text-[#1959AC] text-sm font font-semibold flex gap-4 items-center hvav">
            Check tools
            <ArrowRight className="w-3 h-3 stroke-3 scale-x-120 mt-1 text-[#2563EB]" />
          </div>
        </div>
        <div className="absolute top-40 right-20 w-130 h-70">
          <Image
            src="/s13.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center" />
        </div>
      </section>
      <section className="w-full relative overflow-visible bg-[#F1F1F1] mb-20">
        <div className="relative pl-15 pt-15 pb-60">
          <h1 className="uppercase text-[#1959AC]! heading-lg leading-11 scale-x-80 scale-y-90 -ml-33 pr-170 mb-2">Lorem ipsum dolor sit amet consectetur. Dignissim tellus.</h1>
          <p className="typo leading-tight pr-155 mb-8">Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.</p>
          <button className="btn-primary flex items-center gap-2">
            Lorem Ipsum <ArrowRight className="w-5 h-5 mt-1 scale-x-115" />
          </button>
          <div className="absolute gradr bottom-0 left-2 right-35" />
        </div>
        <div className="absolute bg-white left-15 right-190 px-8 py-8 z-20 top-100 shadow-2xl">
          <h4 className="text-[20px] text-[#222222] font-semibold mb-6">Lorem ipsum dolor sit</h4>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</p>
        </div>
        <div className="absolute left-180 pr-5 z-20 bottom-35 h-130">
          <Image
            src="/s14.png"
            alt="img"
            width={1000}
            height={1000}
            className="h-full w-full object-fill" />
        </div>
      </section>
      <section className="w-full relative">
        <div className="text-center px-15 relative">
          <h1 className="heading-lg uppercase scale-x-80 scale-y-95 text-[#0F172A]!">Lorem ipsum dolor sit amet</h1>
          <p className="text-[#0F172A] text-[17px] mb-16">Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>
          <div className="h-90 w-155 pl-2">
            <Image
              src="/s15.png"
              alt="img"
              height={1000}
              width={1000}
              className="w-full h-full object-cover object-[50%_80%]" />
          </div>
          <div className="absolute border-[#E2E8F0] bg-white pl-10 pt-8 pb-8 pr-12 shadow-[0_0_6px_rgba(0,0,0,0.25),0_10px_15px_-3px_rgba(0,0,0,0.3)] rounded-sm bottom-15 right-15 left-152 text-start">
            <div className="text-[#475569] text-[24px] font-semibold mb-2">
              Artist & Investor
            </div>
            <p className="tex-[#0F172A] text-[18px] mb-6">Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...</p>
            <div className="text-[#1959AC] font-semibold text-[16px] flex items-center gap-4 hvav">
              Read Full Story
              <ArrowRight className="w-5 h-5 mt-1 scale-y-90 stroke-3"/></div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <motion.div
          className="mb-16 pl-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">
            FREQUENTLY ASKED QUESTIONS (FAQs)
          </h2>
        </motion.div>

        <div className="space-y-6 px-30">
          {qna.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`border-t border-gray-300 ${index === item.length - 1 ? "border-b border-gray-300" : ""}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  className="flex justify-between items-center w-full p-6 px-8 text-left"
                  onClick={() => setIsOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold typo -mb-6">{item.question}</span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pr-100 pb-2">
                        <p className="typo leading-tight mt-4">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center px-80 pt-20 py-50 text-center space-y-6">
          <div className="flex">
            <Logo />
          </div>
          <div className="heading-lg leading-10 uppercase">
            Lorem ipsum dolor sit amet consectetur. Dui.
          </div>
          <div className="px-20 typo">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </div>
          <button className="btn-primary items-center flex gap-1">
            Loerum Ipsum
            <ArrowRight className="w-4 h-4 mt-1" />
          </button>
        </div>
      </section>
    </div >
  );
}