export default function MatchCenter({
  matches,
  search,
  setSearch,
  favorites,
  toggleFavorite,
}) {
  return (
    <section id="matches" className="scroll-mt-24 py-16">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
              Live Center
            </p>
          </div>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Live Matches
          </h2>

          <p className="mt-2 text-gray-500">
            Follow today's biggest games in real time.
          </p>
        </div>

        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search team or league..."
            className="w-full rounded-full border border-white/10 bg-white/[0.05] px-5 py-3.5 text-sm outline-none transition placeholder:text-gray-600 focus:border-red-500 md:w-80"
          />
        </div>
      </div>

      {matches.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-16 text-center">
          <div className="text-5xl">🔎</div>
          <h3 className="mt-5 text-xl font-black">No matches found</h3>
          <p className="mt-2 text-gray-500">
            Try another team or league.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-2">
          {matches.map((match) => {
            const favorite = favorites.includes(match.id);

            return (
              <article
                key={match.id}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">
                      {match.league}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      {match.country}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleFavorite(match.id)}
                      className={`text-xl transition hover:scale-125 ${
                        favorite ? "text-yellow-400" : "text-gray-600"
                      }`}
                      title="Favourite"
                    >
                      ★
                    </button>

                    <span className="flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-black text-red-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                      {match.minute}'
                    </span>
                  </div>
                </div>

                <div className="my-9 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-3xl transition group-hover:bg-red-500/10">
                      ⚽
                    </div>
                    <p className="mt-3 font-black">{match.home}</p>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-black">
                      {match.homeScore}
                      <span className="mx-2 text-gray-600">:</span>
                      {match.awayScore}
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-red-500">
                      LIVE
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-3xl transition group-hover:bg-red-500/10">
                      ⚽
                    </div>
                    <p className="mt-3 font-black">{match.away}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 rounded-full bg-red-600 py-3 text-xs font-black transition hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/20">
                    VIEW MATCH
                  </button>

                  <button className="rounded-full border border-white/10 px-5 text-xs font-black text-gray-400 transition hover:border-white/30 hover:text-white">
                    DETAILS
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}