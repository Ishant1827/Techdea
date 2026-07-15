import {
  FaLaptopCode,
  FaRobot,
  FaMobileAlt,
  FaPython,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaUserTie,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function ServicesPreview() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web & Software Development",
      desc: "Modern websites, MERN stack applications, ERP systems and custom software solutions.",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      desc: "AI, Machine Learning, Data Science and intelligent automation solutions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Applications",
      desc: "Android applications, cross-platform development and business mobile solutions.",
    },
    {
      icon: <FaPython />,
      title: "Programming & Development",
      desc: "Python, Java, C, C++, JavaScript and real-world programming projects.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Ethical hacking, network security, penetration testing and cyber awareness.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      desc: "AWS, Azure, Docker, Kubernetes, CI/CD pipelines and cloud deployment.",
    },
    {
      icon: <FaDatabase />,
      title: "Database & UI/UX",
      desc: "SQL, MongoDB, database design, Figma and user experience design.",
    },
    {
      icon: <FaUserTie />,
      title: "Career Services",
      desc: "Internships, certifications, resume building, LinkedIn optimization and placement support.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Technology Solutions For Everyone
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We deliver innovative software solutions, AI services,
            technical training, cloud technologies and career support
            to help students, startups and businesses grow with confidence.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-[#7C3AED] mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-14">

          <NavLink
            to="/services"
            className="inline-flex items-center bg-[#7C3AED] hover:bg-[#9333EA] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Explore All Services
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;