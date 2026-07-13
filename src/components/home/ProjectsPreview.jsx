import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ProjectsPreview() {

  const projects = [
    {
      title: "Online Test Portal",
      tech: "React • Node.js • MongoDB",
      desc: "A complete online examination platform with authentication, tests and result management.",
      github: "https://github.com/Ishant1827/Online-Test-Portal",
    },
    {
      title: "EduMitra",
      tech: "React • Express • MongoDB",
      desc: "Educational platform for students, mentors and learning management.",
      github: "https://github.com/Ishant1827/EduMitra",
    },
    {
      title: "Certificate Portal",
      tech: "React • Node.js",
      desc: "Generate and verify digital certificates securely.",
      github: "https://github.com/Ishant1827/Certificate-Portal",
    },
    {
      title: "Healthcare App",
      tech: "React • Firebase",
      desc: "Healthcare management application for patients and healthcare services.",
      github: "https://github.com/Ishant1827/healthcare-app",
    },
    {
      title: "Trader Analysis",
      tech: "Python",
      desc: "Analyze stock market trends using Python.",
      github: "https://github.com/Ishant1827/Trader-Analysis",
    },
    {
      title: "Real Estate AI Agent",
      tech: "AI • React",
      desc: "AI-powered assistant for property recommendations.",
      github: "https://github.com/Ishant1827/real-estate-ai-agent",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-widest text-purple-400 font-semibold">
            Featured Projects
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Our Latest Work
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto">
            We build real-world software solutions, educational platforms,
            AI applications, automation tools and business websites.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-3 transition duration-300 shadow-xl"
            >

              <div className="h-40 bg-slate-700 rounded-xl flex items-center justify-center mb-6">

                <h3 className="text-2xl font-bold text-purple-400">
                  {project.title}
                </h3>

              </div>

              <p className="text-purple-400 text-sm">
                {project.tech}
              </p>

              <p className="text-gray-300 mt-4 leading-7">
                {project.desc}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-[#7C3AED] hover:bg-[#9333EA] px-5 py-2 rounded-lg"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <NavLink
            to="/projects"
            className="bg-[#09090B] text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition"
          >
            View All Projects
          </NavLink>

        </div>

      </div>

    </section>
  );
}

export default ProjectsPreview;