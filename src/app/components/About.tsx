export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1700619663094-be321751b545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzcyMzczNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Workspace"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate developer with 5+ years of experience in building web applications 
              and digital products. I specialize in React, TypeScript, and modern web technologies.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in tech started with a curiosity about how things work, which led me to 
              pursue computer science and develop a deep love for creating elegant solutions to 
              complex problems.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new design trends, contributing to 
              open-source projects, or enjoying a good cup of coffee while sketching out new ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
