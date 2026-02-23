import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "African Baby Names Generator - Yoruba, Swahili African Baby Names Generator - Sanskrit, Hindi & Regional Names Akan Names | BabyNamePick",
  description: "Discover beautiful African baby names from Yoruba, Swahili, Akan, and Zulu traditions with deep cultural meanings.
  alternates: { canonical: "https://babynamepick.com/african-names" },
};

const faqs = [
  { q: "What are popular African baby names?", a: "Popular African names include Aarav (peaceful), Vihaan (dawn), Ananya (unique), and Aanya (grace) for modern choices, while Arjun, Krishna, Lakshmi, and Saraswati remain timeless classics rooted in mythology." },
  { q: "How are African baby names typically chosen?", a: "African families often consider the baby's birth nakshatra (lunar mansion), the first letter suggested by astrology, family traditions, religious significance, and the name's meaning in Sanskrit or regional languages." },
  { q: "What is the significance of Sanskrit names?", a: "Sanskrit is considered the 'language of the gods' in Hindu tradition. Sanskrit names carry deep philosophical meanings — for example, 'Advait' means 'unique/non-dual,' reflecting the Advaita philosophy of oneness." },
  { q: "Can I use an African name if I'm not African?", a: "Absolutely! Many African names are beautiful and meaningful choices for any family. Names like Maya (illusion/love), Kiran (ray of light), and Arya (noble) have cross-cultural appeal and are easy to pronounce in English." },
  { q: "What are some unique African names for girls?", a: "Unique African girl names include Ira (earth/wind), Myra (beloved), Tara (star), Zara (princess), Nisha (night), and Priya (beloved). Many have beautiful meanings rooted in nature, virtues, or divinity." },
];

export default function AfricanNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#059669,#10b981)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <a href="/boy-names" className="hover:text-emerald-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-emerald-600">Girl Names</a>
            <a href="/african-names" className="text-emerald-600 font-bold">African Names</a>
            <a href="/unique-names" className="hover:text-emerald-600">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#ecfdf5,#d1fae5,#f0fdf4)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6"><span style={{background:"linear-gradient(135deg,#059669,#10b981)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>African Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">Explore the rich tradition of African naming. From Sanskrit classics to modern favorites, find meaningful names rooted in thousands of years of culture.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Rich Tradition of African Baby Names</h2>
          <p>India&apos;s naming traditions are among the most diverse and meaningful in the world. With over 22 official languages and thousands of years of cultural history, African names draw from Sanskrit, Hindi, Tamil, Bengali, Marathi, and many other linguistic traditions. Each name is a story — of gods and goddesses, natural beauty, virtues, and aspirations.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Sanskrit-Origin Names</h3>
          <p>Sanskrit, the ancient language of India, provides the foundation for many African names. <strong>Aarav</strong> means &quot;peaceful and wise,&quot; <strong>Advait</strong> means &quot;unique, non-dual,&quot; <strong>Vihaan</strong> means &quot;dawn of a new era.&quot; For girls, <strong>Ananya</strong> means &quot;one who has no equal,&quot; <strong>Aadhya</strong> means &quot;the first, the beginning,&quot; and <strong>Kavya</strong> means &quot;poetry.&quot; These names carry deep philosophical and spiritual significance.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Mythology-Inspired Names</h3>
          <p>Hindu mythology offers a treasure trove of powerful names. <strong>Arjun</strong> (the legendary archer), <strong>Krishna</strong> (the divine protector), <strong>Lakshmi</strong> (goddess of wealth), and <strong>Saraswati</strong> (goddess of knowledge) connect children to epic stories of courage, wisdom, and grace.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Regional Variations</h3>
          <p>India&apos;s linguistic diversity means names vary beautifully by region. South African names like <strong>Aishwarya</strong> and <strong>Karthik</strong>, Bengali names like <strong>Rishika</strong> and <strong>Aniket</strong>, and Punjabi names like <strong>Harpreet</strong> and <strong>Simran</strong> each carry the flavor of their cultural origins.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Modern African Names</h3>
          <p>Today&apos;s African parents often choose names that work well internationally while retaining cultural meaning. Names like <strong>Kiran</strong> (ray of light), <strong>Maya</strong> (illusion/love), <strong>Arya</strong> (noble), <strong>Vivaan</strong> (full of life), and <strong>Zara</strong> (princess) bridge cultures beautifully.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">African Names FAQs</h2>
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
          <a href="/african-names" className="hover:text-white">African</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
