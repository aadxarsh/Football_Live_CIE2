export default function Fixtures({ matches }) {
  return (
    <section id="fixtures" className="scroll-mt-24 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
            Schedule
          </p>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Upcoming Fixtures
          </h2>
        </div>

        <button className="hidden rounded-full border border-white/10 px-5 py-2.5 text-xs font-black text-gray-400 transition hover:border-red-500 hover:text-white sm:block">
          VIEW ALL →
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {matches.map((match) => (
          <article
            key={match.id}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-black text-red-400">
                {match.date}
              </span>

              <span className="text-xs font-bold text-gray-600">
                {match.league}
              </span>
            </div>

            <div className="py-8 text-center">
              <p className="text-lg font-black">{match.home}</p>

              <div className="my-4 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-white/10" />
                <span className="text-xs font-bold text-gray-600">
                  VS
                </span>
                <div className="h-px w-10 bg-white/10" />
              </div>

              <p className="text-lg font-black">{match.away}</p>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span className="text-xs text-gray-500">
                Kick-off
              </span>

              <span className="font-black">{match.time}</span>
            </div>

            <button className="mt-4 w-full rounded-full border border-white/10 py-3 text-xs font-black text-gray-400 transition hover:bg-white hover:text-black">
              MATCH DETAILS
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}