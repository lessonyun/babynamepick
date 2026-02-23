import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celtic Baby Names Generator - Irish, Scottish & Welsh Names | BabyNamePick",
  description: "Discover enchanting Celtic baby names from Irish, Scottish, and Welsh traditions with mystical meanings and ancient Gaelic origins.",
  alternates: { canonical: "https://babynamepick.com/celtic-names" },
};

const faqs = [
  { q: "What makes Celtic names unique?", a: "Celtic names carry the magic of ancient traditions — they're deeply connected to nature, mythology, and the spiritual world. Names like Niamh (brightness), Cillian (war), and Saoirse (freedom) carry thousands of years of history from Ireland, Scotland, and Wales." },
  { q: "How do you pronounce Irish names?", a: "Irish names follow Gaelic pronunciation rules: Siobhán = shi-VAWN, Caoimhe = KEE-va, Niamh = NEEV, Oisín = uh-SHEEN, Saoirse = SEER-sha. The spelling looks unfamiliar but the sounds are beautiful once you learn them." },
  { q: "What are popular Scottish baby names?", a: "Popular Scottish names include Isla (island), Eilidh (sun), Hamish (supplanter), Lachlan (land of lakes), Fiona (fair), and Angus (one strength). Many Scottish names reflect the rugged Highland landscape." },
  { q: "Are Welsh names different from Irish names?", a: "Yes! Welsh names have their own distinct character. Rhiannon (great queen), Gwendolyn (white ring), Dylan (son of the sea), and Cerys (love) are distinctly Welsh. Welsh uses 'll' and 'dd' sounds not found in Irish Gaelic." },
  { q: "What Celtic names work well internationally?", a: "Names like Rowan (little red-haired one), Finn (fair), Brenna (raven), Declan (full of goodness), Nora (honor), and Dylan (sea) are Celtic names that are easy to pronounce in English and many other languages." },
];

export default function CelticNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">☘️</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#047857,#059669)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/boy-names" className="hover:text-green-700">Boy Names</a>
            <a href="/girl-names" className="hover:text-green-700">Girl Names</a>
            <a href="/celtic-names" className="text-green-700 font-bold">Celtic Names</a>
            <a href="/unique-names" className="hover:text-green-700">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#ecfdf5,#d1fae5,#f0fdf4)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">☘️ <span style={{background:"linear-gradient(135deg,#047857,#059669)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Celtic Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">From the misty hills of Ireland to the Scottish Highlands, discover enchanting Celtic names steeped in mythology, nature, and ancient wisdom.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Enchanting Names from Ancient Celtic Traditions</h2>
          <p>Celtic names carry the whisper of ancient forests, the crash of Atlantic waves, and the wisdom of druids. The Celtic peoples — Irish, Scottish, Welsh, Cornish, and Breton — created names of extraordinary beauty and depth. These names have survived millennia because they connect us to something primal and magical.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Irish Gaelic Names</h3>
          <p>Irish names are perhaps the most recognizable Celtic names. <strong>Saoirse</strong> (&quot;freedom&quot;) gained global fame through actress Saoirse Ronan. <strong>Niamh</strong> (&quot;brightness&quot;) comes from the Land of Youth in Irish mythology. <strong>Cillian</strong> (&quot;war&quot;, &quot;strife&quot;) and <strong>Oisín</strong> (&quot;little deer&quot;) connect to legendary heroes. <strong>Aoife</strong> (&quot;beautiful, radiant&quot;) was a fierce warrior queen.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Scottish Highland Names</h3>
          <p>Scottish names reflect the rugged beauty of the Highlands. <strong>Isla</strong> — named after a Scottish island — has become one of the most popular names worldwide. <strong>Lachlan</strong> (&quot;from the land of lakes&quot;), <strong>Hamish</strong> (Scottish form of James), <strong>Eilidh</strong> (&quot;sun, radiance&quot;), and <strong>Callum</strong> (&quot;dove&quot;) carry Highland strength and grace.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Welsh Names</h3>
          <p>Welsh names have a melodic, distinctive quality. <strong>Rhiannon</strong> — the great queen of Welsh mythology — inspired Fleetwood Mac&apos;s famous song. <strong>Dylan</strong> (&quot;son of the sea&quot;), <strong>Gwendolyn</strong> (&quot;white ring&quot;), <strong>Cerys</strong> (&quot;love&quot;), and <strong>Gareth</strong> (&quot;gentle&quot;) showcase the musicality of the Welsh language.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Nature and Mythology</h3>
          <p>Celtic names are deeply intertwined with the natural world. <strong>Rowan</strong> (a sacred tree), <strong>Brenna</strong> (&quot;raven&quot;), <strong>Ailsa</strong> (&quot;fairy rock&quot;), <strong>Cormac</strong> (&quot;son of the chariot&quot;), and <strong>Fern</strong> reflect the Celtic reverence for nature. Many names reference animals, trees, seasons, and the elements — connecting children to the living landscape.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Celtic Names FAQs</h2>
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
