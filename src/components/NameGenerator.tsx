"use client";

import { useState } from "react";

interface NameResult {
  name: string;
  meaning: string;
  origin: string;
  popularity: string;
  gender: string;
}

const origins = [
  "Any", "English", "Greek", "Latin", "Hebrew", "Irish", "French", "Germanic",
  "Italian", "Spanish", "Arabic", "Japanese", "Korean", "Chinese", "Indian",
  "African", "Scottish", "Welsh", "Scandinavian", "Hawaiian", "Persian",
];

const styles = [
  { value: "any", label: "🎲 Any Style" },
  { value: "classic", label: "🏛️ Classic & Timeless" },
  { value: "modern", label: "✨ Modern & Trendy" },
  { value: "unique", label: "💎 Unique & Rare" },
  { value: "nature", label: "🌿 Nature-Inspired" },
];

export default function NameGenerator() {
  const [gender, setGender] = useState("either");
  const [style, setStyle] = useState("any");
  const [origin, setOrigin] = useState("Any");
  const [lastName, setLastName] = useState("");
  const [startLetter, setStartLetter] = useState("");
  const [results, setResults] = useState<NameResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gender, style, origin, lastName, startLetter }),
      });
      const data = await res.json();
      setResults(data.names);
      setGenerated(true);
    } catch {
      console.error("Failed to generate");
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Generator Form */}
      <section id="generator" className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 md:p-8">
          {/* Gender */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Baby&apos;s Gender
            </label>
            <div className="flex gap-3">
              {[
                { v: "boy", label: "👦 Boy", color: "blue" },
                { v: "girl", label: "👧 Girl", color: "pink" },
                { v: "either", label: "✨ Either", color: "purple" },
              ].map((g) => (
                <button
                  key={g.v}
                  onClick={() => setGender(g.v)}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    gender === g.v
                      ? `bg-${g.color}-100 border-2 border-${g.color}-400 text-${g.color}-700`
                      : "bg-gray-50 border-2 border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                  style={
                    gender === g.v
                      ? {
                          backgroundColor:
                            g.color === "blue" ? "#dbeafe" : g.color === "pink" ? "#fce7f3" : "#f3e8ff",
                          borderColor:
                            g.color === "blue" ? "#60a5fa" : g.color === "pink" ? "#f472b6" : "#a78bfa",
                          color:
                            g.color === "blue" ? "#1d4ed8" : g.color === "pink" ? "#be185d" : "#6d28d9",
                        }
                      : {}
                  }
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your family name"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Style */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Name Style
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {styles.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setStyle(s.value)}
                  className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                    style === s.value
                      ? "bg-purple-100 border-2 border-purple-400 text-purple-700"
                      : "bg-gray-50 border-2 border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Origin */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name Origin / Culture
            </label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors bg-white"
            >
              {origins.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          {/* Starting Letter */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Starting Letter <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={startLetter}
              onChange={(e) => setStartLetter(e.target.value.slice(0, 1).toUpperCase())}
              placeholder="e.g. A"
              maxLength={1}
              className="w-24 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors text-center text-lg"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generate}
            disabled={loading}
            className="w-full btn-primary text-white font-bold py-4 px-8 rounded-xl text-lg disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating Names...
              </span>
            ) : (
              "✨ Generate Baby Names"
            )}
          </button>
        </div>
      </section>

      {/* Results */}
      {generated && (
        <section className="max-w-4xl mx-auto mt-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Your Personalized Name Suggestions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((name, i) => (
              <div
                key={i}
                className="name-card bg-white rounded-xl p-5 border border-purple-100 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-purple-700">{name.name}</h3>
                    {lastName && (
                      <p className="text-sm text-gray-400">{name.name} {lastName}</p>
                    )}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-600 font-medium">
                    {name.gender === "boy" ? "👦 Boy" : "👧 Girl"}
                  </span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  <span className="font-medium">Meaning:</span> {name.meaning}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-400">Origin: {name.origin}</span>
                  <span className="text-xs text-amber-500">{name.popularity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={generate}
              className="text-purple-600 hover:text-purple-800 font-medium underline underline-offset-4"
            >
              🔄 Generate more names
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
