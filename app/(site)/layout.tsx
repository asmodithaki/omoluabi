'use client';

import dynamic from 'next/dynamic';
import Topbar from '@/components/navigation/topbar/function';
import DesktopNavbar from '@/components/navigation/desktop-navigation/function';
import MobileNavbar from '@/components/navigation/mobile-navigation/function';
import Footer from '@/components/navigation/footer/function';
import ScrollToTop from '@/components/navigation/scroll-to-top/function';

// Dynamically import ActivityTracker to prevent SSR
const ActivityTracker = dynamic(() => import('@/lib/activity-tracking'), {
  ssr: false,
});

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Activity Tracker */}
      <ActivityTracker
        idleTimeout={300000} // 5 minutes
        onIdle={() => console.log('User is idle')}
        onActive={() => console.log('User is active')}
      />

      {/* Topbar */}
      <header>
        <Topbar />
      </header>

      {/* Navbar */}
      <nav>
        <DesktopNavbar />
        <MobileNavbar />
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Scroll-to-top button */}
      <div>
        <ScrollToTop />
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
