import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Baby Names - Sacred Names with Deep Meaning | BabyNamePick",
  description: "Discover beautiful biblical baby names with meanings from the Bible. Explore Old Testament, New Testament, and Hebrew names with spiritual significance.",
  alternates: { canonical: "https://babynamepick.com/biblical-names" },
};

const faqs = [
  { q: "What are the most popular biblical baby names?", a: "The most popular biblical names include Noah, Elijah, Samuel, and Isaiah for boys, and Hannah, Naomi, Miriam, and Esther for girls. Names like Ezra, Caleb, and Abigail remain perennial favorites due to their strong biblical roots and beautiful meanings." },
  { q: "What is the difference between Old Testament and New Testament names?", a: "Old Testament names are largely Hebrew in origin — names like Abraham, Isaac, Moses, and Deborah carry the weight of the ancient Israelite tradition. New Testament names reflect Greek and Aramaic influences: names like Mary (Miriam), Peter (Petros), and Paul (Paulos) were shaped by the Hellenistic world of the first century." },
  { q: "Do biblical names have to be religious to use?", a: "Not at all. Many parents choose biblical names for their classic sound, historical depth, or cultural heritage rather than strictly religious reasons. Names like Jonah, Lydia, Phoebe, and Silas are widely used in secular contexts and appreciated for their timeless, literary quality." },
  { q: "What are some rare biblical names that aren't overly used?", a: "Lesser-known biblical gems include Selah (a musical term in the Psalms), Zipporah (wife of Moses), Amos (a prophet), Keturah (Abraham's wife), Jethro (Moses' father-in-law), and Tirzah (meaning 'pleasantness'). These names carry deep meaning while remaining beautifully uncommon." },
  { q: "How do I find the Hebrew meaning behind a biblical name?", a: "Our AI name generator can surface Hebrew meanings for any biblical name you enter. Generally, Hebrew names are descriptive — they often encode a prayer or declaration. For example, Nathaniel means 'God has given,' Elijah means 'my God is Yahweh,' and Abigail means 'my father's joy.'" },
];

