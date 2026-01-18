"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col items-center px-4 py-20">
      <motion.section
        className="mb-20 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SectionHeading>Privacy Policy & Merchant Information</SectionHeading>
        
        <motion.div
          className="space-y-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Merchant Verification Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Merchant Verification Information
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Merchant Legal Name
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Neoverse
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Brand Name
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Neoverse
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Business Registration Number
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    8600162589
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Business Type
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Software Services & Website Development
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Registered Address
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Operational Address
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Telephone / Mobile Number
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    +91 8600162589
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Email ID
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a 
                      href="mailto:bhavinraut2@gmail.com" 
                      className="underline hover:text-blue-600"
                    >
                      bhavinraut2@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Website
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a 
                      href="https://neoverse.live/" 
                      className="underline hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://neoverse.live/
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Payment Gateway
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cashfree (for ecommerce projects)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Privacy Policy
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  1. Information Collection
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We collect information that you provide directly to us, including when you use our services,
                  create an account, or communicate with us. This information may include your name, email address,
                  phone number, and payment information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  2. Use of Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We use the information we collect to provide, maintain, and improve our services, process
                  transactions, send you technical notices and support messages, and respond to your comments
                  and questions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  3. Payment Processing
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Payment information is processed securely through verified payment gateways. We do not store
                  complete payment card details on our servers. All transactions are encrypted and comply with
                  PCI DSS standards.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  4. Data Security
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We take reasonable measures to help protect information about you from loss, theft, misuse,
                  unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  5. Contact Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For any questions about this Privacy Policy or our practices, please contact us at{" "}
                  <a href="mailto:bhavinraut2@gmail.com" className="underline hover:text-blue-600">
                    bhavinraut2@gmail.com
                  </a>
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Last Updated: January 2026
                </p>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Terms and Conditions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  By accessing and using this website, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  2. Services
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Neoverse provides software development services and website solutions, including ecommerce platforms. Payment processing for our ecommerce projects is facilitated through Cashfree payment gateway. We reserve the right to modify or discontinue services at any time without notice.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  3. Refund Policy
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Refund requests must be submitted within 30 days of purchase. Each request will be reviewed
                  on a case-by-case basis according to our refund policy guidelines.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  4. Limitation of Liability
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Neoverse shall not be liable for any indirect, incidental, special, consequential or punitive
                  damages resulting from your use of or inability to use the service.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
