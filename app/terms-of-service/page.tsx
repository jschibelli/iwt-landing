import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#0a2236] min-h-screen text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-teal-400 text-left md:text-center">Terms of Service</h1>
        <p className="text-teal-100 text-left md:text-center">By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our site.</p>
        <p className="mb-6 text-teal-100">Last updated: [Month Day, Year]</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">1. Acceptance of Terms</h2>
          <p className="text-teal-100">By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our site.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">2. Use of the Site</h2>
          <ul className="list-disc list-inside text-teal-100 space-y-2">
            <li>You may use the site for lawful purposes only.</li>
            <li>You agree not to misuse the site or interfere with its operation.</li>
            <li>You must not attempt to gain unauthorized access to any part of the site.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">3. Intellectual Property</h2>
          <p className="text-teal-100 mb-2">All content, trademarks, logos, and intellectual property on this site are owned by IntraWeb Technologies or its licensors. You may not use, reproduce, or distribute any content without our written permission.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">4. User Obligations</h2>
          <ul className="list-disc list-inside text-teal-100 space-y-2">
            <li>Provide accurate and current information if requested.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Do not use the site for any unlawful or prohibited purpose.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">5. Disclaimers</h2>
          <ul className="list-disc list-inside text-teal-100 space-y-2">
            <li>The site is provided on an "as is" and "as available" basis.</li>
            <li>We do not warrant that the site will be error-free or uninterrupted.</li>
            <li>We are not responsible for the accuracy, reliability, or completeness of any content.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">6. Limitation of Liability</h2>
          <p className="text-teal-100 mb-2">To the fullest extent permitted by law, IntraWeb Technologies and its affiliates shall not be liable for any damages arising from your use of the site.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">7. Changes to Terms</h2>
          <p className="text-teal-100 mb-2">We may update these Terms of Service from time to time. Changes will be effective upon posting to this page. Your continued use of the site constitutes acceptance of the new terms.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">8. Governing Law</h2>
          <p className="text-teal-100 mb-2">These Terms are governed by the laws of the jurisdiction in which IntraWeb Technologies operates, without regard to conflict of law principles.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">9. Contact Us</h2>
          <p className="text-teal-100 mb-2">If you have any questions about these Terms, please <Link href="/contact" className="text-orange-400 underline">contact us</Link>.</p>
        </section>
      </div>
    </main>
  );
} 