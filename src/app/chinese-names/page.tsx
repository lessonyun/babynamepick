import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chinese Baby Names Generator - Traditional & Modern Chinese Names | BabyNamePick",
  description: "Discover beautiful Chinese baby names with character meanings. Explore traditional and modern Chinese names for boys and girls with cultural significance and five-element symbolism.",
  alternates: { canonical: "https://babynamepick.com/chinese-names" },
};

const faqs = [
  { q: "How are Chinese baby names structured?", a: "Chinese names are written family name first, given name second — the opposite of Western convention. The family name (xìng) is typically one character, while the given name (míng) is one or two characters. So a child named Wei Zhang would be called Zhang Wei in Chinese contexts." },
  { q: "What makes a good Chinese baby name?", a: "A good Chinese name balances several elements: beautiful characters with auspicious meanings, harmonious tones when spoken aloud, a favorable stroke count, and alignment with the five elements (wood, fire, earth, metal, water) based on the birth date. Many families consult a fortune teller or use traditional numerology (bazi) to choose an auspicious name." },
  { q: "What are the most popular Chinese baby names?", a: "Popular Chinese boy names include Mingzhe (bright and wise), Haoyu (grand universe), and Zichen (purple morning). Popular girl names include Yifei (flying like a swallow), Xinyi (heart of happiness), and Ruoxi (soft like the stream). Classic names like Wei (great), Fang (fragrant), and Jing (quiet) remain timeless favorites." },
  { q: "What are generational poems in Chinese naming?", a: "Many Chinese families follow a generational poem (班辈诗 bānbèi shī) — a poem written by an ancestor where each character designates the given name character for each successive generation. This practice, common in Southern China and among overseas Chinese communities, links children to their lineage and makes it easy to identify which generation someone belongs to." },
  { q: "Can Western families use Chinese names?", a: "Yes! Many Chinese names work beautifully for any family. Names like Ming (bright), Mei (beautiful), Long (dragon), Jade, and Lin (forest) are widely used internationally. If you want an authentic Chinese name, consider consulting with a native speaker to ensure the tones and characters convey your intended meaning." },
];

export default function ChineseNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#dc2626,#d97706)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-red-600">Home</a>
            <a href="/boy-names" className="hover:text-red-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-red-600">Girl Names</a>
            <a href="/chinese-names" className="text-red-600 font-bold">Chinese Names</a>
            <a href="/unique-names" className="hover:text-red-600">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#fff1f2,#fef9c3,#fff7ed)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6"><span style={{background:"linear-gradient(135deg,#dc2626,#d97706)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Chinese Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">Explore the profound tradition of Chinese naming. From classical characters to modern choices, find names that carry meaning, harmony, and cultural depth.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Art and Tradition of Chinese Baby Names</h2>
          <p>Choosing a Chinese baby name is one of the most significant decisions a family makes. In Chinese culture, a name is believed to shape a person&apos;s destiny, character, and fortune. Unlike Western naming conventions, Chinese names are constructed character by character — each with its own meaning, tone, and symbolic weight. The result is a name that is simultaneously a poem, a wish, and an identity.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Family Name First: The Chinese Naming Order</h3>
          <p>In Chinese tradition, the family name (姓 xìng) always comes first, followed by the given name (名 míng). This reflects the Confucian value of placing family and lineage above the individual. Common family names include <strong>Li</strong> (李), <strong>Wang</strong> (王), <strong>Zhang</strong> (张), <strong>Liu</strong> (刘), and <strong>Chen</strong> (陈). The given name is typically one or two characters, chosen carefully for their sound, meaning, and visual beauty.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">The Meaning of Characters</h3>
          <p>Each Chinese character (汉字 hànzì) carries rich meaning, and the selection of characters for a name is taken seriously. Parents often choose characters that represent virtues, natural beauty, or aspirations. <strong>Ruì</strong> (瑞) means auspicious, <strong>Yù</strong> (玉) means jade (precious and pure), <strong>Hào</strong> (浩) means vast and grand, <strong>Líng</strong> (玲) means delicate and tinkling like jade, and <strong>Měi</strong> (美) means beautiful. The combination of two characters allows for layered, poetic meanings.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">The Five Elements in Chinese Naming</h3>
          <p>Traditional Chinese naming often incorporates the five elements (五行 wǔxíng): wood (木), fire (火), earth (土), metal (金), and water (水). Based on the child&apos;s birth date and time — calculated using the bazi (eight characters) system — a fortune teller may determine which element the child lacks and recommend characters that supply it. For example, a child lacking the water element might receive a name containing characters associated with rivers or rain, such as <strong>Hǎi</strong> (海, sea) or <strong>Yuán</strong> (源, source).</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Generational Poems and Family Lineage</h3>
          <p>One of the most distinctive Chinese naming traditions is the generational poem (班辈诗 bānbèi shī). An ancestor composes a poem, and each successive generation takes its given-name character from the next word in that poem. This practice, especially common among Han Chinese families in southern China and overseas Chinese communities, creates an elegant family tree embedded in language itself. When two strangers meet and discover they share a generation character, they know exactly how they are related in the broader clan genealogy.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Modern Chinese Name Trends</h3>
          <p>Contemporary Chinese parents balance tradition with modernity. Single-character names like <strong>Xin</strong> (欣, joyful) and <strong>Jun</strong> (俊, handsome) are fashionable for their simplicity. Nature-inspired names like <strong>Chenxi</strong> (晨曦, morning light) and <strong>Muyun</strong> (暮云, evening clouds) reflect a romantic sensibility. Some families choose names that work phonetically in both Chinese and English, such as <strong>Anna</strong> (安娜), <strong>Leo</strong>, or <strong>Eva</strong>, easing cross-cultural life for their children.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Chinese Names FAQs</h2>
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
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
