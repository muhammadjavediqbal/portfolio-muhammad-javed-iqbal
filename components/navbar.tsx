"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      closeMenu()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-classic-black/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="gradient-text">MJI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("home")}
              className={`nav-link ${activeSection === "home" ? "active-nav-link" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`nav-link ${activeSection === "about" ? "active-nav-link" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`nav-link ${activeSection === "skills" ? "active-nav-link" : ""}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`nav-link ${activeSection === "experience" ? "active-nav-link" : ""}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`nav-link ${activeSection === "projects" ? "active-nav-link" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`nav-link ${activeSection === "contact" ? "active-nav-link" : ""}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <div className="gradient-bg p-1 rounded-md">{isOpen ? <X size={20} /> : <Menu size={20} />}</div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-classic-black z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
          <button
            onClick={() => scrollToSection("home")}
            className={`nav-link ${activeSection === "home" ? "active-nav-link" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`nav-link ${activeSection === "about" ? "active-nav-link" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`nav-link ${activeSection === "skills" ? "active-nav-link" : ""}`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={`nav-link ${activeSection === "experience" ? "active-nav-link" : ""}`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`nav-link ${activeSection === "projects" ? "active-nav-link" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`nav-link ${activeSection === "contact" ? "active-nav-link" : ""}`}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
