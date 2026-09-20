import React, { useState } from 'react';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { 
  MessageCircle, 
  X, 
  Clock, 
  Facebook,
  Instagram,
  ExternalLink,
  MapPin,
  Copy,
  Check
} from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const whatsappUrl = SCHOOL_INFO.whatsappGroup;

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Quick Connect Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white shadow-2xl border-t-4 border-[#25D366] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Card Header */}
          <div className="bg-[#151B3C] text-white p-4 flex items-center justify-between border-b-2 border-[#25D366]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">
                  Nucleus Association
                </h4>
                <p className="text-[11px] text-[#F8D287]">
                  Want to join with us?
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
          <div className="p-4 bg-[#FCF3E1]/40 text-[#151B3C] text-xs space-y-3">
            {/* Primary WhatsApp Group Join Box */}
            <div className="bg-white p-4 border border-[#25D366]/40 shadow-xs space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2 py-0.5 rounded">
                  Official Member Group
                </span>
                <h5 className="font-extrabold text-sm text-[#151B3C] pt-1">
                  Want to join with us? Contact this WhatsApp group
                </h5>
                <p className="text-[11px] text-[#5F6360] leading-relaxed">
                  Join students and alumni of Nabadwip for cultural initiatives, assemblies, and community discussions.
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-3 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Join WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="bg-gray-100 hover:bg-gray-200 text-[#151B3C] px-3 py-2 text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="Copy group link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#3F51B5]" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-[#2A3679] uppercase tracking-wider block">
                Other Verified Channels
              </span>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={NUCLEUS_SOCIAL_DATA.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1877F2] hover:bg-[#166fe5] text-white p-2 flex items-center gap-1.5 transition-colors text-[11px] font-semibold"
                >
                  <Facebook className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Facebook</span>
                </a>

                <a
                  href={NUCLEUS_SOCIAL_DATA.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white p-2 flex items-center gap-1.5 transition-opacity hover:opacity-95 text-[11px] font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Instagram</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#5F6360] pt-2 border-t border-gray-200">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#3F51B5]" />
                <span>Nabadwip, Nadia</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                <Clock className="w-3 h-3" />
                <span>Always Open</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Open Nucleus Association WhatsApp Contact"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-7 h-7 fill-current" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#25D366] animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};
