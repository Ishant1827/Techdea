import {
  FaUsers,
  FaProjectDiagram,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "100+",
      title: "Students Mentored",
    },
    {
      icon: <FaProjectDiagram />,
      number: "25+",
      title: "Projects Completed",
    },
    {
      icon: <FaLaptopCode />,
      number: "18+",
      title: "Services Offered",
    },
    {
      icon: <FaAward />,
      number: "100%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-[#7C3AED] uppercase tracking-[4px] font-semibold">
            Our Achievements
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Numbers That Define Our Growth
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            We are committed to delivering quality solutions, practical
            learning and continuous innovation for students, startups and
            businesses.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-[#F8FAFC] border border-purple-200 rounded-2xl shadow-md hover:shadow-xl hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-[#7C3AED]">

                {item.icon}

              </div>

              <h3 className="mt-6 text-4xl font-bold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;