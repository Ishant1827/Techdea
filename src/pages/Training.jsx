import {
  FaRobot,
  FaLaptopCode,
  FaCode,
  FaPython,
  FaJava,
  FaMobileAlt,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaPaintBrush,
  FaProjectDiagram,
  FaUserGraduate,
  FaCertificate,
  FaBriefcase,
  FaFileAlt,
  FaLinkedin,
  FaChalkboardTeacher,
  FaUserTie,
} from "react-icons/fa";

function Training() {
  const trainings = [
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence & Machine Learning",
      desc: "Learn AI, Machine Learning, Deep Learning, Computer Vision and real-world intelligent applications.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Web Development (MERN)",
      desc: "HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB with live projects.",
    },
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      desc: "Desktop applications, ERP systems, management software and business solutions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Modern Android applications using Flutter and React Native.",
    },
    {
      icon: <FaPython />,
      title: "Python Development",
      desc: "Python programming, automation, GUI, APIs, AI and project development.",
    },
    {
      icon: <FaJava />,
      title: "Java Development",
      desc: "Core Java, OOP, JDBC and Java application development.",
    },
    {
      icon: <FaCode />,
      title: "C & C++ Programming",
      desc: "Programming fundamentals, DSA and problem solving using C/C++.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Ethical Hacking, Network Security, Penetration Testing and Cyber Awareness.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing & DevOps",
      desc: "AWS, Azure, Docker, GitHub, CI/CD and cloud deployment.",
    },
    {
      icon: <FaDatabase />,
      title: "Data Science & Analytics",
      desc: "Data Analysis, Visualization, Pandas, NumPy and Machine Learning basics.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      desc: "SQL, MySQL, MongoDB, Database Design and Management.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      desc: "Figma, Canva, UI Design, User Experience and Prototyping.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Real World Projects",
      desc: "Build industry-level live projects with proper guidance.",
    },
    {
      icon: <FaBriefcase />,
      title: "Internship Programs",
      desc: "Industry internships with practical exposure and experience certificates.",
    },
    {
      icon: <FaCertificate />,
      title: "Industry Certifications",
      desc: "Professional certifications after successful training completion.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Mentorship & Career Guidance",
      desc: "One-to-one mentoring, roadmap planning and career counseling.",
    },
    {
      icon: <FaFileAlt />,
      title: "Resume & Portfolio Building",
      desc: "ATS-friendly resume, portfolio website and LinkedIn optimization.",
    },
    {
      icon: <FaUserTie />,
      title: "Mock Interviews & Placement",
      desc: "Technical interviews, aptitude preparation and placement assistance.",
    },
  ];

  return (
    <>
      {/* Hero Section */}

      <section className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Training & Mentorship
          </h1>

          <p className="mt-6 text-lg md:text-xl text-purple-100 max-w-4xl mx-auto leading-8">
            Learn the latest technologies through practical training,
            live projects, internships and expert mentorship.
            Our programs are designed to make you industry-ready.
          </p>

        </div>

      </section>

            {/* Training Programs */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Our Programs
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Industry-Oriented Training Programs
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
              Gain practical experience through live projects, hands-on
              assignments and real industry workflows designed by experts.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {trainings.map((item, index) => (

              <div
                key={index}
                className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-[#7C3AED] mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
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

      {/* Why Choose Techdea */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Why Learn With Us
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Practical Learning That Builds Careers
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-md">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                100+
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-gray-900">
                Students Trained
              </h4>

              <p className="mt-3 text-gray-600">
                Practical learning with expert guidance.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-md">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                25+
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-gray-900">
                Live Projects
              </h4>

              <p className="mt-3 text-gray-600">
                Build real-world applications from scratch.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-md">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                1 : 1
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-gray-900">
                Mentorship
              </h4>

              <p className="mt-3 text-gray-600">
                Personalized guidance for every learner.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-md">

              <h3 className="text-2xl font-bold text-[#7C3AED]">
                100%
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-gray-900">
                Placement Support
              </h4>

              <p className="mt-3 text-gray-600">
                Resume building, mock interviews and career guidance.
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* Learning Roadmap */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
              Learning Roadmap
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Our Training Process
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-gray-600">
              We follow a structured learning approach to help students
              become industry-ready professionals.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-xl font-bold">
                1
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Learn
              </h3>

              <p className="mt-3 text-gray-600">
                Build strong fundamentals with practical sessions.
              </p>

            </div>

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-xl font-bold">
                2
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Practice
              </h3>

              <p className="mt-3 text-gray-600">
                Solve assignments and mini projects regularly.
              </p>

            </div>

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-xl font-bold">
                3
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Build
              </h3>

              <p className="mt-3 text-gray-600">
                Develop live industry-level projects with mentorship.
              </p>

            </div>

            <div className="bg-[#F8FAFC] border border-purple-200 rounded-2xl p-8 text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-xl font-bold">
                4
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Launch
              </h3>

              <p className="mt-3 text-gray-600">
                Create portfolio, prepare for interviews and get placement support.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Training Highlights */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl border border-purple-200 shadow-lg p-10">

            <h2 className="text-4xl font-bold text-center text-gray-900">
              Training Highlights
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                ✅ Live Industry Projects
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                ✅ Internship Opportunities
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                ✅ Industry Certification
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                ✅ Resume & Portfolio Building
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                ✅ LinkedIn Optimization
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                ✅ Mock Interviews & Placement Support
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready To Start Your Tech Journey?
          </h2>

          <p className="mt-6 text-lg text-purple-100 leading-8">
            Join Techdea and gain practical experience through live
            projects, internships, expert mentorship and industry-focused
            training programs designed for your career growth.
          </p>

          <button className="mt-10 bg-white text-[#7C3AED] hover:bg-[#22C55E] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            Enroll Now
          </button>

        </div>

      </section>

    </>
  );
}

export default Training;