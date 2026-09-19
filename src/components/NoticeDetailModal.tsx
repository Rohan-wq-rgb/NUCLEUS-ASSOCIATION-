import React from 'react';
import { SchoolNotice } from '../types';
import { X, FileText, Calendar, UserCheck, ExternalLink, Facebook, Instagram } from 'lucide-react';
import { NUCLEUS_SOCIAL_DATA } from '../data/schoolData';

interface NoticeDetailModalProps {
  notice: SchoolNotice | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({ notice, onClose }) => {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl border-t-4 border-[#3F51B5] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#3F51B5] text-white p-5 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#F8D287] text-[#151B3C] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                {notice.category}
              </span>
              <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                Public Activity
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
              {notice.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 ml-4"
            aria-label="Close Notice Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Meta */}
        <div className="bg-[#FCF3E1] px-5 py-2.5 border-b border-[#F8D287]/40 flex flex-wrap items-center justify-between text-xs text-[#2A3679]">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#3F51B5]" />
            <span>Date: {notice.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-3.5 h-3.5 text-[#3F51B5]" />
            <span>Source: {notice.publishedBy}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-sm text-[#151B3C] space-y-4 max-h-[60vh] overflow-y-auto">
          <p className="leading-relaxed text-sm">
            {notice.summary}
          </p>

          <div className="p-3 bg-[#FCF3E1] border border-[#F8D287] text-xs space-y-1 text-[#2A3679]">
            <p className="font-bold">Public Verification Context:</p>
            <p>
              This circular corresponds to recorded observations on the official social channels of Nucleus Nabadwip.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={NUCLEUS_SOCIAL_DATA.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1877F2] text-white px-3.5 py-1.5 text-xs font-bold flex items-center gap-1.5 hover:bg-[#166fe5] transition-colors uppercase"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook Page</span>
            </a>
            <a
              href={NUCLEUS_SOCIAL_DATA.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white px-3.5 py-1.5 text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-opacity uppercase"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Profile</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#151B3C] bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
