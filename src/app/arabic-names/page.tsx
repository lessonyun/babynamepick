import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arabic Baby Names Generator - Islamic & Quranic Names | BabyNamePick",
  description: "Discover beautiful Arabic baby names with meanings rooted in Islam and Arabic culture. Explore Quranic names, compound names, and timeless classics for boys and girls.",
  alternates: { canonical: "https://babynamepick.com/arabic-names" },
};

const faqs = [
  { q: "Why is the meaning of a name so important in Arabic culture?", a: "In Islamic tradition, the Prophet Muhammad (peace be upon him) said: 'On the Day of Resurrection, you will be called by your names and the names of your fathers, so give yourselves good names.' This hadith establishes that a name carries moral weight. Parents choose names that reflect positive virtues, divine attributes, or historical figures of righteousness, believing the name shapes the child's character and identity." },
  { q: "What are the most popular Arabic baby names?", a: "For boys, Muhammad remains the most commonly given name in the world, with variants including Mohammed, Mohamed, and Mehmet. Other popular choices include Omar (flourishing), Ali (elevated), Ibrahim (father of nations), and Yusuf (God increases). For girls, Fatima (one who abstains), Aisha (she who lives), Maryam (beloved), Nour (light), and Layla (night) are beloved classics." },
  { q: "What are Abdul- compound names and how do they work?", a: "Compound names beginning with Abdul- (عبد ال) mean 'servant of' followed by one of the 99 names of Allah. For example, Abdullah means 'servant of God,' Abdulrahman means 'servant of the Most Merciful,' and Abdulaziz means 'servant of the Almighty.' These names are considered deeply honorable as they express devotion to God. The prefix 'Abd' can also stand alone or be combined as a compound without 'al.'" },
  { q: "What are Quranic names?", a: "Quranic names are names that appear in the Quran or are derived from Quranic vocabulary. These include names of prophets like Ibrahim, Musa, Isa, Idris, and Sulaiman, as well as names of Quranic concepts like Nour (light), Rahman (merciful), Karim (generous), and Sabr (patience). Many Muslim families prefer Quranic names for their sacred connection and guaranteed positive meaning." },
  { q: "Can non-Muslims use Arabic names?", a: "Absolutely. Arabic names have spread globally through culture, history, and the influence of Islam. Names like Layla, Zara, Nadia, Omar, and Jasmine are widely used across cultures and religions. Many Arabic names have beautiful universal meanings — Zara means 'blooming flower,' Nadia means 'hope,' and Jasmine is a fragrant flower — that resonate with families of all backgrounds." },
];

export default function ArabicNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#16a34a,#ca8a04)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/boy-names" className="hover:text-green-700">Boy Names</a>
            <a href="/girl-names" className="hover:text-green-700">Girl Names</a>
            <a href="/arabic-names" className="text-green-700 font-bold">Arabic Names</a>
            <a href="/unique-names" className="hover:text-green-700">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#f0fdf4,#fef9c3,#fefce8)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6"><span style={{background:"linear-gradient(135deg,#16a34a,#ca8a04)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Arabic Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">Explore the timeless beauty of Arabic names rooted in Islam, history, and culture. Find meaningful names that honor faith, virtue, and heritage.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Beauty and Meaning of Arabic Baby Names</h2>
          <p>Arabic is one of the world&apos;s great classical languages, and Arabic names carry within them centuries of poetry, theology, and cultural richness. Spoken by over 400 million people and understood by the world&apos;s 1.8 billion Muslims through the Quran, Arabic names resonate across continents — from Morocco to Indonesia, from Nigeria to the United Kingdom. Whether rooted in Islamic tradition or the broader Arab cultural heritage, Arabic names are chosen with profound intentionality.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Meaning as Sacred Responsibility</h3>
          <p>In Islam, naming a child is considered an act of faith. The Prophet Muhammad&apos;s guidance to choose &quot;good names&quot; has led generations of Muslim parents to select names with virtuous, uplifting meanings. Names like <strong>Hamid</strong> (praiseworthy), <strong>Rashid</strong> (rightly guided), <strong>Salim</strong> (peaceful), <strong>Amina</strong> (trustworthy), and <strong>Nour</strong> (light) reflect the qualities parents hope their children will embody. Negative-meaning names are traditionally avoided, and names that claim perfection belonging only to God are forbidden — hence &quot;Abdul-Khaliq&quot; (servant of the Creator) rather than simply &quot;al-Khaliq.&quot;</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Muhammad and Its Many Variants</h3>
          <p>Muhammad (محمد) — meaning &quot;the praised one&quot; — is estimated to be the most commonly given male name in the world. It carries the honor of being the name of the final prophet in Islam. Across cultures it takes many forms: <strong>Mohammed</strong>, <strong>Mohamed</strong>, <strong>Muhammed</strong>, <strong>Mehmet</strong> (Turkish), <strong>Mamadou</strong> (West African), and <strong>Hamid</strong> or <strong>Ahmad</strong> (derived from the same root). Many Muslim families name their son Muhammad as a first name and call him by a second given name in daily life.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Abdul- Compound Names</h3>
          <p>Among the most revered Arabic names are those formed with &quot;Abd&quot; (عبد), meaning &quot;servant&quot; or &quot;worshipper,&quot; combined with one of the 99 Beautiful Names of Allah. <strong>Abdullah</strong> (servant of God) and <strong>Abdulrahman</strong> (servant of the Most Merciful) are particularly beloved, as the Prophet said these two are among the most pleasing names to God. Other beautiful examples include <strong>Abdulkarim</strong> (servant of the Generous), <strong>Abdullatif</strong> (servant of the Subtle), and <strong>Abdussalam</strong> (servant of Peace).</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Quranic Names and Prophetic Names</h3>
          <p>The Quran names 25 prophets, all of whom are honored baby name sources: <strong>Ibrahim</strong> (Abraham), <strong>Musa</strong> (Moses), <strong>Isa</strong> (Jesus), <strong>Dawud</strong> (David), <strong>Sulaiman</strong> (Solomon), <strong>Yahya</strong> (John), and <strong>Yusuf</strong> (Joseph). The story of Yusuf is even called &quot;the most beautiful of stories&quot; in the Quran. Female names from the Quran and Islamic history include <strong>Maryam</strong> (Mary, mother of Jesus), <strong>Fatima</strong> (daughter of the Prophet), <strong>Khadija</strong> (first wife of the Prophet), and <strong>Asiya</strong> (wife of Pharaoh, one of the four greatest women in Islamic tradition).</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Arabic Names Across the World</h3>
          <p>The spread of Islam and Arab culture has given Arabic names a global footprint. In Turkey, names like <strong>Leyla</strong>, <strong>Fatma</strong>, and <strong>Hasan</strong> reflect Islamic heritage with Turkish phonology. In South Asia, names like <strong>Zainab</strong>, <strong>Amjad</strong>, and <strong>Hifza</strong> are common among Muslim families. In the West, names like <strong>Layla</strong>, <strong>Zara</strong>, <strong>Nadia</strong>, <strong>Amir</strong>, and <strong>Omar</strong> have crossed cultural boundaries and appear on children of all backgrounds, celebrated for their lyrical beauty and depth of meaning.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Arabic Names FAQs</h2>
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
