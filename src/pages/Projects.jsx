function Projects() {
  const projects = [
    {
      title: "Online Test Portal",
      tech: "React • Node.js • MongoDB",
      description:
        "A web-based examination platform for conducting online tests, managing question banks, and evaluating student performance.",
    },
    {
      title: "Certificate Portal",
      tech: "React • Node.js • MySQL",
      description:
        "Digital platform for generating, managing, and verifying certificates securely.",
    },
    {
      title: "EduMitra",
      tech: "React • JavaScript • MySQL",
      description:
        "Educational platform for student management, learning resources, and academic activities.",
    },
    {
      title: "Indigo Trainings",
      tech: "React • Node.js",
      description:
        "Training management website for organizing courses, workshops, and learning programs.",
    },
    {
      title: "Healthcare App",
      tech: "React • Node.js",
      description:
        "Healthcare management application for organizing patient information and healthcare services.",
    },
    {
      title: "Trader Analysis",
      tech: "Python • Machine Learning",
      description:
        "Market analysis application that helps users understand trading trends using data analysis.",
    },
    {
      title: "Face Recognition (LBPH)",
      tech: "Python • OpenCV",
      description:
        "Face recognition system using the LBPH algorithm for secure identity verification.",
    },
    {
      title: "SizeSnap",
      tech: "Python • AI",
      description:
        "Smart measurement application designed to improve sizing accuracy and user convenience.",
    },
    {
      title: "Real Estate AI Agent",
      tech: "React • AI",
      description:
        "AI-powered assistant that helps users explore properties and provides intelligent recommendations.",
    },
    {
      title: "GitHub Profile Viewer",
      tech: "React • GitHub API",
      description:
        "Application that fetches and displays GitHub user profiles using the GitHub REST API.",
    },
    {
      title: "To-Do Application",
      tech: "React",
      description:
        "Task management application for creating, organizing, and tracking daily activities.",
    },
    {
      title: "Lead Generation Automation",
      tech: "Python",
      description:
        "Automation solution for collecting and managing business leads efficiently.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our <span className="text-purple-400">Projects</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            A collection of real-world web applications, software solutions,
            automation tools, AI projects, and educational platforms developed
            by Techdea.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Featured Projects
            </h2>

            <p className="mt-4 text-gray-700">
              Showcasing innovation, practical learning, and real-world
              development experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:shadow-2xl transition p-6"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="text-purple-600 font-semibold mt-3">
                  {project.tech}
                </p>

                <p className="text-gray-700 mt-4 leading-7">
                  {project.description}
                </p>

                <button className="mt-6 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-700 hover:text-black transition">
                  View Details
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-purple-600">20+</h2>
              <p className="mt-3 text-gray-700">Projects Completed</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-purple-600">100+</h2>
              <p className="mt-3 text-gray-700">Students Mentored</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-purple-600">10+</h2>
              <p className="mt-3 text-gray-700">Technologies Used</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-purple-600">100%</h2>
              <p className="mt-3 text-gray-700">Practical Learning</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Have a Project Idea?
          </h2>

          <p className="mt-5 text-gray-300">
            Let's turn your ideas into reality with modern technology and
            innovative development solutions.
          </p>

          <button className="mt-8 bg-purple-600 text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            Start Your Project
          </button>

        </div>
      </section>
    </>
  );
}

export default Projects;