import React from 'react';
import { PageId, SchoolNotice, SchoolEvent } from '../types';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA, VERIFIED_OBSERVATIONS } from '../data/schoolData';
import { SocialHub } from '../components/SocialHub';
import { HomeGallerySection } from '../components/HomeGallerySection';
import { SchoolCrest } from '../components/SchoolCrest';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Sparkles, 
  Users, 
  Heart, 
  MessageCircle, 
  ExternalLink,
  ShieldCheck,
  Calendar,
  Layers,
  Facebook,
  Instagram,
  CheckCircle2,
  Camera
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  notices: SchoolNotice[];
  events: SchoolEvent[];
  onSelectNotice: (notice: SchoolNotice) => void;
  onSelectEvent: (event: SchoolEvent) => void;
  onOpenApplyModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  notices,
  events,
  onSelectNotice,
  onSelectEvent,
  onOpenApplyModal
}) => {
  return (
    <div className="w-full bg-[#FCF3E1]">

      {/* Hero Banner with verified identity */}
      <section className="relative w-full overflow-hidden bg-[#151B3C] min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center">
        {/* Background Image: Cultural & Student Atmosphere in Bengal */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt="Nucleus Association Student Gathering"
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          {/* High-Contrast Left-to-Right Dark Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(21,27,60,0.92) 0%, rgba(21,27,60,0.76) 50%, rgba(21,27,60,0.35) 100%)'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full">
          <div className="max-w-[720px] space-y-5">
            
            {/* Real Classification Badge */}
            <div className="inline-flex items-center gap-2 bg-[#3F51B5]/90 backdrop-blur-xs border border-[#F8D287]/50 px-3 py-1 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F8D287]" />
              <span>A Student Association of Nabadwip • Cultural Centre</span>
            </div>

            {/* Display Title & Official Insignia */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <SchoolCrest size={76} className="shadow-2xl ring-2 ring-[#84F800]" />
              <div>
                <h1 className="text-[#F8D287] font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[1.05] drop-shadow-md">
                  NUCLEUS
                </h1>
                <span className="text-[#84F800] font-mono font-bold tracking-widest text-xs uppercase block mt-1">
                  A Student Association of Nabadwip
                </span>
              </div>
            </div>

            {/* Real Bio & Description */}
            <p className="text-white/95 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              "A Student Association of Nabadwip." Categorized as a Cultural Centre in Nabadwip, West Bengal. Dedicated to youth fellowship, cultural gatherings, and inter-generational community solidarity.
            </p>

            {/* Community Pillars Grid */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-white">
              <div className="bg-[#151B3C]/80 border border-[#F8D287]/40 p-2.5">
                <span className="text-white/70 block text-[10px] uppercase font-bold">Nature</span>
                <span className="text-[#F8D287] text-xs sm:text-sm font-extrabold block mt-0.5">Student Association</span>
              </div>
              <div className="bg-[#151B3C]/80 border border-[#F8D287]/40 p-2.5">
                <span className="text-white/70 block text-[10px] uppercase font-bold">Classification</span>
                <span className="text-[#F8D287] text-xs sm:text-sm font-extrabold block mt-0.5">Cultural Centre</span>
              </div>
              <div className="bg-[#151B3C]/80 border border-[#F8D287]/40 p-2.5">
                <span className="text-white/70 block text-[10px] uppercase font-bold">Fellowship</span>
                <span className="text-[#F8D287] text-xs sm:text-sm font-extrabold block mt-0.5">Over 20 Years</span>
              </div>
              <div className="bg-[#151B3C]/80 border border-[#F8D287]/40 p-2.5">
                <span className="text-white/70 block text-[10px] uppercase font-bold">Schedule</span>
                <span className="text-emerald-400 text-xs sm:text-sm font-bold flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Always Open
                </span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('activities')}
                className="bg-[#3F51B5] hover:bg-[#2A3679] text-white px-5 py-3 font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <span>View Public Activities</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => document.getElementById('association-gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#151B3C] hover:bg-[#2A3679] text-[#F8D287] border border-[#F8D287]/40 px-4 py-2.5 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
              >
                <Camera className="w-4 h-4 text-[#F8D287]" />
                <span>Activities Gallery</span>
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="bg-transparent hover:bg-[#F8D287] text-[#F8D287] hover:text-[#151B3C] border-2 border-[#F8D287] px-5 py-2.5 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>About Association</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={SCHOOL_INFO.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Want to join? WhatsApp Group</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Identity & Core Ethos Strip */}
      <section className="bg-[#3F51B5] text-white py-12 px-4 sm:px-6 lg:px-8 border-y-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-3">
              <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
                Public Identity & Classification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Nucleus Nabadwip • Student Association & Cultural Centre
              </h2>
              <p className="text-white/90 text-sm leading-relaxed">
                Nucleus is a recognized student association rooted in Nabadwip, Nadia, West Bengal. Documented on Facebook as a <strong>Cultural centre</strong> with an <strong>Always Open</strong> schedule, and on Instagram as <strong>"A Student Association of Nabadwip"</strong>, our community fosters cultural initiatives, student fellowship, and inter-generational assemblies.
              </p>
            </div>

            <div className="bg-[#151B3C] p-5 border border-[#F8D287]/40 space-y-3">
              <span className="text-[#F8D287] text-xs font-bold uppercase tracking-wider block">
                Verified Association Attributes
              </span>
              <ul className="space-y-2 text-xs text-white/85">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F8D287] shrink-0 mt-0.5" />
                  <span><strong>Location:</strong> Nabadwip, Nadia, West Bengal, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Schedule:</strong> Always open</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="shrink-0 mt-0.5">
                    <SchoolCrest size={18} />
                  </div>
                  <span><strong>Official Insignia:</strong> Circular emblem with neon lime ring, atomic orbits, stylized 'N' & Nucleus mark</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Gateways */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[#3F51B5] text-xs font-bold uppercase tracking-widest block">
            Core Association Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B3C] uppercase tracking-tight">
            Real Community Engagement
          </h2>
          <p className="text-xs sm:text-sm text-[#5F6360]">
            Explore the authentic verified activities, milestones, and public connections of Nucleus in Nabadwip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: #20yearslater Milestone */}
          <div 
            onClick={() => onNavigate('activities')}
            className="bg-[#F8D287] p-7 text-[#151B3C] border-t-4 border-[#3F51B5] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3F51B5] block">
                Public Milestone • Aug 11
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#151B3C]">
                #20yearslater Fellowship
              </h3>
              <p className="text-xs text-[#151B3C]/85 leading-relaxed">
                Commemorating twenty years of student bonding, shared journeys, and continuing cultural impact in Nabadwip.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#3F51B5] uppercase">
              <span>View Milestone Post</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2: Bakultala Praktanee Assembly */}
          <div 
            onClick={() => onNavigate('about')}
            className="bg-[#F8D287] p-7 text-[#151B3C] border-t-4 border-[#2A3679] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2A3679] block">
                Community Ties • Aug 10
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#151B3C]">
                Nabadwip Bakultala Praktanee
              </h3>
              <p className="text-xs text-[#151B3C]/85 leading-relaxed">
                Deep-rooted student and alumni community connection honoring educational heritage in Nabadwip.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#2A3679] uppercase">
              <span>Read About Connection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3: Circular Atom Insignia */}
          <div 
            onClick={() => onNavigate('about')}
            className="bg-[#F8D287] p-7 text-[#151B3C] border-t-4 border-[#3F51B5] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3F51B5] block">
                  Visual Identity • Official Emblem
                </span>
                <SchoolCrest size={38} className="ring-2 ring-black" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#151B3C]">
                Official Atom Emblem
              </h3>
              <p className="text-xs text-[#151B3C]/85 leading-relaxed">
                Circular emblem featuring neon lime-green outer ring, glowing cyan atomic electron orbits, sharp calligraphic 'N', and futuristic stencil Nucleus wordmark.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#3F51B5] uppercase">
              <span>Explore Insignia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </section>

      {/* Verified Timeline of Public Observations */}
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-[#3F51B5] text-xs font-bold uppercase tracking-widest block mb-1">
                Public Activity Chronicle
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#151B3C]">
                Observed Public Posts & Milestones
              </h2>
            </div>

            <button
              onClick={() => onNavigate('activities')}
              className="text-xs font-bold uppercase tracking-wider text-[#3F51B5] hover:text-[#2A3679] flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>View Full Activity Stream</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_OBSERVATIONS.slice(0, 3).map((obs) => (
              <div 
                key={obs.id}
                className="bg-[#FCF3E1] border-2 border-[#3F51B5]/20 p-5 flex flex-col justify-between hover:border-[#3F51B5] transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#5F6360]">
                    <span className="font-bold text-[#3F51B5] flex items-center gap-1">
                      {obs.platform === 'Facebook' ? <Facebook className="w-3.5 h-3.5" /> : <Instagram className="w-3.5 h-3.5" />}
                      <span>{obs.platform}</span>
                    </span>
                    <span className="font-medium">{obs.dateOrTime}</span>
                  </div>

                  <h4 className="font-bold text-sm text-[#151B3C] leading-snug">
                    {obs.title}
                  </h4>

                  <p className="text-xs text-[#2A3679] leading-relaxed">
                    {obs.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F8D287] mt-4 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#5F6360] font-medium">
                    {obs.platform} Highlight
                  </span>

                  {obs.postUrl && (
                    <a
                      href={obs.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#3F51B5] font-bold hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Activities & Past Events Gallery Section */}
      <HomeGallerySection onNavigateActivities={() => onNavigate('activities')} />

      {/* The Authentic Social Hub */}
      <SocialHub />

      {/* Direct Contact Banner */}
      <section className="bg-[#151B3C] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center space-y-5">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Student Association & Cultural Outreach
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white max-w-2xl mx-auto">
            Get in Touch with Nucleus Association
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Whether you are a student in Nabadwip, an alumni member, or interested in local cultural initiatives, connect directly with our coordinators.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SCHOOL_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 text-xs font-bold flex items-center gap-2 transition-colors uppercase tracking-wider"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook Message</span>
            </a>

            <a
              href={SCHOOL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white px-5 py-2.5 text-xs font-bold flex items-center gap-2 transition-opacity hover:opacity-95 uppercase tracking-wider"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram Message</span>
            </a>

            <a
              href={SCHOOL_INFO.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 text-xs font-extrabold flex items-center gap-2 transition-colors uppercase tracking-wider shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Want to join? Contact WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
