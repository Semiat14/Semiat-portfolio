function Projects() {
  const projects = [
    {
      id: 1,
      name: "The Good Dump",
      description: "A personal journaling app that provides a simple, private space to record thoughts, emotions, and daily reflections.",
      problem: "Built to make journaling feel effortless — a place to quickly dump thoughts, track mood, and reflect without distractions.",
      challenge: "Implementing authentication and ensuring users' journal entries were securely stored and retrieved.",
      tags: ["Node.js", "MongoDB", "JWT", "Netlify", "Render"],
      link: "#"
    },
    {
      id: 2,
      name: "Sabi Talk",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["React Native", "Firebase"],
      link: "#"
    },
    {
      id: 3,
      name: "FitPic",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["React Native", "Supabase", "Claude AI"],
      link: "#"
    }
  ]

  return (
    <section className="px-10 py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest text-[#C4956A] uppercase mb-4">Work</p>
        <h2 className="font-[Fraunces] text-4xl font-bold text-[#2C1810] mb-16">
          Things I've built.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#F0EAE2] rounded-3xl p-8 flex flex-col gap-4">
              <h3 className="font-[Fraunces] text-xl font-bold text-[#2C1810]">{project.name}</h3>
              <p className="text-[#8C7B6B] text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#E8DDD4] text-[#2C1810] text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-[#C4956A] text-sm mt-auto hover:underline">
                View project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects