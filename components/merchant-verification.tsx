"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function MerchantVerification() {
  return (
    <motion.section
      className="mb-20 sm:mb-28 w-full max-w-4xl mx-auto"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Us - Neoverse</SectionHeading>
      <motion.div
        className="text-left space-y-6 dark:text-white/80 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg mb-8">
          Get in touch with us for any inquiries or support.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-semibold mb-2">Business Information</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Neoverse - Software Services & Website Development</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Merchant Legal Name</h4>
              <p className="text-gray-700 dark:text-gray-300">Bhavin Raut</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Brand Name</h4>
              <p className="text-gray-700 dark:text-gray-300">Neoverse</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Business Type</h4>
              <p className="text-gray-700 dark:text-gray-300">Software Services & Website Development</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Business Registration Number</h4>
              <p className="text-gray-700 dark:text-gray-300">8600162589</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
              <p className="text-gray-700 dark:text-gray-300">Mumbai, Maharashtra, India</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="mailto:bhavinraut2@gmail.com" className="underline hover:text-blue-600">
                  bhavinraut2@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone / Mobile</h4>
              <p className="text-gray-700 dark:text-gray-300">+91 8600162589</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Website</h4>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="https://neoverse.live/" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  https://neoverse.live/
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We provide software services and website development solutions. Payment processing for our ecommerce projects is handled through Cashfree. For business inquiries, please reach out to us via email.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
