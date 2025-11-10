// import { Facebook, Linkedin, Github, X } from "lucide-react";
// import { Link } from "react-router";
// import logo from "../../assets/logo.png"

// const Footer = () => {
//   return (
//     <footer className="bg-blue-950 text-gray-200 py-12 mt-10">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

//         {/* -------- Left: Logo + Description -------- */}
//         <div className="md:col-span-2">
//           {/* <h2 className="text-3xl font-bold mb-3 text-blue-400">UtilityPay</h2> */}
//           <img src={logo} alt="Logo" className="w-[180px] mb-3" />
//           <p className="text-gray-300 text-sm leading-relaxed mb-5">
//             Manage your monthly Electricity, Gas, Water, and Internet bills effortlessly —
//             anytime, anywhere. Stay organized and stress-free with UtilityPay.
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-5 mt-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-blue-400 hover:scale-110 transition-transform"
//             >
//               <Facebook size={22} />
//             </a>
//             <a
//               href="https://x.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-blue-400 hover:scale-110 transition-transform"
//             >
//               <X size={22} /> {/* New X (Twitter) icon */}
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-blue-400 hover:scale-110 transition-transform"
//             >
//               <Linkedin size={22} />
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-blue-400 hover:scale-110 transition-transform"
//             >
//               <Github size={22} />
//             </a>
//           </div>
//         </div>

//         {/* -------- Services -------- */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3 text-blue-300 uppercase">
//             Services
//           </h3>
//           <ul className="space-y-2">
//             <li><Link to="#" className="hover:text-white">Electricity</Link></li>
//             <li><Link to="#" className="hover:text-white">Gas</Link></li>
//             <li><Link to="#" className="hover:text-white">Water</Link></li>
//             <li><Link to="#" className="hover:text-white">Internet</Link></li>
//           </ul>
//         </div>

//         {/* -------- Company -------- */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3 text-blue-300 uppercase">
//             Company
//           </h3>
//           <ul className="space-y-2">
//             <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//             <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//             <li><Link to="#" className="hover:text-white">Careers</Link></li>
//             <li><Link to="/faq" className="hover:text-white">Help / FAQ</Link></li>
//           </ul>
//         </div>

//         {/* -------- Legal -------- */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3 text-blue-300 uppercase">
//             Legal
//           </h3>
//           <ul className="space-y-2">
//             <li><Link to="#" className="hover:text-white">Terms of Use</Link></li>
//             <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
//             <li><Link to="#" className="hover:text-white">Cookie Policy</Link></li>
//           </ul>
//         </div>

//         {/* -------- Newsletter -------- */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3 text-blue-300 uppercase">
//             Newsletter
//           </h3>
//           <p className="text-gray-400 text-sm mb-3">
//             Enter your email address
//           </p>

//           <form className="flex items-center">
//             <input
//               type="email"
//               placeholder="username@site.com"
//               className="px-4 py-2 rounded-l-md bg-white text-gray-800 w-[80%] md:w-[75%] outline-none text-sm"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 rounded-r-md font-semibold text-sm"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* -------- Bottom Line -------- */}
//       <div className="border-t border-blue-800 mt-10 pt-6 text-center text-gray-400 text-sm">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-blue-400 font-semibold">UtilityPay</span>. All rights reserved. | 
//         Developed by <span className="text-pink-400 font-semibold">Remal</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Facebook, Linkedin, Github, X } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-red-100 text-gray-700 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

        {/* -------- Left: Logo + Description -------- */}
        <div className="md:col-span-2">
          <img src={logo} alt="Logo" className="w-[180px] mb-3" />
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
            <li><Link to="/about" className="hover:text-red-700 hover:font-medium">About Us</Link></li>
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

          <form className="flex items-center">
            <input
              type="email"
              placeholder="username@site.com"
              className="px-4 py-2 rounded-l-md bg-white text-gray-800 w-[80%] md:w-[75%] outline-none border border-gray-300 text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 via-pink-600 to-red-600 hover:from-pink-600 hover:via-pink-700 hover:to-red-700 text-white px-3 md:px-4 py-2 rounded-r-md font-semibold text-sm cursor-pointer"
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

