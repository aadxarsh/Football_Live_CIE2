export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-xl">
                ⚽
              </div>

              <span className="text-2xl font-black">
                NUTMEG
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Your football companion for live scores, fixtures,
              standings and everything happening on match day.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-widest text-gray-400">
              Explore
            </p>

            <div className="space-y-3 text-sm text-gray-500">
              <a href="#matches" className="block transition hover:text-red-500">
                Live Matches
              </a>

              <a href="#fixtures" className="block transition hover:text-red-500">
                Fixtures
              </a>

              <a href="#standings" className="block transition hover:text-red-500">
                Standings
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-widest text-gray-400">
              Leagues
            </p>

            <div className="space-y-3 text-sm text-gray-500">
              <p>Premier League</p>
              <p>La Liga</p>
              <p>Bundesliga</p>
              <p>Serie A</p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-widest text-gray-400">
              NUTMEG
            </p>

            <p className="text-sm leading-6 text-gray-500">
              Built for football fans who don't want to miss
              the action.
            </p>

            <div className="mt-5 flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-red-500 hover:bg-red-600">
                X
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-red-500 hover:bg-red-600">
                IG
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-red-500 hover:bg-red-600">
                GH
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row">
          <p>© 2026 NUTMEG. All rights reserved.</p>
          <p>Football • Live • Everywhere</p>
        </div>
      </div>
    </footer>
  );
}