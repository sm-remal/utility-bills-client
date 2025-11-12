import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500); 
  };

  return (
    <div className="">
      <title>Utility - Contact</title>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We’d love to hear from you! Whether you have questions, feedback, or partnership ideas — 
          our team is always ready to help.
        </motion.p>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Mail size={36} />,
            title: "Email Us",
            desc: "support@utilitypay.com",
            bg: "from-pink-100 to-pink-50",
          },
          {
            icon: <Phone size={36} />,
            title: "Call Us",
            desc: "+880 1700-000000",
            bg: "from-red-100 to-rose-50",
          },
          {
            icon: <MapPin size={36} />,
            title: "Visit Us",
            desc: "House 12, Road 4, Dhanmondi, Dhaka",
            bg: "from-purple-100 to-indigo-50",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-2xl shadow-sm bg-gradient-to-br ${item.bg} p-8 text-center hover:shadow-xl transition`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
          >
            <div className="flex justify-center text-pink-600 mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg relative overflow-hidden">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Send Us a Message
        </motion.h2>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 bg-green-50 border border-green-300 text-green-700 px-6 py-3 rounded-full shadow-md flex items-center gap-2"
          >
            <CheckCircle className="text-green-600" size={20} />
            <span>Message sent successfully! 🎉</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-900 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 dark:text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-900 mb-2 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="border border-gray-300 dark:text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 dark:text-gray-900 mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              required
              className="border border-gray-300 dark:text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center mt-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          Find Us on the Map
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="UtilityPay Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8160152390745!2d90.3774589753104!3d23.829643178622633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78b6e111111%3A0x6e3f5a1cc33e3c6!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1678867123456!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
