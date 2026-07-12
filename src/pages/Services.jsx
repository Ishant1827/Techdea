function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Responsive, modern, and business-oriented websites built using the latest web technologies.",
    },
    {
      title: "Web Application Development",
      description:
        "Custom dashboards, management systems, portals, and scalable web applications tailored to business needs.",
    },
    {
      title: "Python Projects",
      description:
        "Academic and business Python projects including automation, GUI applications, data processing, and machine learning.",
    },
    {
      title: "Resume & CV Building",
      description:
        "Professional ATS-friendly resumes, CVs, LinkedIn profile optimization, and portfolio creation.",
    },
    {
      title: "Career Guidance & Mentoring",
      description:
        "Personalized mentoring, interview preparation, career planning, and technical guidance for students and professionals.",
    },
    {
      title: "Presentation & Documentation",
      description:
        "Professional PowerPoint presentations, Excel dashboards, reports, project documentation, and business documents.",
    },
    {
      title: "Training Programs",
      description:
        "Industry-oriented training in Web Development, Python, React, Full Stack Development, and project-based learning.",
    },
    {
      title: "Technical Support",
      description:
        "Website maintenance, bug fixing, software installation, troubleshooting, optimization, and technical consultation.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our <span className="text-purple-400">Services</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            We provide innovative technology solutions, professional
            development services, technical mentoring, and industry-focused
            training to help individuals and businesses grow.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              What We Offer
            </h2>

            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Techdea provides complete technology solutions, project
              development, mentoring, and training designed for students,
              startups, and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-t-4 border-purple-600"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-7">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Why Choose Techdea?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                Real Projects
              </h3>

              <p className="text-gray-700">
                Work on practical industry-level projects with real-world
                experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                100+ Students Mentored
              </h3>

              <p className="text-gray-700">
                Successfully guided students in web development, Python,
                resume building, and career preparation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                Industry-Oriented Learning
              </h3>

              <p className="text-gray-700">
                Learn technologies that are actually used in professional
                software development.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                End-to-End Support
              </h3>

              <p className="text-gray-700">
                From learning to deployment, we support every stage of your
                journey.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Project?
          </h2>

          <p className="mt-5 text-gray-300">
            Whether you need a website, software solution, technical
            training, or career guidance, Techdea is ready to help you.
          </p>

          <button className="mt-8 bg-purple-600 text-black font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition">
            Contact Us
          </button>

        </div>
      </section>
    </>
  );
}

export default Services;