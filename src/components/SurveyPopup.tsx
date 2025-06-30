import React, { useState, useEffect } from 'react';
import { X, FileText, MessageCircle } from 'lucide-react';

export const SurveyPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  /* show after 5 s */
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  /* open SurveyMonkey */
  const handleSurveyClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();      // block any default navigation
    e.stopPropagation();     // block parent handlers
    window.open(
      'https://www.surveymonkey.com/r/GKMXTYM',
      '_blank',
      'noopener,noreferrer'
    );
    setShowPopup(false);
  };

  /* open WhatsApp */
  const handleWhatsAppClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(
      'https://wa.me/919876543210?text=Hi%20INSFORA,%20I%20would%20like%20to%20fill%20the%20research%20survey%20later.',
      '_blank',
      'noopener,noreferrer'
    );
    setShowPopup(false);
  };

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 relative animate-fadeIn">
        {/* close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-gray-600" />
        </button>

        {/* header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FileText size={28} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Contribute to the Research. Shape the Future.
          </h3>
          <p className="text-gray-600">
          Your voice can spark change. Share your thoughts on education, opportunity, and impact and be part of something bigger.
          </p>
        </div>

        {/* buttons */}
        <div className="space-y-3">
          <button
            onClick={handleSurveyClick}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Take Survey Now
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Connect to WhatsApp
          </button>

          <button
            onClick={handleClose}
            className="w-full text-gray-500 hover:text-gray-700 py-2 transition-colors text-sm"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};