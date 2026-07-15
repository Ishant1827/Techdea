function Training() {
  const courses = [
    {
      title: "Web Development",
      description:
        "Learn HTML, CSS, JavaScript, Bootstrap, responsive design, and build modern websites from scratch.",
    },
    {
      title: "React.js Development",
      description:
        "Build fast, responsive, and interactive web applications using React and modern frontend practices.",
    },
    {
      title: "Python Programming",
      description:
        "Master Python from basics to advanced concepts including automation, GUI development, and projects.",
    },
    {
      title: "Full Stack Development",
      description:
        "Learn frontend, backend, databases, APIs, authentication, and deploy complete applications.",
    },
    {
      title: "Career Mentoring",
      description:
        "Get personalized guidance for internships, placements, resume building, LinkedIn, and interviews.",
    },
    {
      title: "Project-Based Learning",
      description:
        "Work on real-world projects to build practical skills and create a strong portfolio.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-white-700 via-white-600 to-white-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Training & <span className="text-white-400">Mentorship</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Practical learning designed for beginners, students, and aspiring
            developers through industry-oriented training and real-world
            projects.
          </p>

        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Our Training Programs
            </h2>

            <p className="mt-4 text-slate-400">
              Learn by building projects instead of just watching tutorials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-[#09090B] rounded-xl shadow-xl hover:shadow-2xl p-8 hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-7">
                  {course.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Mentorship */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Learn With Expert Mentorship
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Techdea believes in practical education. Every student works on
              real projects while receiving one-to-one guidance, career advice,
              interview preparation, and technical support.
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              Our goal is to transform beginners into confident developers
              ready for internships, freelance projects, and professional
              careers.
            </p>
          </div>

          <div className="bg-[#09090B] rounded-xl shadow-xl hover:shadow-2xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Training Highlights
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>100+ Students Mentored</li>
              <li>Beginner Friendly Learning</li>
              <li>Live Project Experience</li>
              <li>Portfolio Development</li>
              <li>Interview Preparation</li>
              <li>Resume Building</li>
              <li>Certificate of Completion</li>

            </ul>

          </div>

        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Our Learning Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-4">Learn</h3>
              <p>Understand concepts with practical examples.</p>
            </div>

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-4">Practice</h3>
              <p>Build mini projects after every topic.</p>
            </div>

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-4">Build</h3>
              <p>Create industry-level real-world applications.</p>
            </div>

            <div className="bg-[#09090B] rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-4">Launch</h3>
              <p>Deploy projects and prepare for your career.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-white-700 via-white-600 to-white-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Tech Journey?
          </h2>

          <p className="mt-5 text-gray-300">
            Join Techdea and gain practical experience through hands-on
            training, mentorship, and real-world projects.
          </p>

          <button className="mt-8 bg-white-600 text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] transition">
            Enroll Now
          </button>

        </div>
      </section>
    </>
  );
}

export default Training;