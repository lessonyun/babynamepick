import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Baby Names Generator - Regal & Noble Names | BabyNamePick",
  description: "Discover elegant royal baby names from European, Asian, and African monarchies. Find regal, noble names with aristocratic heritage for your baby.",
  alternates: { canonical: "https://babynamepick.com/royal-names" },
};

const faqs = [
  { q: "What are the most popular royal baby names?", a: "Classic royal names include Charlotte, George, William, Elizabeth, Victoria, Alexander, Catherine, and James. These names have been carried by monarchs across centuries and multiple European royal houses." },
  { q: "Are royal names only European?", a: "Not at all! Royal names span every culture. Japanese imperial names like Naruhito and Masako, Thai royal names like Vajiralongkorn, Ethiopian names like Haile Selassie, and Indian maharaja names like Maharana offer diverse regal choices." },
  { q: "Do royal names affect how people perceive a child?", a: "Studies suggest names associated with royalty and nobility can carry positive connotations of elegance, strength, and leadership. However, the most important factor is that parents love the name they choose." },
  { q: "What royal names work well in modern times?", a: "Names like Charlotte, Henry, Eleanor, Louis, Beatrice, and Archie have proven to be both royal and thoroughly modern. They carry regal heritage without feeling stuffy or outdated." },
  { q: "Can I name my baby after a living royal?", a: "Absolutely! Many parents choose names inspired by current royals. Charlotte, George, and Louis saw huge popularity spikes after the British royal children were named. It's a wonderful way to honor tradition." },
];

export default function RoyalNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👑</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#b45309,#d97706)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-amber-700">Home</a>
            <a href="/boy-names" className="hover:text-amber-700">Boy Names</a>
            <a href="/girl-names" className="hover:text-amber-700">Girl Names</a>
            <a href="/royal-names" className="text-amber-700 font-bold">Royal Names</a>
            <a href="/unique-names" className="hover:text-amber-700">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#fffbeb,#fef3c7,#fdf2f8)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">👑 <span style={{background:"linear-gradient(135deg,#b45309,#d97706)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Royal Baby Names</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">Give your child a name fit for royalty. Explore elegant, noble names from monarchies around the world — from British castles to Japanese imperial courts.</p>
        </div>
      </section>

      <section className="py-12 px-4"><NameGenerator /></section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Names That Echo Through Royal Halls</h2>
          <p>Royal names carry centuries of history, power, and elegance. From the halls of Buckingham Palace to the Chrysanthemum Throne of Japan, monarchs have bestowed names upon their children that resonate with meaning, tradition, and destiny. These are names that command respect while remaining timelessly beautiful.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">British Royal Favorites</h3>
          <p>The British monarchy has given the world some of its most beloved names. <strong>Elizabeth</strong> — carried by two of Britain&apos;s longest-reigning monarchs — means &quot;pledged to God.&quot; <strong>Victoria</strong> defined an era. <strong>Charlotte</strong>, <strong>George</strong>, and <strong>Louis</strong> gained fresh popularity with the Cambridge children. <strong>Henry</strong> (Harry) has been borne by eight kings.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">European Royal Names</h3>
          <p>Beyond Britain, European royal houses offer stunning options. <strong>Frederik</strong> from Denmark, <strong>Leonor</strong> from Spain, <strong>Estelle</strong> from Sweden, <strong>Gabriella</strong> from Monaco, and <strong>Amalia</strong> from the Netherlands. French royalty gave us <strong>Louis</strong>, <strong>Marie</strong>, and <strong>Philippe</strong>. Russian tsars brought us <strong>Alexandra</strong>, <strong>Anastasia</strong>, and <strong>Nikolai</strong>.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Asian & African Royal Names</h3>
          <p>The Japanese imperial family favors names ending in &quot;-hito&quot; (benevolence) for males: <strong>Naruhito</strong>, <strong>Akihito</strong>. Thai royal names like <strong>Maha</strong> (great) carry Sanskrit roots. African kingdoms offer majestic names like <strong>Makeda</strong> (Queen of Sheba), <strong>Nzinga</strong> (Angolan warrior queen), and <strong>Kwame</strong> from Ghanaian royalty.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Choosing a Royal Name Today</h3>
          <p>You don&apos;t need a title to give your child a regal name. The beauty of royal names is that they&apos;ve been tested by time. They work in formal settings, on playgrounds, and in boardrooms. A name like <strong>Eleanor</strong>, <strong>Arthur</strong>, <strong>Beatrice</strong>, or <strong>Sebastian</strong> gives your child an instant air of dignity and grace.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Royal Names FAQs</h2>
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
          <a href="/royal-names" className="hover:text-white">Royal</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
