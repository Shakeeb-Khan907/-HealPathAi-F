import React from 'react';
import { AlertTriangle, ShieldAlert, FileText, Stethoscope } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-orange-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Medical Disclaimer</h1>
          <p className="text-xl text-red-100">
            Important information about using HealPath AI
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Main Disclaimer */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-3">IMPORTANT NOTICE</h2>
                <p className="text-red-800 leading-relaxed text-lg">
                  HealPath AI is an educational tool and does NOT provide medical advice, diagnosis, or treatment. It is not a substitute for professional medical care, and should not be used as such.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Not a Medical Professional</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              HealPath AI is powered by artificial intelligence and does not have the training, judgment, or expertise of a licensed healthcare provider. The information provided is for educational purposes only and should not replace consultation with a qualified medical professional.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Always Consult Your Doctor</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Before making any medical decisions or starting any treatment:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Consult with your physician or qualified healthcare provider</li>
              <li>Discuss your specific symptoms, medical history, and concerns</li>
              <li>Follow your doctor's professional medical advice</li>
              <li>Never disregard professional medical advice or delay seeking it</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Emergency Situations</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="text-amber-900 font-semibold mb-3 text-lg">
                If you are experiencing a medical emergency:
              </p>
              <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                <li>Call 911 or your local emergency services immediately</li>
                <li>Do NOT rely on HealPath AI for emergency medical advice</li>
                <li>Seek immediate in-person medical attention</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">No Warranty or Guarantee</h2>
            <p className="text-slate-700 leading-relaxed">
              The information provided by HealPath AI is offered "as is" without warranty of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information provided. Medical knowledge evolves rapidly, and AI systems may have limitations or errors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              HealPath AI and its creators, operators, and affiliates are not responsible for any decisions you make based on information provided through our service. We are not liable for any direct, indirect, incidental, consequential, or other damages arising from the use of this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Individual Results Vary</h2>
            <p className="text-slate-700 leading-relaxed">
              Every person's health situation is unique. Information that may be appropriate for one person may not be appropriate for another. Medical conditions, medications, allergies, and other factors vary greatly between individuals.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Medication Information</h2>
            <p className="text-slate-700 leading-relaxed">
              Any mention of medications, treatments, or supplements is for educational purposes only. Never start, stop, or change any medication without consulting your healthcare provider. Be aware of potential drug interactions, allergies, and contraindications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">AI Limitations</h2>
            <p className="text-slate-700 leading-relaxed">
              AI systems, including HealPath AI, have inherent limitations. They may:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mt-3">
              <li>Make errors or provide incorrect information</li>
              <li>Miss critical symptoms or warning signs</li>
              <li>Lack the nuanced understanding of human medical professionals</li>
              <li>Be based on training data that may not reflect the latest medical research</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Responsibility</h2>
            <p className="text-slate-700 leading-relaxed">
              By using HealPath AI, you acknowledge that you understand this disclaimer and agree to use the service for educational purposes only. You take full responsibility for any decisions you make regarding your health and medical care.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">
              If you have questions or concerns about this disclaimer, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
