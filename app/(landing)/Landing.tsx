'use client'
import React from 'react'
import Image from 'next/image'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Landing = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <div className='flex items-center justify-start gap-3'>
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <span className='text-xl font-bold'>ContentAI</span>
        </div>
        <Link href={"/dashboard"} className='font-bold text-blue-600'>
          Get Started
        </Link>

      </div>
      <ContainerScroll
        titleComponent={
          <>
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
              >
                Generate content within seconds{" "}
                <br />
                <Highlight className="text-black dark:text-white">
                  with ContentAI, powered by Gemini AI.
                </Highlight>
              </motion.h1>
              <Link href={"/dashboard"}>
                <Button className=" mt-8 text-lg shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-bold transition duration-200 ease-linear">
                  Get Started
                </Button>
              </Link>
            </HeroHighlight>
          </>
        }
      >
        <Image
          src={`/landing-img.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
        />
      </ContainerScroll>
    </div>
  )
}

export default Landing