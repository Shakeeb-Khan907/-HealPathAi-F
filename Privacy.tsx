import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy and data security are our top priorities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-sm text-slate-500 mb-8">Last Updated: February 8, 2026</p>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              HealPath AI collects minimal information necessary to provide our service. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Symptom descriptions and health information you voluntarily provide</li>
              <li>Basic usage data (pages visited, features used)</li>
              <li>Cookie data for site functionality</li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Your information is used solely to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Provide personalized health education and insights</li>
              <li>Improve our AI models and service quality</li>
              <li>Ensure platform security and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              We do NOT sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption in transit and at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of non-essential cookies</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              We use cookies to improve your experience on our site. You can control cookie settings through your browser preferences. Essential cookies are required for site functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
            <p className="text-slate-700 leading-relaxed">
              We use Google's Gemini AI to process your health queries. Please review Google's privacy policy for information on how they handle data. We do not share identifiable information with third parties beyond what is necessary to provide our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              HealPath AI is not intended for children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-blue-600 font-semibold mt-2">privacy@healpathai.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
