import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Baby Names - Beautiful Names with Deep Meaning | BabyNamePick",
  description: "Discover Japanese baby names with kanji meanings. Explore traditional and modern Japanese names for boys and girls with beautiful meaning layers.",
  alternates: { canonical: "https://babynamepick.com/japanese-names" },
};

const faqs = [
  { q: "How do Japanese baby names work?", a: "Japanese names typically consist of kanji characters, each carrying its own meaning. Parents choose kanji carefully because the same reading (sound) can be written with many different characters — each conveying a distinct meaning. For example, 'Haruki' can be written as 春輝 (spring radiance) or 晴輝 (clear radiance). This layered system makes Japanese naming both an art form and a deeply personal act." },
  { q: "What are popular Japanese baby names for girls?", a: "Popular Japanese girl names include Hana (花, flower), Yui (結, to tie/connect), Aoi (葵, hollyhock), Sakura (桜, cherry blossom), Mei (芽衣, budding garment), and Himari (陽葵, sun hollyhock). These names are valued for their natural imagery and melodic sound." },
  { q: "What are popular Japanese baby names for boys?", a: "Popular Japanese boy names include Haruto (陽翔, sun soaring), Sota (蒼太, vast blue), Ren (蓮, lotus), Kaito (海斗, sea dipper), Yuto (勇斗, brave dipper), and Hinata (陽向, facing the sun). Strong natural imagery and aspirational meanings are highly valued in Japanese boy names." },
  { q: "Can non-Japanese parents use Japanese names?", a: "Many families outside Japan choose Japanese names for their beauty and meaning, especially in multicultural households or when honoring Japanese heritage. It is worth researching the meaning of specific kanji before choosing, as some characters carry meanings more appropriate for certain genders or contexts in Japanese culture." },
  { q: "What is the difference between Japanese names written in kanji, hiragana, and katakana?", a: "Most Japanese names are written in kanji (Chinese-origin characters) for their rich meaning. Some parents choose hiragana (the native syllabic script) for a softer, more approachable appearance — this is more common for girls' names. Katakana is rarely used for names except in specific stylistic contexts. All three scripts represent the same sounds, but the written form carries distinct aesthetic and social implications." },
];

