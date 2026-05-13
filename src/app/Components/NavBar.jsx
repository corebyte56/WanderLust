"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Drawer } from "@heroui/react";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Destinations", label: "Destinations" },
    { href: "/MyBookings", label: "My Bookings" },
    { href: "/Admin", label: "Admin" },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-6">

            {/* Hamburger + Drawer - mobile only */}
            <div className="md:hidden">
              <Drawer>
                <Button variant="secondary" className="bg-transparent border-0 shadow-none p-0 min-w-0">
                  <div className="flex flex-col gap-1.5 cursor-pointer">
                    <span className="w-6 h-0.5 bg-gray-700 block"></span>
                    <span className="w-6 h-0.5 bg-gray-700 block"></span>
                    <span className="w-6 h-0.5 bg-gray-700 block"></span>
                  </div>
                </Button>

                <Drawer.Backdrop>
                  <Drawer.Content placement="left">
                    <Drawer.Dialog>
                      <Drawer.Header>
                        <Drawer.Heading>
                          <span className="text-2xl font-bold text-cyan-500">Wanderlast</span>
                        </Drawer.Heading>
                      </Drawer.Header>

                      <Drawer.Body>
                        <div className="flex flex-col pt-2">
                          {navLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="py-3 text-gray-700 hover:text-cyan-500 transition border-b border-gray-100 no-underline"
                            >
                              {link.label}
                            </Link>
                          ))}

                          <div className="flex flex-col gap-4 mt-6">
                            <Link href="/profile" className="text-gray-700 hover:text-cyan-500 no-underline">
                              👤 Profile
                            </Link>
                            <Link href="/login" className="text-gray-700 hover:text-cyan-500 no-underline">
                              Login
                            </Link>
                            <Link href="/signup" className="bg-cyan-500 hover:bg-cyan-600 text-white text-center py-3 rounded-lg no-underline font-medium transition">
                              Sign Up
                            </Link>
                          </div>
                        </div>
                      </Drawer.Body>

                      <Drawer.Footer>
                        <Button slot="close" variant="secondary" className="w-full">
                          Close
                        </Button>
                      </Drawer.Footer>
                    </Drawer.Dialog>
                  </Drawer.Content>
                </Drawer.Backdrop>
              </Drawer>
            </div>

            {/* Nav Links - desktop only */}
            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-cyan-500 transition font-medium no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="no-underline">
              <span className="text-2xl font-bold text-cyan-500">Wanderlast</span>
            </Link>
          </div>

          {/* Right - desktop only */}
          <div className="hidden md:flex gap-5 items-center">
            <Link href="/profile" className="flex items-center gap-1 text-gray-700 hover:text-cyan-500 transition no-underline text-sm">
              👤 Profile
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-cyan-500 transition no-underline text-sm">
              Login
            </Link>
            <Link href="/signup" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md no-underline text-sm font-medium transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile spacer */}
          <div className="w-6 md:hidden"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;