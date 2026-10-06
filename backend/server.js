import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ===============================
// DATA
// ===============================

let matches = [
  {
    id: 1,
    home: "Real Madrid",
    away: "Barcelona",
    homeScore: 2,
    awayScore: 1,
    minute: 72,
    league: "La Liga",
    country: "Spain",
  },
  {
    id: 2,
    home: "Manchester City",
    away: "Liverpool",
    homeScore: 1,
    awayScore: 1,
    minute: 64,
    league: "Premier League",
    country: "England",
  },
  {
    id: 3,
    home: "Bayern Munich",
    away: "Dortmund",
    homeScore: 3,
    awayScore: 0,
    minute: 58,
    league: "Bundesliga",
    country: "Germany",
  },
  {
    id: 4,
    home: "PSG",
    away: "Marseille",
    homeScore: 2,
    awayScore: 0,
    minute: 81,
    league: "Ligue 1",
    country: "France",
  },
];

let fixtures = [
  {
    id: 1,
    home: "Arsenal",
    away: "Chelsea",
    time: "18:30",
    date: "TODAY",
    league: "Premier League",
  },
  {
    id: 2,
    home: "Inter Milan",
    away: "AC Milan",
    time: "21:00",
    date: "TODAY",
    league: "Serie A",
  },
  {
    id: 3,
    home: "Atletico Madrid",
    away: "Valencia",
    time: "20:00",
    date: "TOMORROW",
    league: "La Liga",
  },
];

let standings = [
  {
    position: 1,
    team: "Real Madrid",
    played: 28,
    won: 23,
    drawn: 3,
    lost: 2,
    points: 72,
  },
  {
    position: 2,
    team: "Barcelona",
    played: 28,
    won: 21,
    drawn: 5,
    lost: 2,
    points: 68,
  },
  {
    position: 3,
    team: "Atletico Madrid",
    played: 28,
    won: 18,
    drawn: 7,
    lost: 3,
    points: 61,
  },
  {
    position: 4,
    team: "Athletic Club",
    played: 28,
    won: 16,
    drawn: 7,
    lost: 5,
    points: 55,
  },
  {
    position: 5,
    team: "Villarreal",
    played: 28,
    won: 15,
    drawn: 6,
    lost: 7,
    points: 51,
  },
];

// ===============================
// HOME / HEALTH
// ===============================

app.get("/", (req, res) => {
  res.json({
    message: "NUTMEG Football API is running ⚽",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    service: "NUTMEG API",
  });
});

// ===============================
// MATCHES - READ
// ===============================

app.get("/api/matches", (req, res) => {
  res.json(matches);
});

// ===============================
// MATCHES - READ ONE
// ===============================

app.get("/api/matches/:id", (req, res) => {
  const id = Number(req.params.id);

  const match = matches.find((item) => item.id === id);

  if (!match) {
    return res.status(404).json({
      message: "Match not found",
    });
  }

  res.json(match);
});

// ===============================
// MATCHES - CREATE
// ===============================

app.post("/api/matches", (req, res) => {
  const newMatch = {
    id: matches.length + 1,
    ...req.body,
  };

  matches.push(newMatch);

  res.status(201).json({
    message: "Match created successfully",
    match: newMatch,
  });
});

// ===============================
// MATCHES - UPDATE
// ===============================

app.put("/api/matches/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = matches.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Match not found",
    });
  }

  matches[index] = {
    ...matches[index],
    ...req.body,
    id,
  };

  res.json({
    message: "Match updated successfully",
    match: matches[index],
  });
});

// ===============================
// MATCHES - DELETE
// ===============================

app.delete("/api/matches/:id", (req, res) => {
  const id = Number(req.params.id);

  const exists = matches.some((item) => item.id === id);

  if (!exists) {
    return res.status(404).json({
      message: "Match not found",
    });
  }

  matches = matches.filter((item) => item.id !== id);

  res.json({
    message: "Match deleted successfully",
  });
});

// ===============================
// FIXTURES
// ===============================

app.get("/api/fixtures", (req, res) => {
  res.json(fixtures);
});

// ===============================
// STANDINGS
// ===============================

app.get("/api/standings", (req, res) => {
  res.json(standings);
});

// ===============================
// 404
// ===============================

app.use((req, res) => {
  res.status(404).json({
    message: "API route not found",
  });
});

// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
  console.log(`⚽ NUTMEG API running at http://localhost:${PORT}`);
});