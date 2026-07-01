function About() {
  return (
    <section className="min-h-screen flex items-center px-10 py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">

        {/* Left side - Photos */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full h-64 bg-[#E8DDD4] rounded-3xl"></div>
          <div className="w-3/4 h-48 bg-[#D4C4B5] rounded-3xl self-end"></div>
        </div>

        {/* Right side - Text */}
        <div className="flex-1">
          <p className="text-sm tracking-widest text-[#C4956A] uppercase mb-4">About Me</p>
          <h2 className="font-[Fraunces] text-4xl font-bold text-[#2C1810] mb-6">
            Curiosity is the through line.
          </h2>
          <div className="flex flex-col gap-4 text-[#8C7B6B] text-base leading-relaxed">
            <p>I'm Sem — a builder driven by one thing: curiosity.</p>
            <p>I studied Biological Sciences, and I still love it. A lot of people assume I switched to tech because I lost interest in biology, but that's never been the case. If anything, biology taught me how to think — how to ask questions, dig deeper, and understand the systems behind things.</p>
            <p>When I started exploring technology, I got the same feeling. Before I knew it, I was learning networking, cloud engineering, and software development.</p>
            <p>What keeps me going is growth. I love looking back six months later and realizing how much further I've come.</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Biology Grad", "Cloud Engineer", "Builder at Heart", "Always Learning", "Founder"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-[#E8DDD4] text-[#2C1810] text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About