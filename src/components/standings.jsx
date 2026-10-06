export default function Standings({ teams }) {
  return (
    <section id="standings" className="scroll-mt-24 py-16">
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
          La Liga
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">
              League Standings
            </h2>

            <p className="mt-2 text-gray-500">
              Current league position and performance.
            </p>
          </div>

          <button className="w-fit rounded-full border border-white/10 px-5 py-2.5 text-xs font-black transition hover:border-red-500 hover:text-red-400">
            LA LIGA ▾
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <div className="hidden grid-cols-[55px_1fr_70px_70px_70px_70px_80px] gap-3 border-b border-white/10 bg-white/[0.03] px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-600 md:grid">
          <span>#</span>
          <span>Team</span>
          <span>PL</span>
          <span>W</span>
          <span>D</span>
          <span>L</span>
          <span>PTS</span>
        </div>
// broski 
        {teams.map((team,) => (
          <div
            key={team.position}
            className="grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-white/5 px-5 py-5 transition last:border-0 hover:bg-white/[0.04] md:grid-cols-[55px_1fr_70px_70px_70px_70px_80px] md:px-6"
          >
            <span className="font-black text-gray-500">
              {String(team.position).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm">
                ⚽
              </div>

              <div>
                <p className="font-black">{team.team}</p>
                <p className="text-xs text-gray-600 md:hidden">
                  {team.won}W · {team.drawn}D · {team.lost}L
                </p>
              </div>
            </div>

            <span className="hidden text-sm text-gray-400 md:block">
              {team.played}
            </span>

            <span className="hidden text-sm text-gray-400 md:block">
              {team.won}
            </span>

            <span className="hidden text-sm text-gray-400 md:block">
              {team.drawn}
            </span>

            <span className="hidden text-sm text-gray-400 md:block">
              {team.lost}
            </span>

            <span className="font-black text-red-400">
              {team.points}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}