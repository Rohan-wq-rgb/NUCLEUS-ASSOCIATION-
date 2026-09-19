import React, { useState } from 'react';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { X, CheckCircle2, Send, Sparkles, Facebook, Instagram, Users, MapPin } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    role: 'Student in Nabadwip',
    interest: 'Cultural & Student Activities',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      contact: '',
      role: 'Student in Nabadwip',
      interest: 'Cultural & Student Activities',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl border-t-4 border-[#3F51B5] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#3F51B5] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F8D287] text-[#151B3C] flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                Connect with Nucleus Association
              </h3>
              <p className="text-xs text-[#F8D287]">
                A Student Association of Nabadwip • Cultural Centre
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-[#151B3C]">
                  Inquiry Successfully Recorded
                </h4>
                <p className="text-xs text-[#5F6360] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.interest}</em> has been registered. You can also reach out directly via our verified social channels:
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href={NUCLEUS_SOCIAL_DATA.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#1877F2] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#166fe5] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook: Nucleus Nabadwip</span>
                </a>
                <a
                  href={NUCLEUS_SOCIAL_DATA.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram: @nucleus_association</span>
                </a>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={resetForm}
                  className="px-6 py-2 bg-[#151B3C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3F51B5] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-[#FCF3E1] border border-[#F8D287] text-xs text-[#151B3C] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#3F51B5] shrink-0" />
                  <span>Nabadwip, Nadia, West Bengal, India</span>
                </div>
                <span className="text-emerald-700 font-bold text-[11px] uppercase tracking-wide">
                  Always Open
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#151B3C] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#151B3C] mb-1">
                    Contact (Email, Phone, or IG Handle) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. phone, email or @handle"
                    className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#151B3C] mb-1">
                    Your Association Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5] bg-white"
                  >
                    <option>Student in Nabadwip</option>
                    <option>Alumni / Past Student</option>
                    <option>Bakultala Praktanee Member</option>
                    <option>Cultural Organizer</option>
                    <option>Local Community Supporter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#151B3C] mb-1">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5] bg-white"
                  >
                    <option>Cultural & Student Activities</option>
                    <option>#20yearslater Fellowship</option>
                    <option>Alumni & Student Assembly</option>
                    <option>Photography & Arts Showcase</option>
                    <option>General Association Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#151B3C] mb-1">
                  Message / Proposal / Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details of your inquiry or initiative..."
                  className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 border border-gray-300 text-xs font-bold text-[#5F6360] hover:bg-gray-100 transition-colors uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#3F51B5] hover:bg-[#2A3679] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
