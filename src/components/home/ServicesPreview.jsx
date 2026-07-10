import {
  FaLaptopCode,
  FaGlobe,
  FaPython,
  FaChalkboardTeacher,
  FaFileAlt,
  FaUserGraduate,
  FaTools,
  FaChartBar,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function ServicesPreview() {

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Responsive and modern websites for businesses and startups.",
    },
    {
      icon: <FaGlobe />,
      title: "Web Applications",
      desc: "Custom dashboards, portals and management systems.",
    },
    {
      icon: <FaPython />,
      title: "Python Projects",
      desc: "Automation, GUI, AI and academic Python solutions.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Technical Training",
      desc: "Hands-on training with real-world projects.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Career Mentoring",
      desc: "Interview preparation, roadmap and guidance.",
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Building",
      desc: "ATS-friendly resumes and LinkedIn optimization.",
    },
    {
      icon: <FaChartBar />,
      title: "PPT & Excel",
      desc: "Professional presentations and dashboards.",
    },
    {
      icon: <FaTools />,
      title: "Technical Support",
      desc: "Maintenance, debugging and software solutions.",
    },
  ];

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-amber-500 font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-slate-800 mt-3">
            What We Offer
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We provide professional IT services, technical training,
            career mentoring and software development solutions
            designed for students, startups and businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              <div className="text-5xl text-amber-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <NavLink
            to="/services"
            className="bg-amber-500 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View All Services
          </NavLink>

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;