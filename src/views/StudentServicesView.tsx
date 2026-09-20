import React from 'react';
import { STUDENT_SERVICES, NUCLEUS_SOCIAL_DATA, SCHOOL_INFO } from '../data/schoolData';
import { PageId } from '../types';
import { 
  Users, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Facebook,
  Instagram,
  ExternalLink,
  Layers,
  HeartHandshake,
  MessageCircle
} from 'lucide-react';

interface StudentServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const StudentServicesView: React.FC<StudentServicesViewProps> = ({ onNavigate, onOpenApplyModal }) => {
  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Cultural Centre Facilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Student Community & Cultural Centre
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Operating as an open Cultural Centre in Nabadwip, providing collaborative spaces for student fellowship, alumni assemblies, and creative engagement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STUDENT_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white border-t-4 border-[#3F51B5] p-6 sm:p-8 shadow-xs space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#FCF3E1] border border-[#F8D287] text-[#3F51B5] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#3F51B5]" />
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#151B3C]">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2A3679] leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase text-[#5F6360] block tracking-wide">
                      Core Facets:
                    </span>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#151B3C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[#5F6360]">
                    Location: <strong>{service.timing}</strong>
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 text-[10px] uppercase">
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Community Callout */}
          <div className="bg-[#151B3C] text-white p-8 border-t-4 border-[#F8D287] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
                Public Digital Community
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase">
                Want to join with us? Connect with Organizers
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Join our official WhatsApp group for community conversations or follow our verified Facebook and Instagram handles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={SCHOOL_INFO.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 text-xs font-extrabold flex items-center gap-1.5 uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Join WhatsApp</span>
              </a>
              <a
                href={NUCLEUS_SOCIAL_DATA.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 uppercase transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href={NUCLEUS_SOCIAL_DATA.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 uppercase transition-opacity hover:opacity-95"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
