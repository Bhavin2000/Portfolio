import MerchantVerification from "@/components/merchant-verification";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center px-3 py-20">
      <MerchantVerification />
    </main>
  );
}

export const metadata = {
  title: "Contact Us - Neoverse | Merchant Verification",
  description: "Contact and merchant verification for Neoverse payment gateway",
};
