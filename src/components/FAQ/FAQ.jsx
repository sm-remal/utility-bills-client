import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-600"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            Do I need an account to use UtilityPay?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              Yes. You must create an account to use UtilityPay. You can sign up
              using Email and Password or log in quickly using Google Sign-In.
            </p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            Can I pay previous month utility bills?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              No. UtilityPay only allows payment for the current month. Previous
              month bills are automatically locked to prevent duplicate or
              incorrect payments.
            </p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            Can I download my payment history as a PDF?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              Yes. From the My Pay Bills page, you can download a detailed and
              well-formatted PDF report of all your paid utility bills.
            </p>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            What types of utility bills are supported?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              UtilityPay currently supports Electricity, Gas, Water, and
              Internet utility bills.
            </p>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            Is my personal and payment data secure?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              Absolutely. UtilityPay uses Firebase Authentication and secure
              backend APIs to ensure your personal and payment data remain safe
              and protected at all times.
            </p>
          </div>
        </div>

        {/* FAQ 6 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            Is UtilityPay mobile-friendly?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              Yes. UtilityPay is fully responsive and optimized for mobile,
              tablet, and desktop devices.
            </p>
          </div>
        </div>

        {/* FAQ 7 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            Can I update or delete my paid bills?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              Yes. From the My Pay Bills section, you can update or delete your
              paid bills and also download PDF reports.
            </p>
          </div>
        </div>

        {/* FAQ 8 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-600 dark:text-gray-300">
            Is UtilityPay free to use?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 dark:text-gray-300">
              Yes. UtilityPay is completely free to use with no hidden charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
