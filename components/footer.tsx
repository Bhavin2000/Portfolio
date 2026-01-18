import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 BR. All rights reserved.
      </small>
      <p className="text-xs mb-2">
        <span className="font-semibold">Brand:</span> Neoverse
      </p>
      <div className="flex justify-center gap-4 mb-3">
        <Link 
          href="/contact" 
          className="text-xs underline hover:text-gray-700 dark:hover:text-gray-300"
        >
          Contact Us
        </Link>
        <span className="text-xs">|</span>
        <Link 
          href="/privacy-policy" 
          className="text-xs underline hover:text-gray-700 dark:hover:text-gray-300"
        >
          Privacy Policy
        </Link>
      </div>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
