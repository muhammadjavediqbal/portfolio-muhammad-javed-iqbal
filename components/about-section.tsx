import { GraduationCap, MapPin, Music, Gamepad2, Plane } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-classic-black/50 border-t border-b border-golden-pitch/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base mb-4 text-gray-300">
              I&apos;m a Python developer with a passion for AI, Data Science, Machine Learning, and NLP. I create
              solutions using FastAPI, build data pipelines with Langchain, and work with vector databases like Pinecone
              and Qdrant to manage data efficiently.
            </p>
            <p className="text-base mb-4 text-gray-300">
              My focus is on building chatbots and RAG systems for real-time, context-driven interactions. I&apos;m
              currently working as an AI/ML Engineer at Xeven Solutions, where I develop chat applications, perform
              prompt engineering for LLMs, and deploy AI solutions to production.
            </p>
            <div className="flex items-center mb-3 text-gray-300">
              <MapPin className="gradient-text mr-2" size={18} />
              <span>Bahawalpur, Pakistan</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 gradient-text">Education</h3>
            <div className="space-y-3">
              <div className="flex">
                <div className="mr-3">
                  <div className="w-9 h-9 rounded-full bg-golden-pitch flex items-center justify-center">
                    <GraduationCap className="text-off-white" size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-off-white">NUCES FAST</h4>
                  <p className="text-gray-300 text-sm">Bachelor in Computer Sciences (2019-2023)</p>
                  <p className="text-gray-400 text-sm">Peshawar, Pakistan</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div className="w-9 h-9 rounded-full bg-golden-pitch flex items-center justify-center">
                    <GraduationCap className="text-off-white" size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-off-white">Punjab Group of Colleges (PGC)</h4>
                  <p className="text-gray-300 text-sm">FSC (Pre-Engineering) (2017-2019)</p>
                  <p className="text-gray-400 text-sm">Bahawalpur, Pakistan</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div className="w-9 h-9 rounded-full bg-golden-pitch flex items-center justify-center">
                    <GraduationCap className="text-off-white" size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-off-white">The City School</h4>
                  <p className="text-gray-300 text-sm">O-Levels (2014-2016)</p>
                  <p className="text-gray-400 text-sm">Bahawalpur, Pakistan</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 gradient-text">Interests</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-golden-pitch/30 px-3 py-1.5 rounded-lg border border-golden-pitch/50">
                <Gamepad2 className="gradient-text mr-2" size={16} />
                <span>Gaming</span>
              </div>
              <div className="flex items-center bg-golden-pitch/30 px-3 py-1.5 rounded-lg border border-golden-pitch/50">
                <Music className="gradient-text mr-2" size={16} />
                <span>Music</span>
              </div>
              <div className="flex items-center bg-golden-pitch/30 px-3 py-1.5 rounded-lg border border-golden-pitch/50">
                <Plane className="gradient-text mr-2" size={16} />
                <span>Traveling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
