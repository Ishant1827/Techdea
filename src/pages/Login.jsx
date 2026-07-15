import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="min-h-screen bg-[#09090B] flex items-center justify-center px-6">

      <div className="bg-[#09090B] shadow-2xl rounded-2xl w-full max-w-md p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#0B1120]">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-3">
            Login to your Techdea Dashboard
          </p>

        </div>

        <form className="mt-10 space-y-6">

          <div>

            <label className="block mb-2 font-semibold">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white-500"
            />

          </div>

          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              <span className="text-slate-400">
                Remember Me
              </span>

            </label>

            <a
              href="#"
              className="text-white-600 hover:underline"
            >
              Forgot Password?
            </a>

          </div>

          <button
            className="w-full bg-gradient-to-r from-white-700 via-white-600 to-white-500 text-white py-3 rounded-lg hover:bg-[#7C3AED] hover:text-black transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400 mt-8">

          Back to{" "}

          <Link
            to="/"
            className="text-white-600 font-semibold hover:underline"
          >
            Home
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Login;