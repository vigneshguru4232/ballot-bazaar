'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutUs: React.FC = () => {
  const stats = [
    { value: '12+', label: 'Years of Craft' },
    { value: '50K', label: 'Happy Customers' },
    { value: '200+', label: 'Collections' },
  ]

  const features = [
    { icon: '🗺️', title: 'Pan-India Delivery', desc: 'Timely dispatch across all states & UTs' },
    { icon: '✅', title: 'Quality Assured', desc: 'Curated vendors, consistent standards' },
    { icon: '⚡', title: 'Election-Ready Speed', desc: 'Fast turnaround for tight timelines' },
    { icon: '🪟', title: 'Single-Window Model', desc: 'One partner for end-to-end campaigns' },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <div className="about-us-block md:py-24 py-14 bg-[#ffff]" id='aboutUs'>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-20 items-center">

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/siteImages/CarousalImage/Random-3.jpeg"
                alt="About our brand"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#2c2420]/10" />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-44 h-44 rounded-sm overflow-hidden border-4 border-[#faf8f5] shadow-xl"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Image
                src="/images/siteImages/CarousalImage/Random-2.jpeg"
                alt="Our atelier"
                fill
                className="object-cover"
                sizes="176px"
              />
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 w-36 h-36 rounded-sm overflow-hidden border-4 border-[#faf8f5] shadow-xl"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <Image
                src="/images/siteImages/CarousalImage/Random-1.jpeg"
                alt="Behind the seams"
                fill
                className="object-cover"
                sizes="144px"
              />
            </motion.div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 h-32 w-[3px] bg-[#c9a87c]" />
          </motion.div>

          <div className="flex flex-col gap-6">

            <motion.p
              className="text-[#772e0b] tracking-[0.3em] text-lg font-medium uppercase"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Us
            </motion.p>

            <motion.h2
              className="text-[#b13039] text-4xl lg:text-5xl font-serif leading-tight"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Built for Campaigns, <br />
              <span className="italic text-[#c9a87c]">Trusted Across India</span>
            </motion.h2>

            <motion.div
              className="w-14 h-[3px] bg-[#c14831] rounded-full"
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <motion.p
              className="text-[#da7a32] text-base leading-relaxed max-w-xl"
              style={{textAlign:"justify"}}
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Ballot Bazaar is a DEDICATED MARKETPLACE for political merchandise and campaign collaterals, created exclusively
              for elections, public outreach, and political movements.
            </motion.p>

            <motion.p
              className="text-[#da7a32] text-base leading-relaxed max-w-xl"
              style={{textAlign:"justify"}}
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Operating on a curated and controlled model, Ballot Bazaar brings together design standards,
              production oversight, and delivery coordination under one platform, ensuring reliability
              during high-pressure election cycles.
            </motion.p>

            <motion.p
              className="text-[#da7a32] text-base leading-relaxed max-w-xl"
              style={{textAlign:"justify"}}
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We work as a single-window partner for campaign teams that value clarity, quality, and execution discipline.
            </motion.p>


            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-4"
              custom={6}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center px-6 py-4 rounded-sm min-w-[90px] ${
                    i === 0
                      ? 'bg-[#2c2420] text-[#faf8f5]'
                      : 'bg-[#f0ebe4] text-[#2c2420]'
                  }`}
                >
                  <span
                    className={`text-2xl font-bold font-serif ${
                      i === 0 ? 'text-[#c9a87c]' : 'text-[#2c2420]'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-wide mt-1 opacity-75">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="flex flex-wrap items-center gap-5 pt-4 border-t border-[#e6dfd6]"
              custom={7}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['Bulk Order Ready', 'Custom Branding', 'Trusted by 50K+ Teams'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#6b5d52] text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a87c] shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs