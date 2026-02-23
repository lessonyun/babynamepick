import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Korean Baby Names Generator - Hangul & Hanja Names | BabyNamePick",
  description: "Discover beautiful Korean baby names with hangul and hanja meanings. Explore traditional and modern Korean names for boys and girls, including generational naming traditions.",
  alternates: { canonical: "https://babynamepick.com/korean-names" },
};

const faqs = [
  { q: "How do Korean baby names work?", a: "Korean names traditionally consist of a one-syllable family name followed by a two-syllable given name, though single-syllable given names exist. Given names are often written in hanja (Chinese characters adopted into Korean), with each character carrying a specific meaning. The same sound can be written with many different hanja, each conveying a distinct meaning — so parents choose characters that reflect their wishes for the child. Modern Korean parents sometimes choose pure hangul names without hanja associations, embracing a more native Korean aesthetic." },
  { q: "What are popular Korean baby girl names?", a: "Popular Korean girl names include Seo-yeon (서연, auspicious and beautiful), Ji-woo (지우, wisdom and universe), Soo-ah (수아, graceful and elegant), Ye-jin (예진, grace and progress), Ha-eun (하은, summer grace), and Min-ji (민지, quick-witted and wisdom). Names containing 아 (ah, meaning 'elegant') and 은 (eun, meaning 'grace' or 'silver') are especially beloved for girls." },
  { q: "What are popular Korean baby boy names?", a: "Popular Korean boy names include Min-jun (민준, quick-witted and handsome), Seo-jun (서준, auspicious and handsome), Ji-ho (지호, wisdom and greatness), Hyun-woo (현우, intelligent and universe), Dong-hyun (동현, east and wise), and Tae-yang (태양, great sun). Characters meaning strength (강, gang), wisdom (현, hyun), and greatness (준, jun) are especially common in Korean boy names." },
  { q: "What are Korean generational names (돌림자)?", a: "Generational names, called 돌림자 (dollimja), are a traditional Korean naming practice where one syllable of the given name is shared by all members of the same generation within a family. This shared syllable rotates through generations according to a pre-set pattern called the 항렬 (hangyeol), often defined in a family genealogy book (족보, jokbo). For example, all male cousins in one generation might share the syllable '준' (jun), while the next generation shares '민' (min). This practice connects individuals to their clan lineage across centuries." },
  { q: "Can non-Korean parents choose Korean names?", a: "Korean names can be a wonderful choice for families with Korean heritage or those who simply love the aesthetic and meaning of Korean names. If you are not of Korean background, it is worth researching both the hangul sound and the hanja meaning to ensure the name carries the significance you intend. Shorter, phonetically accessible names like Jia, Kai, or Ara travel across language boundaries more gracefully. Our AI generator can help you explore Korean name combinations and their layered meanings." },
];

const navLinks = [
  { href: "/", label: "Name Generator" },
  { href: "/boy-names", label: "Boy Names" },
  { href: "/girl-names", label: "Girl Names" },
  { href: "/unique-names", label: "Unique Names" },
  { href: "/biblical-names", label: "Biblical Names" },
  { href: "/japanese-names", label: "Japanese Names" },
  { href: "/korean-names", label: "Korean Names" },
  { href: "/indian-names", label: "Indian Names" },
  { href: "/royal-names", label: "Royal Names" },
];

