import React, { useState } from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA, VERIFIED_OBSERVATIONS } from '../data/schoolData';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Heart, 
  Camera, 
  Share2, 
  Clock, 
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';

interface ProgramsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [selectedTrack, setSelectedTrack] = useState<'All' | 'Cultural' | 'Fellowship' | 'Heritage'>('All');

  const tracks = [
    {
      id: 'fellowship',
      category: 'Fellowship',
      title: '#20yearslater Student & Alumni Fellowship',
      date: 'Observed Milestone: August 11',
      description: 'A landmark gathering of members celebrating twenty years of student companionship, mutual support, and collaborative community life in Nabadwip.',
      highlights: [
        'Commemorating two decades of student solidarity',
        'Bridging past student cohorts and current youth',
        'Community dialogue and shared experiences'
      ],
      platform: 'Facebook',
      link: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
    },
    {
      id: 'heritage',
      category: 'Heritage',
      title: 'Nabadwip Bakultala Praktanee Collaboration',
      date: 'Observed Activity: August 10',
      description: 'Strengthening ties with local educational and alumni networks in Nabadwip, honoring the long-standing scholarly traditions of the region.',
      highlights: [
        'Interactions with historical alumni associations',
        'Fostering youth appreciation for Nabadwip\'s cultural roots',
        'Inter-generational community support'
      ],
      platform: 'Facebook',
      link: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
    },
    {
      id: 'cultural',
      category: 'Cultural',
      title: 'Cultural Centre Gatherings & Assemblies',
      date: 'Schedule: Always Open',
      description: 'Regular cultural initiatives categorized under the Cultural Centre charter in Nabadwip, providing a platform for discussions, creative arts, and student fellowship.',
      highlights: [
        'Open platform for local students and youth',
        'Celebration of seasonal festivals and cultural occasions',
        'Always open community presence'
      ],
      platform: 'Facebook & Instagram',
      link: 'https://www.instagram.com/nucleus_association/'
    },
    {
      id: 'creative',
      category: 'Cultural',
      title: 'Media & Photography Showcases',
      date: 'Observed Activity: Sept 08',
      description: 'Visual chronicles highlighting the life, environment, and youthful spirit of Nabadwip, shared through official social media broadcasts.',
      highlights: [
        'Authentic photographic observations',
        'Direct engagement on Instagram (@nucleus_association)',
        'Creative expression by student members'
      ],
      platform: 'Instagram',
      link: 'https://www.instagram.com/p/DdBI9PHg8BQ/'
    }
  ];

  const filteredTracks = selectedTrack === 'All' 
    ? tracks 
    : tracks.filter(t => t.category === selectedTrack);

  return (
    <div className="w-full bg-[#FCF3E1]">
      
      {/* Banner */}
      <section className="bg-[#3F51B5] text-white py-12 sm:py-16 border-b-4 border-[#F8D287]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
            Association Initiatives & Programs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Cultural Programs & Fellowship
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Verified cultural initiatives, alumni assemblies, and community activities organized by Nucleus in Nabadwip.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-[76px] z-20 shadow-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto py-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold uppercase text-[#2A3679] mr-2">
              Filter By Theme:
            </span>
            {(['All', 'Cultural', 'Fellowship', 'Heritage'] as const).map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedTrack === track 
                    ? 'bg-[#3F51B5] text-white' 
                    : 'bg-[#FCF3E1] text-[#151B3C] hover:bg-[#F8D287]'
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenApplyModal}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#3F51B5] hover:text-[#2A3679] uppercase tracking-wider"
          >
            <span>Propose an Initiative</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Programs Cards Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTracks.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-[#3F51B5]/30 p-7 shadow-xs flex flex-col justify-between hover:border-[#3F51B5] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#5F6360]">
                    <span className="bg-[#FCF3E1] text-[#2A3679] px-2.5 py-0.5 font-bold uppercase text-[10px] border border-[#F8D287]">
                      {item.category}
                    </span>
                    <span className="font-semibold text-[#3F51B5] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#151B3C]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2A3679] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold uppercase text-[#5F6360] block tracking-wide">
                      Key Program Features:
                    </span>
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#151B3C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-[#5F6360] font-medium">
                    Platform: <strong>{item.platform}</strong>
                  </span>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3F51B5] hover:bg-[#2A3679] text-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Channel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Strip */}
          <div className="bg-[#151B3C] text-white p-8 border-t-4 border-[#F8D287] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#F8D287] text-xs font-bold uppercase tracking-widest block">
                Open to All Students in Nabadwip
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase">
                Want to collaborate on a cultural initiative?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Nucleus welcomes students, artists, and community members in Nabadwip to share ideas, propose collaborative sessions, and participate in assemblies.
              </p>
            </div>

            <a
              href={SCHOOL_INFO.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 font-extrabold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Want to join? WhatsApp Group</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
