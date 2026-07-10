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
      desc: "Helping beginners build confidence, technical skills and successful careers.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Real Project Experience",
      desc: "Learn by building practical industry-level projects instead of only theory.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Modern Technologies",
      desc: "Work with React, Node.js, Python, MongoDB, AI and latest web technologies.",
    },
    {
      icon: <FaHandshake />,
      title: "Beginner Friendly",
      desc: "Perfect guidance for school students, college students and freshers.",
    },
    {
      icon: <FaRocket />,
      title: "Career Growth",
      desc: "Resume building, interview preparation and career mentoring.",
    },
    {
      icon: <FaHeadset />,
      title: "Lifetime Support",
      desc: "Continuous guidance even after training and project completion.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-amber-500 uppercase tracking-widest font-semibold">
            Why Choose Techdea
          </p>

          <h2 className="text-5xl font-bold text-slate-800 mt-3">
            Building Skills. Creating Opportunities.
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We believe technology should be practical, accessible and
            career-oriented. Our goal is to help students and businesses
            achieve success through innovation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl text-amber-500 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
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