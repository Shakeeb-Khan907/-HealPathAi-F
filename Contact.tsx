import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
              <p className="text-lg text-slate-600">
                We've received your message and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                  <p className="text-slate-600">We typically respond within 24-48 hours</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600">support@healpathai.com</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-slate-900 mb-2">Response Time</h3>
            <p className="text-slate-600">We typically respond within 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
