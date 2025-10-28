'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/services', label: 'SERVICES' },
    { href: '/news', label: 'NEWS' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-xl border-b border-cyber-700/50 shadow-premium'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Premium Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent opacity-50"></div>

      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Premium Logo */}
          <Link href="/" className="group relative">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-500 to-neon-purple rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute inset-0.5 bg-dark-bg rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-cyber-500 font-bold text-sm -rotate-45 group-hover:-rotate-90 transition-transform duration-500">P</span>
                </div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold premium-text group-hover:animate-glow transition-all">
                  PEACH
                </span>
                <span className="text-[10px] tracking-[0.2em] text-cyber-600 uppercase">
                  Corporation
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-semibold tracking-widest text-cyber-300 hover:text-cyber-500 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}

                {/* Hover Effect */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-500 to-neon-purple group-hover:w-full transition-all duration-300 shadow-neon-blue"></span>

                {/* Corner Accent */}
                <span className="absolute -top-1 -right-1 w-1 h-1 bg-cyber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative px-6 py-2.5 bg-gradient-to-r from-cyber-500 to-cyber-600 text-dark-bg font-bold text-sm tracking-widest overflow-hidden group rounded-md"
            >
              <span className="relative z-10">GET IN TOUCH</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-400 to-cyber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-cyber-500 hover:text-cyber-300 transition-colors"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6 border-t border-cyber-700/30 pt-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-semibold tracking-widest text-cyber-300 hover:text-cyber-500 transition-all duration-300 py-2 px-4 hover:bg-dark-surface rounded-lg"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: isMenuOpen ? 'slide-up 0.3s ease-out forwards' : 'none',
                  animationDelay: `${index * 50}ms`,
                  opacity: 0,
                }}
              >
                <span className="flex items-center justify-between">
                  {link.label}
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="cyber-button text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </nav>

      {/* Animated particle effects */}
      {!isMenuOpen && (
        <>
          <div className="absolute top-0 right-20 w-1 h-1 bg-cyber-500 rounded-full animate-pulse-neon"></div>
          <div className="absolute top-2 right-40 w-0.5 h-0.5 bg-neon-purple rounded-full animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
        </>
      )}
    </header>
  );
}
