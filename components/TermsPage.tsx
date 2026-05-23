
import React, { useEffect } from 'react';

export const TermsPage: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <h4 className="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-4">Legal</h4>
        <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-[1.1] text-black">
          Terms & <span className="text-yellow-500">Conditions</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
          Please read these terms carefully before using our services.
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg max-w-none text-gray-600 prose-headings:font-heading prose-headings:font-black prose-headings:text-black prose-a:text-yellow-600 prose-strong:text-black prose-li:marker:text-yellow-500">
          
          <p className="lead text-xl font-medium text-gray-800 mb-8">
            Welcome to our website. By accessing, browsing, or using our website and digital marketing offerings, you agree to be bound by the following Terms & Conditions. These terms apply to all visitors, clients, and users of our website.
          </p>

          <h3>1. General Working Terms</h3>
          <p>We operate as a professional digital marketing company and provide result-driven marketing solutions. All work is carried out based on mutual understanding, ethical practices, and agreed guidelines.</p>
          <p>By engaging with us, you agree to follow these terms and maintain professional cooperation throughout the association.</p>

          <h3>2. Result Commitment</h3>
          <p>We are committed to delivering results through structured strategies, consistent execution, and continuous optimization.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Results are delivered based on the selected plan, budget, and business requirements.</li>
            <li>Outcomes may include leads, visibility, traffic, engagement, or conversions depending on the chosen solution.</li>
            <li>Result delivery is subject to client cooperation, timely approvals, and adherence to recommended strategies.</li>
          </ul>

          <h3>3. Client Cooperation</h3>
          <p>Clients are expected to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Share accurate business information and required access on time</li>
            <li>Provide approvals, feedback, and content without unnecessary delay</li>
            <li>Follow ethical and legal business practices</li>
          </ul>
          <p>Any delay or non-cooperation from the client’s end may affect timelines or outcomes.</p>

          <h3>4. Payments & Billing</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payments must be made as per agreed timelines.</li>
            <li>Fees once paid are non-refundable unless explicitly mentioned otherwise.</li>
            <li>Non-payment or delayed payment may lead to temporary suspension of work.</li>
            <li>Pricing and payment terms are clearly communicated before onboarding.</li>
          </ul>

          <h3>5. Confidentiality & Data Protection</h3>
          <p>We respect client privacy and confidentiality.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>All shared data, credentials, and business information are kept secure.</li>
            <li>Information is not shared with third parties without consent, except where legally required.</li>
            <li>Clients also agree not to misuse or disclose internal company information.</li>
          </ul>

          <h3>6. Ownership & Usage Rights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>All work created remains our intellectual property until full payment is received.</li>
            <li>After payment clearance, clients are allowed to use the deliverables for their business purposes.</li>
            <li>Copying, reselling, or redistributing content without permission is prohibited.</li>
          </ul>

          <h3>7. Third-Party Platforms</h3>
          <p>Our work may involve platforms such as Google, Meta, Instagram, Facebook, or other tools.</p>
          <p>We are not responsible for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Platform policy updates or algorithm changes</li>
            <li>Account restrictions due to platform violations</li>
            <li>Technical downtime beyond our control</li>
          </ul>
          <p>Clients must comply with the respective platform’s terms.</p>

          <h3>8. Timelines & Execution</h3>
          <p>Timelines provided are estimated and may vary based on:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Client response time</li>
            <li>External platform approvals</li>
            <li>Market or technical conditions</li>
          </ul>
          <p>Delays caused by external factors are not considered a breach of commitment.</p>

          <h3>9. Termination of Association</h3>
          <p>Either party may discontinue the association with prior notice.</p>
          <p>We reserve the right to suspend or terminate work in cases of:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Non-payment</li>
            <li>Misuse of services</li>
            <li>Unethical or illegal activities</li>
          </ul>
          <p>No refunds will be issued for completed or ongoing work.</p>

          <h3>10. Limitation of Liability</h3>
          <p>We shall not be held liable for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Business losses beyond the agreed scope</li>
            <li>Indirect or consequential damages</li>
            <li>Decisions taken by clients based on marketing outcomes</li>
          </ul>
          <p>Our responsibility is limited to the agreed deliverables.</p>

          <h3>11. Changes to Terms</h3>
          <p>We reserve the right to modify these Terms & Conditions at any time. Updated terms will be effective immediately upon being published on the website.</p>
          <p>Continued use of the website implies acceptance of the revised terms.</p>

          <h3>12. Governing Law</h3>
          <p>These Terms & Conditions are governed by the laws of India.</p>

          <h3>13. Contact Us</h3>
          <p>For any queries related to these Terms & Conditions, you may contact us through the official communication details provided on our website.</p>

        </div>
      </section>
    </div>
  );
};
