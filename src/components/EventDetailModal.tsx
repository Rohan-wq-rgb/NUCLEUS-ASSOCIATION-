import React from 'react';
import { SchoolEvent } from '../types';
import { X, Calendar, Clock, MapPin, ExternalLink, Facebook, Instagram } from 'lucide-react';
import { NUCLEUS_SOCIAL_DATA } from '../data/schoolData';

interface EventDetailModalProps {
  event: SchoolEvent | null;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl border-t-4 border-[#3F51B5] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Image */}
        <div className="relative h-44 sm:h-52 w-full bg-[#151B3C] overflow-hidden shrink-0">
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151B3C] via-[#151B3C]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 text-white p-1.5 hover:bg-black/80 transition-colors"
            aria-label="Close Event Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <span className="bg-[#F8D287] text-[#151B3C] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
              {event.category} Activity
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1 leading-snug drop-shadow-sm">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Event Schedule Bar */}
        <div className="bg-[#FCF3E1] px-5 py-2.5 border-b border-[#F8D287]/40 flex flex-wrap items-center justify-between text-xs text-[#2A3679] shrink-0">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#3F51B5]" />
            <span className="font-semibold">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#3F51B5]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#3F51B5]" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 text-sm text-[#151B3C] space-y-4 overflow-y-auto">
          <p className="leading-relaxed text-sm">
            {event.description}
          </p>

          <div className="p-3 bg-[#FCF3E1] border border-[#F8D287] text-xs space-y-1 text-[#2A3679]">
            <span className="font-bold block">Community Engagement:</span>
            <p>
              Connect with fellow attendees and view photos or updates through the verified social channels:
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
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
