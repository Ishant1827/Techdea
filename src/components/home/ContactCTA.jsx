import { NavLink } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0B1120] to-[#1E293B] text-white">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <p className="uppercase tracking-widest text-amber-400 font-semibold">
          Let's Build Something Amazing
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Ready to Start Your Next Project?
        </h2>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
          Whether you need a professional website, a custom web application,
          Python solutions, technical training, or career guidance,
          Techdea is here to help you achieve your goals.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          <NavLink
            to="/contact"
            className="bg-amber-500 hover:bg-orange-500 px-8 py-4 rounded-lg font-semibold transition"
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/projects"
            className="border border-amber-500 px-8 py-4 rounded-lg hover:bg-amber-500 transition"
          >
            View Projects
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;