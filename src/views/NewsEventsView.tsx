import React, { useState } from 'react';
import { SchoolNotice, SchoolEvent, PageId, SocialPostObservation } from '../types';
import { VERIFIED_OBSERVATIONS, SCHOOL_INFO } from '../data/schoolData';
import { SocialHub } from '../components/SocialHub';
import { 
  FileText, 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  ExternalLink,
  Heart,
  MessageCircle,
  Facebook,
  Instagram,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface NewsEventsViewProps {
  notices: SchoolNotice[];
  events: SchoolEvent[];
  onSelectNotice: (notice: SchoolNotice) => void;
  onSelectEvent: (event: SchoolEvent) => void;
  onNavigate: (page: PageId) => void;
}

export const NewsEventsView: React.FC<NewsEventsViewProps> = ({
  notices,
  events,
  onSelectNotice,
  onSelectEvent,
  onNavigate
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<'All' | 'Facebook' | 'Instagram'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Community', 'Cultural', 'Milestone', 'Branding'];

  const filteredPosts = VERIFIED_OBSERVATIONS.filter((obs) => {
    const matchesPlatform = selectedPlatform === 'All' || obs.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'All' || obs.category === selectedCategory;
    const matchesSearch = 
      obs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (obs.text && obs.text.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPlatform && matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Public Activities & Observations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Activities, Milestones & Social Feed
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Chronological record of verified public activities, posts, and community assemblies from Nucleus Nabadwip and @nucleus_association.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-[76px] z-20 shadow-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Platform Toggles */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setSelectedPlatform('All')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                selectedPlatform === 'All'
                  ? 'bg-[#3F51B5] text-white'
                  : 'bg-[#FCF3E1] text-[#151B3C] hover:bg-[#F8D287]'
              }`}
            >
              All Activities
            </button>

            <button
              onClick={() => setSelectedPlatform('Facebook')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
                selectedPlatform === 'Facebook'
                  ? 'bg-[#1877F2] text-white'
                  : 'bg-[#FCF3E1] text-[#151B3C] hover:bg-[#F8D287]'
              }`}
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </button>

            <button
              onClick={() => setSelectedPlatform('Instagram')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
                selectedPlatform === 'Instagram'
                  ? 'bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white'
                  : 'bg-[#FCF3E1] text-[#151B3C] hover:bg-[#F8D287]'
              }`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#5F6360] absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search posts or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FCF3E1]/50 border border-gray-300 pl-9 pr-3 py-1.5 text-xs text-[#151B3C] focus:outline-none focus:border-[#3F51B5]"
            />
          </div>

        </div>
      </section>

      {/* Main Activity Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto space-y-8">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase text-[#5F6360] mr-2">Filter Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-none transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#2A3679] text-white'
                  : 'bg-white border border-gray-300 text-[#151B3C] hover:bg-[#F8D287]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border-2 border-[#3F51B5]/30 p-6 shadow-xs flex flex-col justify-between hover:border-[#3F51B5] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#5F6360]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#3F51B5] flex items-center gap-1">
                      {post.platform === 'Facebook' ? (
                        <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                      ) : (
                        <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                      )}
                      <span>{post.platform}</span>
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="bg-[#FCF3E1] text-[#2A3679] px-2 py-0.5 text-[10px] font-bold uppercase">
                      {post.category}
                    </span>
                  </div>

                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#3F51B5]" />
                    <span>{post.dateOrTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#151B3C] leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2A3679] leading-relaxed">
                  {post.text || post.event}
                </p>

                <div className="text-[11px] text-[#5F6360] flex items-center gap-2 pt-1">
                  <span className="font-medium text-[#3F51B5]">Type:</span>
                  <span>{post.type}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-4 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#5F6360] font-medium">
                  {post.platform} Community Post
                </span>

                {post.postUrl ? (
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3F51B5] hover:bg-[#2A3679] text-white px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 uppercase tracking-wide transition-colors"
                  >
                    <span>View Public Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-[#5F6360] italic">
                    Association entry
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="bg-white p-8 text-center border border-gray-300 space-y-2">
            <p className="text-sm font-bold text-[#151B3C]">No activities matched your search criteria.</p>
            <button
              onClick={() => {
                setSelectedPlatform('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-[#3F51B5] font-bold underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </section>

      {/* Social Hub */}
      <SocialHub />

    </div>
  );
};
