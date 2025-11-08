// Filename: src/pages/PrivacyPolicy.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      {/* This main tag has padding-top (pt-24) to avoid being hidden 
        by the fixed Header (which is h-20, so 24 * 0.25rem = 96px padding)
      */}
      <main className="pt-24 pb-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          {/* The 'prose' classes automatically style all the h1, h2, p, ul tags
            for clean typography. 'dark:prose-invert' handles dark mode.
            'max-w-none' removes the max-width limit from prose.
          */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1>Privacy Policy</h1>
            <p>
              <strong>Last Updated:</strong> November 3, 2025
              <br />
              <strong>Effective Date:</strong> November 3, 2025
            </p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to Apna Growth Media (“we,” “our,” “us”). Your privacy is
              important to us. This Privacy Policy explains how we collect, use,
              disclose, and protect your personal information when you visit our
              website https://apnagrowthmedia.netlify.app or use our digital
              marketing services. By using our website or services, you agree to
              this Privacy Policy and the collection and use of information as
              described here.
            </p>

            <h2>2. Who We Are</h2>
            <ul>
              <li>
                <strong>Business Name:</strong> Apna Growth Media
              </li>
              <li>
                <strong>Website:</strong> https://apnagrowthmedia.netlify.app
              </li>
              <li>
                <strong>Email:</strong> apnagrowthmedia@gmail.com
              </li>
              <li>
                <strong>Address:</strong> Bijnor, India
              </li>
            </ul>

            <h2>3. Information We Collect</h2>
            <p>
              We collect the following types of information to provide and
              improve our services:
            </p>
            <h3>a. Personal Information</h3>
            <ul>
              <li>
                Name, email address, phone number, and company name (when you
                fill out a contact form or request a quote).
              </li>
              <li>
                Billing and payment details (only if applicable and processed
                securely through third-party gateways).
              </li>
            </ul>
            <h3>b. Non-Personal Information</h3>
            <ul>
              <li>
                Browser type, device type, IP address, and website usage
                statistics.
              </li>
              <li>
                Cookies and tracking data for analytics, performance, and
                marketing optimization.
              </li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We use your data for the following purposes:</p>
            <ul>
              <li>To provide and improve our digital marketing services.</li>
              <li>To respond to your inquiries or requests.</li>
              <li>
                To send service updates, offers, or marketing materials (only if
                you consent).
              </li>
              <li>To analyze website performance and user behavior.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2>5. Legal Basis for Processing (GDPR & Indian Laws)</h2>
            <p>
              We process your personal data in compliance with applicable laws,
              including the{" "}
              <strong>General Data Protection Regulation (GDPR)</strong> for
              European users and the{" "}
              <strong>Information Technology Act, 2000</strong> (and its SPDI
              Rules, 2011) for Indian users.
            </p>
            <p>Our legal bases for processing include:</p>
            <ul>
              <li>
                <strong>Consent:</strong> When you voluntarily provide
                information via forms or newsletters.
              </li>
              <li>
                <strong>Contractual necessity:</strong> To provide services you
                request.
              </li>
              <li>
                <strong>Legitimate interests:</strong> To analyze and improve
                website performance.
              </li>
              <li>
                <strong>Legal obligation:</strong> To comply with applicable
                laws.
              </li>
            </ul>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Improve your browsing experience.</li>
              <li>Analyze traffic through tools like Google Analytics.</li>
              <li>Deliver personalized marketing.</li>
            </ul>
            <p>
              You can manage or disable cookies through your browser settings.
              For detailed instructions, visit your browser’s help section.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfill
              the purposes outlined in this policy or as required by law. When
              no longer needed, we securely delete or anonymize your data.
            </p>

            <h2>8. Sharing of Data</h2>
            <p>
              We <strong>do not sell</strong>, rent, or trade your personal
              information to third parties. We may share your data only with:
            </p>
            <ul>
              <li>
                Trusted third-party service providers (e.g., analytics, payment
                gateways, or marketing platforms) who are bound by
                confidentiality agreements.
              </li>
              <li>Legal authorities if required by law.</li>
            </ul>

            <h2>9. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures (in
              accordance with IS/ISO/IEC 27001 standards as recommended by
              Indian law) to protect your data from unauthorized access,
              disclosure, or misuse. However, no online platform can guarantee
              100% security, and you share your information at your own risk.
            </p>

            <h2>10. Your Rights (Under GDPR)</h2>
            <p>As a user, you have the right to:</p>
            <ul>
              <li>Access your personal data.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion (“right to be forgotten”).</li>
              <li>Withdraw consent at any time.</li>
              <li>Request data portability.</li>
              <li>Object to processing of your data.</li>
            </ul>
            <p>
              To exercise these rights, email us at apnagrowthmedia@gmail.com.
            </p>

            <h2>11. International Data Transfers</h2>
            <p>
              As we operate from India, your data may be transferred and
              processed outside the European Economic Area (EEA). We ensure that
              such transfers are made with adequate safeguards to protect your
              privacy.
            </p>

            <h2>12. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices and encourage you to review
              their privacy policies before sharing any information.
            </p>

            <h2>13. Children’s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal data from children. If we
              become aware of such collection, we will delete it immediately.
            </p>

            <h2>14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal obligations. The updated version will
              always include the latest revision date at the top of this page.
            </p>

            <h2>15. Contact Us & Grievance Officer</h2>
            <p>
              If you have any questions, concerns, or complaints about this
              Privacy Policy or how we handle your data, please contact our
              Grievance Officer:
            </p>
            <ul>
              <li>
                <strong>Grievance Officer:</strong> Apna Growth Media Team
              </li>
              <li>
                <strong>Email:</strong> apnagrowthmedia@gmail.com
              </li>
              <li>
                <strong>Address:</strong> Bijnor, India
              </li>
            </ul>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
