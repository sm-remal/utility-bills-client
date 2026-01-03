import { motion } from "framer-motion";
import { ShieldCheck, Clock, FileText, Users } from "lucide-react";

const iconFloat = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const TrustSection = () => {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-pink-600"
        >
          Trusted by Users, Built for Simplicity
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-300">
          UtilityPay is designed to make utility bill management simple, secure,
          and stress-free. Everything you need — in one smart dashboard.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <motion.div {...iconFloat}>
              <ShieldCheck className="mx-auto text-pink-600 mb-4" size={40} />
            </motion.div>
            <h4 className="font-semibold text-lg mb-2 text-gray-700">
              Secure Authentication
            </h4>
            <p className="text-sm text-gray-600">
              Firebase authentication ensures your data stays private and
              protected.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <motion.div {...iconFloat} transition={{ ...iconFloat.transition, delay: 0.2 }}>
              <Clock className="mx-auto text-pink-600 mb-4" size={40} />
            </motion.div>
            <h4 className="font-semibold text-lg mb-2 text-gray-700">
              Save Time Every Month
            </h4>
            <p className="text-sm text-gray-600">
              Pay your current month bills quickly without unnecessary steps.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <motion.div {...iconFloat} transition={{ ...iconFloat.transition, delay: 0.4 }}>
              <FileText className="mx-auto text-pink-600 mb-4" size={40} />
            </motion.div>
            <h4 className="font-semibold text-lg mb-2 text-gray-700">
              Smart Payment Reports
            </h4>
            <p className="text-sm text-gray-600">
              Download detailed PDF reports to track your payment history.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <motion.div {...iconFloat} transition={{ ...iconFloat.transition, delay: 0.6 }}>
              <Users className="mx-auto text-pink-600 mb-4" size={40} />
            </motion.div>
            <h4 className="font-semibold text-lg mb-2 text-gray-700">
              User-Centered Design
            </h4>
            <p className="text-sm text-gray-600">
              Clean UI, smooth animations, and full mobile responsiveness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