export default function BiblicalNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#7c3aed,#a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-purple-600">Name Generator</a>
            <a href="/boy-names" className="hover:text-purple-600">Boy Names</a>
            <a href="/girl-names" className="hover:text-purple-600">Girl Names</a>
            <a href="/unique-names" className="hover:text-purple-600">Unique Names</a>
            <a href="/biblical-names" className="text-purple-600 font-bold">Biblical Names</a>
            <a href="/japanese-names" className="hover:text-purple-600">Japanese Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#f5f3ff,#ede9fe,#fdf4ff)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Biblical Baby Names - <span style={{background:"linear-gradient(135deg,#7c3aed,#d97706)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Timeless Names with Sacred Meaning</span></h1>
          <p className="text-lg text-gray-600 mb-8">Explore names rooted in scripture — from the ancient Hebrew of the Old Testament to the Greek world of the New Testament. Our AI helps you find a biblical name rich in history and meaning.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <NameGenerator />
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Enduring Power of Biblical Baby Names</h2>
          <p>Few naming traditions carry the depth and weight of biblical names. Spanning thousands of years of history, scripture, and spiritual reflection, biblical names have given parents across generations a vocabulary of meaning — names that function as prayers, declarations, and blessings all at once. Whether you are a person of deep faith or simply drawn to names with ancient resonance, the biblical tradition offers an extraordinary treasury to draw from.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Old Testament Names: Hebrew Roots and Patriarchal Strength</h3>
          <p>The Hebrew Bible — what Christians call the Old Testament — is the oldest and deepest vein of biblical naming. Names here are drawn from the language of ancient Israel and carry meanings that were often prophetic or descriptive of character. <strong>Abraham</strong> (meaning &quot;father of multitudes&quot;) was the founding patriarch of the Israelite people. <strong>Moses</strong>, possibly derived from the Egyptian &quot;mose&quot; (son) or the Hebrew &quot;drawn from the water,&quot; led a nation to freedom. <strong>David</strong> means &quot;beloved&quot; — a name carried by Israel&apos;s greatest king and the author of many Psalms.</p>
          <p>For girls, the Old Testament offers names of comparable beauty: <strong>Hannah</strong> (meaning &quot;grace&quot; or &quot;favor&quot;) was the mother of the prophet Samuel, her story of prayer and faithfulness one of scripture&apos;s most moving narratives. <strong>Ruth</strong>, meaning &quot;companion&quot; or &quot;friend,&quot; is celebrated for her loyalty. <strong>Deborah</strong> (meaning &quot;bee&quot;) was a prophetess and military leader — a bold, powerful name for a daughter.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">New Testament Names: Greek Influence and Early Christian Legacy</h3>
          <p>The New Testament introduces a different linguistic world — largely Greek, shaped by the Hellenistic culture of the Roman Empire. Names here carry the spirit of the early Christian communities spread across the Mediterranean. <strong>Peter</strong> (from the Greek &quot;petros,&quot; meaning &quot;rock&quot;) was the apostle Jesus called his foundation. <strong>Andrew</strong> (meaning &quot;manly&quot; or &quot;strong&quot;) was the first disciple called. <strong>Timothy</strong> means &quot;honoring God&quot; — a name beloved by the apostle Paul, who addressed two of his letters to young Timothy.</p>
          <p>For girls, the New Testament offers <strong>Mary</strong> (Miriam in Hebrew, meaning &quot;beloved&quot; or &quot;sea of bitterness&quot; — interpretations vary), the most celebrated name in Christian tradition. <strong>Lydia</strong>, a businesswoman in Acts, lends her name as a strong, independent choice. <strong>Phoebe</strong> (meaning &quot;radiant&quot;) was a deaconess commended by Paul — a bright, classical name with genuine biblical pedigree.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Hebrew Name Meanings: When a Name Is a Prayer</h3>
          <p>What makes Hebrew names especially powerful is the way they encode meaning. Ancient Israelite parents named their children with intention — each name a spoken hope or declaration. <strong>Nathaniel</strong> means &quot;God has given.&quot; <strong>Elijah</strong> means &quot;my God is Yahweh.&quot; <strong>Isaiah</strong> means &quot;salvation of the Lord.&quot; <strong>Ezra</strong> means &quot;helper.&quot; These are not merely beautiful sounds — they are compressed theology, a lifelong reminder of who the child is and what their parents believed at the moment of naming.</p>
          <p>Girls&apos; names carry this same weight: <strong>Abigail</strong> means &quot;my father&apos;s joy.&quot; <strong>Naomi</strong> means &quot;pleasantness.&quot; <strong>Miriam</strong> carries resonances of both bitterness and beloved. <strong>Keturah</strong> means &quot;incense&quot; — fragrant and rare. These layered meanings make biblical names a gift that goes on giving throughout a child&apos;s life.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Rare and Overlooked Biblical Names Worth Reviving</h3>
          <p>Beyond the well-known Noahs and Sarahs, the Bible is filled with extraordinary names waiting to be rediscovered. <strong>Selah</strong> — a mysterious term found throughout the Psalms, possibly a musical instruction — has an ethereal, meditative quality perfect for a child. <strong>Zipporah</strong>, wife of Moses, carries an exotic beauty. <strong>Amos</strong>, one of the twelve minor prophets, is short, strong, and literary. <strong>Tirzah</strong> means &quot;pleasantness&quot; and was both a woman&apos;s name and a city in ancient Israel. <strong>Jethro</strong>, Moses&apos; wise father-in-law, is rare enough to feel distinctive while carrying deep historical roots.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">Tips for Choosing a Biblical Name</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research the original Hebrew or Greek meaning — it may deepen your connection to the name</li>
            <li>Consider both the Old and New Testament for a wider range of styles and origins</li>
            <li>Look beyond the most popular biblical names for rarer gems with equally rich histories</li>
            <li>Think about how the name pairs with your family surname and any middle name</li>
            <li>Use our AI generator to explore variations and sibling name combinations</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Biblical Baby Name FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
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
