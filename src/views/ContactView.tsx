import React, { useState } from 'react';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { PageId } from '../types';
import { 
  MapPin, 
  Clock, 
  ExternalLink,
  Facebook,
  Instagram,
  Sparkles,
  Users,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = SCHOOL_INFO.whatsappGroup;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Official Touchpoints
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Connect with Nucleus Association
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Want to join with us? Contact and connect with our coordinators and student community through our official WhatsApp group and verified social channels.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Organization Details & Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 border-t-4 border-[#3F51B5] shadow-xs space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wide text-[#151B3C] pb-2 border-b border-gray-100">
                  Verified Organization Details
                </h3>

                <div className="space-y-4 text-xs text-[#2A3679]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#3F51B5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151B3C]">Geographic Location:</strong>
                      <span>{NUCLEUS_SOCIAL_DATA.geographicAssociation}</span>
                      <span className="block text-[11px] text-[#5F6360]">Nadia, West Bengal, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151B3C]">Operating Schedule:</strong>
                      <span className="text-emerald-700 font-bold">{NUCLEUS_SOCIAL_DATA.facebook.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#3F51B5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151B3C]">Primary Classification:</strong>
                      <span>Cultural Centre • Student Association of Nabadwip</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FCF3E1] border border-[#F8D287] text-[11px] text-[#151B3C] space-y-1">
                  <span className="font-bold block text-[#2A3679]">Community Guidelines</span>
                  <p>
                    Nucleus communicates directly through our official WhatsApp group and verified public social media channels.
                  </p>
                </div>
              </div>

              {/* Direct Social Media Gateways */}
              <div className="bg-white p-6 border-t-4 border-[#F8D287] shadow-xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#151B3C]">
                  Official Social Channels
                </h4>

                <div className="space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 flex items-center justify-between transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <div>
                        <span className="font-bold block text-xs">WhatsApp: Nucleus Group</span>
                        <span className="text-[11px] text-white/90">Click to join group chat</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={NUCLEUS_SOCIAL_DATA.facebook.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white p-3 flex items-center justify-between transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Facebook className="w-5 h-5" />
                      <div>
                        <span className="font-bold block text-xs">Facebook: Nucleus Nabadwip</span>
                        <span className="text-[11px] text-white/80">Cultural Centre • Nabadwip</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={NUCLEUS_SOCIAL_DATA.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-3 flex items-center justify-between transition-opacity hover:opacity-95 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-5 h-5" />
                      <div>
                        <span className="font-bold block text-xs">Instagram: @nucleus_association</span>
                        <span className="text-[11px] text-white/80">"A Student Association of Nabadwip"</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Want to join with us? WhatsApp Group */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 border-t-4 border-[#25D366] shadow-xs space-y-6">
                
                <div className="space-y-2 pb-4 border-b border-gray-100">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Official Member & Student Community</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#151B3C]">
                    Want to join with us? Contact this WhatsApp group
                  </h3>
                  <p className="text-sm text-[#2A3679] leading-relaxed">
                    Connect directly with students, alumni, and coordinators of Nucleus in Nabadwip through our official WhatsApp group chat.
                  </p>
                </div>

                {/* WhatsApp Group Primary Feature Box */}
                <div className="bg-[#FCF3E1] border-2 border-[#25D366]/40 p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                      <MessageCircle className="w-8 h-8 fill-current" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-lg text-[#151B3C]">
                        Nucleus Association WhatsApp Group
                      </h4>
                      <p className="text-xs text-[#5F6360]">
                        Official group link for student fellowship, event notices, cultural gatherings, and direct member coordination.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-6 py-3.5 uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Join WhatsApp Group</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>

                    <button
                      onClick={handleCopyLink}
                      className="bg-white hover:bg-gray-50 border border-gray-300 text-[#151B3C] font-bold px-5 py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700">Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#3F51B5]" />
                          <span>Copy Group Link</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Direct Link URL Display */}
                  <div className="p-3 bg-white border border-gray-200 text-xs break-all select-all font-mono text-[#2A3679]">
                    <span className="text-[#5F6360] font-sans font-semibold block text-[11px] mb-0.5">
                      Direct WhatsApp Invitation Link:
                    </span>
                    {whatsappUrl}
                  </div>
                </div>

                {/* Who can join / Community Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-sm uppercase tracking-wide text-[#151B3C]">
                    Who Can Join?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2A3679]">
                    <div className="bg-[#FCF3E1]/60 p-3 border-l-3 border-[#3F51B5] space-y-1">
                      <strong className="block text-[#151B3C]">Current Students in Nabadwip</strong>
                      <span>Connect for cultural programs, discussions, and creative showcases.</span>
                    </div>
                    <div className="bg-[#FCF3E1]/60 p-3 border-l-3 border-[#F8D287] space-y-1">
                      <strong className="block text-[#151B3C]">Alumni & Fellowship Members</strong>
                      <span>Stay in touch with the #20yearslater fellowship and Bakultala Praktanee assemblies.</span>
                    </div>
                    <div className="bg-[#FCF3E1]/60 p-3 border-l-3 border-[#25D366] space-y-1">
                      <strong className="block text-[#151B3C]">Creative Youth & Volunteers</strong>
                      <span>Participate in photography, literary, and social welfare drives.</span>
                    </div>
                    <div className="bg-[#FCF3E1]/60 p-3 border-l-3 border-[#151B3C] space-y-1">
                      <strong className="block text-[#151B3C]">Community Supporters</strong>
                      <span>Support educational and cultural enrichment across Nabadwip and Nadia.</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#3F51B5] text-white flex items-center justify-between gap-4 flex-wrap">
                  <div className="space-y-0.5">
                    <span className="font-bold text-xs uppercase tracking-wider text-[#F8D287] block">
                      Ready to get involved?
                    </span>
                    <p className="text-xs text-white/90">
                      Tap the WhatsApp button above to join and introduce yourself to the group.
                    </p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#F8D287] hover:bg-[#FBE8C2] text-[#151B3C] px-4 py-2 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <span>Open in WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
