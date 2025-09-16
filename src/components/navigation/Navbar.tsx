"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const links = ["Features", "Pricing", "Integrations", "Resources"];
  const [open, setOpen] = React.useState(false);

  return (
    <header className="backdrop-blur-sm sticky top-0 z-40 bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
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
                  fill="#126DFB"
                />
                <path
                  d="M106.579 76.8025C114.629 60.8647 134.076 54.4705 150.013 62.5207C165.951 70.5709 172.345 90.0171 164.295 105.955L115.399 202.76C107.349 218.697 87.9029 225.092 71.9651 217.041C56.0272 208.991 49.633 189.545 57.6832 173.607L106.579 76.8025Z"
                  fill="white"
                />
                <circle cx="192.058" cy="185.693" r="39.0658" fill="white" />
              </svg>

              <span className="font-semibold text-2xl">arek</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md hover:bg-accent/10"
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

      {/* Mobile slide-over - Only rendered on mobile */}
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
            "fixed right-0 top-0 h-full w-[320px] bg-background shadow-2xl p-6 transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
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
              <span className="font-semibold">Reporto</span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-accent/10"
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
            {links.map((l) => (
              <Link
                key={l}
                href="#"
                onClick={() => setOpen(false)}
                className="text-base font-medium hover:text-primary"
              >
                {l}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button variant="ghost">Book a demo</Button>
            <Button variant="default">Get started</Button>
          </div>
        </aside>
      </div>
    </header>
  );
}
