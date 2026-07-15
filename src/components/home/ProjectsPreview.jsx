import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ProjectsPreview() {

  const projects = [
    {
      title: "Online Test Portal",
      tech: "React • Node.js • MongoDB",
      desc: "Complete online examination platform with authentication, question bank, result management and admin dashboard.",
      github: "https://github.com/Ishant1827/Online-Test-Portal",
      live: "#",
    },
    {
      title: "Indigo Trainings",
      tech: "React • Node.js",
      desc: "Training management platform for courses, internships, certifications and student registration.",
      github: "https://github.com/Ishant1827/Indigo_Trainings",
      live: "#",
    },
    {
      title: "Face Recognition (LBPH)",
      tech: "Python • OpenCV",
      desc: "AI-based face recognition system using the LBPH algorithm for secure identity verification.",
      github: "https://github.com/Ishant1827/FaceRecognitionLBPH",
      live: "#",
    },
    {
      title: "To-Do Application",
      tech: "React",
      desc: "Modern task management application for creating, organizing and tracking daily activities.",
      github: "https://github.com/Ishant1827/to-do_app",
      live: "#",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Our Featured Work
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Explore some of our real-world software, AI and web development
            projects built using modern technologies and industry best
            practices.
          </p>

        </div>

        {/* Projects */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white border border-purple-200 rounded-2xl shadow-md hover:shadow-xl hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >

              {/* Project Header */}

              <div className="h-32 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] flex items-center justify-center px-4">

                <h3 className="text-2xl font-bold text-white text-center">
                  {project.title}
                </h3>

              </div>

              <div className="p-6">

                <p className="text-[#7C3AED] font-semibold text-sm">
                  {project.tech}
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  {project.desc}
                </p>
                                {/* Buttons */}

                <div className="flex gap-3 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#9333EA] text-white py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Button */}

        <div className="text-center mt-16">

          <NavLink
            to="/projects"
            className="inline-flex items-center bg-[#7C3AED] hover:bg-[#9333EA] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            View All Projects
          </NavLink>

        </div>

      </div>

    </section>
  );
}

export default ProjectsPreview;