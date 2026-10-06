import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MatchCenter from "./components/matchcenter";
import Standings from "./components/standings";
import Fixtures from "./components/fixtures";
import Footer from "./components/footer";

const API_URL = "http://localhost:5000/api";

export default function App() {
  // ==========================================
  // STATE
  // ==========================================

  const [matches, setMatches] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [standings, setStandings] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("All");

  const [favorites, setFavorites] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // GET DATA FROM EXPRESS BACKEND
  // ==========================================

  useEffect(() => {
    async function fetchFootballData() {
      try {
        setLoading(true);

        const [matchesResponse, fixturesResponse, standingsResponse] =
          await Promise.all([
            axios.get(`${API_URL}/matches`),
            axios.get(`${API_URL}/fixtures`),
            axios.get(`${API_URL}/standings`),
          ]);

        setMatches(matchesResponse.data);
        setFixtures(fixturesResponse.data);
        setStandings(standingsResponse.data);

        setError("");
      } catch (err) {
        console.error("API Error:", err);

        setError(
          "Unable to connect to the NUTMEG server. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchFootballData();
  }, []);

  // ==========================================
  // SIMULATE LIVE MATCH MINUTES
  // ==========================================

  useEffect(() => {
    const timer = setInterval(() => {
      setMatches((currentMatches) =>
        currentMatches.map((match) => ({
          ...match,
          minute:
            match.minute < 90
              ? match.minute + 1
              : 90,
        }))
      );
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  // ==========================================
  // AVAILABLE LEAGUES
  // ==========================================

  const leagues = [
    "All",
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Ligue 1",
  ];

  // ==========================================
  // SEARCH + LEAGUE FILTER
  // ==========================================

  const filteredMatches = matches.filter((match) => {
    const searchableText =
      `${match.home} ${match.away} ${match.league}`.toLowerCase();

    const matchesSearch =
      searchableText.includes(search.toLowerCase());

    const matchesLeague =
      selectedLeague === "All" ||
      match.league === selectedLeague;

    return matchesSearch && matchesLeague;
  });

  // ==========================================
  // FAVOURITES
  // ==========================================

  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(id)) {
        return currentFavorites.filter(
          (item) => item !== id
        );
      }

      return [...currentFavorites, id];
    });
  };

  // ==========================================
  // RETRY API
  // ==========================================

  const retryConnection = async () => {
    try {
      setLoading(true);
      setError("");

      const [matchesResponse, fixturesResponse, standingsResponse] =
        await Promise.all([
          axios.get(`${API_URL}/matches`),
          axios.get(`${API_URL}/fixtures`),
          axios.get(`${API_URL}/standings`),
        ]);

      setMatches(matchesResponse.data);
      setFixtures(fixturesResponse.data);
      setStandings(standingsResponse.data);
    } catch (err) {
      console.error(err);

      setError(
        "Still unable to connect to the NUTMEG server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <Hero />

      <main className="mx-auto max-w-7xl px-5 pb-24">

        {/* =====================================
            LEAGUE FILTER SECTION
        ===================================== */}

        <section className="border-b border-white/10 py-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* TITLE */}

            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
                Explore
              </p>

              <h2 className="mt-1 text-2xl font-black">
                Top Leagues
              </h2>
            </div>

            {/* FILTER BUTTONS */}

            <div className="flex flex-wrap gap-2">

              {leagues.map((league) => (
                <button
                  key={league}
                  onClick={() =>
                    setSelectedLeague(league)
                  }
                  className={`rounded-full border px-5 py-2.5 text-xs font-black transition-all duration-300 ${
                    selectedLeague === league
                      ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-600/20"
                      : "border-white/10 bg-white/[0.04] text-gray-400 hover:border-red-500/50 hover:text-white"
                  }`}
                >
                  {league}
                </button>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================
            API ERROR
        ===================================== */}

        {error && (
          <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-6">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="font-bold text-red-400">
                  Connection Error
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {error}
                </p>
              </div>

              <button
                onClick={retryConnection}
                className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold transition hover:bg-red-500"
              >
                Retry
              </button>

            </div>

          </div>
        )}

        {/* =====================================
            LOADING
        ===================================== */}

        {loading ? (

          <section className="py-24 text-center">

            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-red-500" />

            <p className="mt-6 font-bold text-gray-400">
              Loading NUTMEG football data...
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Connecting to the football server
            </p>

          </section>

        ) : (

          <>

            {/* =================================
                MATCH CENTER
            ================================= */}

            <MatchCenter
              matches={filteredMatches}
              search={search}
              setSearch={setSearch}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />

            {/* =================================
                FIXTURES
            ================================= */}

            <Fixtures
              matches={fixtures}
            />

            {/* =================================
                STANDINGS
            ================================= */}

            <Standings
              teams={standings}
            />

          </>

        )}

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}