import React, { useRef, useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Footer } from './Footer';
import { ArrowLeft, GraduationCap, Send, X, Info, Users, School, Award, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { submitCampusAmbassadorForm } from '../utils/formSubmission';

const classOptions = ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export const CampusAmbassador: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    school: '',
    class: '',
    counsellor: '',
    consent: true,
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10 digit phone number.';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.state.trim()) newErrors.state = 'State is required.';
    if (!formData.school.trim()) newErrors.school = 'School is required.';
    if (!formData.class) newErrors.class = 'Class is required.';
    if (!formData.consent) newErrors.consent = 'Consent is required.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let newValue = value;
    if (name === 'phone') {
      newValue = value.replace(/[^0-9]/g, '');
    }
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev: any) => ({ ...prev, [name]: type === 'checkbox' ? checked : newValue }));
    setErrors((prev: any) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setIsSubmitting(true);
    
    try {
      const result = await submitCampusAmbassadorForm(formData);
      if (result.success) {
        alert('✅ ' + result.message);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          state: '',
          school: '',
          class: '',
          counsellor: '',
          consent: true,
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="relative z-20 bg-blue-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center">
                <img
                  src="/insfora-2.png"
                  alt="INSFORA Logo"
                  className="w-32 h-auto cursor-pointer"
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-blue-400/30"
              >
                <Info size={16} />
                <span className="hidden sm:inline">Explore Us</span>
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-gray-400/30"
                >
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">Back to Home</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        {/* 1. Hero Section (with form) */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          {/* Animated Background (copied from Hero) */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800"></div>
            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
            {/* Interactive Gradient Orb */}
            <div 
              className="absolute w-96 h-96 bg-gradient-radial from-blue-400/30 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
              style={{ left: '50%', top: '30%', transform: 'translate(-50%, 0)' }}
            />
            {/* Hero Image with Parallax */}
            <div 
              className="absolute inset-0 opacity-30"
            >
              <img
                src="/hero-banner.jpg"
                alt="Indian school children learning together"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-600/60 to-transparent animate-pulse"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[70vh] pt-24 pb-12">
            {/* Centered Content */}
            <div className="w-full max-w-4xl flex flex-col items-center text-center">
              <ScrollReveal direction="scale">
                <div className="relative flex justify-center items-center mb-10">
                  <img
                    src="/insfora-2.png"
                    alt="INSFORA Logo"
                    className="w-72 md:w-80 h-auto drop-shadow-2xl"
                  />
                  <div className="absolute -inset-10 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10 animate-pulse rounded-full" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300} direction="up">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 max-w-5xl mx-auto leading-relaxed text-blue-100">
                  Become a Student Ambassador & Drive Real Change in Your School
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={600} direction="up">
                <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 text-gray-200">
                  Join the INSFORA Student Ambassador Program – where your voice shapes the future of education in Delhi NCR.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={900} direction="up">
                <button
                  onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* 2. Available Projects */}
        <section id="projects-section" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Available <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Select a project that aligns with your interests and make a real impact in education
                </p>
              </div>
            </ScrollReveal>

            {/* Scrollable Projects */}
            <div 
              className="relative h-96"
              style={{ isolation: 'isolate' }}
            >
              {/* Navigation Arrows */}
              {(() => {
                // Responsive: show 1 card on mobile, 2 on md, 3 on lg+
                const [visibleIndex, setVisibleIndex] = useState(0);
                const [cardsPerView, setCardsPerView] = useState(1);
                const projectsContainerRef = useRef<HTMLDivElement>(null);
                
                React.useEffect(() => {
                  function updateCardsPerView() {
                    if (window.innerWidth >= 1024) setCardsPerView(3);
                    else if (window.innerWidth >= 768) setCardsPerView(2);
                    else setCardsPerView(1);
                  }
                  updateCardsPerView();
                  window.addEventListener('resize', updateCardsPerView);
                  return () => window.removeEventListener('resize', updateCardsPerView);
                }, []);
                
                const canScrollLeft = visibleIndex > 0;
                const canScrollRight = visibleIndex + cardsPerView < 4; // 4 projects total
                const handleScrollLeft = () => setVisibleIndex(i => Math.max(0, i - 1));
                const handleScrollRight = () => setVisibleIndex(i => Math.min(4 - cardsPerView, i + 1));
                
                // Animation: translateX
                const cardWidth = 320; // px (w-80)
                const gap = 24; // px (space-x-6)
                const rowWidth = cardsPerView * cardWidth + (cardsPerView - 1) * gap;
                const translateX = -visibleIndex * (cardWidth + gap);
                
                return (
                  <>
                    {canScrollLeft && (
                      <button 
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 -ml-4"
                        onClick={handleScrollLeft}
                      >
                        <ChevronLeft size={24} className="text-gray-600 hover:text-blue-600 transition-colors" />
                      </button>
                    )}
                    
                    {canScrollRight && (
                      <button 
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 -mr-4"
                        onClick={handleScrollRight}
                      >
                        <ChevronRight size={24} className="text-gray-600 hover:text-blue-600 transition-colors" />
                      </button>
                    )}
                    
                    {/* Projects Row */}
                    <div className="overflow-hidden w-full flex justify-center">
                      <div
                        className="flex transition-transform duration-500"
                        ref={projectsContainerRef}
                        style={{
                          width: `${rowWidth}px`,
                          transform: `translateX(${translateX}px)`,
                          gap: `${gap}px`,
                        }}
                      >
                        {[
                          {
                            id: '1',
                            name: 'Delhi NCR Education Survey',
                            activeDates: 'July 1 - Oct 31, 2025',
                            certificateTitle: 'Education Research Certificate',
                            enrollmentCount: 170,
                            summary: 'Students and teachers across Delhi NCR share daily classroom routines, school climate, academic challenges and aspirations. The survey gives school leaders direct feedback for meaningful improvements across the region.',
                            status: 'ongoing'
                          },
                          {
                            id: '2',
                            name: 'Digital Literacy Initiative',
                            activeDates: 'Jan 1 - Apr 30, 2025',
                            certificateTitle: 'Digital Education Certificate',
                            enrollmentCount: 210,
                            summary: 'Young volunteers help classmates set up learning apps, manage online assignments, troubleshoot device issues, and build peer confidence, all while enhancing their own understanding of digital tools in real school settings.',
                            status: 'upcoming'
                          },
                          {
                            id: '3',
                            name: 'Mental Health Awareness',
                            activeDates: 'July 15 - Oct 15, 2024',
                            certificateTitle: 'Student Wellness Certificate',
                            enrollmentCount: 200,
                            summary: 'Students lead honest conversations with peers about stress, emotional challenges, anxiety, or isolation. They learn to organise group support sessions, listen carefully, and address issues with empathy and personal insight.',
                            status: 'ended'
                          },
                          {
                            id: '4',
                            name: 'Environmental Education',
                            activeDates: 'Jan 1 - Apr 30, 2024',
                            certificateTitle: 'Environmental Certificate',
                            enrollmentCount: 180,
                            summary: 'Participants coordinate school cleanups, establish compost areas, promote waste separation, plant native trees, and lead simple nature sessions to raise awareness and practical responsibility among their friends and teachers.',
                            status: 'ended'
                          }
                        ].map((project, index) => (
                          <ScrollReveal key={project.id} delay={index * 100} direction="up">
                            <div 
                              className={`flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-lg border transition-all duration-300 group overflow-hidden ${
                                project.status === 'ongoing' ? 'cursor-pointer hover:shadow-xl hover:border-blue-300' : 'cursor-not-allowed opacity-75'
                              } ${
                                selectedProject?.id === project.id ? 'border-blue-500 shadow-xl shadow-blue-200' : ''
                              }`}
                              onClick={() => {
                                if (project.status === 'ongoing') {
                                  // If clicking the same project, toggle the form
                                  if (selectedProject?.id === project.id) {
                                    setShowForm(!showForm);
                                    if (!showForm) {
                                      // If opening form, scroll to it
                                      setTimeout(() => {
                                        document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                                      }, 100);
                                    }
                                  } else {
                                    // If clicking a different project, select it and show form
                                    setSelectedProject(project);
                                    setShowForm(true);
                                    // Scroll to form section
                                    setTimeout(() => {
                                      document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                  }
                                }
                              }}
                            >
                              {/* Status Badge */}
                              <div className="p-6 pb-4 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                    project.status === 'ongoing' ? 'bg-green-100 text-green-800 border-green-200' :
                                    project.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                                    'bg-gray-100 text-gray-800 border-gray-200'
                                  }`}>
                                    {project.status === 'ongoing' ? 'Ongoing' :
                                     project.status === 'upcoming' ? 'Registrations Closed' :
                                     'Ended'}
                                  </span>
                                  <div className="flex items-center space-x-1 text-gray-500">
                                    <Users size={16} />
                                    <span className="text-sm font-medium">{project.enrollmentCount}</span>
                                  </div>
                                </div>

                                {/* Project Name */}
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                                  {project.name}
                                </h3>

                                {/* Project Details */}
                                <div className="space-y-3 mb-4">
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Calendar size={16} className="text-blue-500" />
                                    <span>{project.activeDates}</span>
                                  </div>
                                </div>

                                {/* Certificate */}
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-4">
                                  <div className="flex items-center space-x-2">
                                    <Award size={16} className="text-blue-600" />
                                    <span className="text-sm font-medium text-blue-800">{project.certificateTitle}</span>
                                  </div>
                                </div>

                                {/* Summary */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                  {project.summary}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center justify-between mt-auto">
                                  {project.status === 'ongoing' ? (
                                    <>
                                      <span className="text-sm text-blue-600 font-semibold">Click to apply</span>
                                      <ChevronRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-sm text-gray-600">{Math.floor(project.enrollmentCount * 0.7)} Students Certified</span>
                                      <Award size={16} className="text-gray-600" />
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* 3. Application Form Section */}
        {showForm && selectedProject && (
          <section id="form-section" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal direction="up">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                    Apply for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{selectedProject.name}</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Complete the form below to apply for this project
                  </p>
                </div>
              </ScrollReveal>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 max-w-2xl mx-auto">
                {submitted ? (
                  <div className="text-center py-12">
                    <h2 className="text-3xl font-bold text-green-600 mb-4">Thank you for applying!</h2>
                    <p className="text-lg text-gray-700">We appreciate your interest. Our team will get in touch with you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          maxLength={10}
                          inputMode="numeric"
                          pattern="[0-9]*"
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="10 digit phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* City and State */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your city"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your state"
                        />
                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                      </div>
                    </div>

                    {/* School */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">School/College Name *</label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.school ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your school/college name"
                      />
                      {errors.school && <p className="text-red-500 text-xs mt-1">{errors.school}</p>}
                    </div>

                    {/* Class and Insfora Counsellor */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Class *</label>
                        <div className="relative">
                          <select
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white appearance-none ${errors.class ? 'border-red-500' : 'border-gray-300'}`}
                            style={{
                              WebkitAppearance: 'none',
                              MozAppearance: 'none',
                              appearance: 'none'
                            }}
                          >
                            <option value="" disabled>Select class</option>
                            {classOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        {errors.class && <p className="text-red-500 text-xs mt-1">{errors.class}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Insfora Counsellor</label>
                        <input
                          type="text"
                          name="counsellor"
                          value={formData.counsellor}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.counsellor ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="(Optional)"
                        />
                        {errors.counsellor && <p className="text-red-500 text-xs mt-1">{errors.counsellor}</p>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>

                    {/* Consent Text */}
                    <p className="text-sm text-gray-600 text-center">
                      By submitting the application I consent to the collection and use of my information for the INSFORA Student Ambassador Program.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 4. Trusted. Impactful. Student-Led. */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #8B5CF6 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Trusted. <span className="text-yellow-500">Impactful.</span> <span className="text-purple-500">Student-Led.</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={400} direction="up">
                <div className="bg-purple-50 rounded-3xl p-8 shadow-xl shadow-purple-200/50 hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 min-h-[340px] flex flex-col justify-between">
                  <div>
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Award size={40} className="text-white" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">150+</div>
                    <div className="text-lg text-gray-700">Exclusive Campus Ambassadors</div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200} direction="up">
                <div className="bg-red-50 rounded-3xl p-8 shadow-xl shadow-red-200/50 hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 min-h-[340px] flex flex-col justify-between">
                  <div>
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <School size={40} className="text-white" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">250+</div>
                    <div className="text-lg text-gray-700">Schools across enrolled worldwide</div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up">
                <div className="bg-yellow-50 rounded-3xl p-8 shadow-xl shadow-yellow-200/50 hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 min-h-[340px] flex flex-col justify-between">
                  <div>
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Users size={40} className="text-white" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">500+</div>
                    <div className="text-lg text-gray-700">Certified Students and volunteers</div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
              
            </div>
          </div>
        </section>

        {/* 3. What is Insfora Ambassador Program */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal direction="up">
              <div className="flex items-center justify-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  What is the <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 bg-clip-text text-transparent">INSFORA</span> Ambassador Program?
                </h2>
              </div>
            </ScrollReveal>
            <div className="space-y-8">
              <ScrollReveal delay={200} direction="up">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    A student-powered initiative to uncover what really happens inside schools – from classrooms to corridors. You’ll collect honest stories, feedback, and suggestions from students and teachers – and help us build a better education system together.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400} direction="up">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl">
                  <p className="text-xl font-bold text-white">
                    It’s not just a program. It’s a student-led mission.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4. Why Join Us */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal direction="scale">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Why <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Join?</span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal direction="up">
                <div className="bg-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden min-h-[240px] flex flex-col justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
                    🎓
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certificate of Contribution</h3>
                  <p className="text-gray-700">Valuable for your college profile</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200} direction="up">
                <div className="bg-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden min-h-[240px] flex flex-col justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
                    🏆
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Recognition</h3>
                  <p className="text-gray-700">Amazon gift cards, public acknowledgements, LORs</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400} direction="up">
                <div className="bg-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden min-h-[240px] flex flex-col justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
                    🗣️
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Your Views</h3>
                  <p className="text-gray-700">Share what our schools need to improve</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={600} direction="up">
                <div className="bg-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden min-h-[240px] flex flex-col justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
                    🤝
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Meet Changemakers</h3>
                  <p className="text-gray-700">Connect with like-minded students across the Globe</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={800} direction="up">
                <div className="bg-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden min-h-[240px] flex flex-col justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
                    📢
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-700">Get first access to scholarships, visits, events</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={1000} direction="up">
                <div className="bg-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden min-h-[240px] flex flex-col justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
                    💼
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Develop Leadership Skills</h3>
                  <p className="text-gray-700">Take ownership of initiatives, lead peers, and grow as a changemaker.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 5. What Will You Do */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal direction="scale">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  What Will <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">You Do?</span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal direction="up">
                <div className="bg-blue-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-3xl">
                      📝
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">Participate in Surveys</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">Collect real classroom experiences</p>
                  <div className="mt-4">
                    <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150} direction="up">
                <div className="bg-green-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-3xl">
                      🗣️
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">Talk to Your Community</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">Students, parents, teachers in your area</p>
                  <div className="mt-4">
                    <div className="w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300} direction="up">
                <div className="bg-purple-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-3xl">
                      📊
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">Share Honest Findings</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">Report to our research team</p>
                  <div className="mt-4">
                    <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={450} direction="up">
                <div className="bg-orange-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-3xl">
                      🏫
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">Shape Education</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">Help improve the education system – with your voice</p>
                  <div className="mt-4">
                    <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  What our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Ambassadors</span> say
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>
            {/* Testimonial Scrollable Row with Arrow */}
            {(() => {
              const testimonials = [
                {
                  image: '/tes1.jpg',
                  quote: '"Through the digital program, I hosted a group tutorial on online tools and helped classmates stay on top of assignments."',
                  name: 'Aarav Sharma',
                  location: 'Jaipur, India',
                },
                {
                  image: '/tes2.jpg',
                  quote: '“I joined the environmental education initiative, led a school cleanup drive, and learned how to organise group work.”',
                  name: 'Jakub Kowalski',
                  location: 'Kraków, Poland',
                },
                {
                  image: '/tes3.jpg',
                  quote: '“After joining Insfora’s ambassador program, I led surveys at my school and gained real teamwork and planning skills.”',
                  name: 'Priya',
                  location: 'Delhi, India',
                },
                {
                  image: '/tes4.jpg',
                  quote: '"I wasn’t sure how to talk about stress with friends so I joined the mental health awareness initiative and learned to listen and support them."',
                  name: 'Rowan Stewart',
                  location: 'Edinburgh, Scotland',
                },
                {
                  image: '/tes5.jpg',
                  quote: '“Joining the environmental education initiative made me plan a recycling drive at school and improve my project management skills.”',
                  name: 'Wambui',
                  location: 'Nairobi, Kenya',
                },
                {
                  image: '/tes6.jpg',
                  quote: '“After joining the digital literacy program, I was able to help peers install educational apps and learned to troubleshoot problems myself.”',
                  name: 'Matej Dvorak',
                  location: 'Prague, Czech Republic',
                },
                {
                  image: '/tes7.jpg',
                  quote: '“Surveying classmates and explaining findings to teachers made me more confident speaking publicly.”',
                  name: 'Rahul Gupta',
                  location: 'Mumbai, India',
                },
                {
                  image: '/tes8.jpg',
                  quote: '“Participating in the Insfora mental health program helped me organise wellness check‑ins and gain active listening and empathy skills.”',
                  name: 'Andrew Miller',
                  location: 'Vancouver, Canada',
                },
              ];
              // Responsive: show 1 card on mobile, 2 on md, 3 on lg+
              const [visibleIndex, setVisibleIndex] = useState(0);
              const [cardsPerView, setCardsPerView] = useState(1);
              const containerRef = useRef<HTMLDivElement>(null);
              React.useEffect(() => {
                function updateCardsPerView() {
                  if (window.innerWidth >= 1024) setCardsPerView(3);
                  else if (window.innerWidth >= 768) setCardsPerView(2);
                  else setCardsPerView(1);
                }
                updateCardsPerView();
                window.addEventListener('resize', updateCardsPerView);
                return () => window.removeEventListener('resize', updateCardsPerView);
              }, []);
              const canScrollLeft = visibleIndex > 0;
              const canScrollRight = visibleIndex + cardsPerView < testimonials.length;
              const handleScrollLeft = () => setVisibleIndex(i => Math.max(0, i - 1));
              const handleScrollRight = () => setVisibleIndex(i => Math.min(testimonials.length - cardsPerView, i + 1));
              // Animation: translateX
              const cardWidth = 320; // px (min-w)
              const gap = 32; // px (gap-8)
              const rowWidth = cardsPerView * cardWidth + (cardsPerView - 1) * gap;
              const translateX = -visibleIndex * (cardWidth + gap);
              return (
                <div className="relative flex items-center justify-center">
                  {/* Left Arrow */}
                  <button
                    type="button"
                    aria-label="Scroll testimonials left"
                    className={`flex items-center justify-center absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full border border-blue-200 z-20 hover:bg-blue-50 transition-all active:scale-90 ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : ''}`}
                    onClick={handleScrollLeft}
                    disabled={!canScrollLeft}
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  {/* Cards Row */}
                  <div className="overflow-hidden w-full flex justify-center">
                    <div
                      className="flex transition-transform duration-500"
                      ref={containerRef}
                      style={{
                        width: `${rowWidth}px`,
                        transform: `translateX(${translateX}px)`,
                        gap: `${gap}px`,
                      }}
                    >
                      {testimonials.map((t, idx) => (
                        <div key={t.name} className="min-w-[320px] max-w-xs bg-white/90 rounded-3xl p-8 shadow-xl border border-white/50 flex flex-col items-center">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-white shadow"
                          />
                          <p className="text-gray-700 italic mb-2 text-center">{t.quote}</p>
                          <div className="text-center">
                            <div className="text-gray-900 font-semibold">{t.name}</div>
                            <div className="text-gray-600 text-sm">{t.location}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Right Arrow */}
                  <button
                    type="button"
                    aria-label="Scroll testimonials right"
                    className={`flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full border border-blue-200 z-20 hover:bg-blue-50 transition-all active:scale-90 ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : ''}`}
                    onClick={handleScrollRight}
                    disabled={!canScrollRight}
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              );
            })()}
          </div>
        </section>

        {/* 7. Footer (already present) */}
      </main>
      <Footer />
    </div>
  );
}; 