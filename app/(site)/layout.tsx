'use client';

import Topbar from '@/components/navigation/topbar/function';
import DesktopNavbar from '@/components/navigation/desktop-navigation/function';
import MobileNavbar from '@/components/navigation/mobile-navigation/function';
import Footer from '@/components/navigation/footer/function';
import ThemeProvider from '@/components/theme-provider/function';

import ScrollToTop from '@/components/navigation/scroll-to-top/function';
import ActivityTracker from '@/lib/activity-tracking';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ThemeProvider>
        {/* Activity Tracker */}
        <ActivityTracker
          idleTimeout={300000} // 5 minutes
          onIdle={() => console.log('User is idle.')}
          onActive={() => console.log('User is active.')}
        />

        {/* Topbar */}
        <Topbar />

        {/* Conditional Navbar */}
        <div className="hidden md:block">
          <DesktopNavbar />
        </div>
        <div className="block md:hidden">
          <MobileNavbar />
        </div>

        {/* Main Content */}
        <main>{children}</main>

        {/* Scroll-to-top button */}
        <ScrollToTop />

        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}
