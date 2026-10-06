export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-red-950 via-[#650909] to-black pt-28"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute right-10 top-20 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-red-400/20 bg-red-500/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.25em] text-red-300">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
            Football Live
          </div>

          {/* NUTMEG */}
          <div className="group relative w-fit">
            <div className="absolute -inset-8 -z-10 rounded-full bg-red-500/20 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

            <h1
              className="
                cursor-default
                text-7xl
                font-black
                uppercase
                leading-[0.85]
                tracking-[-0.07em]
                text-white
                transition-all
                duration-500
                group-hover:scale-[1.025]
                group-hover:tracking-[-0.045em]
                md:text-8xl
                lg:text-[9rem]
              "
            >
              NUTMEG
            </h1>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 md:text-xl">
            Every goal. Every fixture. Every league.
            <br />
            Follow football without missing the action.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#matches"
              className="rounded-full bg-red-600 px-8 py-4 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/30"
            >
              WATCH LIVE
            </a>

            <a
              href="#fixtures"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
            >
              VIEW FIXTURES
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-12">
            <div>
              <p className="text-4xl font-black">12+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                Leagues
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">120+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                Matches
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">24/7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                Updates
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FEATURED MATCH */}
        <div className="relative">

          {/* Decorative glow */}
          <div className="absolute -inset-5 rounded-[3rem] bg-red-600/10 blur-2xl" />

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-black/60
              p-6
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-red-500/40
              hover:shadow-red-950/40
            "
          >
            {/* Card top */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                  Featured Match
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  La Liga
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-2 text-xs font-black text-red-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                LIVE 72'
              </div>
            </div>

            {/* Match */}
            <div className="py-10">

              <div className="flex items-center justify-center gap-7">

                {/* Real Madrid */}
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 text-5xl transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105">
                    ⚪
                  </div>

                  <p className="mt-4 font-black">
                    Real Madrid
                  </p>
                </div>

                {/* Score */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-6xl font-black">
                      2
                    </span>

                    <span className="text-3xl font-bold text-gray-600">
                      -
                    </span>

                    <span className="text-6xl font-black">
                      1
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-red-500">
                    LIVE
                  </p>
                </div>

                {/* Barcelona */}
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 text-5xl transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105">
                    🔵
                  </div>

                  <p className="mt-4 font-black">
                    Barcelona
                  </p>
                </div>

              </div>
            </div>

            {/* Match stats */}
            <div className="grid grid-cols-3 gap-3">

              <div className="rounded-2xl bg-white/[0.04] p-4 text-center transition hover:bg-white/[0.08]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Possession
                </p>

                <p className="mt-2 text-xl font-black">
                  54%
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.04] p-4 text-center transition hover:bg-white/[0.08]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Shots
                </p>

                <p className="mt-2 text-xl font-black">
                  12
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.04] p-4 text-center transition hover:bg-white/[0.08]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Corners
                </p>

                <p className="mt-2 text-xl font-black">
                  6
                </p>
              </div>

            </div>

            {/* Bottom action */}
            <button className="mt-5 w-full rounded-full border border-white/10 py-3 text-xs font-black text-gray-400 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white">
              VIEW MATCH DETAILS →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}