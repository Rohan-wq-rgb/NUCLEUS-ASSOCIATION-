import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import { 
  MapPin, 
  Clock, 
  ExternalLink, 
  ArrowUp, 
  ShieldCheck,
  Facebook,
  Instagram,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApplyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2A3679] text-white border-t-4 border-[#F8D287]">
      {/* Upper Footer Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Nucleus Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SchoolCrest size={48} variant="gold" />
              <div>
                <h3 className="font-extrabold text-white text-base uppercase tracking-tight leading-tight">
                  NUCLEUS
                </h3>
                <h4 className="font-bold text-xs text-[#F8D287] uppercase tracking-wider">
                  ASSOCIATION
                </h4>
                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-0.5">
                  STUDENT ASSOCIATION • NABADWIP
                </p>
              </div>
            </div>

            <p className="text-xs text-white/85 leading-relaxed">
              A Student Association and Cultural Centre in Nabadwip, West Bengal, bringing together students, youth, and alumni for cultural fellowship, creative initiatives, and community solidarity.
            </p>

            <div className="pt-1 text-xs text-[#F8D287] font-semibold space-y-1">
              <p>Classification: Cultural Centre</p>
              <p className="text-[11px] text-white/75">Location: Nabadwip, Nadia, West Bengal, India</p>
            </div>

            {/* Official Social Media Buttons */}
            <div className="pt-2 space-y-2">
              <div className="text-[11px] text-[#F8D287] font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Official Social Channels</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={NUCLEUS_SOCIAL_DATA.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#3F51B5] hover:bg-[#F8D287] hover:text-[#151B3C] text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Nucleus Nabadwip on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <a
                  href={NUCLEUS_SOCIAL_DATA.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#3F51B5] hover:bg-[#F8D287] hover:text-[#151B3C] text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Nucleus on Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: About & Roots */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8D287] pb-1 border-b border-white/20">
              About Nucleus
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Student Association Profile</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Cultural Centre Mission in Nabadwip</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>#20yearslater Milestone & Fellowship</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Nabadwip Bakultala Praktanee Ties</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Official Circular Atom Insignia</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Get in Touch with Coordinators</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Public Activities */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8D287] pb-1 border-b border-white/20">
              Activities & Milestones
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <button onClick={() => onNavigate('activities')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Public Post Feed</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('activities')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>#20yearslater Assembly Post</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('activities')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Nabadwip Bakultala Praktanee Assembly</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('activities')} className="hover:text-[#F8D287] transition-colors text-left flex items-center gap-1.5">
                  <span>•</span>
                  <span>Instagram Photography Showcase</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenApplyModal} className="hover:text-[#F8D287] text-[#F8D287] font-semibold transition-colors text-left flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Submit Inquiry to Association</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Touchpoints */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8D287] pb-1 border-b border-white/20">
              Location & Connect
            </h3>
            
            <div className="space-y-3 text-xs text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F8D287] shrink-0 mt-0.5" />
                <span>Nabadwip, Nadia, West Bengal, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Operating Schedule: Always open</span>
              </div>
              <div className="p-3 bg-[#151B3C]/80 border border-[#F8D287]/30 text-[11px] text-white/90">
                <strong className="block text-[#F8D287] mb-1">Direct Contact Method:</strong>
                Reach association coordinators directly via direct messaging on our verified Facebook Page or Instagram profile.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#3F51B5] hover:bg-[#F8D287] hover:text-[#151B3C] text-white text-xs font-bold py-2.5 px-3 uppercase tracking-wider transition-colors text-center"
              >
                View Official Touchpoints
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Verified Statement */}
      <div className="bg-[#151B3C] text-white/70 py-4 px-4 sm:px-8 border-t border-white/10 text-xs">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Nucleus Association. A Student Association of Nabadwip & Cultural Centre.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#F8D287] font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nabadwip, Nadia, West Bengal</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-[#2A3679] hover:bg-[#3F51B5] text-white rounded transition-colors"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
