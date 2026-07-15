import { NavLink } from "react-router-dom";
import {
  FaCode,
  FaPython,
  FaLaptopCode,
  FaUserTie,
  FaShieldAlt,
  FaDatabase,
  FaPalette,
  FaCloud,
} from "react-icons/fa";

function TrainingPreview() {
  const trainings = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      desc: "C, C++, Java, Python, JavaScript and modern programming fundamentals.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web & Software Development",
      desc: "HTML, CSS, JavaScript, React, MERN Stack, Custom Software & Mobile Apps.",
    },
    {
      icon: <FaPython />,
      title: "AI, Data & Cloud",
      desc: "Artificial Intelligence, Machine Learning, Data Science, Cloud Computing and DevOps.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Ethical Hacking, Network Security and Cyber Security fundamentals.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      desc: "SQL, MySQL, MongoDB, Database Design and Data Management.",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Design",
      desc: "UI/UX Design, Figma, Canva, Graphic Design and User Experience.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      desc: "AWS, Azure, Docker, Kubernetes and DevOps practices.",
    },
    {
      icon: <FaUserTie />,
      title: "Career Development",
      desc: "Internships, Live Projects, Resume Building, LinkedIn, Mock Interviews and Placement Assistance.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
            Training Programs
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Learn In-Demand Skills with Industry Experts
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Explore our industry-focused training programs designed for
            students, professionals and businesses. Learn through live
            projects, internships, certifications and expert mentorship.
          </p>

        </div>

        {/* Training Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {trainings.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl border border-purple-200 shadow-md hover:shadow-xl hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300 p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-[#7C3AED] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-14">

          <NavLink
            to="/training"
            className="inline-flex items-center bg-[#7C3AED] hover:bg-[#9333EA] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Explore All Training Programs
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default TrainingPreview;