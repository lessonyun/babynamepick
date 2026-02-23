import NameGenerator from "@/components/NameGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Boy Name Generator - Find the Perfect Boy Name | BabyNamePick",
  description: "Discover unique, meaningful boy names with our free AI-powered generator. Browse classic, modern, and unique boy names with meanings and origins.",
  alternates: { canonical: "https://babynamepick.com/boy-names" },
};

const faqs = [
  { q: "What are the most popular boy names in 2026?", a: "The most popular boy names in 2026 include Liam, Noah, Theodore, Kai, Ezra, and Atlas. Classic names like William and Alexander remain strong, while modern choices like Milo and Finn continue to rise." },
  { q: "How do I choose a strong boy name?", a: "Consider the meaning (names meaning 'strong' or 'brave'), how it sounds with your last name, potential nicknames, and cultural significance. Names like Alexander (defender), Ethan (strong), and Gabriel (God is my strength) are popular strong choices." },
  { q: "What are unique boy names that aren't too unusual?", a: "Names like Jasper, Rowan, Ezra, Atlas, and Orion are unique enough to stand out but familiar enough to be easily recognized and spelled." },
  { q: "Should I choose a classic or modern boy name?", a: "Both have advantages. Classic names (William, James, Henry) are timeless and professional. Modern names (Kai, Milo, Arlo) feel fresh and contemporary. Consider your family's style and how the name will age." },
  { q: "What boy names have the best meanings?", a: "Theodore means 'gift of God,' Alexander means 'defender of the people,' Benjamin means 'son of the right hand,' and Felix means 'happy and fortunate.' Our generator shows meanings for every name suggestion." },
];

export default function BoyNames() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold" style={{background:"linear-gradient(135deg,#3b82f6,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-blue-600">Name Generator</a>
            <a href="/boy-names" className="text-blue-600 font-bold">Boy Names</a>
            <a href="/girl-names" className="hover:text-blue-600">Girl Names</a>
            <a href="/unique-names" className="hover:text-blue-600">Unique Names</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4" style={{background:"linear-gradient(135deg,#eff6ff,#e0e7ff,#f0f9ff)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">AI <span style={{background:"linear-gradient(135deg,#3b82f6,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Boy Name</span> Generator</h1>
          <p className="text-lg text-gray-600 mb-8">Find the perfect name for your baby boy. Our AI suggests classic, modern, and unique boy names with meanings and origins.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <NameGenerator />
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">How to Choose the Perfect Boy Name</h2>
          <p>Choosing a name for your baby boy is one of the most exciting decisions you&apos;ll make as a parent. The right name will become a fundamental part of your son&apos;s identity, accompanying him through every stage of life — from his first day of school to his wedding day and beyond.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Classic Boy Names That Never Go Out of Style</h3>
          <p>Timeless names like <strong>Alexander</strong>, <strong>William</strong>, <strong>Benjamin</strong>, and <strong>Theodore</strong> have remained popular for centuries. These names carry a sense of strength and sophistication. Alexander, meaning &quot;defender of the people,&quot; has been borne by kings, emperors, and leaders throughout history. William, meaning &quot;resolute protector,&quot; continues to rank in the top 10 boy names year after year.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Modern Boy Names Rising in Popularity</h3>
          <p>If you&apos;re looking for something more contemporary, names like <strong>Kai</strong> (meaning &quot;sea&quot; in Hawaiian), <strong>Milo</strong> (meaning &quot;gracious&quot;), <strong>Ezra</strong> (meaning &quot;helper&quot;), and <strong>Arlo</strong> (meaning &quot;fortified hill&quot;) are trending upward. These names feel fresh and distinctive while still being easy to pronounce and spell.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Nature-Inspired Boy Names</h3>
          <p>For parents who love the outdoors, nature-inspired names offer wonderful options: <strong>River</strong>, <strong>Jasper</strong> (a precious stone), <strong>Forrest</strong>, <strong>Cedar</strong>, and <strong>Sage</strong>. These names connect your child to the natural world and carry a sense of calm strength.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Tips for Choosing Your Son&apos;s Name</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Say the full name out loud — first, middle, and last — to check the flow</li>
            <li>Consider the meaning and origin of the name</li>
            <li>Think about potential nicknames (both ones you like and ones kids might create)</li>
            <li>Check the initials don&apos;t spell anything awkward</li>
            <li>Consider how the name pairs with sibling names if applicable</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Boy Name FAQs</h2>
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
