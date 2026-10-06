import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-xl shadow-lg shadow-red-600/20">
            ⚽
          </div>

          <span className="text-2xl font-black tracking-tight">
            NUTMEG
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#matches" className="text-sm font-bold text-gray-300 transition hover:text-red-500">
            MATCHES
          </a>

          <a href="#fixtures" className="text-sm font-bold text-gray-300 transition hover:text-red-500">
            FIXTURES
          </a>

          <a href="#standings" className="text-sm font-bold text-gray-300 transition hover:text-red-500">
            STANDINGS
          </a>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-black text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            LIVE NOW
          </div>

          <button className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-gray-300 transition hover:border-red-500 hover:text-white">
            SIGN IN
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 px-3 py-2 md:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="#matches" onClick={() => setMenuOpen(false)}>
              MATCHES
            </a>
            <a href="#fixtures" onClick={() => setMenuOpen(false)}>
              FIXTURES
            </a>
            <a href="#standings" onClick={() => setMenuOpen(false)}>
              STANDINGS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}