import React from 'react';
import { SCHOOL_INFO, HISTORIC_MILESTONES, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { PageId } from '../types';
import { SchoolCrest } from '../components/SchoolCrest';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Facebook,
  Instagram,
  ExternalLink,
  Layers,
  Heart,
  MessageCircle
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenApplyModal }) => {
  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* View Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            About Nucleus
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Identity, Community & Insignia
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            "A Student Association of Nabadwip." Documented as a Cultural Centre in Nabadwip, West Bengal with over twenty years of community fellowship.
          </p>
        </div>
      </section>

      {/* Core Profile Overview */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Insignia Presentation */}
            <div className="lg:col-span-5">
              <div className="border-4 border-[#151B3C] shadow-xl p-6 bg-[#0B0F1C] flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-black rounded-full shadow-2xl ring-4 ring-[#84F800]/60">
                  <SchoolCrest size={150} />
                </div>
                <div className="p-3 bg-[#151B3C] text-white w-full border-t border-[#84F800]/40 space-y-2">
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-[#F8D287]">
                    Official Insignia of Nucleus
                  </h3>
                  <p className="text-[11px] text-white/85">
                    "Official circular Nucleus badge featuring neon lime-green outer ring, electric cyan-blue atomic orbital paths, central sharp 'N' emblem, and futuristic stencil Nucleus wordmark."
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px] text-left">
                    <div className="bg-white/5 p-1.5 border border-white/10">
                      <span className="text-[#84F800] font-bold block">Neon Green Ring</span>
                      <span className="text-white/70">Solidarity & Vitality</span>
                    </div>
                    <div className="bg-white/5 p-1.5 border border-white/10">
                      <span className="text-[#00E5FF] font-bold block">Atomic Orbits</span>
                      <span className="text-white/70">Kinetic Energy & Science</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#84F800] font-mono mt-1">
                    Verified Release: September 10, 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[#3F51B5] text-xs font-bold uppercase tracking-widest block">
                Verified Organization Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B3C] uppercase tracking-tight">
                A Student Association Rooted in Nabadwip
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#2A3679] leading-relaxed">
                <p>
                  <strong>Nucleus</strong> is a student association and cultural centre based in <strong>Nabadwip, Nadia, West Bengal, India</strong>. On public social platforms, the entity is verified with the Instagram biography <em>"A Student Association of Nabadwip"</em> and categorized on Facebook as a <em>"Cultural centre"</em> with an <em>Always open</em> operational status.
                </p>
                <p>
                  The association represents student cohesion, creative culture, and community engagement. Over the years, members and alumni have gathered to celebrate milestones, organize cultural activities, and build ties across generations of students in Nabadwip.
                </p>
                <p className="text-xs text-[#5F6360] italic">
                  Welcome to the official online portal for Nucleus Nabadwip and @nucleus_association.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={SCHOOL_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#3F51B5] hover:bg-[#2A3679] text-white text-xs font-bold px-4 py-2.5 uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook: Nucleus Nabadwip</span>
                </a>
                <a
                  href={SCHOOL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white text-xs font-bold px-4 py-2.5 uppercase tracking-wider flex items-center gap-2 transition-opacity hover:opacity-95"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram: @nucleus_association</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Symbolism of the Nucleus Atom Crest */}
      <section className="py-14 sm:py-18 bg-[#FCF3E1] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#3F51B5] text-xs font-bold uppercase tracking-widest block">
              Visual Identity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B3C] uppercase tracking-tight">
              The Nucleus Atom Insignia
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6360]">
              The official insignia of Nucleus encapsulates the scientific, dynamic, and community essence of the association.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-t-4 border-[#3F51B5] shadow-xs space-y-3">
              <div className="w-10 h-10 bg-[#3F51B5] text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-base uppercase text-[#151B3C]">
                Central Nucleus Core
              </h3>
              <p className="text-xs text-[#2A3679] leading-relaxed">
                Represents the core student gathering point—the unifying center around which fellowship, social duty, and creative ideas revolve.
              </p>
            </div>

            <div className="bg-white p-6 border-t-4 border-[#F8D287] shadow-xs space-y-3">
              <div className="w-10 h-10 bg-[#F8D287] text-[#151B3C] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-base uppercase text-[#151B3C]">
                Intersecting Orbital Rings
              </h3>
              <p className="text-xs text-[#2A3679] leading-relaxed">
                Represents the kinetic energy of youth and the continuous orbits of alumni, current students, and community participants across Nabadwip.
              </p>
            </div>

            <div className="bg-white p-6 border-t-4 border-[#2A3679] shadow-xs space-y-3">
              <div className="w-10 h-10 bg-[#2A3679] text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-base uppercase text-[#151B3C]">
                Circular Seal of Unity
              </h3>
              <p className="text-xs text-[#2A3679] leading-relaxed">
                Encloses the atom within a solid circle displaying the name <strong>Nucleus</strong>, signifying wholeness, integrity, and lasting fellowship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones: #20yearslater & Bakultala Praktanee */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#3F51B5] text-xs font-bold uppercase tracking-widest block">
              Fellowship Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B3C] uppercase tracking-tight">
              Documented Milestones & Fellowship
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6360]">
              Chronological milestones observed from public records and social updates.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {HISTORIC_MILESTONES.map((m, idx) => (
              <div 
                key={idx}
                className="bg-[#FCF3E1] border-l-4 border-[#3F51B5] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold bg-[#3F51B5] text-white px-2 py-0.5 uppercase tracking-wide">
                      {m.year}
                    </span>
                    <h4 className="font-bold text-sm text-[#151B3C]">
                      {m.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#2A3679] leading-relaxed pt-1">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic & Cultural Context of Nabadwip */}
      <section className="py-14 bg-[#151B3C] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
              Geographic & Cultural Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Nabadwip, Nadia, West Bengal
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs sm:text-sm text-white/85 leading-relaxed">
            <p>
              Located on the western banks of the Bhagirathi river in Nadia district, Nabadwip is historically renowned as the premier seat of classical Sanskrit scholarship, Nyaya philosophy, and cultural enlightenment in Bengal. For centuries, it has drawn students and scholars from across South Asia.
            </p>
            <p>
              This vibrant intellectual and cultural tradition continues today through student initiatives and cultural centres like Nucleus, which nurture youth creativity, literature, social engagement, and lifelong camaraderie in the heart of Nabadwip.
            </p>
          </div>

          <div className="pt-4 flex items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => onNavigate('activities')}
              className="bg-[#3F51B5] hover:bg-[#2A3679] text-white px-5 py-2.5 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>View Public Activities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={SCHOOL_INFO.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 font-extrabold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Want to join with us? Contact WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