export default function KoreanNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#0ea5e9,#14b8a6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className={href === "/korean-names" ? "text-teal-600 font-bold" : "hover:text-teal-600"}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#f0f9ff,#ccfbf1,#e0f2fe)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Korean Baby <span style={{background:"linear-gradient(135deg,#0ea5e9,#14b8a6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Names Generator</span></h1>
          <p className="text-lg text-gray-600 mb-8">Discover Korean baby names with rich hanja meanings and beautiful hangul sounds. From timeless traditional names to modern favorites, find the perfect Korean name for your child.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <NameGenerator />
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Beauty and Tradition of Korean Baby Names</h2>
          <p>Korean baby names carry centuries of cultural history within their syllables. Rooted in a rich interplay between the native Korean language (hangul) and the adopted hanja character system, Korean names are far more than labels — they are carefully composed expressions of parental hope, family lineage, and cultural identity. Choosing a Korean name is an act of meaning-making that connects a child to an unbroken thread of tradition stretching back through generations.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Hangul and Hanja: The Dual Script of Korean Identity</h3>
          <p>Most Korean names are written using hanja — Chinese characters that were adopted into Korean culture over two millennia of cultural exchange. Each hanja character carries a specific meaning, and when combined, they create names of layered significance. The name <strong>Seo-yeon</strong> (서연) can be written with hanja meaning &quot;auspicious connection&quot; or &quot;beautiful kite&quot; depending on the characters chosen — the sound is identical, but the meaning shifts entirely based on the written form. This flexibility gives Korean parents tremendous creative freedom in shaping the meaning of their child&apos;s name.</p>
          <p>Modern Korean parents increasingly choose pure hangul names — names written only in the native Korean script without hanja associations. These names celebrate the Korean language on its own terms and carry a fresh, contemporary feel. Names like <strong>Areum</strong> (아름, beautiful), <strong>Harang</strong> (하랑, great wave), and <strong>Nuri</strong> (누리, world) are beautiful examples of names whose meaning lives entirely in the Korean language.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Korean Girl Names: Grace, Wisdom, and Nature</h3>
          <p>Korean girl names frequently draw on concepts of grace (아, 雅), elegance (연, 姸), wisdom (지, 智), and natural beauty. <strong>Seo-yeon</strong> (서연) has dominated Korean baby name charts for years, its soft sounds and auspicious meaning making it perennially beloved. <strong>Ha-eun</strong> (하은) — combining summer warmth with grace — evokes the lush, generous energy of the season. <strong>Ji-woo</strong> (지우) pairs wisdom with the vastness of the universe, a name of quiet intellectual ambition.</p>
          <p>Nature is a powerful presence in Korean girl names. <strong>Bom</strong> (봄, spring) and <strong>Byeol</strong> (별, star) are simple, radiant single-syllable names that capture natural imagery in their purest form. <strong>Na-rae</strong> (나래, wings) and <strong>Na-ri</strong> (나리, lily) bring the grace of the natural world into everyday Korean life. The prevalence of nature imagery in Korean names reflects a broader cultural reverence for the seasonal rhythms of the Korean peninsula.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Korean Boy Names: Strength, Brilliance, and Aspiration</h3>
          <p>Korean boy names tend toward concepts of strength, intelligence, and excellence. The syllable <strong>jun</strong> (준, 俊) — meaning &quot;talented&quot; or &quot;handsome&quot; — appears in countless boy names: Min-jun, Seo-jun, Tae-jun. The syllable <strong>hyun</strong> (현, 賢) — meaning &quot;wise&quot; or &quot;virtuous&quot; — is equally ubiquitous: Hyun-jun, Hyun-woo, Dong-hyun. <strong>Woo</strong> (우, 宇) meaning &quot;universe&quot; suggests cosmic ambition, often paired with characters for strength or intelligence.</p>
          <p><strong>Min-jun</strong> (민준), consistently ranked among Korea&apos;s most popular boy names, combines quick-wittedness (민) with talent and handsomeness (준) — an aspirational pairing that speaks to Korean educational values. <strong>Ji-ho</strong> (지호) pairs wisdom (지) with greatness (호), while <strong>Tae-yang</strong> (태양, great sun) positions a child as a source of light and warmth for those around him.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">The Generational Naming Tradition: 돌림자 (Dollimja)</h3>
          <p>One of Korea&apos;s most distinctive naming traditions is the 돌림자 (dollimja), or generational name — a shared syllable passed through all members of the same generation within a clan. Defined in each family&apos;s 족보 (jokbo, genealogy book), the dollimja rotates through generations in a pre-set pattern. All male cousins born in one generation might share the syllable &quot;준&quot; (jun); the next generation shares &quot;호&quot; (ho); the generation after that shares &quot;현&quot; (hyun). This practice allows Koreans to identify approximate generational relationships within their extended family simply by hearing a name. While less rigidly practiced today, many families maintain this tradition as a meaningful link to their ancestral past.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Choosing a Korean Name for Your Child</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research both the hangul sound and the hanja meaning — the written form carries its own significance</li>
            <li>Consider how the name sounds in both Korean and your home language, especially if raising a multicultural child</li>
            <li>Single-syllable given names (Jia, Nari, Ren) travel across language boundaries more gracefully than longer names</li>
            <li>Check whether the name has strong gender associations in Korean culture if that matters to you</li>
            <li>Ask whether family elders use a dollimja tradition — this may shape your syllable choices</li>
            <li>Use our AI generator to explore Korean name combinations and discover the meaning behind each suggestion</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Korean Baby Name FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-teal-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>© 2026 BabyNamePick.com — Free AI Baby Name Generator</p>
        <div className="mt-3 flex flex-wrap justify-center gap-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/boy-names" className="hover:text-white">Boy Names</a>
          <a href="/girl-names" className="hover:text-white">Girl Names</a>
          <a href="/unique-names" className="hover:text-white">Unique Names</a>
          <a href="/biblical-names" className="hover:text-white">Biblical Names</a>
          <a href="/japanese-names" className="hover:text-white">Japanese Names</a>
          <a href="/korean-names" className="hover:text-white">Korean Names</a>
          <a href="/indian-names" className="hover:text-white">Indian Names</a>
          <a href="/royal-names" className="hover:text-white">Royal Names</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
