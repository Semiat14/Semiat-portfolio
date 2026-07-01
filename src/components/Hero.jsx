import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 pt-32 pb-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 w-full">

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm tracking-widest text-[#C4956A] uppercase mb-4">Boladale Semiat Olashubomi</p>
          <h1 className="font-[Fraunces] text-5xl font-bold text-[#2C1810] leading-tight mb-6">
            Building systems. Solving problems. Never done learning.
          </h1>
          <p className="text-lg text-[#8C7B6B] mb-8">
            Cloud engineer and software developer. Passionate about building thoughtful technology that solves real problems.
          </p>
          <button className="bg-[#C4956A] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#2C1810] transition-colors duration-300">
            See my work
          </button>
        </motion.div>

        <div className="flex-1 flex justify-center">
          <div className="w-80 h-96 bg-[#E8DDD4] rounded-3xl flex items-center justify-center">
            <p className="text-[#8C7B6B] text-sm">semiat</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero 