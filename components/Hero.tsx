'use client';

import { motion } from 'framer-motion';

export default function Hero({eyebrow, title, lead}:{eyebrow:string, title:string, lead:string}){
  return (
    <section className="py-16">
      <div className="container">
        <span className="pill">{eyebrow}</span>
        <motion.h1
          initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:.5}}
          className="text-4xl md:text-5xl font-extrabold leading-tight mt-3"
        >{title}</motion.h1>
        <p className="text-lg text-[color:var(--muted)] mt-2">{lead}</p>
      </div>
    </section>
  )
}
