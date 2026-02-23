import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Girl Name Generator - Find the Perfect Girl Name | BabyNamePick",
  description: "Discover beautiful, meaningful girl names with our free AI-powered generator. Browse classic, modern, and unique girl names with meanings and origins.",
  alternates: { canonical: "https://babynamepick.com/girl-names" },
};

const faqs = [
  { q: "What are the most popular girl names in 2026?", a: "Top girl names in 2026 include Olivia, Luna, Aria, Isla, Aurora, and Charlotte. Nature-inspired names like Willow and Iris are also trending strongly." },
  { q: "What are beautiful girl names with deep meanings?", a: "Aurora means 'dawn,' Seraphina means 'fiery,' Luna means 'moon,' Aria means 'melody,' and Charlotte means 'free woman.' Each carries a beautiful story behind it." },
  { q: "What are unique girl names that are easy to pronounce?", a: "Names like Elowen, Calista, Isolde, Nova, and Zara are distinctive yet straightforward. They stand out without causing spelling confusion." },
  { q: "How do I pick a girl name that ages well?", a: "Choose names that work for both a child and an adult. Names like Eleanor, Victoria, and Catherine transition beautifully from childhood to professional life. Avoid overly trendy names that may feel dated in 20 years." },
  { q: "What girl names go well with common last names?", a: "Longer, more elegant names like Elizabeth, Josephine, and Alexandra pair well with short last names, while shorter names like Ivy, Zara, and Wren complement longer surnames." },
];

export default function GirlNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#ec4899,#a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-pink-600">Name Generator</a>
            <a href="/boy-names" className="hover:text-pink-600">Boy Names</a>
            <a href="/girl-names" className="text-pink-600 font-bold">Girl Names</a>
            <a href="/unique-names" className="hover:text-pink-600">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#fdf2f8,#fce7f3,#faf5ff)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">AI <span style={{background:"linear-gradient(135deg,#ec4899,#a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Girl Name</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">Find the perfect name for your baby girl. Explore elegant, modern, and unique girl names with beautiful meanings.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <NameGenerator />
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">How to Choose the Perfect Girl Name</h2>
          <p>Naming your baby girl is a beautiful journey. The name you choose will shape how the world sees her and how she sees herself. From elegant classics to fresh modern choices, there&apos;s a world of beautiful girl names waiting to be discovered.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Elegant Classic Girl Names</h3>
          <p>Timeless names like <strong>Charlotte</strong> (meaning &quot;free woman&quot;), <strong>Eleanor</strong> (meaning &quot;bright, shining one&quot;), <strong>Victoria</strong> (meaning &quot;victory&quot;), and <strong>Elizabeth</strong> (meaning &quot;pledged to God&quot;) have graced generations of women. These names carry a sense of grace, strength, and sophistication that never goes out of style.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Modern Girl Names on the Rise</h3>
          <p>Contemporary favorites include <strong>Luna</strong> (the moon), <strong>Aria</strong> (a melody), <strong>Nova</strong> (a new star), <strong>Isla</strong> (island), and <strong>Willow</strong> (graceful and slender). These names feel both poetic and powerful, reflecting modern parents&apos; desire for names that are both beautiful and meaningful.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Nature-Inspired Girl Names</h3>
          <p>Nature offers some of the most beautiful girl names: <strong>Aurora</strong> (dawn), <strong>Iris</strong> (rainbow), <strong>Hazel</strong> (the hazelnut tree), <strong>Dahlia</strong> (a beautiful flower), <strong>Wren</strong> (a small songbird), and <strong>Meadow</strong>. These names connect your daughter to the beauty of the natural world.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Finding Her Perfect Name</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consider how the name sounds when called across a playground and in a boardroom</li>
            <li>Research the meaning — it can become a source of pride for your daughter</li>
            <li>Think about middle name pairings for a harmonious full name</li>
            <li>Say the name with common terms of endearment to check it feels natural</li>
            <li>Consider family names or cultural traditions that matter to you</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Girl Name FAQs</h2>
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
        <div className="mt-3 flex justify-center gap-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/boy-names" className="hover:text-white">Boy Names</a>
          <a href="/girl-names" className="hover:text-white">Girl Names</a>
          <a href="/unique-names" className="hover:text-white">Unique Names</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))})}} />
    </main>
  );
}
