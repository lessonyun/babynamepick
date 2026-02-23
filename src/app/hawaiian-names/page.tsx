import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hawaiian Baby Names Generator - Beautiful Island Names | BabyNamePick",
  description: "Discover beautiful Hawaiian baby names inspired by nature, ocean, and aloha spirit with deep Polynesian meanings and island traditions.",
  alternates: { canonical: "https://babynamepick.com/hawaiian-names" },
};

const faqs = [
  { q: "What makes Hawaiian names special?", a: "Hawaiian names are deeply connected to nature and spirituality. Every name carries a 'hidden meaning' (kaona) — often poetic and multilayered. Names frequently reference the ocean, mountains, rain, flowers, and sky, reflecting Hawaii's breathtaking landscape." },
  { q: "What are popular Hawaiian baby names?", a: "Popular names include Kai (sea), Leilani (heavenly flower), Koa (brave/warrior), Malia (calm, peaceful), Keanu (cool breeze), Moana (ocean), Lani (sky/heaven), and Nalu (wave). Many have become beloved worldwide." },
  { q: "Do Hawaiian names have gender rules?", a: "Many Hawaiian names are gender-neutral — Kai, Lani, and Noa work for both boys and girls. This reflects the Hawaiian cultural view that qualities like bravery, beauty, and spiritual connection aren't limited by gender." },
  { q: "How are Hawaiian babies traditionally named?", a: "Traditionally, names come through dreams, visions, or signs from ancestors. The practice of 'inoa po' (night name) involves receiving a name through a dream. Elders and spiritual leaders may also be consulted. The name is seen as a spiritual gift." },
  { q: "Can non-Hawaiian families use Hawaiian names?", a: "Hawaiian names like Kai, Leilani, and Malia have been warmly embraced globally. If choosing a Hawaiian name, learn its correct pronunciation and meaning as a sign of respect for the culture. Many Hawaiians appreciate when others honor their naming traditions thoughtfully." },
];

export default function HawaiianNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌺</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#0891b2,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-cyan-600">Home</a>
            <a href="/boy-names" className="hover:text-cyan-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-cyan-600">Girl Names</a>
            <a href="/hawaiian-names" className="text-cyan-600 font-bold">Hawaiian Names</a>
            <a href="/unique-names" className="hover:text-cyan-600">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#ecfeff,#cffafe,#f0fdfa)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">🌺 <span style={{background:"linear-gradient(135deg,#0891b2,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Hawaiian Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">From the turquoise waters of Waikiki to the misty peaks of Mauna Kea, discover names that carry the spirit of aloha — love, peace, and the beauty of the islands.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Beautiful Names from the Hawaiian Islands</h2>
          <p>Hawaiian names are poetry in motion — each one a window into the islands&apos; stunning natural beauty and deep spiritual traditions. The Hawaiian language has only 13 letters, yet creates names of extraordinary beauty and meaning. In Hawaiian culture, a name (<em>inoa</em>) is a sacred gift that carries <em>mana</em> (spiritual power).</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Ocean-Inspired Names</h3>
          <p>The sea is central to Hawaiian life, and its names reflect this connection. <strong>Kai</strong> (&quot;sea&quot;) has become one of the world&apos;s most popular names. <strong>Moana</strong> (&quot;ocean&quot;) gained fame through Disney but has been beloved in Hawaii for centuries. <strong>Nalu</strong> (&quot;wave&quot;), <strong>Moku</strong> (&quot;island&quot;), and <strong>Lana</strong> (&quot;calm waters&quot;) connect children to the Pacific.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Nature and Sky Names</h3>
          <p><strong>Leilani</strong> (&quot;heavenly flower&quot;) is perhaps the most quintessential Hawaiian name. <strong>Lani</strong> (&quot;sky, heaven&quot;), <strong>Mahina</strong> (&quot;moon&quot;), <strong>Hoku</strong> (&quot;star&quot;), and <strong>Pua</strong> (&quot;flower&quot;) draw from Hawaii&apos;s spectacular skies and lush gardens. <strong>Keanu</strong> — made famous by the actor — means &quot;cool breeze over the mountains.&quot;</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Strength and Spirit Names</h3>
          <p><strong>Koa</strong> (&quot;warrior, brave&quot;) is both a name and Hawaii&apos;s most sacred tree. <strong>Makoa</strong> (&quot;fearless&quot;), <strong>Ikaika</strong> (&quot;strong&quot;), <strong>Kaimana</strong> (&quot;diamond, power of the ocean&quot;), and <strong>Malia</strong> (&quot;calm, peaceful&quot;) — Barack Obama&apos;s daughter&apos;s name — represent the Hawaiian balance of strength and serenity.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">The Aloha Spirit in Naming</h3>
          <p>The concept of <em>aloha</em> — love, compassion, and mutual respect — infuses Hawaiian naming. Names are chosen to inspire qualities parents wish for their children: <strong>Aloha</strong> itself (love), <strong>Mahalo</strong> (gratitude), <strong>Ohana</strong> (family), and <strong>Mana</strong> (spiritual power) represent the deepest values of Hawaiian culture.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Hawaiian Names FAQs</h2>
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
