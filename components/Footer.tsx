"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white pt-24 pb-10 px-6 lg:px-12 border-t border-white/5">
      <div className="container mx-auto max-w-[1500px]">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-16 mb-20">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black tracking-tight text-dentalGold">
              AMBRIDGE
            </h2>
            <p className="text-xs tracking-[0.35em] uppercase text-white/40 -mt-1 mb-6">
              Ceramics Laboratory
            </p>

            <p className="text-sm text-white/50 leading-relaxed">
              A digital-first dental laboratory focused on precision restorations,
              clinical partnerships, and long-term aesthetic excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/crown-bridge" className="hover:text-dentalGold">Crown & Bridge</Link></li>
              <li><Link href="/services/aligners" className="hover:text-dentalGold">AC Aligners</Link></li>
              <li><Link href="/services/implants" className="hover:text-dentalGold">Implant Guides</Link></li>
              <li><Link href="/services/whitening" className="hover:text-dentalGold">Whitening Trays</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-dentalGold">About Us</Link></li>
              <li><Link href="/team" className="hover:text-dentalGold">Meet the Team</Link></li>
              <li><Link href="/gallery" className="hover:text-dentalGold">Case Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-dentalGold">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>01765 607347</li>
              <li>info@ambridgeceramics.co.uk</li>
              <li>United Kingdom</li>
            </ul>

            <button className="mt-6 px-6 py-3 bg-dentalGold text-black text-xs font-bold tracking-widest uppercase hover:opacity-90 transition">
              Request Quote
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <span>© {new Date().getFullYear()} Ambridge Ceramics Laboratory</span>
          <span className="mt-2 md:mt-0">Precision • Reliability • Partnership</span>
        </div>

      </div>
    </footer>
  );
}
