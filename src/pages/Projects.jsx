import { Link } from "react-router-dom";
import {
  FaGithub,
  FaGlobe,
  FaCode,
  FaRobot,
  FaPython,
  FaReact,
} from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "Online Test Portal",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Ishant1827/Online-Test-Portal",
      description:
        "Complete online examination system with student login, admin panel, result management and question bank.",
    },

    {
      title: "Certificate Portal",
      category: "Web Development",
      tech: ["React", "Node.js", "MySQL"],
      github: "https://github.com/Ishant1827/Certificate-Portal",
      description:
        "Digital certificate generation and verification platform with secure authentication.",
    },

    {
      title: "EduMitra",
      category: "Education",
      tech: ["React", "JavaScript", "MySQL"],
      github: "https://github.com/Ishant1827/EduMitra",
      description:
        "Learning platform for managing students, resources, attendance and academic activities.",
    },

    {
      title: "Indigo Trainings",
      category: "Training",
      tech: ["React", "Node.js"],
      github: "https://github.com/Ishant1827/Indigo_Trainings",
      description:
        "Training management portal for courses, internships and certifications.",
    },

    {
      title: "InAmigos Foundation",
      category: "NGO Website",
      tech: ["React"],
      github: "https://github.com/Ishant1827/InAmigos-Foundation-Website",
      description:
        "Modern NGO website showcasing initiatives, donation details and social impact.",
    },

    {
      title: "Healthcare App",
      category: "Healthcare",
      tech: ["React", "Node.js"],
      github: "https://github.com/Ishant1827/healthcare-app",
      description:
        "Healthcare platform for managing patient records and medical services.",
    },

    {
      title: "Trader Analysis",
      category: "AI",
      tech: ["Python", "Machine Learning"],
      github: "https://github.com/Ishant1827/Trader-Analysis",
      description:
        "Machine learning based trading analysis system for understanding market trends.",
    },

    {
      title: "Face Recognition (LBPH)",
      category: "Artificial Intelligence",
      tech: ["Python", "OpenCV"],
      github: "https://github.com/Ishant1827/FaceRecognitionLBPH",
      description:
        "Secure face recognition system using Local Binary Pattern Histogram algorithm.",
    },

    {
      title: "SizeSnap",
      category: "Artificial Intelligence",
      tech: ["Python", "AI"],
      github: "https://github.com/Ishant1827/sizesnap",
      description:
        "AI powered smart measurement application for accurate sizing.",
    },

    {
      title: "Real Estate AI Agent",
      category: "Artificial Intelligence",
      tech: ["React", "AI"],
      github: "https://github.com/Ishant1827/real-estate-ai-agent",
      description:
        "AI assistant for property recommendations and smart real estate search.",
    },

  ];

  return (
    <>

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our Projects
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white-100">

            Explore our portfolio of real-world applications,
            AI solutions, automation tools,
            business software and modern web projects.

          </p>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">

              <h2 className="text-5xl font-bold text-[#7C3AED]">
                25+
              </h2>

              <p className="mt-3 text-gray-600">
                Projects
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-bold text-[#7C3AED]">
                15+
              </h2>

              <p className="mt-3 text-gray-600">
                Technologies
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-bold text-[#7C3AED]">
                100+
              </h2>

              <p className="mt-3 text-gray-600">
                Students
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-bold text-[#7C3AED]">
                5+
              </h2>

              <p className="mt-3 text-gray-600">
                Domains
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* Featured Projects */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>

            <p className="mt-4 text-gray-600">
              A collection of real-world software, AI, automation and web
              development projects.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >

                <div className="h-2 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA]" />

                <div className="p-7">

                  <span className="inline-block px-3 py-1 rounded-full bg-white-100 text-[#7C3AED] text-sm font-semibold">
                    {project.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {project.description}
                  </p>

                  {/* Technology */}

                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white-50 text-[#7C3AED] text-sm font-medium"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4 mt-8">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#9333EA] text-white py-3 rounded-xl transition"
                    >

                      <FaGithub />

                      GitHub

                    </a>

                    <button
                      className="flex items-center justify-center w-14 h-12 rounded-xl border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition"
                    >

                      <FaGlobe />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Technologies */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Technologies We Use
            </h2>

            <p className="mt-4 text-gray-600">
              Modern technologies used across our software and AI projects.
            </p>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">

            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
              "Python",
              "Java",
              "JavaScript",
              "OpenCV",
              "Machine Learning",
              "Tailwind CSS",
              "GitHub",
            ].map((item) => (

              <div
                key={item}
                className="bg-[#F8FAFC] rounded-xl border border-gray-200 p-6 text-center hover:border-[#7C3AED] hover:-translate-y-1 transition"
              >

                <FaCode className="mx-auto text-3xl text-[#7C3AED]" />

                <p className="mt-4 font-semibold text-gray-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* Development Process */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Our Development Process
            </h2>

            <p className="mt-4 text-gray-600">
              Every successful project follows a structured workflow.
            </p>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

            {[
              "Requirement Analysis",
              "Planning",
              "Design",
              "Development",
              "Testing",
              "Deployment",
            ].map((step, index) => (

              <div
                key={step}
                className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 text-center hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-12 h-12 mx-auto rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold text-gray-900">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Techdea */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Techdea?
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We focus on quality, innovation and practical solutions that help
              businesses and students achieve real results.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                title: "Real Projects",
                desc: "Industry-oriented software and AI projects."
              },
              {
                title: "Latest Technology",
                desc: "React, MERN, Python, AI, Cloud and Automation."
              },
              {
                title: "Experienced Team",
                desc: "Professional developers and mentors."
              },
              {
                title: "Quality Delivery",
                desc: "Reliable solutions with long-term support."
              },
            ].map((item) => (

              <div
                key={item.title}
                className="bg-[#F8FAFC] rounded-2xl border border-gray-200 p-8 hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300"
              >

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Have a Project Idea?
          </h2>

          <p className="mt-6 text-lg text-white-100 max-w-3xl mx-auto">
            Whether you need a website, software, AI solution or automation,
            Techdea Technologies is ready to transform your ideas into reality.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              to="/contact"
              className="bg-white text-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#7C3AED] transition"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default Projects;