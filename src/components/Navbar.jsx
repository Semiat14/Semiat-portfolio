function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center bg-[#FAF7F2] z-50">
      <p className="text-[#2C1810] font-bold tracking-widest text-sm uppercase">Semiat</p>
     <ul className="flex gap-8 text-sm text-[#8C7B6B]">
     <li className="hover:text-[#C4956A] cursor-pointer transition-colors duration-300">Home</li>
     <li className="hover:text-[#C4956A] cursor-pointer transition-colors duration-300">About</li>
     <li className="hover:text-[#C4956A] cursor-pointer transition-colors duration-300">Projects</li>
     <li className="hover:text-[#C4956A] cursor-pointer transition-colors duration-300">Skills</li>
     <li className="hover:text-[#C4956A] cursor-pointer transition-colors duration-300">Blog</li>
     <li className="hover:text-[#C4956A] cursor-pointer transition-colors duration-300">Resume</li>
     <li className="hover:text-[#C4956A] cursor-pointer transition-colors duration-300">Contact</li>
</ul>
    </nav>
  )
}

export default Navbar