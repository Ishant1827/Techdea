import { FaUsers, FaLaptopCode, FaProjectDiagram, FaAward } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "100+",
      title: "Students Mentored",
    },
    {
      icon: <FaProjectDiagram />,
      number: "20+",
      title: "Projects Completed",
    },
    {
      icon: <FaLaptopCode />,
      number: "8+",
      title: "Services Offered",
    },
    {
      icon: <FaAward />,
      number: "100%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-[#09090B] py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-[#09090B] rounded-xl shadow-xl hover:shadow-2xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl text-purple-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-slate-900">
                {item.number}
              </h2>

              <p className="text-slate-400 mt-2">
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