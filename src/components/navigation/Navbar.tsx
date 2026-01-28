"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const links = [
    { name: "Features", href: "#features", isInternal: true },
    { name: "Tools", href: "/tools", isInternal: false },
    { name: "Blog", href: "/blog", isInternal: false },
    { name: "About", href: "/about", isInternal: false }
  ];
  const [open, setOpen] = React.useState(false);

  const handleLinkClick = (link: typeof links[0]) => {
    if (link.isInternal) {
      document.getElementById(link.href.substring(1))?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
        <header 
      data-navbar
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white navbar-white py-4"
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        background: 'rgb(255, 255, 255)',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 bg-white" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <nav className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-0">
            <Link href="/" className="flex items-center gap-3">
              <svg
                width="25"
                height="25"
                viewBox="0 0 279 279"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.122574"
                  width="278.849"
                  height="278.849"
                  rx="50"
                  fill="#000000"
                />
                <path
                  d="M106.579 76.8025C114.629 60.8647 134.076 54.4705 150.013 62.5207C165.951 70.5709 172.345 90.0171 164.295 105.955L115.399 202.76C107.349 218.697 87.9029 225.092 71.9651 217.041C56.0272 208.991 49.633 189.545 57.6832 173.607L106.579 76.8025Z"
                  fill="white"
                />
                <circle cx="192.058" cy="185.693" r="39.0658" fill="white" />
              </svg>
              <span className="font-semibold text-2xl text-gray-900 tracking-tight ">arek</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              link.isInternal ? (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  document.getElementById('waitlist')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Join Waitlist
              </Button>
            </div>

            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md hover:bg-gray-100 text-gray-900"
              onClick={() => setOpen(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-opacity",
          open ? "pointer-events-auto" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        <aside
          className={cn(
            "fixed right-0 top-0 h-full w-[320px] bg-white shadow-2xl p-6 transition-transform duration-300 border-l border-gray-200 navbar-white",
            open ? "translate-x-0" : "translate-x-full"
          )}
          style={{ 
            backgroundColor: 'rgb(255, 255, 255)',
            background: 'rgb(255, 255, 255)'
          }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <svg
                width="25"
                height="25"
                viewBox="0 0 279 279"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.122574"
                  width="278.849"
                  height="278.849"
                  rx="50"
                  fill="#126DFB"
                />
                <path
                  d="M106.579 76.8025C114.629 60.8647 134.076 54.4705 150.013 62.5207C165.951 70.5709 172.345 90.0171 164.295 105.955L115.399 202.76C107.349 218.697 87.9029 225.092 71.9651 217.041C56.0272 208.991 49.633 189.545 57.6832 173.607L106.579 76.8025Z"
                  fill="white"
                />
                <circle cx="192.058" cy="185.693" r="39.0658" fill="white" />
              </svg>
              <span className="font-semibold text-gray-900">Reporto</span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-900"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {links.map((link) => (
              link.isInternal ? (
                <button
                  key={link.name}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => handleLinkClick(link), 100);
                  }}
                  className="text-base font-medium text-gray-900 hover:text-black text-left"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-gray-900 hover:text-black"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button variant="ghost" className="text-gray-900 hover:bg-gray-100">Book a demo</Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  document.getElementById('waitlist')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }, 100);
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
}
