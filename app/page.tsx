"use client";

import { navItems } from "@/data";
import { useEffect, useState } from "react";
import dynamicImport from "next/dynamic";

// Force dynamic rendering to prevent SSR issues
export const dynamic = 'force-dynamic';

// Dynamic imports to disable SSR for potentially problematic components
const Hero = dynamicImport(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamicImport(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamicImport(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamicImport(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamicImport(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamicImport(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamicImport(() => import("@/components/RecentProjects"), { ssr: false });
const FloatingNav = dynamicImport(() => import("@/components/ui/FloatingNavbar").then((mod) => ({ default: mod.FloatingNav })), { ssr: false });

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-white text-lg">Loading...</div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
