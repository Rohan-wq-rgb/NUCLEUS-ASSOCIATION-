import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Facebook, 
  Instagram,
  ExternalLink,
  Heart,
  MessageCircle
} from 'lucide-react';

interface AdmissionsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({ onNavigate, onOpenApplyModal }) => {
  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Participation & Membership
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Student Fellowship & Community Involvement
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            How students, alumni, and cultural enthusiasts in Nabadwip participate in Nucleus Association activities.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Action Callout */}
          <div className="bg-[#F8D287] p-6 sm:p-8 border-t-4 border-[#3F51B5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[#3F51B5] text-xs font-bold uppercase tracking-wider block">
                Open Association Network
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#151B3C] uppercase">
                Connect with the Student Community in Nabadwip
              </h3>
              <p className="text-xs sm:text-sm text-[#2A3679]">
                Nucleus is an open student association and cultural centre. No commercial admission fees or exclusionary tests.
              </p>
            </div>

            <a
              href={SCHOOL_INFO.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3 font-extrabold text-xs uppercase tracking-wider transition-colors shrink-0 shadow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Want to join? Contact WhatsApp</span>
            </a>
          </div>

          {/* Guidelines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1: Who Can Participate */}
            <div className="bg-white p-7 border-t-4 border-[#3F51B5] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3F51B5] text-white flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight text-[#151B3C]">
                  Current Students in Nabadwip
                </h4>
                <p className="text-xs text-[#2A3679] leading-relaxed">
                  Open to students from schools and colleges across Nabadwip seeking an active peer platform for cultural, intellectual, and creative development.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#151B3C] pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Participate in cultural meets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Collaborate on student projects</span>
                </li>
              </ul>
            </div>

            {/* Step 2: Alumni & #20yearslater */}
            <div className="bg-white p-7 border-t-4 border-[#F8D287] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#F8D287] text-[#151B3C] flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight text-[#151B3C]">
                  Alumni & Past Students
                </h4>
                <p className="text-xs text-[#2A3679] leading-relaxed">
                  As marked by our milestone post <strong>#20yearslater</strong>, past members and alumni continue to be the pillar of guidance and camaraderie for new generations.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#151B3C] pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Join annual reunions & assemblies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mentor junior student members</span>
                </li>
              </ul>
            </div>

            {/* Step 3: Cultural Centre Supporters */}
            <div className="bg-white p-7 border-t-4 border-[#2A3679] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#2A3679] text-white flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight text-[#151B3C]">
                  Community Cultural Ties
                </h4>
                <p className="text-xs text-[#2A3679] leading-relaxed">
                  Supporting organizations like <em>Nabadwip Bakultala Praktanee</em> and local community cultural groups that preserve Nabadwip's rich intellectual legacy.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#151B3C] pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Support local heritage events</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Foster inter-organizational ties</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Direct Public Channels Box */}
          <div className="bg-white p-8 border border-gray-200 space-y-4">
            <h3 className="text-base font-bold uppercase text-[#151B3C]">
              Direct Engagement Channels
            </h3>
            <p className="text-xs sm:text-sm text-[#2A3679] leading-relaxed">
              To join upcoming assemblies or stay informed on association announcements, connect directly through the verified social media handles:
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={SCHOOL_INFO.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 text-xs font-extrabold flex items-center gap-2 transition-colors uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Group: Join Community</span>
              </a>

              <a
                href={NUCLEUS_SOCIAL_DATA.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 text-xs font-bold flex items-center gap-2 transition-colors uppercase tracking-wider"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook: Nucleus Nabadwip</span>
              </a>

              <a
                href={NUCLEUS_SOCIAL_DATA.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white px-5 py-2.5 text-xs font-bold flex items-center gap-2 transition-opacity hover:opacity-95 uppercase tracking-wider"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: @nucleus_association</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
