import React, { useState } from 'react';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { PageId } from '../types';
import { 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Facebook,
  Instagram,
  Sparkles,
  Users,
  Share2
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    role: 'Student in Nabadwip',
    subject: 'Cultural Initiative',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Official Touchpoints
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Connect with Nucleus Association
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Verified public communication touchpoints and social channels for Nucleus Nabadwip.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Real Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 border-t-4 border-[#3F51B5] shadow-xs space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wide text-[#151B3C] pb-2 border-b border-gray-100">
                  Verified Organization Details
                </h3>

                <div className="space-y-4 text-xs text-[#2A3679]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#3F51B5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151B3C]">Geographic Location:</strong>
                      <span>{NUCLEUS_SOCIAL_DATA.geographicAssociation}</span>
                      <span className="block text-[11px] text-[#5F6360]">Nadia, West Bengal, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151B3C]">Operating Schedule:</strong>
                      <span className="text-emerald-700 font-bold">{NUCLEUS_SOCIAL_DATA.facebook.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#3F51B5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151B3C]">Primary Classification:</strong>
                      <span>Cultural Centre • Student Association of Nabadwip</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FCF3E1] border border-[#F8D287] text-[11px] text-[#151B3C] space-y-1">
                  <span className="font-bold block text-[#2A3679]">Privacy & Real Data Policy</span>
                  <p>
                    Nucleus communicates primarily via verified public digital touchpoints. Personal mobile numbers and private email addresses are not published to prevent unsolicited spam.
                  </p>
                </div>
              </div>

              {/* Direct Social Media Gateways */}
              <div className="bg-white p-6 border-t-4 border-[#F8D287] shadow-xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#151B3C]">
                  Official Social Channels
                </h4>

                <div className="space-y-2.5">
                  <a
                    href={NUCLEUS_SOCIAL_DATA.facebook.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white p-3 flex items-center justify-between transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Facebook className="w-5 h-5" />
                      <div>
                        <span className="font-bold block text-xs">Facebook: Nucleus Nabadwip</span>
                        <span className="text-[11px] text-white/80">Cultural Centre • Nabadwip</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={NUCLEUS_SOCIAL_DATA.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-3 flex items-center justify-between transition-opacity hover:opacity-95 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-5 h-5" />
                      <div>
                        <span className="font-bold block text-xs">Instagram: @nucleus_association</span>
                        <span className="text-[11px] text-white/80">"A Student Association of Nabadwip"</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Community Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 border-t-4 border-[#3F51B5] shadow-xs">
                <div className="mb-6 space-y-1 pb-4 border-b border-gray-100">
                  <span className="text-[#3F51B5] text-xs font-bold uppercase tracking-widest block">
                    Association Inquiry
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#151B3C]">
                    Leave a Message for Nucleus Coordinators
                  </h3>
                  <p className="text-xs text-[#5F6360]">
                    Inquiries are received by student association representatives in Nabadwip.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                    <h4 className="text-xl font-bold text-[#151B3C]">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-xs text-[#5F6360] max-w-md mx-auto leading-relaxed">
                      Your community message regarding <strong>{formData.subject}</strong> has been received. You may also connect via Facebook or Instagram for immediate communication.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          contact: '',
                          role: 'Student in Nabadwip',
                          subject: 'Cultural Initiative',
                          message: ''
                        });
                      }}
                      className="px-6 py-2 bg-[#3F51B5] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2A3679] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#151B3C] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#151B3C] mb-1">
                          Contact (Email / Phone / IG Handle) *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          placeholder="How can coordinators reply?"
                          className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#151B3C] mb-1">
                          Association Role / Affiliation
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5] bg-white"
                        >
                          <option>Student in Nabadwip</option>
                          <option>Alumni Member</option>
                          <option>Bakultala Praktanee Participant</option>
                          <option>Cultural Organizer</option>
                          <option>Nabadwip Citizen / Supporter</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#151B3C] mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5] bg-white"
                        >
                          <option>Cultural Initiative</option>
                          <option>#20yearslater Fellowship</option>
                          <option>Student Collaboration</option>
                          <option>Alumni Network</option>
                          <option>General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#151B3C] mb-1">
                        Detailed Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#3F51B5]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#3F51B5] hover:bg-[#2A3679] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Nucleus</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
