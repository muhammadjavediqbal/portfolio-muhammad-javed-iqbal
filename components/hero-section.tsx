"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Typed from "typed.js"
import Image from "next/image"

const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["AI/ML Engineer", "Python Developer", "NLP Specialist", "RAG Systems Builder"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 gradient-text">Muhammad Javed Iqbal</h1>
            <h2 className="text-xl md:text-2xl font-medium mb-4 flex">
              <span className="gradient-text mr-2">I&apos;m a</span>
              <span ref={typedRef} className="text-off-white"></span>
            </h2>
            <p className="text-base mb-6 max-w-2xl text-gray-300">
              Passionate about AI, Data Science, Machine Learning, and NLP. Creating intelligent solutions with FastAPI,
              Langchain, and vector databases like Pinecone and Qdrant.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Contact Me <Mail size={16} />
              </button>
              <a
                href="https://linkedin.com/in/muhammad-javed-iqbal28"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                LinkedIn <Linkedin size={16} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                GitHub <Github size={16} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="profile-image w-full h-full">
                <Image
                  src="/images/profile.png"
                  alt="Muhammad Javed Iqbal"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about")
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop - 80,
                  behavior: "smooth",
                })
              }
            }}
            className="gradient-text focus:outline-none"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
