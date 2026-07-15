import { Link } from "react-router-dom";
import {
  FaCode,
  FaLaptopCode,
  FaShoppingCart,
  FaCogs,
  FaMobileAlt,
  FaAndroid,
  FaReact,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaJava,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaCloud,
  FaShieldAlt,
  FaPalette,
} from "react-icons/fa";

function Services() {
  const softwareServices = [
    "Website Development",
    "Custom Software Development",
    "Full-Stack Web Development (MERN)",
    "E-Commerce Development",
    "ERP & CRM Solutions",
    "API Development & Integration",
    "Website Maintenance & Support",
    "Desktop Application Development",
  ];

  const mobileServices = [
    "Android App Development",
    "Flutter Development",
    "React Native Development",
    "Hybrid Mobile Applications",
    "App Maintenance & Support",
  ];

  const aiServices = [
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Data Analytics",
    "Business Intelligence",
  ];

  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-[#2c0c61] via-[#2c0c61] to-[#2c0c61] py-24">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Our Services
          </h1>

          <p className="mt-6 text-white-100 text-lg max-w-3xl mx-auto">
            Techdea Technologies provides complete software development,
            technology consulting, AI solutions and digital transformation
            services for startups, businesses and enterprises.
          </p>

        </div>

      </section>

      {/* Software Development */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
              <FaLaptopCode />
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Software Development
              </h2>

              <p className="text-gray-600">
                Modern software solutions tailored for your business.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {softwareServices.map((service) => (

              <div
                key={service}
                className="bg-[#F8FAFC] p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition"
              >

                <FaCode className="text-[#7C3AED] text-3xl mb-5" />

                <h3 className="font-semibold text-lg">
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Mobile Development */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
              <FaMobileAlt />
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Mobile App Development
              </h2>

              <p className="text-gray-600">
                Powerful Android & Cross Platform Applications.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {mobileServices.map((service) => (

              <div
                key={service}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
              >

                <FaAndroid className="text-[#7C3AED] text-3xl mb-5" />

                <h3 className="font-semibold text-lg">
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Artificial Intelligence */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
              <FaRobot />
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Artificial Intelligence
              </h2>

              <p className="text-gray-600">
                AI powered business solutions.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {aiServices.map((service) => (

              <div
                key={service}
                className="bg-[#F8FAFC] rounded-2xl shadow p-6 hover:shadow-xl transition"
              >

                <FaBrain className="text-[#7C3AED] text-3xl mb-5" />

                <h3 className="font-semibold text-lg">
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


{/* Programming Languages */}

<section className="py-20 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-4">

    <div className="flex items-center gap-4 mb-10">

      <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
        <FaJava />
      </div>

      <div>
        <h2 className="text-3xl font-bold">
          Programming Languages
        </h2>

        <p className="text-gray-600">
          Learn and build applications using industry-standard programming languages.
        </p>
      </div>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        "C Programming",
        "C++ Programming",
        "Python Development",
        "Java Development",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
      ].map((item) => (

        <div
          key={item}
          className="bg-white rounded-2xl shadow p-6 hover:shadow-xl hover:-translate-y-2 transition"
        >
          <FaJsSquare className="text-[#7C3AED] text-3xl mb-5" />

          <h3 className="font-semibold text-lg">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="flex items-center gap-4 mb-10">

      <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
        <FaCloud />
      </div>

      <div>

        <h2 className="text-3xl font-bold">
          Cloud Computing & DevOps
        </h2>

        <p className="text-gray-600">
          Modern cloud infrastructure and deployment services.
        </p>

      </div>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "DevOps",
      ].map((item) => (

        <div
          key={item}
          className="bg-[#F8FAFC] rounded-2xl shadow p-6 hover:shadow-xl transition"
        >
          <FaCloud className="text-[#7C3AED] text-3xl mb-5" />

          <h3 className="font-semibold text-lg">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="flex items-center gap-4 mb-10">

      <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
        <FaDatabase />
      </div>

      <div>

        <h2 className="text-3xl font-bold">
          Database Management
        </h2>

        <p className="text-gray-600">
          Reliable database solutions for scalable applications.
        </p>

      </div>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        "SQL",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
      ].map((item) => (

        <div
          key={item}
          className="bg-[#F8FAFC] rounded-2xl shadow p-6 hover:shadow-xl transition"
        >
          <FaDatabase className="text-[#7C3AED] text-3xl mb-5" />

          <h3 className="font-semibold text-lg">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-20 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-4">

    <div className="flex items-center gap-4 mb-10">

      <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
        <FaPalette />
      </div>

      <div>

        <h2 className="text-3xl font-bold">
          UI / UX Design
        </h2>

        <p className="text-gray-600">
          Beautiful, user-friendly and modern digital experiences.
        </p>

      </div>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        "UI Design",
        "UX Design",
        "Figma",
        "Graphic Design",
        "Logo Design",
        "Brand Identity",
      ].map((item) => (

        <div
          key={item}
          className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
        >
          <FaPalette className="text-[#7C3AED] text-3xl mb-5" />

          <h3 className="font-semibold text-lg">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

{/* Business & IT Consulting */}

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="flex items-center gap-4 mb-10">

      <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-[#7C3AED] text-3xl">
        <FaCogs />
      </div>

      <div>

        <h2 className="text-3xl font-bold">
          Business & IT Consulting
        </h2>

        <p className="text-gray-600">
          Helping startups and businesses transform ideas into successful digital products.
        </p>

      </div>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        "IT Consulting",
        "Startup Consulting",
        "Digital Transformation",
        "Business Automation",
        "Software Testing",
        "Technical Documentation",
      ].map((item) => (

        <div
          key={item}
          className="bg-[#F8FAFC] rounded-2xl shadow p-6 hover:shadow-xl hover:-translate-y-2 transition"
        >

          <FaCogs className="text-[#7C3AED] text-3xl mb-5" />

          <h3 className="font-semibold text-lg">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-20 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center">

      <h2 className="text-4xl font-bold">
        Why Choose Techdea Technologies?
      </h2>

      <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
        We combine technology, innovation and industry expertise to deliver
        reliable software solutions for startups, businesses and enterprises.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        {
          title: "Experienced Team",
          desc: "Professional developers with practical industry experience.",
        },
        {
          title: "Modern Technology",
          desc: "React, MERN, AI, Cloud, Cyber Security and latest frameworks.",
        },
        {
          title: "Affordable Solutions",
          desc: "Quality services at competitive pricing.",
        },
        {
          title: "Long-Term Support",
          desc: "Maintenance, updates and technical assistance.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-2xl shadow p-8 hover:shadow-xl hover:-translate-y-2 transition"
        >

          <h3 className="text-xl font-bold">
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

<section className="py-24 bg-gradient-to-r from-[#2c0c61] via-[#2c0c61] to-[#2c0c61]">

  <div className="max-w-5xl mx-auto px-4 text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Let's Build Something Amazing Together
    </h2>

    <p className="mt-6 text-lg text-white-100">
      Whether you need software development, AI solutions, cloud services or
      technology consulting, Techdea Technologies is ready to help.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

      <Link
        to="/contact"
        className="bg-white text-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>

      <Link
        to="/projects"
        className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#7C3AED] transition"
      >
        View Projects
      </Link>

    </div>

  </div>

</section>
    </>
  );
}



export default Services;