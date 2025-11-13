import { Facebook, Linkedin, Github, X } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/logo1.png"

const Footer = () => {
  return (
    <footer className="bg-red-100 text-gray-700 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

        {/* -------- Left: Logo + Description -------- */}
        <div className="md:col-span-2">
          <Link to={"/"}><img src={logo} alt="Logo" className="w-[180px] mb-3" /></Link>
          <p className="text-gray-800 text-sm leading-relaxed mb-5">
            Manage your monthly Electricity, Gas, Water, and Internet bills effortlessly —
            anytime, anywhere. Stay organized and stress-free with UtilityPay.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 hover:scale-110 transition-transform"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 hover:scale-110 transition-transform"
            >
              <X size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 hover:scale-110 transition-transform"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 hover:scale-110 transition-transform"
            >
              <Github size={22} />
            </a>
          </div>
        </div>

        {/* -------- Services -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-700 uppercase">
            Services
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Electricity</Link></li>
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Gas</Link></li>
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Water</Link></li>
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Internet</Link></li>
          </ul>
        </div>

        {/* -------- Company -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-700 uppercase">
            Company
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/about" className="hover:text-red-700 hover:font-medium">About</Link></li>
            <li><Link to="/contact" className="hover:text-red-700 hover:font-medium">Contact</Link></li>
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Careers</Link></li>
            <li><Link to="/faq" className="hover:text-red-700 hover:font-medium">Help / FAQ</Link></li>
          </ul>
        </div>

        {/* -------- Legal -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-700 uppercase">
            Legal
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Terms of Use</Link></li>
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-red-700 hover:font-medium">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* -------- Newsletter -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-700 uppercase">
            Newsletter
          </h3>
          <p className="text-gray-800 text-sm mb-3">
            Enter your email address
          </p>

          <form className="w-full max-w-md mx-auto flex flex-col gap-2">
            {/* Input Field */}
            <input
              type="email"
              placeholder="username@site.com"
              className="px-4 py-2 rounded-md border bg-white border-gray-300 outline-none text-sm w-full"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 via-pink-600 to-red-600 
               hover:from-pink-600 hover:via-pink-700 hover:to-red-700 
               text-white px-4 py-2 rounded-md font-semibold text-sm w-full md:w-auto"
            >
              Subscribe
            </button>
          </form>
          
        </div>
      </div>

      {/* -------- Bottom Line -------- */}
      <div className="border-t border-pink-700 mt-10 pt-6 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-red-700">UtilityPay</span>. All rights reserved. |
        Developed by <span className="text-red-700 font-semibold">Remal</span>
      </div>
    </footer>
  );
};

export default Footer;

