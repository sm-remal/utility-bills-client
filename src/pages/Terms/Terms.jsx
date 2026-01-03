import { motion } from "framer-motion";
import { FileText, Users, CreditCard, Shield, AlertCircle, RefreshCw, CheckCircle } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "Use of the Platform",
      content: "UtilityPay allows users to manage, pay, and track utility bills. You agree to use the platform only for lawful purposes and in accordance with these terms.",
      gradient: "from-blue-500 to-cyan-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account and ensuring that all information you provide is accurate and up to date.",
      gradient: "from-emerald-500 to-teal-600",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      content: "UtilityPay allows payments only for the current billing month. Any misuse, duplicate payment attempts, or fraudulent activity may result in account suspension.",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: "UtilityPay is not responsible for delays, service interruptions, or third-party payment failures. The platform is provided \"as is\".",
      gradient: "from-orange-500 to-red-600",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      icon: RefreshCw,
      title: "Changes to Terms",
      content: "We reserve the right to update these Terms of Use at any time. Continued use of the platform indicates acceptance of the updated terms.",
      gradient: "from-indigo-500 to-purple-600",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 px-4 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Floating Background Decorations */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-pink-300 dark:bg-pink-900/30 rounded-full blur-3xl opacity-30 pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-300 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30 pointer-events-none"
        />

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative z-10"
        >
          {/* Icon with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 150,
              damping: 12
            }}
            className="inline-block mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            Terms of Use
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Welcome to <span className="font-semibold text-pink-600 dark:text-pink-400">UtilityPay</span>. By accessing or using this website, you agree to be bound by these Terms of Use.
          </motion.p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-sm p-6 md:p-8 mb-12 text-white overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Important Notice</h3>
              <p className="opacity-90 leading-relaxed">
                If you do not agree with any part of these terms, please do not use our services. Your continued use of the platform constitutes acceptance of these terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 relative z-10"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Side accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${section.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top`}></div>
                
                <div className="p-6 md:p-8 pl-8">
                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-14 h-14 ${section.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                        <section.icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 pt-1">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;