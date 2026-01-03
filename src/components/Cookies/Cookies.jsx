import { motion } from "framer-motion";
import { Cookie, Shield, Settings, Clock, Mail, ChevronRight } from "lucide-react";

const Cookies = () => {
  const sections = [
    {
      icon: Cookie,
      title: "What Are Cookies?",
      content: "Cookies are small text files stored on your device that help websites remember user preferences and session information. They enable us to provide you with a personalized and seamless experience.",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "How We Use Cookies",
      content: "UtilityPay uses cookies to maintain login sessions, enhance security, analyze platform performance, and remember your preferences. We prioritize your privacy and only collect data necessary for improving your experience.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Settings,
      title: "Managing Cookies",
      content: "You can choose to disable cookies through your browser settings. However, please note that some features of UtilityPay may not function properly without cookies enabled. You have full control over your cookie preferences.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      title: "Updates to This Policy",
      content: "This Cookie Policy may be updated periodically to reflect changes in technology or legal requirements. We encourage you to review this page regularly to stay informed about how we use cookies.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"
          />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            className="inline-block mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            Cookie Policy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
          </motion.p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-100 dark:border-gray-700 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="relative text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This Cookie Policy explains how <strong className="text-pink-600 dark:text-pink-400">UtilityPay</strong> uses cookies and similar technologies to improve your experience on our platform. By using our services, you consent to the use of cookies in accordance with this policy.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 relative z-10"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Top accent line */}
                <div className={`h-1 bg-gradient-to-r ${section.gradient}`}></div>
                
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="flex-shrink-0 hidden md:block"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white overflow-hidden"
        >
          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-32 h-32 border-4 border-white rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-0 w-40 h-40 border-4 border-white rounded-full"
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold mb-4">Questions About Our Cookie Policy?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              If you have any questions or concerns about how we use cookies, please don't hesitate to reach out.
            </p>
            
            <motion.a
              href="mailto:privacy@utilitypay.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-pink-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cookies;