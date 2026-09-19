import React from 'react';
import { NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { 
  Facebook, 
  Instagram, 
  ExternalLink, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  MessageCircle, 
  Sparkles, 
  CheckCircle,
  Share2,
  Calendar
} from 'lucide-react';

export const SocialHub: React.FC = () => {
  const fb = NUCLEUS_SOCIAL_DATA.facebook;
  const ig = NUCLEUS_SOCIAL_DATA.instagram;

  return (
    <section className="bg-white border-t-4 border-[#3F51B5] shadow-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FCF3E1] text-[#2A3679] border border-[#F8D287] px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#3F51B5]" />
              <span>Official Social Media Channels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#151B3C]">
              Nucleus Association Community Stream
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6360] mt-1 max-w-2xl">
              {NUCLEUS_SOCIAL_DATA.organizationDescription} Connect directly with our activities and student initiatives in Nabadwip.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#2A3679] bg-[#FCF3E1] px-3 py-1.5 border border-[#F8D287] self-start md:self-auto">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Official Community Channels</span>
          </div>
        </div>

        {/* 2-Column Grid: Facebook & Instagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Facebook Card */}
          <div className="bg-[#FCF3E1]/40 border-2 border-[#3F51B5]/30 overflow-hidden flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="bg-[#2A3679] text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#3F51B5] rounded-none flex items-center justify-center text-white border border-[#F8D287]">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base uppercase tracking-tight text-white flex items-center gap-1.5">
                      <span>{fb.displayName}</span>
                      <span className="text-[10px] bg-[#F8D287] text-[#151B3C] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                        {fb.categoryOrBio}
                      </span>
                    </h3>
                    <p className="text-xs text-white/80">Facebook Community Page</p>
                  </div>
                </div>

                <a
                  href={fb.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#3F51B5] hover:bg-[#F8D287] hover:text-[#151B3C] text-white text-xs font-bold px-3 py-1.5 transition-colors flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Visit Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Core Details */}
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white p-3 border border-gray-200 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[#5F6360] text-[11px] block">Entity</span>
                    <strong className="text-[#151B3C] text-xs font-bold">Student Association</strong>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#5F6360] text-[11px] block">Category</span>
                    <strong className="text-[#151B3C] text-xs font-bold">{fb.categoryOrBio}</strong>
                  </div>
                  <div className="space-y-0.5 col-span-2 sm:col-span-1">
                    <span className="text-[#5F6360] text-[11px] block">Schedule</span>
                    <strong className="text-[#151B3C] text-xs font-bold">{fb.hours}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#2A3679]">
                  <MapPin className="w-4 h-4 text-[#3F51B5] shrink-0" />
                  <span>{fb.location}</span>
                </div>

                {/* Public Activities */}
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-[#2A3679]">
                    Recent Activities & Highlights
                  </h4>

                  <div className="space-y-2.5">
                    {fb.posts.map((post) => (
                      <div 
                        key={post.id} 
                        className="bg-white p-3 border border-gray-200 text-xs space-y-1 hover:border-[#3F51B5] transition-colors"
                      >
                        <div className="flex items-center justify-between text-[11px] text-[#5F6360]">
                          <span className="font-semibold text-[#3F51B5]">{post.type}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#3F51B5]" />
                            {post.dateOrTime}
                          </span>
                        </div>

                        <p className="text-[#151B3C] font-medium leading-relaxed">
                          {post.text || post.event}
                        </p>

                        <div className="flex items-center justify-end pt-1 text-[11px]">
                          {post.postUrl && (
                            <a
                              href={post.postUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#3F51B5] hover:text-[#2A3679] font-bold hover:underline flex items-center gap-1"
                            >
                              <span>View on Facebook</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Facebook Card Footer */}
            <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between text-xs">
              <span className="text-[#5F6360] text-[11px]">
                Official Facebook Page of Nucleus Nabadwip
              </span>
              <a
                href={fb.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#3F51B5] hover:underline font-bold flex items-center gap-1"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Open Profile</span>
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-[#FCF3E1]/40 border-2 border-[#3F51B5]/30 overflow-hidden flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="bg-[#2A3679] text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#3F51B5] rounded-none flex items-center justify-center text-white border border-[#F8D287]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base uppercase tracking-tight text-white flex items-center gap-1.5">
                      <span>{ig.displayName}</span>
                      <span className="text-xs text-[#F8D287] font-semibold">
                        {ig.usernameOrHandle}
                      </span>
                    </h3>
                    <p className="text-xs text-white/80">{ig.categoryOrBio}</p>
                  </div>
                </div>

                <a
                  href={ig.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#3F51B5] hover:bg-[#F8D287] hover:text-[#151B3C] text-white text-xs font-bold px-3 py-1.5 transition-colors flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Core Details */}
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 bg-white p-3 border border-gray-200 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[#5F6360] text-[11px] block">Handle</span>
                    <strong className="text-[#151B3C] text-xs font-bold">{ig.usernameOrHandle}</strong>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#5F6360] text-[11px] block">Location</span>
                    <strong className="text-[#151B3C] text-xs font-bold">{ig.location}</strong>
                  </div>
                </div>

                <div className="bg-white p-3.5 border border-gray-200 space-y-1">
                  <span className="text-[#5F6360] text-[11px] font-bold uppercase tracking-wider block">Bio</span>
                  <p className="text-xs font-medium text-[#151B3C]">
                    "{ig.categoryOrBio}"
                  </p>
                  <p className="text-[11px] text-[#2A3679] pt-1">
                    Region: {NUCLEUS_SOCIAL_DATA.geographicAssociation}
                  </p>
                </div>

                {/* Instagram Activities */}
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-[#2A3679]">
                    Public Posts & Media
                  </h4>

                  <div className="space-y-2.5">
                    {ig.posts.map((post) => (
                      <div 
                        key={post.id} 
                        className="bg-white p-3 border border-gray-200 text-xs space-y-2 hover:border-[#3F51B5] transition-colors"
                      >
                        <div className="flex items-center justify-between text-[11px] text-[#5F6360]">
                          <span className="font-semibold text-[#3F51B5]">{post.type}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#3F51B5]" />
                            {post.dateOrTime}
                          </span>
                        </div>

                        <p className="text-[#151B3C] font-medium leading-relaxed">
                          {post.text}
                        </p>

                        <div className="flex items-center justify-end pt-1 border-t border-gray-100 text-[11px]">
                          {post.postUrl && (
                            <a
                              href={post.postUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#3F51B5] hover:text-[#2A3679] font-bold hover:underline flex items-center gap-1"
                            >
                              <span>View on Instagram</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Card Footer */}
            <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between text-xs">
              <span className="text-[#5F6360] text-[11px]">
                Official Instagram Profile of Nucleus Association
              </span>
              <a
                href={ig.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#3F51B5] hover:underline font-bold flex items-center gap-1"
              >
                <span>@nucleus_association</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
