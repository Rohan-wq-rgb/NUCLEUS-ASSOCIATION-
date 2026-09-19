import React, { useState } from 'react';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { 
  MessageCircle, 
  X, 
  Send, 
  Clock, 
  CheckCircle2, 
  Facebook,
  Instagram,
  ExternalLink,
  MapPin
} from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryContact, setInquiryContact] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryContact) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryContact('');
      setInquiryMessage('');
      setIsOpen(false);
    }, 2800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Quick Connect Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white shadow-2xl border-t-4 border-[#3F51B5] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Card Header */}
          <div className="bg-[#3F51B5] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#151B3C] flex items-center justify-center text-[#F8D287]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-[#F8D287]">
                  Nucleus Association Desk
                </h4>
                <p className="text-[11px] text-white/80">
                  A Student Association of Nabadwip
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded transition-colors"
              aria-label="Close Connect Widget"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FCF3E1]/40 text-[#151B3C] text-xs">
            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto animate-bounce" />
                <h5 className="font-bold text-sm text-[#2A3679]">Inquiry Recorded!</h5>
                <p className="text-xs text-[#5F6360]">
                  Thank you, <strong>{inquiryName}</strong>. Your message has been logged for Nucleus Association coordinators in Nabadwip.
                </p>
              </div>
            ) : (
              <>
                {/* Official Direct Social Channels */}
                <div className="space-y-2 mb-3">
                  <div className="text-[11px] font-bold text-[#2A3679] uppercase tracking-wider">
                    Direct Social Touchpoints
                  </div>
                  
                  <a
                    href={NUCLEUS_SOCIAL_DATA.facebook.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white p-2.5 flex items-center justify-between transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <Facebook className="w-4 h-4" />
                      <div>
                        <span className="font-bold block text-xs">Facebook: Nucleus Nabadwip</span>
                        <span className="text-[10px] text-white/80">149 followers • Cultural centre</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={NUCLEUS_SOCIAL_DATA.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-2.5 flex items-center justify-between transition-opacity hover:opacity-95 shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4" />
                      <div>
                        <span className="font-bold block text-xs">Instagram: @nucleus_association</span>
                        <span className="text-[10px] text-white/80">Student Association of Nabadwip</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Quick Message Form */}
                <form onSubmit={handleSubmit} className="space-y-2.5 pt-2 border-t border-gray-200">
                  <span className="font-bold text-[11px] uppercase tracking-wider text-[#2A3679] block">
                    Or Leave a Community Message
                  </span>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full bg-white border border-gray-300 px-3 py-1.5 text-xs text-[#151B3C] focus:outline-none focus:border-[#3F51B5]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Email or Phone or Social Handle *"
                      required
                      value={inquiryContact}
                      onChange={(e) => setInquiryContact(e.target.value)}
                      className="w-full bg-white border border-gray-300 px-3 py-1.5 text-xs text-[#151B3C] focus:outline-none focus:border-[#3F51B5]"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message for Nucleus Association coordinators..."
                      rows={2}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full bg-white border border-gray-300 px-3 py-1.5 text-xs text-[#151B3C] focus:outline-none focus:border-[#3F51B5]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3F51B5] hover:bg-[#2A3679] text-white py-2 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send to Association</span>
                  </button>
                </form>

                <div className="mt-3 flex items-center justify-between text-[10px] text-[#5F6360] pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#3F51B5]" />
                    <span>Nabadwip, West Bengal</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <Clock className="w-3 h-3" />
                    <span>Always Open</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#3F51B5] hover:bg-[#2A3679] text-[#F8D287] shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#3F51B5]/40"
        aria-label="Open Nucleus Association Desk"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#3F51B5] animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};
