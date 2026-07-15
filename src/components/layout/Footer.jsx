import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Training", path: "/training" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Website Development",
    "Software Development",
    "UI/UX Design",
    "IT Training",
    "Internship Program",
    "Project Guidance",
  ];

  return (
    <>
      <footer className="bg-[#11111a] border-b border-zinc-800 shadow-lg">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Company */}

            <div>

              <h2 className="text-3xl font-bold text-white">
                Tech<span className="text-[#A855F7]">dea</span>
              </h2>

              <p className="text-slate-400 mt-5 leading-7">
                Techdea Technologies creates innovative software, responsive websites, internships, and industry-focused training programs to help students gain real-world experience and businesses thrive in the digital era.
              </p>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">

                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-[#A855F7] transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-5">
                Services
              </h3>

              <ul className="space-y-3">

                {services.map((service) => (
                  <li
                    key={service}
                    className="text-slate-400"
                  >
                    {service}
                  </li>
                ))}

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-5">
                Contact
              </h3>

              <div className="space-y-5">

                <a
                  href="tel:+919369907885"
                  className="flex items-center gap-3 text-slate-400 hover:text-[#A855F7] transition"
                >
                  <FaPhoneAlt />
                  +91 9369907885
                </a>

                <a
                  href="mailto:contact.techdea@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-[#A855F7] transition"
                >
                  <FaEnvelope />
                  contact.techdea@gmail.com
                </a>

                <a
                  href="mailto:manager.techdea@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-[#A855F7] transition"
                >
                  <FaEnvelope />
                  manager.techdea@gmail.com
                </a>

              </div>

              {/* Social */}

              <div className="flex gap-4 mt-8">

                <a
                  href="https://github.com/techdea-technologies"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111118] border border-zinc-700 flex items-center justify-center text-white hover:bg-[#7C3AED] transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.instagram.com/tech_dea/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111118] border border-zinc-700 flex items-center justify-center text-white hover:bg-[#7C3AED] transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/techdea/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111118] border border-zinc-700 flex items-center justify-center text-white hover:bg-[#7C3AED] transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://whatsapp.com/channel/0029VbD90E2IyPtMvouUGP0w"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111118] border border-zinc-700 flex items-center justify-center text-white hover:bg-[#7C3AED] transition"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-zinc-800">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm text-center">
              © {year} Techdea Technologies. All Rights Reserved.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="w-11 h-11 rounded-full bg-[#7C3AED] hover:bg-[#9333EA] flex items-center justify-center transition"
            >
              <FaArrowUp className="text-white" />
            </button>

          </div>

        </div>

      </footer>

      {/* Floating WhatsApp */}

      <a
        href="https://wa.me/919369907885"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center text-white text-2xl z-50 transition"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Footer;