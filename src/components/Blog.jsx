function Blog() {
  return (
    <section className="px-10 py-20 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest text-[#C4956A] uppercase mb-4">Blog</p>
        <h2 className="font-[Fraunces] text-4xl font-bold text-[#2C1810] mb-6">
          Thoughts & reflections.
        </h2>
        <p className="text-[#8C7B6B] text-lg mb-16 max-w-xl">
          I write about technology, learning, and the journey of building things. Coming soon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FAF7F2] rounded-3xl p-8">
            <p className="text-xs text-[#C4956A] uppercase tracking-widest mb-4">Coming soon</p>
            <h3 className="font-[Fraunces] text-xl font-bold text-[#2C1810] mb-3">
              What I learned building my first full stack app
            </h3>
            <p className="text-[#8C7B6B] text-sm leading-relaxed">
              From authentication to deployment — the lessons, the challenges, and what I'd do differently.
            </p>
          </div>
          <div className="bg-[#FAF7F2] rounded-3xl p-8">
            <p className="text-xs text-[#C4956A] uppercase tracking-widest mb-4">Coming soon</p>
            <h3 className="font-[Fraunces] text-xl font-bold text-[#2C1810] mb-3">
              From biology to cloud engineering — my story
            </h3>
            <p className="text-[#8C7B6B] text-sm leading-relaxed">
              How curiosity led me from studying living systems to building digital ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog