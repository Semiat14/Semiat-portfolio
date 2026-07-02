function Resume() {
  return (
    <section className="px-10 py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-sm tracking-widest text-[#C4956A] uppercase mb-4">Resume</p>
          <h2 className="font-[Fraunces] text-4xl font-bold text-[#2C1810] mb-4">
            Want to know more?
          </h2>
          <p className="text-[#8C7B6B] text-lg max-w-xl">
            Download my resume to see my full experience, education, and skills.
          </p>
        </div>
          <a
          href="/resume.pdf"
          download
          className="bg-[#2C1810] text-white px-10 py-4 rounded-full text-sm tracking-wide hover:bg-[#C4956A] transition-colors duration-300 whitespace-nowrap"
        >
          Download Resume
        </a> 
      </div>
    </section>
  )
}

export default Resume