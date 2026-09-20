import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  MessageCircle,
  Sparkles,
  Tag,
  ArrowRight
} from 'lucide-react';
import { ActivityGalleryItem } from '../types';
import { GALLERY_ACTIVITIES } from '../data/galleryData';
import { SCHOOL_INFO } from '../data/schoolData';

interface HomeGallerySectionProps {
  onNavigateActivities?: () => void;
}

export const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({ onNavigateActivities }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Milestones',
    'Cultural & Arts',
    'Community Initiatives'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ACTIVITIES
    : GALLERY_ACTIVITIES.filter(item => item.category === selectedCategory);

  const activeLightboxItem: ActivityGalleryItem | null = 
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleNextLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrevLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [activeLightboxIndex, filteredItems.length]);

  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleCloseLightbox, handleNextLightbox, handlePrevLightbox]);

  return (
    <section id="association-gallery" className="bg-[#FAF8F5] py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-[#151B3C]/10">
      <div className="max-w-[1200px] mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#151B3C]/10 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#3F51B5] text-xs font-bold uppercase tracking-widest">
              <Camera className="w-4 h-4" />
              <span>Past Association Activities • Photographic Archives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#151B3C]">
              Visual Gallery & Fellowships
            </h2>
            <p className="text-sm text-[#2A3679] leading-relaxed">
              A curated photographic retrospective showcasing past student assemblies, cultural sessions, youth photography, and community solidarity across Nabadwip over the years.
            </p>
          </div>

          {/* Quick WhatsApp Share Invite */}
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={SCHOOL_INFO.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contribute Photos on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? GALLERY_ACTIVITIES.length 
              : GALLERY_ACTIVITIES.filter(i => i.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#151B3C] text-[#F8D287] border-[#151B3C] shadow-xs'
                    : 'bg-white text-[#151B3C] border-gray-300 hover:border-[#3F51B5] hover:text-[#3F51B5]'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 text-[10px] font-semibold ${
                  isSelected ? 'bg-[#F8D287] text-[#151B3C]' : 'bg-gray-100 text-gray-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border-2 border-gray-200 hover:border-[#3F51B5] transition-all flex flex-col group overflow-hidden shadow-xs hover:shadow-md"
            >
              {/* Image Container with Click-to-Enlarge */}
              <div 
                onClick={() => setActiveLightboxIndex(index)}
                className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#151B3C]/90 text-[#F8D287] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-xs">
                  {item.category}
                </div>

                {/* Enlarge Hint Overlay */}
                <div className="absolute inset-0 bg-[#151B3C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                  <Maximize2 className="w-5 h-5 text-[#F8D287]" />
                  <span>Enlarge Photo</span>
                </div>

                {/* Date Tag */}
                <div className="absolute bottom-3 right-3 bg-white/95 text-[#151B3C] text-[10px] font-extrabold px-2 py-0.5 border border-gray-200">
                  {item.date}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#5F6360]">
                    <MapPin className="w-3.5 h-3.5 text-[#3F51B5] shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-extrabold text-base text-[#151B3C] group-hover:text-[#3F51B5] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-3 border-t border-gray-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] bg-[#FCF3E1] text-[#2A3679] font-medium px-2 py-0.5 border border-[#F8D287]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveLightboxIndex(index)}
                    className="text-xs font-bold uppercase tracking-wider text-[#3F51B5] hover:text-[#2A3679] flex items-center gap-1.5 pt-1"
                  >
                    <span>View Archival Photo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Association Note */}
        <div className="p-6 bg-[#FCF3E1] border-2 border-[#3F51B5]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#3F51B5] block">
              Continuous Community Documentation
            </span>
            <p className="text-xs sm:text-sm text-[#151B3C] font-semibold">
              Are you an alumnus or participant from earlier batches with historical pictures or video archives?
            </p>
            <p className="text-xs text-[#2A3679]">
              Reach our active coordination desk directly on WhatsApp to add historical milestones and photos to this archive.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SCHOOL_INFO.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>

            {onNavigateActivities && (
              <button
                onClick={onNavigateActivities}
                className="bg-[#3F51B5] hover:bg-[#2A3679] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Activity Timetable</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxItem && activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#151B3C]/95 flex items-center justify-center p-3 sm:p-6"
          onClick={handleCloseLightbox}
        >
          <div 
            className="relative w-full max-w-4xl bg-white border-4 border-[#F8D287] shadow-2xl flex flex-col max-h-[95vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#151B3C] text-white px-4 py-3 flex items-center justify-between border-b border-[#F8D287]">
              <div className="flex items-center gap-2">
                <span className="bg-[#F8D287] text-[#151B3C] text-[10px] font-extrabold uppercase px-2 py-0.5">
                  {activeLightboxItem.category}
                </span>
                <span className="text-xs text-white/80">
                  Image {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCloseLightbox}
                  className="p-1 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[58vh] overflow-hidden">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[58vh] object-contain"
              />

              {/* Prev / Next Floating Arrows */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={handlePrevLightbox}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white border border-white/30 transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextLightbox}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white border border-white/30 transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Meta Footer */}
            <div className="p-5 bg-white space-y-3 overflow-y-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#151B3C] uppercase tracking-tight">
                  {activeLightboxItem.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#5F6360] shrink-0">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#3F51B5]" />
                    {activeLightboxItem.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#3F51B5]" />
                    {activeLightboxItem.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {activeLightboxItem.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Tag className="w-3 h-3 text-[#3F51B5]" />
                  {activeLightboxItem.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] bg-[#FCF3E1] text-[#151B3C] font-semibold px-2 py-0.5 border border-[#F8D287]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={SCHOOL_INFO.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Discuss this activity on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
