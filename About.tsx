import React from 'react';
import { Heart, Target, Users, Award, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About HealPath AI</h1>
          <p className="text-xl text-blue-100">
            Empowering individuals with AI-driven health education and insights
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            HealPath AI was created to bridge the gap between complex medical information and everyday health decisions. We believe that everyone deserves access to clear, reliable health education that empowers them to take control of their wellness journey.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Using advanced AI technology powered by Google's Gemini, we provide personalized health insights that help you understand your symptoms, explore treatment options, and make informed decisions about your care.
          </p>
        </div>

        {/* Values Grid */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
              <Shield className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Safety First</h3>
            <p className="text-slate-600">
              We prioritize your safety by clearly identifying when professional medical care is needed and never replacing qualified healthcare providers.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
              <Lightbulb className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Education</h3>
            <p className="text-slate-600">
              Our focus is on teaching and empowering, not diagnosing. We help you understand health concepts so you can communicate better with your doctor.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
              <Heart className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Empathy</h3>
            <p className="text-slate-600">
              We understand that health concerns can be stressful. Our platform provides supportive, compassionate guidance every step of the way.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How HealPath AI Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Share Your Symptoms</h3>
                <p className="text-slate-700">
                  Describe what you're experiencing, including severity, duration, and any additional context.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI Analysis</h3>
                <p className="text-slate-700">
                  Our Gemini-powered system analyzes your information and searches medical knowledge to provide relevant insights.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Personalized Guidance</h3>
                <p className="text-slate-700">
                  Receive comprehensive information about possible causes, self-care tips, OTC options, and when to seek professional care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Important Notice</h3>
          <p className="text-amber-800">
            HealPath AI is an educational tool and does not provide medical diagnosis or treatment. Always consult with qualified healthcare professionals for medical advice, diagnosis, and treatment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
