import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../assets/images/favicon.svg";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white pt-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Techdea Logo"
                className="w-14 h-14 rounded-full"
              />

              <div>

                <h2 className="text-3xl font-bold">
                  Tech<span className="text-purple-600">dea</span>
                </h2>

                <p className="text-gray-400 text-sm">
                  Where Technology Meets Innovation
                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-7">
              Techdea is committed to delivering modern IT solutions,
              technical training, career mentoring and innovative
              software development for students and businesses.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/training">Training</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Web Development</li>
              <li>Web Applications</li>
              <li>Python Projects</li>
              <li>Technical Training</li>
              <li>Career Mentoring</li>
              <li>Resume Building</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-600" />
                +91 9369907885
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-purple-600" />
                ishantsri1827@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-600" />
                Uttar Pradesh, India
              </p>

              <div className="flex gap-4 pt-3">

                <a
                  href="https://github.com/Ishant1827"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-purple-600 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/ishantsrivastava/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-purple-600 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 py-6 text-center">

          <p className="text-gray-400">
            © 2026 Techdea. All Rights Reserved.
          </p>

          <p className="mt-2 text-gray-600">
            Designed & Developed by <span className="text-purple-500">Ishant Srivastava</span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;