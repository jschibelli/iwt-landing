import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0a2236] min-h-screen text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-teal-400 text-left md:text-center">Privacy Policy</h1>
        <p className="text-teal-100 text-left md:text-center">This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.</p>
        <p className="mb-6 text-teal-100">Last updated: [Month Day, Year]</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">1. Introduction</h2>
          <p className="text-teal-100">This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-teal-100 space-y-2">
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Usage data (pages visited, time spent, browser type, etc.)</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-teal-100 space-y-2">
            <li>To provide, operate, and maintain our website</li>
            <li>To improve, personalize, and expand our website</li>
            <li>To understand and analyze how you use our website</li>
            <li>To communicate with you, including for customer service and updates</li>
            <li>To process your requests and transactions</li>
            <li>To send you emails and newsletters (with your consent)</li>
            <li>To detect and prevent fraud</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">4. Cookies and Tracking Technologies</h2>
          <p className="text-teal-100 mb-2">We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">5. Third-Party Services</h2>
          <p className="text-teal-100 mb-2">We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, or assist us in analyzing how our website is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">6. Data Security</h2>
          <p className="text-teal-100 mb-2">We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">7. Your Data Protection Rights</h2>
          <ul className="list-disc list-inside text-teal-100 space-y-2">
            <li>The right to access, update, or delete your information</li>
            <li>The right to object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">8. Children's Privacy</h2>
          <p className="text-teal-100 mb-2">Our website does not knowingly collect or solicit information from children under the age of 13. If you believe we have collected such information, please contact us immediately.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">9. Changes to This Privacy Policy</h2>
          <p className="text-teal-100 mb-2">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white text-left md:text-center">10. Contact Us</h2>
          <p className="text-teal-100 mb-2">If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-orange-400 underline">contact us</Link>.</p>
        </section>
      </div>
    </main>
  );
} 