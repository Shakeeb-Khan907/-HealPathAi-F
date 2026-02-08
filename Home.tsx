import React, { useState } from 'react';
import { Search, Heart, Brain, Activity, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Your Personal Health Assistant
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get expert health guidance powered by advanced AI. Understand your symptoms, explore treatments, and make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/blog" 
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Explore Health Blog
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-blue-500 text-white rounded-xl font-bold text-lg hover:bg-blue-400 transition-all border-2 border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Why Choose HealPath AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">AI-Powered Insights</h3>
              <p className="text-slate-600">
                Advanced Gemini AI analyzes your symptoms and provides comprehensive health information based on medical knowledge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Personalized Care</h3>
              <p className="text-slate-600">
                Get tailored recommendations for OTC medications, lifestyle changes, and self-care tips based on your specific situation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Educational Focus</h3>
              <p className="text-slate-600">
                Learn about your health with clear explanations, helping you make informed decisions and communicate better with doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-slate-600 font-medium">Available Anytime</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-slate-600 font-medium">Educational Focus</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">Free</div>
              <p className="text-slate-600 font-medium">Health Information</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Explore our comprehensive health blog with expert insights on fitness, nutrition, wellness, and more.
          </p>
          <Link 
            to="/blog" 
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
          >
            Browse Health Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
