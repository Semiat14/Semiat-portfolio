function Skills() {
  const skills = [
    "Cloud Engineering", "Network Engineering", "Linux", "AWS",
    "Docker", "Kubernetes", "Terraform", "CI/CD", "Python",
    "JavaScript", "Git", "MongoDB"
  ]

  return (
    <section className="px-10 py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest text-[#C4956A] uppercase mb-4">Capabilities</p>
        <h2 className="font-[Fraunces] text-4xl font-bold text-[#2C1810] mb-12">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-6 py-3 border border-[#C4956A] text-[#2C1810] text-sm rounded-full hover:bg-[#C4956A] hover:text-white transition-colors duration-300 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills