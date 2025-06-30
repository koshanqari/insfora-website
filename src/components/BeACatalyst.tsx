import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Zap, Target, Award, Send, X } from 'lucide-react';
import { submitCatalystForm } from '../utils/formSubmission';

export const BeACatalyst: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    website: '',
    representativeName: '',
    designation: '',
    email: '',
    phone: '',
    cityState: '',
    supportTypes: [] as string[],
    engagementFormat: '',
    alignmentAreas: [] as string[],
    openToResearch: false
  });

  const supportOptions = [
    'CSR Grant',
    'Research Sponsorship',
    'Infrastructure Aid',
    'Tech Access',
    'Other'
  ];

  const alignmentOptions = [
    'Education',
    'Youth Empowerment',
    'SDGs',
    'Policy',
    'Innovation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'openToResearch') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else if (name === 'supportTypes') {
        setFormData(prev => ({
          ...prev,
          supportTypes: checked
            ? [...prev.supportTypes, value]
            : prev.supportTypes.filter(type => type !== value)
        }));
      } else if (name === 'alignmentAreas') {
        setFormData(prev => ({
          ...prev,
          alignmentAreas: checked
            ? [...prev.alignmentAreas, value]
            : prev.alignmentAreas.filter(area => area !== value)
        }));
      }
    } else if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitCatalystForm(formData);
      
      if (result.success) {
        alert('✅ ' + result.message);
        setShowForm(false);
        setFormData({
          organizationName: '',
          website: '',
          representativeName: '',
          designation: '',
          email: '',
          phone: '',
          cityState: '',
          supportTypes: [],
          engagementFormat: '',
          alignmentAreas: [],
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

  return (
    <section id="be-a-catalyst" className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-red-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section - Always Visible */}
          <div>
            <ScrollReveal direction="left">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Be a 
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {' '}Catalyst
                </span>
                {' '}for Change
              </h2>
              <p className="text-2xl text-gray-700 mb-12 font-light">
                Your support fuels futures.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={200} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Target size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Why Partner with INSFORA?</h3>
                      <p className="text-gray-700">
                        As a registered nonprofit, INSFORA provides companies and organizations an opportunity 
                        to support education transformation aligned with the UN SDGs.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Zap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">How Your Contribution Helps</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Funds go directly into field programs, youth-led research, and capacity-building efforts</li>
                        <li>• Enable large-scale survey efforts and research studies to inform policy and practice</li>
                        <li>• Transparent utilization reports and impact summaries shared quarterly</li>
                        <li>• Opportunities for CSR branding and employee volunteering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600} direction="left">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 shadow-2xl text-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Let's Build the Future, Together</h3>
                      <p className="text-orange-100">
                        Partnering with INSFORA is more than a donation — it's an investment in next-generation changemakers.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Form/CTA Section */}
          <ScrollReveal delay={300} direction="right">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              {!showForm ? (
                /* CTA Card */
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Zap size={48} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Partner With Us</h3>
                    <p className="text-gray-600 text-lg mb-8">Ready to catalyze change? Let's discuss partnership opportunities.</p>
                  </div>

                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Become a Catalyst
                  </button>
                </div>
              ) : (
                /* Form */
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Send size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Partnership Form</h3>
                        <p className="text-gray-600">Let's explore how we can work together</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowForm(false)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X size={20} className="text-gray-600" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 max-h-96 overflow-y-auto pr-2">
                    <div>
                      <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Organisation / Company Name *
                      </label>
                      <input
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        required
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="https://yourcompany.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="representativeName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Representative Name *
                      </label>
                      <input
                        type="text"
                        id="representativeName"
                        name="representativeName"
                        required
                        value={formData.representativeName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="designation" className="block text-sm font-semibold text-gray-700 mb-2">
                        Designation
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your job title"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="cityState" className="block text-sm font-semibold text-gray-700 mb-2">
                        City & State *
                      </label>
                      <input
                        type="text"
                        id="cityState"
                        name="cityState"
                        required
                        value={formData.cityState}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Mumbai, Maharashtra"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Type of Support Interested In
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {supportOptions.map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`support-${option}`}
                              name="supportTypes"
                              value={option}
                              checked={formData.supportTypes.includes(option)}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <label htmlFor={`support-${option}`} className="text-sm text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Preferred Engagement Format
                      </label>
                      <div className="space-y-2">
                        {['One-time Grant', 'Recurring Support', 'Strategic Partnership'].map((format) => (
                          <div key={format} className="flex items-center gap-2">
                            <input
                              type="radio"
                              id={`format-${format}`}
                              name="engagementFormat"
                              value={format}
                              checked={formData.engagementFormat === format}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                            />
                            <label htmlFor={`format-${format}`} className="text-sm text-gray-700">
                              {format}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Areas of Alignment
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {alignmentOptions.map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`alignment-${option}`}
                              name="alignmentAreas"
                              value={option}
                              checked={formData.alignmentAreas.includes(option)}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <label htmlFor={`alignment-${option}`} className="text-sm text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="openToResearch"
                        name="openToResearch"
                        checked={formData.openToResearch}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label htmlFor="openToResearch" className="text-sm text-gray-700">
                        Yes, I'm open to supporting/participating in INSFORA's research studies
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
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