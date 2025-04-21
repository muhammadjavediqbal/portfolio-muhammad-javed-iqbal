import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-golden-pitch text-off-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold flex items-center">
              <span className="gradient-text">MJI</span>
            </Link>
            <p className="mt-1 max-w-md text-sm">AI/ML Engineer specializing in Python, NLP, and RAG systems.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/muhammad-javed-iqbal28"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:[email address removed]"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-off-white/20 mt-6 pt-6 text-center">
          <p className="text-sm">&copy; {currentYear} Muhammad Javed Iqbal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
