import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "African Baby Names Generator - Yoruba, Swahili & Akan Names | BabyNamePick",
  description: "Discover beautiful African baby names from Yoruba, Swahili, Akan, and Zulu traditions with deep cultural meanings and naming ceremonies.",
  alternates: { canonical: "https://babynamepick.com/african-names" },
};

const faqs = [
  { q: "How are babies named in African cultures?", a: "African naming traditions vary widely but often involve ceremonies. In Yoruba culture, a naming ceremony (Isomoloruko) is held on the 7th or 9th day. Names often reflect circumstances of birth, family hopes, or spiritual beliefs. Many cultures believe a name shapes a child's destiny." },
  { q: "What are Akan day-names?", a: "The Akan people of Ghana name children based on their birth day. Boys born on Friday are Kofi, Saturday are Kwame, Monday are Kwadwo. Girls born on Friday are Afua, Monday are Adjoa. Former UN Secretary-General Kofi Annan was born on a Friday." },
  { q: "What are popular Swahili baby names?", a: "Popular Swahili names include Amani (peace), Zuri (beautiful), Imani (faith), Jabari (brave), Nia (purpose), and Baraka (blessing). Swahili names are used across East Africa and carry beautiful meanings rooted in everyday virtues." },
  { q: "Do African names always have meanings?", a: "Yes, virtually all African names carry deep meaning. Unlike many Western names, African names are chosen specifically for their meaning — reflecting hopes, circumstances, or spiritual beliefs. A name like Chukwuemeka (Igbo) means 'God has done great things.'" },
  { q: "Can non-African families use African names?", a: "Many African names have become globally beloved — Amara (grace), Zara (flower), Kai (used in many cultures), and Nia (purpose). These names are beautiful choices for any family who appreciates their meaning and heritage." },
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
          <p className="text-lg text-gray-600 mb-8">Explore the rich naming traditions of Africa — from Yoruba ceremonies to Swahili meanings, find names that carry the strength and beauty of an entire continent.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Rich Heritage of African Baby Names</h2>
          <p>Africa, with its 54 countries and over 2,000 languages, offers perhaps the most diverse naming traditions on Earth. African names are never random — each one tells a story of family, faith, hope, and heritage. In many African cultures, naming a child is a sacred act that shapes their destiny.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Yoruba Naming Traditions (Nigeria)</h3>
          <p>The Yoruba people hold the <em>Isomoloruko</em> (naming ceremony) on the 7th or 9th day after birth. Names like <strong>Oluwaseun</strong> (&quot;God has done well&quot;), <strong>Ayodele</strong> (&quot;joy has come home&quot;), and <strong>Adebayo</strong> (&quot;the crown meets joy&quot;) reflect gratitude and aspiration. Many Yoruba names begin with &quot;Olu-&quot; (God) or &quot;Ade-&quot; (crown).</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Swahili Names (East Africa)</h3>
          <p>Swahili, spoken across Kenya, Tanzania, and beyond, offers melodic names with clear meanings. <strong>Amani</strong> (peace), <strong>Zuri</strong> (beautiful), <strong>Jabari</strong> (brave), <strong>Imani</strong> (faith), and <strong>Baraka</strong> (blessing) are beloved across East Africa. Swahili names blend Bantu and Arabic influences.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Akan Day-Names (Ghana)</h3>
          <p>The Akan tradition of naming children after their birth day is one of Africa&apos;s most famous customs. <strong>Kwame</strong> (Saturday boy), <strong>Kofi</strong> (Friday boy), <strong>Ama</strong> (Saturday girl), and <strong>Afua</strong> (Friday girl). This system connects each child to the spiritual energy of their birth day.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Ubuntu Philosophy in Naming</h3>
          <p>The Southern African concept of <em>Ubuntu</em> (&quot;I am because we are&quot;) influences naming deeply. Names often reflect community bonds: <strong>Thandiwe</strong> (&quot;beloved&quot; in Zulu), <strong>Sipho</strong> (&quot;gift&quot; in Xhosa), and <strong>Tendai</strong> (&quot;be thankful&quot; in Shona) express the interconnection between individual and community.</p>
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
          <a href="/" className="hover:text-white">Home</a><a href="/boy-names" className="hover:text-white">Boy Names</a><a href="/girl-names" className="hover:text-white">Girl Names</a><a href="/unique-names" className="hover:text-white">Unique Names</a><a href="/biblical-names" className="hover:text-white">Biblical</a><a href="/japanese-names" className="hover:text-white">Japanese</a><a href="/korean-names" className="hover:text-white">Korean</a><a href="/indian-names" className="hover:text-white">Indian</a><a href="/chinese-names" className="hover:text-white">Chinese</a><a href="/arabic-names" className="hover:text-white">Arabic</a><a href="/spanish-names" className="hover:text-white">Spanish</a><a href="/african-names" className="hover:text-white">African</a><a href="/celtic-names" className="hover:text-white">Celtic</a><a href="/hawaiian-names" className="hover:text-white">Hawaiian</a><a href="/greek-names" className="hover:text-white">Greek</a><a href="/royal-names" className="hover:text-white">Royal</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
