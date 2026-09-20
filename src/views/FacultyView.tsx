import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { 
  Users, 
  Sparkles, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Facebook, 
  Instagram, 
  ExternalLink,
  MessageCircle,
  HeartHandshake
} from 'lucide-react';

interface FacultyViewProps {
  onNavigate: (page: PageId) => void;
}

export const FacultyView: React.FC<FacultyViewProps> = ({ onNavigate }) => {
  const coordinationRoles = [
    {
      title: 'Student Cultural Convenors',
      domain: 'Nabadwip Cultural Centre & Assemblies',
      description: 'Active student members responsible for arranging open cultural discussions, seasonal meets, and youth creative gatherings in Nabadwip.',
      platform: 'Active in Nabadwip'
    },
    {
      title: 'Alumni Fellowship Liaisons',
      domain: '#20yearslater & Legacy Network',
      description: 'Senior members and alumni fellows who maintain continuity with long-standing student traditions, reunions, and inter-generational guidance.',
      platform: 'Alumni Assembly'
    },
    {
      title: 'Community Ties & Heritage Desks',
      domain: 'Nabadwip Bakultala Praktanee & Local Ties',
      description: 'Coordinating collaborative sessions and mutual support with historical student networks and cultural groups across Nadia district.',
      platform: 'Community Collaboration'
    },
    {
      title: 'Digital & Media Coordination',
      domain: 'Facebook & Instagram Handles',
      description: 'Managing public broadcasts, photography showcases, and communications for Nucleus Nabadwip and @nucleus_association.',
      platform: 'Public Digital Stream'
    }
  ];

  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Association Coordination
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Community Organization & Student Roles
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Nucleus operates as a student association and cultural collective in Nabadwip, powered by voluntary student initiative and alumni fellowship.
          </p>
        </div>
      </section>

      {/* Main Coordination Details */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Transparency & Real Data Notice */}
          <div className="bg-white p-6 border-l-4 border-emerald-600 shadow-xs flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#2A3679]">
              <h4 className="font-bold text-sm text-[#151B3C]">
                Authentic Community Organization Model
              </h4>
              <p className="leading-relaxed">
                As an authentic student association, Nucleus does not maintain a commercial corporate faculty or salaried bureaucracy. Coordination is carried out by active student organizers and alumni fellows. Out of strict respect for personal privacy, individual mobile numbers are not published on the public web.
              </p>
            </div>
          </div>

          {/* Coordination Structure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinationRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white border-t-4 border-[#3F51B5] p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#3F51B5] uppercase tracking-wider block">
                    {role.domain}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#151B3C]">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2A3679] leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#5F6360]">
                  <span>Scope: <strong>{role.platform}</strong></span>
                  <span className="text-emerald-700 font-bold uppercase text-[10px]">Volunteer Initiative</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Coordinators Strip */}
          <div className="bg-[#151B3C] text-white p-8 border-t-4 border-[#F8D287] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
                Direct Contact
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase">
                Want to join with us? Contact Association Coordinators
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Reach association coordinators directly via the official WhatsApp group or our verified social channels.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SCHOOL_INFO.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 text-xs font-extrabold flex items-center gap-1.5 uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Group</span>
              </a>

              <a
                href={NUCLEUS_SOCIAL_DATA.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 uppercase transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook Desk</span>
              </a>

              <a
                href={NUCLEUS_SOCIAL_DATA.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 uppercase transition-opacity hover:opacity-95"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram Desk</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
