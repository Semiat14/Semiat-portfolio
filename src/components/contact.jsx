import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <section className="px-10 py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest text-[#C4956A] uppercase mb-4">Contact</p>
        <h2 className="font-[Fraunces] text-4xl font-bold text-[#2C1810] mb-6">
          Let's build something together.
        </h2>
        <p className="text-[#8C7B6B] text-lg mb-12 max-w-xl">
          I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out.
        </p>
        <div className="flex gap-8 items-center">
          <a href="mailto:your@email.com" className="text-[#2C1810] hover:text-[#C4956A] transition-colors duration-300">
            <MdEmail size={28} />
          </a>
          <a href="#" className="text-[#2C1810] hover:text-[#C4956A] transition-colors duration-300">
            <FaGithub size={26} />
          </a>
          <a href="#" className="text-[#2C1810] hover:text-[#C4956A] transition-colors duration-300">
            <FaLinkedin size={26} />
          </a>
          <a href="#" className="text-[#2C1810] hover:text-[#C4956A] transition-colors duration-300">
            <FaInstagram size={26} />
          </a>
          <a href="#" className="text-[#2C1810] hover:text-[#C4956A] transition-colors duration-300">
            <FaXTwitter size={26} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact