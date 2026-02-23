import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greek Baby Names Generator - Mythology & Classical Names | BabyNamePick",
  description: "Discover powerful Greek baby names from ancient mythology and classical traditions with timeless meanings and heroic origins.",
  alternates: { canonical: "https://babynamepick.com/greek-names" },
};

const faqs = [
  { q: "What are the best Greek mythology names for babies?", a: "Popular mythology names include Alexander (defender of the people), Athena (goddess of wisdom), Apollo (god of light), Helena (bright, shining), Artemis (goddess of the hunt), and Penelope (weaver). These names carry millennia of heroic stories." },
  { q: "Are Greek names hard to pronounce?", a: "Most Greek names used internationally are quite easy: Sophia, Alexander, Nicholas, Helena, Theodore, and Daphne. More traditional names like Konstantinos or Evangelia may be shortened to Kostas or Eva in everyday use." },
  { q: "What is the Greek name day tradition?", a: "In Greece, name days (onomastiki eorti) are often celebrated more than birthdays. Each day of the year is dedicated to a saint, and everyone sharing that saint's name celebrates together. It's a beloved national tradition." },
  { q: "What Greek names are popular worldwide?", a: "Many of the world's most popular names are Greek: Alexander, Sophia, Nicholas, Catherine, George, Helen, Theodore, and Philip. These names have been adopted across cultures for centuries and remain perennial favorites." },
  { q: "Do modern Greeks still use ancient names?", a: "Yes! Names like Dimitris, Nikos, Maria, and Eleni are everyday names in modern Greece. Ancient names like Aristotle, Plato, and Homer are rarer but still used. Many families name children after grandparents, preserving names across generations." },
];

export default function GreekNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/boy-names" className="hover:text-blue-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-blue-600">Girl Names</a>
            <a href="/greek-names" className="text-blue-600 font-bold">Greek Names</a>
            <a href="/unique-names" className="hover:text-blue-600">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe,#f0f9ff)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">🏛️ <span style={{background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Greek Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">From the temples of Athens to the shores of Santorini, discover names that have echoed through 3,000 years of Western civilization — names of gods, heroes, and philosophers.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Timeless Names from Ancient Greece</h2>
          <p>Greek names are the foundation of Western naming traditions. From Alexander the Great to modern-day Sophia, Greek names have shaped how the world names its children. These names carry the weight of mythology, philosophy, democracy, and art — the very pillars of Western civilization.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Mythology Names</h3>
          <p>Greek mythology provides some of the most powerful names in any language. <strong>Athena</strong> — goddess of wisdom and war strategy — represents intelligence and strength. <strong>Apollo</strong> — god of light, music, and healing — embodies creativity and brilliance. <strong>Artemis</strong> (goddess of the hunt), <strong>Penelope</strong> (Odysseus&apos;s faithful wife), and <strong>Helena</strong> (whose beauty launched a thousand ships) offer rich stories for every name.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Classical Greek Names</h3>
          <p><strong>Alexander</strong> (&quot;defender of the people&quot;) has been borne by kings, generals, and leaders throughout history. <strong>Sophia</strong> (&quot;wisdom&quot;) consistently ranks among the world&apos;s most popular names. <strong>Theodore</strong> (&quot;gift of God&quot;), <strong>Nicholas</strong> (&quot;victory of the people&quot;), <strong>Catherine</strong> (&quot;pure&quot;), and <strong>Philip</strong> (&quot;lover of horses&quot;) are timeless choices.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Modern Greek Favorites</h3>
          <p>In contemporary Greece, names like <strong>Dimitris</strong>, <strong>Nikos</strong>, <strong>Giorgos</strong>, <strong>Maria</strong>, <strong>Eleni</strong>, and <strong>Anna</strong> are everyday favorites. The tradition of naming children after grandparents keeps ancient names alive — you&apos;ll still meet young children named <strong>Konstantinos</strong>, <strong>Evangelia</strong>, and <strong>Anastasia</strong> (&quot;resurrection&quot;) throughout Greece.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Philosophy-Inspired Names</h3>
          <p>For parents who value wisdom and learning, philosophical names offer distinguished choices. While <strong>Aristotle</strong>, <strong>Plato</strong>, and <strong>Socrates</strong> are bold choices, names like <strong>Thalia</strong> (&quot;to flourish&quot;), <strong>Sophia</strong> (&quot;wisdom&quot;), <strong>Zeno</strong> (&quot;gift of Zeus&quot;), and <strong>Daphne</strong> (&quot;laurel tree&quot;) carry intellectual elegance without being heavy.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Greek Names FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>© 2026 BabyNamePick.com — Free AI Baby Name Generator</p>
        <div className="mt-3 flex justify-center gap-4 flex-wrap">
          <a href="/" className="hover:text-white">Home</a><a href="/boy-names" className="hover:text-white">Boy Names</a><a href="/girl-names" className="hover:text-white">Girl Names</a><a href="/unique-names" className="hover:text-white">Unique Names</a><a href="/biblical-names" className="hover:text-white">Biblical</a><a href="/japanese-names" className="hover:text-white">Japanese</a><a href="/korean-names" className="hover:text-white">Korean</a><a href="/indian-names" className="hover:text-white">Indian</a><a href="/chinese-names" className="hover:text-white">Chinese</a><a href="/arabic-names" className="hover:text-white">Arabic</a><a href="/spanish-names" className="hover:text-white">Spanish</a><a href="/african-names" className="hover:text-white">African</a><a href="/celtic-names" className="hover:text-white">Celtic</a><a href="/hawaiian-names" className="hover:text-white">Hawaiian</a><a href="/greek-names" className="hover:text-white">Greek</a><a href="/royal-names" className="hover:text-white">Royal</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
