import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unique Baby Names Generator - Rare & One-of-a-Kind Names | BabyNamePick",
  description: "Find rare, distinctive baby names with our AI-powered unique name generator. Discover one-of-a-kind names for boys and girls that stand out from the crowd.",
  alternates: { canonical: "https://babynamepick.com/unique-names" },
};

const faqs = [
  { q: "What makes a baby name 'unique'?", a: "A unique name is one that's uncommon — typically ranking outside the top 500 most popular names. Names like Orion, Seraphina, Caspian, and Elowen are beautiful but rarely heard, making your child stand out." },
  { q: "Will a unique name cause problems for my child?", a: "Not necessarily. While very unusual names might require frequent spelling corrections, moderately unique names are generally well-received. The key is choosing something pronounceable and not easily mocked." },
  { q: "How do I find a unique name that isn't weird?", a: "Look at names from other cultures, historical figures, mythology, or nature. Names like Zephyr (Greek, 'west wind'), Ondine (French, 'little wave'), and Stellan (Swedish, 'calm') are unique yet elegant." },
  { q: "Are rare names becoming more popular?", a: "Yes! Parents increasingly want distinctive names. This means today's 'unique' name might become tomorrow's popular choice. Names like Luna and Ezra were once rare but are now top-100 names." },
  { q: "Can I create a completely new name?", a: "Absolutely! Many beautiful names were invented. Consider blending family names, using place names, or combining elements from different languages. Just make sure it's easy to pronounce and spell." },
];

export default function UniqueNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#7c3aed,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-purple-600">Name Generator</a>
            <a href="/boy-names" className="hover:text-purple-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-purple-600">Girl Names</a>
            <a href="/unique-names" className="text-purple-600 font-bold">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#faf5ff,#f3e8ff,#ede9fe)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6"><span style={{background:"linear-gradient(135deg,#7c3aed,#6366f1,#ec4899)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Unique Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">Discover rare, one-of-a-kind names that will make your child truly stand out. Beautiful, meaningful, and unforgettable.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <NameGenerator />
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Art of Choosing a Unique Baby Name</h2>
          <p>In a world of Emmas and Liams, some parents dream of a name that&apos;s truly one-of-a-kind. A unique name gives your child an instant identity — a conversation starter, a source of pride, and a reminder that they&apos;re special from the very beginning.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Unique Boy Names Worth Discovering</h3>
          <p><strong>Orion</strong> — named after the hunter constellation, this name carries celestial grandeur. <strong>Zephyr</strong> means &quot;west wind&quot; in Greek, evoking freedom and movement. <strong>Caspian</strong> recalls the legendary sea. <strong>Leander</strong> means &quot;lion man&quot; — strong and poetic. <strong>Stellan</strong>, Swedish for &quot;calm,&quot; is quietly powerful.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Unique Girl Names That Enchant</h3>
          <p><strong>Seraphina</strong> — meaning &quot;fiery, ardent,&quot; this name has angelic origins. <strong>Elowen</strong> means &quot;elm tree&quot; in Cornish, connecting nature and heritage. <strong>Calista</strong> means &quot;most beautiful&quot; in Greek. <strong>Isolde</strong> comes from Arthurian legend. <strong>Ondine</strong> means &quot;little wave&quot; in French — delicate and flowing.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Where to Find Inspiration</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Mythology:</strong> Greek, Norse, and Celtic myths are treasure troves (Atlas, Freya, Isolde)</li>
            <li><strong>Nature:</strong> Beyond common choices — think Solstice, Thistle, or Cove</li>
            <li><strong>Other cultures:</strong> Japanese (Haruki), Finnish (Aino), Swahili (Zuri)</li>
            <li><strong>Literature:</strong> Authors have created beautiful names (Arwen, Hermione, Atticus)</li>
            <li><strong>Family history:</strong> Grandparents&apos; names or maiden names can be surprisingly fresh</li>
          </ul>
          <h3 className="text-xl font-bold mt-8 mb-4">The Balance of Unique and Practical</h3>
          <p>The best unique names hit a sweet spot: distinctive enough to be memorable, but not so unusual that your child spends a lifetime spelling it out. Test the name by imagining it on a resume, a wedding invitation, and being called across a schoolyard. If it works in all three, you&apos;ve found a winner.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Unique Names FAQs</h2>
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
        <div className="mt-3 flex justify-center gap-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/boy-names" className="hover:text-white">Boy Names</a>
          <a href="/girl-names" className="hover:text-white">Girl Names</a>
          <a href="/unique-names" className="hover:text-white">Unique Names</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
