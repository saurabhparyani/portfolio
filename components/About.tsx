"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Image from 'next/image';
import img from '@/public/image.png'
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className='min-h-[60vh] flex flex-col md:flex-row items-center scroll-mt-36'>
            <div className='flex flex-col md:ml-40 mb-8 md:mb-0'>
                <h1 className='text-4xl lg:text-7xl font-bold'>
                    Hello there! 👋
                    <br />
                    <span>{"I'm "}</span>
                    <span className='underline underline-offset-8 decoration-black dark:decoration-white'>{"Saurabh"}</span>
                    <span>{"."}</span>
                </h1>
                <p className='w-auto text-2xl pt-8 dark:text-gray-300'>
                    <span>{"I'm an aspiring"}</span>
                    <span className='font-bold'>{" full-stack developer"}</span>
                    <span> {"dedicated to delivering"} </span>
                    <span className='font-bold'>{"functional web applications"}</span>
                    <span>{" with a passion for clean code and exploring cutting-edge technologies."}</span>
                </p>
                <motion.div
                    className="flex sm:flex-row justify-start gap-4 pt-5 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        onClick={() => {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                        }}
                    >
                        Contact me here{" "}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>

                    <a
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                        href="/CV.pdf"
                        download
                    >
                        Download CV{" "}
                        <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                    </a>

                </motion.div>
            </div>
            <div className='ml-4 mr-4 md:mr-44'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <div className="w-48 md:w-auto">
                        <Image
                            src={img}
                            alt="Saurabh"
                            width={680}
                            height={580}
                            quality={100}
                            priority={true}
                            className="rounded-full object-cover shadow-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
