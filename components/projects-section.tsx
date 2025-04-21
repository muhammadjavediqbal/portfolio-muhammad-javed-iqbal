import { ExternalLink } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "DataTalks",
      company: "Xeven Solutions",
      description:
        "A smart chatbot platform that allows users to upload a file and have a conversation with it. Users can ask questions or explore the content, and the chatbot provides answers based on the file's information.",
      tags: ["Langchain", "RAG", "FastAPI", "VectorDB"],
    },
    {
      title: "Smart Mortgage",
      company: "Xeven Solutions",
      description:
        "An AI-powered system that helps users find the best mortgage options based on their profile. It considers financial situation, personal details, and property preferences to recommend mortgage programs.",
      tags: ["AI", "Python", "NLP", "Data Analysis"],
    },
    {
      title: "Venue Mate",
      company: "Xeven Solutions",
      description:
        "App that integrates with the Google Calendar API to streamline event bookings for marriage halls. It allows users to easily schedule events while checking vendor availability.",
      tags: ["Google Calendar API", "Python", "FastAPI"],
    },
    {
      title: "SEO Blog AI",
      company: "Xeven Solutions",
      description:
        "App that helps generate an SEO-optimized blog structure, content, summary, and reference links. It streamlines content creation by providing a well-organized structure tailored to SEO best practices.",
      tags: ["NLP", "AI", "Content Generation", "SEO"],
    },
  ]

  return (
    <section id="projects" className="py-16 bg-classic-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold gradient-text">{project.title}</h3>
                    <p className="text-off-white text-sm">{project.company}</p>
                  </div>
                  <a
                    href="#"
                    className="text-off-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-golden-pitch/50 text-off-white px-2 py-0.5 rounded-full text-xs m-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
