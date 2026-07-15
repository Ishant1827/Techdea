import {
  FaUserGraduate,
  FaLaptopCode,
  FaProjectDiagram,
  FaHandshake,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserGraduate />,
      title: "100+ Students Mentored",
      desc: "Helping students and professionals build technical skills through practical learning.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Real-World Projects",
      desc: "Gain hands-on experience by working on industry-oriented live projects.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Latest Technologies",
      desc: "Learn React, MERN, Python, AI, Cloud Computing, DevOps and more.",
    },
    {
      icon: <FaHandshake />,
      title: "Beginner Friendly",
      desc: "Easy-to-follow guidance for school students, college students and freshers.",
    },
    {
      icon: <FaRocket />,
      title: "Career Growth",
      desc: "Resume building, portfolio development, mock interviews and placement support.",
    },
    {
      icon: <FaHeadset />,
      title: "Lifetime Support",
      desc: "Continuous mentorship and technical guidance even after training completion.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
            Why Choose Techdea
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Building Skills. Creating Opportunities.
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            We combine innovation, practical learning and modern technology to
            help students, startups and businesses achieve long-term success.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl border border-purple-100 shadow-md hover:shadow-xl hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300 p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-[#7C3AED]">

                {feature.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;