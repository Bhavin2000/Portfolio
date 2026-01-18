"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  
  // Don't show header on contact and privacy-policy pages
  if (pathname === "/contact" || pathname === "/privacy-policy") {
    return null;
  }
  
  return <Header />;
}
