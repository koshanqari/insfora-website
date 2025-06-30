// src/components/BeAVolunteer.tsx
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Users, Heart, BookOpen, Send, X } from 'lucide-react';
import { submitVolunteerForm } from '../utils/formSubmission';

/**
 * ENV REQUIREMENTS ─────────────────────────────────────────────
 * .env
 * ├ VITE_GS_ENDPOINT=https://script.google.com/macros/s/AKfycbxCHvxarLV3nU1iGWkOJTLXg1FzCyBdWFkUA9Lubl1F8UpV3ExJ_6dmWvRcy2A5T_TkLw/exec
 * └ VITE_GS_SECRET=INSFORA2025
 * Restart `npm run dev` after editing .env
 * ──────────────────────────────────────────────────────────────
 */

export const BeAVolunteer: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    occupation: '',
    schoolCollege: '',
    openToResearch: false
  });
  const [showSchoolField, setShowSchoolField] = useState(false);

  /* ─────────────── input change ─────────────── */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));

      if (name === 'occupation') {
        setShowSchoolField(value === 'Student');
        if (value !== 'Student') {
          setFormData(prev => ({ ...prev, schoolCollege: '' }));
        }
      }
    }
  };

  /* ─────────────── submit ─────────────── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop page reload
    setIsSubmitting(true);

    try {
      const result = await submitVolunteerForm(formData);
      
      if (result.success) {
        alert('✅ ' + result.message);
        setShowForm(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          cityState: '',
          occupation: '',
          schoolCollege: '',
          openToResearch: false
        });
      } else {
        alert('❌ ' + result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ─────────────── JSX (unchanged UI) ─────────────── */
  return (
    <section
      id="be-a-volunteer"
      className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div>
            <ScrollReveal direction="left">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Be a{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Volunteer
                </span>
              </h2>
              <p className="text-2xl text-gray-700 mb-12 font-light">
                Contribute your time. Empower real change.
              </p>
            </ScrollReveal>

            {/* Info Cards */}
            <div className="space-y-8">
              {/* Who can volunteer */}
              <ScrollReveal delay={200} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Who Can Be a Volunteer?
                      </h3>
                      <p className="text-gray-700">
                        Anyone with a passion for education and social impact —
                        students, working professionals, educators, or community
                        leaders. No prior experience required — just a
                        willingness to learn and lead.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* What you'll do */}
              <ScrollReveal delay={400} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        What You'll Do
                      </h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>
                          • Be part of community research by conducting or
                          participating in local surveys
                        </li>
                        <li>
                          • Assist with learning circles, workshops, and
                          creative sessions
                        </li>
                        <li>
                          • Support field surveys, student mentoring, or digital
                          awareness drives
                        </li>
                        <li>
                          • Collaborate on campaigns that build education access
                          and opportunity
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* What you'll gain */}
              <ScrollReveal delay={600} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Heart size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        What You'll Gain
                      </h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Real-world experience in grassroots leadership</li>
                        <li>• A certified volunteering record from INSFORA</li>
                        <li>
                          • Personal mentorship, growth opportunities, and a
                          chance to drive change from the ground up
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Form / CTA */}
          <ScrollReveal delay={300} direction="right">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              {!showForm ? (
                /* CTA Card */
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Users size={48} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Join Our Movement
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                      Ready to make a difference? Start your volunteering journey
                      with us.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Join as Volunteer
                  </button>
                </div>
              ) : (
                /* Form */
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Send size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Volunteer Application
                        </h3>
                        <p className="text-gray-600">
                          Fill out the form to join our movement
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowForm(false)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X size={20} className="text-gray-600" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {/* City & State */}
                    <div>
                      <label
                        htmlFor="cityState"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        City & State
                      </label>
                      <input
                        type="text"
                        id="cityState"
                        name="cityState"
                        value={formData.cityState}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Mumbai, Maharashtra"
                      />
                    </div>

                    {/* Occupation */}
                    <div>
                      <label
                        htmlFor="occupation"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Occupation / Background *
                      </label>
                      <select
                        id="occupation"
                        name="occupation"
                        required
                        value={formData.occupation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select your background</option>
                        <option value="Student">Student</option>
                        <option value="Professional">Professional</option>
                        <option value="Educator">Educator</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* School field */}
                    {showSchoolField && (
                      <div className="animate-fadeIn">
                        <label
                          htmlFor="schoolCollege"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          School / College Name
                        </label>
                        <input
                          type="text"
                          id="schoolCollege"
                          name="schoolCollege"
                          value={formData.schoolCollege}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your institution name"
                        />
                      </div>
                    )}

                    {/* Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="openToResearch"
                        name="openToResearch"
                        checked={formData.openToResearch}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <label
                        htmlFor="openToResearch"
                        className="text-sm text-gray-700"
                      >
                        Yes, I'd like to be part of INSFORA's ongoing research
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};