export default function JapaneseNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#e11d48,#f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-rose-600">Name Generator</a>
            <a href="/boy-names" className="hover:text-rose-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-rose-600">Girl Names</a>
            <a href="/unique-names" className="hover:text-rose-600">Unique Names</a>
            <a href="/biblical-names" className="hover:text-rose-600">Biblical Names</a>
            <a href="/japanese-names" className="text-rose-600 font-bold">Japanese Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#fff1f2,#ffe4e6,#fdf2f8)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Japanese Baby Names - <span style={{background:"linear-gradient(135deg,#e11d48,#f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Beautiful Names with Deep Meaning</span></h1>
          <p className="text-lg text-gray-600 mb-8">Discover Japanese names where every character carries meaning. From cherry blossom softness to ocean-deep strength, Japanese names are poetry in a single word.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <NameGenerator />
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Art and Tradition of Japanese Baby Names</h2>
          <p>Japanese baby names are among the most intentional in the world. Unlike many naming traditions where a name is chosen primarily for its sound, Japanese parents engage in a deeply considered process — selecting kanji characters whose individual meanings combine to create a name that is both beautiful to say and rich in layered significance. A Japanese name is, in a very real sense, a lifelong gift of meaning.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Kanji: The Foundation of Japanese Names</h3>
          <p>Kanji — the logographic characters borrowed and adapted from Chinese — are at the heart of most Japanese names. Each kanji carries its own meaning, and when two or three are combined to form a name, the result is a small poem. The name <strong>Haruki</strong> (春樹) combines &quot;spring&quot; (春) and &quot;tree&quot; (樹) — evoking new growth, renewal, and quiet strength. The internationally beloved author Haruki Murakami bears this name. <strong>Ayumi</strong> (歩美) combines &quot;walk&quot; (歩) and &quot;beauty&quot; (美) — meaning &quot;beautiful step&quot; or &quot;walking in beauty.&quot;</p>
          <p>What makes the system especially rich — and occasionally complex — is that many kanji share the same reading. The sound &quot;Hana&quot; can be written as 花 (flower), 華 (brilliance), or 鼻 (nose — rarely chosen for obvious reasons). Parents must not only choose a name they love the sound of but also select the kanji that carry the meaning they intend for their child.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Popular Japanese Girl Names and Their Meanings</h3>
          <p>Japanese girl names frequently draw on the imagery of nature, light, and grace. <strong>Sakura</strong> (桜) — cherry blossom — is perhaps Japan&apos;s most iconic name, carrying the weight of the nation&apos;s most beloved seasonal symbol: fleeting beauty, new beginnings, and the Japanese aesthetic philosophy of mono no aware (the bittersweet awareness of impermanence). <strong>Yuki</strong> (雪) means &quot;snow&quot; — pure, quiet, and serene. <strong>Aoi</strong> (葵) refers to the hollyhock flower, elegant and upward-reaching.</p>
          <p>More contemporary favorites include <strong>Hina</strong> (陽菜, sunlit vegetables — evoking warmth and abundance), <strong>Yui</strong> (結衣, tied garment — suggesting connection and togetherness), and <strong>Mei</strong> (芽衣, budding garment — fresh potential). These names reflect a modern Japanese sensibility that balances natural imagery with aspirational meaning.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Popular Japanese Boy Names and Their Meanings</h3>
          <p>Japanese boy names often evoke strength, vastness, and natural power. <strong>Ren</strong> (蓮) — lotus — is a name of Buddhist significance, the lotus being a symbol of purity rising from murky waters. <strong>Kaito</strong> (海斗) combines &quot;sea&quot; (海) with &quot;dipper&quot; or &quot;big dipper constellation&quot; (斗) — navigating vast oceans, a name of ambition and adventure. <strong>Sota</strong> (蒼太) combines &quot;blue&quot; or &quot;vast&quot; (蒼) with &quot;big&quot; (太) — evoking the wide, open sky.</p>
          <p>Names ending in &quot;-to&quot; (斗, 翔, 都) are particularly popular for boys, as the character 翔 means &quot;to soar&quot; — giving names like <strong>Haruto</strong> (陽翔, sun soaring) and <strong>Yuto</strong> (勇翔, brave soaring) an aspirational, uplifting quality. <strong>Hinata</strong> (陽向) means &quot;facing the sun&quot; — optimistic, warm, and forward-looking.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">The Role of Nature in Japanese Naming</h3>
          <p>Japanese culture has always maintained a profound relationship with the natural world, and this is reflected vividly in the country&apos;s naming traditions. The seasons — spring (春, haru), summer (夏, natsu), autumn (秋, aki), and winter (冬, fuyu) — appear frequently in names, as do celestial bodies: sun (陽, hi or 日, ni), moon (月, tsuki), and stars (星, hoshi). Plant names abound: plum blossom (梅, ume), pine (松, matsu), bamboo (竹, take), and chrysanthemum (菊, kiku) all appear in traditional names.</p>
          <p>Water imagery is equally prevalent. <strong>Minato</strong> (湊) means &quot;harbor&quot; — a safe gathering place. <strong>Nami</strong> (波) means &quot;wave.&quot; <strong>Kawa</strong> (川) means &quot;river.&quot; These names root a child in the living landscape of Japan, connecting them to a cultural sense of place that spans centuries.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Choosing a Japanese Name Outside Japan</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research the kanji meanings carefully — the written form carries as much weight as the sound</li>
            <li>Consider whether the name is easily pronounceable in your home country&apos;s language</li>
            <li>Some names have strong gender associations in Japan; it is worth being aware of these conventions</li>
            <li>Shorter names (1-2 syllables) like Ren, Kai, or Hana travel across languages more gracefully</li>
            <li>Use our AI generator to explore Japanese name combinations and discover the meaning layers behind each suggestion</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Japanese Baby Name FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-pink-100 shadow-sm">
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
          <a href="/biblical-names" className="hover:text-white">Biblical Names</a>
          <a href="/japanese-names" className="hover:text-white">Japanese Names</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
