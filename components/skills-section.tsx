const SkillsSection = () => {
  const skills = [
    { name: "Python", level: 95 },
    { name: "NLP", level: 90 },
    { name: "FastAPI", level: 85 },
    { name: "VectorDB (Pinecone, Qdrant & Chroma)", level: 85 },
    { name: "Langchain", level: 90 },
    { name: "TensorFlow", level: 80 },
    { name: "PyTorch", level: 75 },
    { name: "RAG", level: 90 },
    { name: "PostGres SQL", level: 80 },
    { name: "OpenCV", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Git", level: 85 },
  ]

  return (
    <section id="skills" className="py-16 bg-classic-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-base mb-6 text-gray-300">
              I specialize in Python development with a focus on AI, Machine Learning, and Natural Language Processing.
              My expertise includes building data pipelines, developing chatbots, and implementing RAG systems for
              context-driven interactions.
            </p>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <span key={skill.name} className="skill-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {skills.slice(0, 6).map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="gradient-text text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-golden-pitch/30 rounded-full h-2">
                  <div className="gradient-bg h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
