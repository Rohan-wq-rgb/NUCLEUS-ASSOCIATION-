import React, { useState } from 'react';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import { 
  X, 
  Sparkles, 
  Facebook, 
  Instagram, 
  Users, 
  MapPin, 
  MessageCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = SCHOOL_INFO.whatsappGroup;

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg border-t-4 border-[#25D366] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#151B3C] text-white p-5 flex items-center justify-between shrink-0 border-b-2 border-[#25D366]">
          <div className="flex items-center gap-3">
            <SchoolCrest size={46} className="ring-2 ring-[#84F800]" />
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-tight">
                Want to join with us?
              </h3>
              <p className="text-xs text-[#84F800] font-medium">
                Official WhatsApp Group • Nucleus Association
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="p-3 bg-[#FCF3E1] border border-[#F8D287] text-xs text-[#151B3C] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#3F51B5] shrink-0" />
              <span>Nabadwip, Nadia, West Bengal</span>
            </div>
            <span className="text-emerald-700 font-bold text-[11px] uppercase tracking-wide">
              Always Open
            </span>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-extrabold uppercase tracking-tight text-[#151B3C]">
              Join the Official WhatsApp Community
            </h4>
            <p className="text-xs sm:text-sm text-[#2A3679] leading-relaxed">
              We welcome all current students, alumni, and cultural enthusiasts in Nabadwip to connect directly through our official WhatsApp group.
            </p>
          </div>

          {/* WhatsApp Action Card */}
          <div className="bg-[#FCF3E1]/70 border-2 border-[#25D366]/40 p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xs shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="font-extrabold text-sm text-[#151B3C] block">
                  Nucleus Student Association
                </span>
                <span className="text-xs text-[#5F6360]">
                  Official WhatsApp Group Invitation
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-5 py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Join WhatsApp Group</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="bg-white hover:bg-gray-50 border border-gray-300 text-[#151B3C] font-bold px-4 py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#3F51B5]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-2.5 bg-white border border-gray-200 text-[11px] font-mono text-[#2A3679] break-all select-all">
              {whatsappUrl}
            </div>
          </div>

          {/* Social Alternatives */}
          <div className="space-y-2 pt-1 border-t border-gray-200">
            <span className="text-[11px] font-bold text-[#5F6360] uppercase tracking-wider block">
              Also Connect via Public Social Channels
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={NUCLEUS_SOCIAL_DATA.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-[#1877F2] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#166fe5] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook: Nucleus Nabadwip</span>
              </a>
              <a
                href={NUCLEUS_SOCIAL_DATA.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-opacity"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: @nucleus_association</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#151B3C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3F51B5] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
