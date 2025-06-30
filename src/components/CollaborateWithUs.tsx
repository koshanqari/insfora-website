import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Handshake, Users, Globe, Send, X } from 'lucide-react';
import { submitCollaborateForm } from '../utils/formSubmission';

export const CollaborateWithUs: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    website: '',
    representativeName: '',
    email: '',
    phone: '',
    cityState: '',
    collaborationAreas: [] as string[],
    objective: '',
    openToResearch: false
  });

  const collaborationOptions = [
    'Awareness Drives',
    'Student Campaigns',
    'Co-host Events',
    'Internships',
    'Research Projects',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'openToResearch') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle multi-select checkboxes for collaboration areas
        setFormData(prev => ({
          ...prev,
          collaborationAreas: checked
            ? [...prev.collaborationAreas, value]
            : prev.collaborationAreas.filter(area => area !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitCollaborateForm(formData);
      
      if (result.success) {
        alert('✅ ' + result.message);
        setShowForm(false);
        setFormData({
          organizationName: '',
          organizationType: '',
          website: '',
          representativeName: '',
          email: '',
          phone: '',
          cityState: '',
          collaborationAreas: [],
          objective: '',
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
    <section id="collaborate-with-us" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section - Always Visible */}
          <div>
            <ScrollReveal direction="left">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Collaborate 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}With Us
                </span>
              </h2>
              <p className="text-2xl text-gray-700 mb-12 font-light">
                Together, we can reimagine education.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={200} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Who Can Collaborate?</h3>
                      <p className="text-gray-700">
                        We partner with schools, NGOs, youth groups, and community networks looking to amplify 
                        their local impact through education-focused initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Handshake size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">How We Support</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Co-designed learning programs, workshops and surveys</li>
                        <li>• Training for facilitators, volunteers, and partner staff</li>
                        <li>• Opportunities to co-host or support research surveys and educational studies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600} direction="left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Globe size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">What You Receive</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Access to INSFORA's national movement and tools</li>
                        <li>• Recognition on our platform and co-branded campaigns</li>
                        <li>• Opportunities to scale your community work through shared resources</li>
                      </ul>
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
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Handshake size={48} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Collaborating</h3>
                    <p className="text-gray-600 text-lg mb-8">Let's work together to create meaningful impact.</p>
                  </div>

                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start Collaboration
                  </button>
                </div>
              ) : (
                /* Form */
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Send size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Collaboration Form</h3>
                        <p className="text-gray-600">Let's explore partnership opportunities</p>
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
                        Organisation / Institution Name *
                      </label>
                      <input
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        required
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter organization name"
                      />
                    </div>

                    <div>
                      <label htmlFor="organizationType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Type of Organisation *
                      </label>
                      <select
                        id="organizationType"
                        name="organizationType"
                        required
                        value={formData.organizationType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select organization type</option>
                        <option value="School">School</option>
                        <option value="NGO">NGO</option>
                        <option value="College">College</option>
                        <option value="EdTech">EdTech</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                        Website (if any)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="https://yourorganization.com"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Person filling the form"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="contact@organization.com"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Mumbai, Maharashtra"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Collaboration Areas of Interest
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {collaborationOptions.map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={option}
                              name="collaborationAreas"
                              value={option}
                              checked={formData.collaborationAreas.includes(option)}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor={option} className="text-sm text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="objective" className="block text-sm font-semibold text-gray-700 mb-2">
                        Describe your objective
                      </label>
                      <textarea
                        id="objective"
                        name="objective"
                        rows={3}
                        value={formData.objective}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Short statement about why you want to collaborate"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="openToResearch"
                        name="openToResearch"
                        checked={formData.openToResearch}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="openToResearch" className="text-sm text-gray-700">
                        Yes, we're open to participate in INSFORA's research studies
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Collaboration Request'}
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