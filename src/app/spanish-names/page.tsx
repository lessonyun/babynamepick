import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Baby Names Generator - Beautiful Hispanic Names | BabyNamePick",
  description: "Discover beautiful Spanish and Hispanic baby names with meanings. From traditional Spanish names to Latin American favorites, find the perfect nombre for your bebé.",
  alternates: { canonical: "https://babynamepick.com/spanish-names" },
};

const faqs = [
  { q: "What are the most popular Spanish baby names?", a: "For boys: Mateo, Santiago, Sebastián, Diego, and Leonardo. For girls: Sofía, Valentina, Isabella, Camila, and Luciana. These names are beloved across Spain and Latin America." },
  { q: "Do Spanish names always end in -o for boys and -a for girls?", a: "While many do follow this pattern (like Carlos/Carla, Alejandro/Alejandra), there are exceptions. Names like Guadalupe, Cruz, and Ariel are used for both genders." },
  { q: "What are compound Spanish names?", a: "Compound names (nombres compuestos) are a beautiful tradition: María José, Juan Carlos, Ana María, José Luis. The two names together form a single first name." },
  { q: "How do Spanish naming traditions work?", a: "In Spanish-speaking cultures, children typically receive two surnames — father's first surname + mother's first surname. Many families also name children after patron saints corresponding to their birthday." },
  { q: "Can I use a Spanish name if I don't speak Spanish?", a: "Of course! Names like Luna, Isla, Diego, and Sofia have become global favorites. Just learn the correct pronunciation — in Spanish, every vowel is pronounced clearly." },
];

export default function SpanishNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#dc2626,#ea580c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-red-600">Home</a>
            <a href="/boy-names" className="hover:text-red-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-red-600">Girl Names</a>
            <a href="/spanish-names" className="text-red-600 font-bold">Spanish Names</a>
            <a href="/unique-names" className="hover:text-red-600">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#fef2f2,#fff7ed,#fefce8)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6"><span style={{background:"linear-gradient(135deg,#dc2626,#ea580c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Spanish Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">From the streets of Madrid to the beaches of Mexico, discover passionate, beautiful Spanish names full of warmth and meaning.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Beauty of Spanish Baby Names</h2>
          <p>Spanish names are among the most melodic and romantic in the world. Spoken by over 580 million people across 20+ countries, Spanish naming traditions blend indigenous, European, Arabic, and religious influences into something truly unique. Whether you have Hispanic heritage or simply love the sound of Spanish, these names offer beauty, warmth, and deep cultural meaning.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Classic Spanish Names</h3>
          <p><strong>Alejandro</strong> (defender of mankind), <strong>Carlos</strong> (free man), <strong>Fernando</strong> (bold voyager), and <strong>Miguel</strong> (who is like God) have been staples for centuries. For girls, <strong>Carmen</strong> (garden), <strong>Isabel</strong> (pledged to God), <strong>Lucía</strong> (light), and <strong>María</strong> (beloved) carry timeless elegance.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Modern Latin American Favorites</h3>
          <p>Today&apos;s most popular names across Latin America include <strong>Mateo</strong> (gift of God), <strong>Santiago</strong> (Saint James), <strong>Valentina</strong> (strong, healthy), and <strong>Camila</strong> (young ceremonial attendant). These names feel fresh while honoring deep cultural roots.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">The Tradition of Compound Names</h3>
          <p>One of the most distinctive features of Spanish naming is the <em>nombre compuesto</em> — compound names. <strong>María José</strong>, <strong>Juan Carlos</strong>, <strong>Ana María</strong>, and <strong>José Luis</strong> combine two names into one, often honoring multiple family members or saints simultaneously. This tradition creates names that are uniquely personal.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Names from Nature and Faith</h3>
          <p>Spanish culture celebrates nature and spirituality through names. <strong>Luna</strong> (moon), <strong>Sol</strong> (sun), <strong>Estrella</strong> (star), <strong>Sierra</strong> (mountain range), <strong>Esperanza</strong> (hope), <strong>Milagros</strong> (miracles), and <strong>Cruz</strong> (cross) connect children to the natural world and spiritual traditions.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Spanish Names FAQs</h2>
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
          <a href="/" className="hover:text-white">Home</a>
          <a href="/boy-names" className="hover:text-white">Boy Names</a>
          <a href="/girl-names" className="hover:text-white">Girl Names</a>
          <a href="/unique-names" className="hover:text-white">Unique Names</a>
          <a href="/biblical-names" className="hover:text-white">Biblical</a>
          <a href="/japanese-names" className="hover:text-white">Japanese</a>
          <a href="/korean-names" className="hover:text-white">Korean</a>
          <a href="/indian-names" className="hover:text-white">Indian</a>
          <a href="/chinese-names" className="hover:text-white">Chinese</a>
          <a href="/arabic-names" className="hover:text-white">Arabic</a>
          <a href="/spanish-names" className="hover:text-white">Spanish</a>
          <a href="/royal-names" className="hover:text-white">Royal</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
