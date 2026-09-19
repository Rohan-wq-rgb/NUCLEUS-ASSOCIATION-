import React, { useState } from 'react';
import { PageId, SchoolNotice, SchoolEvent } from './types';
import { INITIAL_NOTICES, INITIAL_EVENTS, SCHOOL_INFO } from './data/schoolData';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { NoticeDetailModal } from './components/NoticeDetailModal';
import { EventDetailModal } from './components/EventDetailModal';
import { ApplyModal } from './components/ApplyModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProgramsView } from './views/ProgramsView';
import { AdmissionsView } from './views/AdmissionsView';
import { StudentServicesView } from './views/StudentServicesView';
import { FacultyView } from './views/FacultyView';
import { NewsEventsView } from './views/NewsEventsView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [notices, setNotices] = useState<SchoolNotice[]>(INITIAL_NOTICES);
  const [events, setEvents] = useState<SchoolEvent[]>(INITIAL_EVENTS);

  // Modal interactions
  const [selectedNotice, setSelectedNotice] = useState<SchoolNotice | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCF3E1] text-[#151B3C] flex flex-col selection:bg-[#F8D287] selection:text-[#151B3C] font-sans">
      
      {/* Global Notification Toast */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 max-w-sm bg-[#151B3C] text-[#F8D287] border-l-4 border-[#3F51B5] text-xs px-4 py-3 shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span>{toastMessage}</span>
          </div>
          <button 
            onClick={() => setToastMessage(null)} 
            className="text-white/60 hover:text-white ml-2 text-sm"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Two-Part Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* Page Body Views */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            notices={notices}
            events={events}
            onSelectNotice={setSelectedNotice}
            onSelectEvent={setSelectedEvent}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {(currentPage === 'programs' || currentPage === 'community') && (
          <ProgramsView
            onNavigate={handleNavigate}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {currentPage === 'admissions' && (
          <AdmissionsView
            onNavigate={handleNavigate}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {currentPage === 'student-services' && (
          <StudentServicesView
            onNavigate={handleNavigate}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {currentPage === 'faculty-and-staff' && (
          <FacultyView
            onNavigate={handleNavigate}
          />
        )}

        {(currentPage === 'news-and-events' || currentPage === 'activities') && (
          <NewsEventsView
            notices={notices}
            events={events}
            onSelectNotice={setSelectedNotice}
            onSelectEvent={setSelectedEvent}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* Quick Inquiry / Desk Launcher */}
      <FloatingContactWidget />

      {/* Interactive Modals */}
      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
