import { motion } from "framer-motion";
import { Shield, Lock, Database, Users, FileText, Bell } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: "We collect personal information such as name, email address, and payment-related data when you use our services.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: "Your information is used to authenticate users, process payments, generate reports, and improve the overall user experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We use Firebase Authentication and secure backend APIs to protect your data. However, no online platform can guarantee 100% security.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Third-Party Services",
      content: "UtilityPay may use trusted third-party services for authentication and hosting. These services follow their own privacy policies.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Bell,
      title: "Policy Updates",
      content: "We may update this Privacy Policy from time to time. Changes will be posted on this page.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            At <span className="font-semibold text-pink-600 dark:text-pink-400">UtilityPay</span>, your privacy is important to us. 
            This Privacy Policy explains how we collect, use, and protect your personal information.
          </motion.p>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                ></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {section.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;