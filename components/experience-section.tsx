import { Briefcase } from "lucide-react"

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-classic-black/50 border-t border-b border-golden-pitch/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        <div className="relative border-l-2 border-golden-pitch pl-6 ml-3">
          <div className="mb-8 relative">
            <div className="absolute -left-10 top-0 w-7 h-7 gradient-bg rounded-full flex items-center justify-center">
              <Briefcase className="text-white" size={14} />
            </div>
            <div className="bg-golden-pitch/30 p-5 rounded-lg shadow-md border border-golden-pitch/50">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold gradient-text">AI/ML Engineer</h3>
                  <p className="text-off-white font-medium text-sm">Xeven Solutions</p>
                </div>
                <div className="bg-golden-pitch text-off-white px-2 py-1 rounded-full text-xs">Jan 2024 - Present</div>
              </div>
              <p className="text-gray-300 mb-3 text-sm">Working as a Machine Learning Engineer in the AI Team.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Development of Chat applications using Langchain</li>
                <li>Prompt Engineering for LLMs</li>
                <li>Exploring the latest LLMs and advancements</li>
                <li>Providing Backend for Chat applications using FastAPIs</li>
                <li>Deploying Chat Apps to production level</li>
                <li>Maintaining Databases for storing data</li>
                <li>Improvement of existing projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
