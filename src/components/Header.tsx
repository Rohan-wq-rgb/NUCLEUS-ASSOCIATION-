import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, NUCLEUS_SOCIAL_DATA } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Clock
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenApplyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navItems = [
    { id: 'home' as PageId, label: 'Overview' },
    { 
      id: 'about' as PageId, 
      label: 'About Nucleus',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Student Association & Cultural Centre', desc: 'Identity & community mission in Nabadwip', page: 'about' as PageId },
        { label: 'Official Atom Insignia', desc: 'Symbolism of the circular Nucleus logo', page: 'about' as PageId },
        { label: '#20yearslater Milestone', desc: 'Two decades of fellowship & youth camaraderie', page: 'about' as PageId },
        { label: 'Nabadwip Heritage Connection', desc: 'Ties with Nabadwip Bakultala Praktanee', page: 'about' as PageId }
      ]
    },
    { 
      id: 'activities' as PageId, 
      label: 'Activities & Timeline',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Public Post Feed', desc: 'Chronological timeline of observed public posts', page: 'activities' as PageId },
        { label: '#20yearslater Assembly', desc: 'August milestone gathering', page: 'activities' as PageId },
        { label: 'Nabadwip Bakultala Praktanee', desc: 'Community & alumni assembly', page: 'activities' as PageId },
        { label: 'Instagram Photo Feature', desc: 'Creative photography showcase', page: 'activities' as PageId }
      ]
    },
    { 
      id: 'community' as PageId, 
      label: 'Community & Network',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Student Association Initiatives', desc: 'Cultural and student fellowship in Nabadwip', page: 'community' as PageId },
        { label: 'Alumni & Fellow Network', desc: 'Connecting past and present members', page: 'community' as PageId },
        { label: 'Submit Community Inquiry', desc: 'Connect directly with association coordinators', action: onOpenApplyModal }
      ]
    },
    { id: 'contact' as PageId, label: 'Connect & Socials' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-[#151B3C] text-[#F8D287] text-xs py-1.5 px-4 sm:px-8 border-b border-[#2A3679]/40 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs flex-wrap">
          <span className="font-semibold tracking-wide flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>A Student Association of Nabadwip</span>
          </span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="hidden md:inline text-white/80 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#F8D287]" />
            <span>Nabadwip, Nadia, West Bengal</span>
          </span>
          <span className="hidden lg:inline text-white/40">•</span>
          <span className="hidden lg:inline text-emerald-300 font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Always Open</span>
          </span>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 text-xs ml-auto flex-wrap">
          <a 
            href={SCHOOL_INFO.socials.facebook} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 text-white/90 hover:text-[#F8D287] transition-colors"
          >
            <span className="font-bold text-[#F8D287]">FB:</span>
            <span>Nucleus Nabadwip</span>
          </a>
          <span className="text-white/40">|</span>
          <a 
            href={SCHOOL_INFO.socials.instagram} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 text-white/90 hover:text-[#F8D287] transition-colors"
          >
            <span className="font-bold text-[#F8D287]">IG:</span>
            <span>@nucleus_association</span>
          </a>
        </div>
      </div>

      {/* Main Two-Part Horizontal Header */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Brand Panel: Cobalt Blue (#3F51B5) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="bg-[#3F51B5] text-white px-5 sm:px-8 py-3.5 lg:py-0 lg:w-[340px] xl:w-[390px] shrink-0 flex items-center justify-between lg:justify-start gap-4 cursor-pointer hover:bg-[#3949AB] transition-colors border-b lg:border-b-0 border-[#2A3679]"
        >
          <div className="flex items-center gap-3.5">
            <SchoolCrest size={52} variant="gold" />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg sm:text-xl leading-tight uppercase text-white drop-shadow-sm">
                NUCLEUS
              </span>
              <span className="font-bold tracking-widest text-xs sm:text-sm text-[#F8D287] uppercase leading-none mt-0.5">
                ASSOCIATION
              </span>
              <span className="text-[10px] text-white/80 font-medium tracking-wide mt-1 uppercase">
                STUDENT ASSOCIATION • NABADWIP
              </span>
            </div>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded bg-[#F8D287] text-[#151B3C] hover:bg-[#FBE8C2] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Panel: Pale Gold (#F8D287) */}
        <div 
          ref={dropdownRef}
          className="hidden lg:flex flex-1 bg-[#F8D287] text-[#151B3C] h-20 px-6 items-center justify-between border-l border-[#2A3679]/15"
        >
          {/* Main Desktop Navigation Items */}
          <nav className="flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || 
                (item.id === 'activities' && currentPage === 'news-and-events') ||
                (item.id === 'community' && (currentPage === 'programs' || currentPage === 'admissions' || currentPage === 'student-services' || currentPage === 'faculty-and-staff'));
              const isDropdownOpen = openDropdown === item.id;

              if (item.hasDropdown) {
                return (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : item.id)}
                      className={`px-3 py-2 text-xs xl:text-sm font-bold tracking-normal rounded transition-colors flex items-center gap-1 ${
                        isActive 
                          ? 'text-[#2A3679] bg-[#FCF3E1]' 
                          : 'text-[#151B3C] hover:text-[#2A3679] hover:bg-[#FCF3E1]/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-72 bg-white rounded-none shadow-xl border-t-4 border-[#3F51B5] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {item.dropdownItems?.map((subItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (subItem.action) {
                                subItem.action();
                                setOpenDropdown(null);
                              } else if (subItem.page) {
                                handleNavClick(subItem.page);
                              }
                            }}
                            className="w-full text-left px-4 py-2.5 hover:bg-[#FCF3E1] transition-colors group block border-b border-gray-100 last:border-0"
                          >
                            <div className="text-xs font-bold text-[#151B3C] group-hover:text-[#3F51B5] flex items-center justify-between">
                              <span>{subItem.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3F51B5]" />
                            </div>
                            <div className="text-[11px] text-[#5F6360] mt-0.5">{subItem.desc}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-bold tracking-normal rounded transition-colors ${
                    isActive 
                      ? 'text-[#2A3679] bg-[#FCF3E1] shadow-xs' 
                      : 'text-[#151B3C] hover:text-[#2A3679] hover:bg-[#FCF3E1]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button: Cobalt Blue on Pale Gold */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenApplyModal}
              className="bg-[#3F51B5] hover:bg-[#2A3679] text-white px-4 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F8D287]" />
              <span>Connect / Inquire</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8D287] border-t-2 border-[#3F51B5] px-4 py-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-[#2A3679]/15 pb-2">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left font-bold text-sm py-1.5 flex items-center justify-between ${
                    currentPage === item.id ? 'text-[#3F51B5]' : 'text-[#151B3C]'
                  }`}
                >
                  <span>{item.label}</span>
                  {currentPage === item.id && (
                    <span className="text-[10px] bg-[#3F51B5] text-white px-2 py-0.5 font-bold uppercase">Active</span>
                  )}
                </button>

                {item.hasDropdown && (
                  <div className="pl-3 mt-1 space-y-1 bg-[#FCF3E1]/70 p-2 rounded">
                    {item.dropdownItems?.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => {
                          if (sub.action) {
                            sub.action();
                            setMobileMenuOpen(false);
                          } else if (sub.page) {
                            handleNavClick(sub.page);
                          }
                        }}
                        className="w-full text-left text-xs font-semibold text-[#2A3679] py-1 block hover:text-[#3F51B5]"
                      >
                        • {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full bg-[#3F51B5] hover:bg-[#2A3679] text-white font-bold py-3 text-center uppercase tracking-wider text-xs shadow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F8D287]" />
                <span>Submit Association Inquiry</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
