import NameGenerator from "@/components/NameGenerator";

const nameStyles = [
  { title: "Classic & Timeless", emoji: "🏛️", desc: "Elegant names that have stood the test of time", examples: "Alexander, Charlotte, William, Eleanor" },
  { title: "Modern & Trendy", emoji: "✨", desc: "Fresh, contemporary names rising in popularity", examples: "Kai, Luna, Milo, Aria" },
  { title: "Unique & Rare", emoji: "💎", desc: "One-of-a-kind names for a truly special child", examples: "Orion, Seraphina, Caspian, Elowen" },
  { title: "Nature-Inspired", emoji: "🌿", desc: "Beautiful names drawn from the natural world", examples: "River, Aurora, Jasper, Willow" },
  { title: "Biblical & Spiritual", emoji: "📖", desc: "Names with deep religious and spiritual roots", examples: "Ezra, Naomi, Gabriel, Ruth" },
  { title: "Royal & Noble", emoji: "👑", desc: "Regal names fit for kings and queens", examples: "Victoria, Frederick, Adelaide, Edmund" },
];

const faqs = [
  {
    q: "How does the AI baby name generator work?",
    a: "Our AI-powered generator uses a curated database of thousands of baby names from cultures around the world. Simply select your preferences — gender, style, origin, and more — and our algorithm will suggest personalized names with meanings, origins, and popularity ratings."
  },
  {
    q: "Is BabyNamePick completely free to use?",
    a: "Yes! BabyNamePick is 100% free. You can generate as many baby names as you want without creating an account or paying anything."
  },
  {
    q: "Can I search for names from a specific culture or origin?",
    a: "Absolutely! We support over 20 different cultural origins including English, Greek, Latin, Hebrew, Irish, Japanese, Korean, Chinese, Indian, Arabic, and many more."
  },
  {
    q: "How do I choose the perfect baby name?",
    a: "Consider these factors: 1) How it sounds with your last name, 2) The meaning and origin, 3) Whether it's easy to spell and pronounce, 4) Potential nicknames, 5) How popular or unique you want it to be. Our generator helps you explore all these dimensions."
  },
  {
    q: "Can I generate names that start with a specific letter?",
    a: "Yes! Use the 'Starting Letter' filter to find names beginning with any letter. This is great if you want sibling names to match or have a family naming tradition."
  },
  {
    q: "What name styles are available?",
    a: "We offer Classic & Timeless, Modern & Trendy, Unique & Rare, and Nature-Inspired styles. You can also select 'Any Style' to get a mix of different styles in your results."
  },
  {
    q: "Are the name meanings accurate?",
    a: "We research each name's etymology and meaning from authoritative sources. Name meanings can sometimes vary by culture and historical period, so we provide the most widely accepted interpretation."
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold gradient-text">BabyNamePick</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#generator" className="hover:text-purple-600 transition-colors">Name Generator</a>
            <a href="#styles" className="hover:text-purple-600 transition-colors">Browse Names</a>
            <a href="#tips" className="hover:text-purple-600 transition-colors">Naming Tips</a>
            <a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Find the <span className="gradient-text">Perfect Name</span>
            <br />for Your Baby
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our free AI-powered baby name generator to discover unique, meaningful names.
            Get personalized suggestions based on origin, style, and meaning — all matched to your preferences.
          </p>
          <a
            href="#generator"
            className="inline-block btn-primary text-white font-bold py-4 px-8 rounded-xl text-lg"
          >
            ✨ Start Generating Names
          </a>
          <div className="flex items-center justify-center gap-8 mt-10 text-sm text-gray-500">
            <span className="flex items-center gap-1">✅ 100% Free</span>
            <span className="flex items-center gap-1">🌍 20+ Origins</span>
            <span className="flex items-center gap-1">💡 AI-Powered</span>
            <span className="flex items-center gap-1">🔒 No Sign-up</span>
          </div>
        </div>
      </section>

      {/* Generator */}
      <section className="py-16 px-4" id="generator-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">AI Baby Name Generator</h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Set your preferences below and let our AI find the perfect names for your little one.
          </p>
          <NameGenerator />
        </div>
      </section>

      {/* Popular Names Gallery */}
      <section className="py-16 px-4 bg-white" id="popular">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            Trending Baby Names in 2026
          </h2>
          <p className="text-gray-500 text-center mb-10">The most popular names parents are choosing this year</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Liam", g: "👦", trend: "🔥" },
              { name: "Olivia", g: "👧", trend: "🔥" },
              { name: "Noah", g: "👦", trend: "📈" },
              { name: "Emma", g: "👧", trend: "📈" },
              { name: "Theodore", g: "👦", trend: "🔥" },
              { name: "Luna", g: "👧", trend: "🔥" },
              { name: "Kai", g: "👦", trend: "📈" },
              { name: "Aria", g: "👧", trend: "📈" },
              { name: "Ezra", g: "👦", trend: "🔥" },
              { name: "Isla", g: "👧", trend: "📈" },
              { name: "Atlas", g: "👦", trend: "🆕" },
              { name: "Aurora", g: "👧", trend: "🔥" },
            ].map((n, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-purple-50 border border-purple-100">
                <div className="flex items-center gap-2">
                  <span>{n.g}</span>
                  <span className="font-semibold text-gray-700">{n.name}</span>
                </div>
                <span className="text-sm">{n.trend}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Name Styles */}
      <section className="py-16 px-4" id="styles">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Explore Name Styles</h2>
          <p className="text-gray-500 text-center mb-10">Find names that match your taste and personality</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {nameStyles.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{s.desc}</p>
                <p className="text-xs text-purple-500 font-medium">e.g. {s.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content: Tips */}
      <section className="py-16 px-4 bg-white" id="tips">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Choose the Perfect Baby Name</h2>
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">🎵 Say It Out Loud</h3>
              <p>
                Test the full name — first, middle, and last — by saying it out loud. Does it flow naturally?
                Avoid combinations that sound like tongue twisters or create unintended word associations.
                A name like &quot;Alexander Stone&quot; rolls off the tongue, while some combinations might not sound as smooth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">📖 Research the Meaning</h3>
              <p>
                Every name tells a story. Understanding a name&apos;s meaning and origin can add a special
                layer of significance. For example, &quot;Aurora&quot; means &quot;dawn&quot; in Latin — perfect for a baby
                who represents a new beginning in your life.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">👥 Consider Nicknames</h3>
              <p>
                Think about potential nicknames and shortened versions. &quot;Elizabeth&quot; offers many options:
                Beth, Eliza, Lizzy, Liz, or Elle. Make sure you&apos;re happy with the common nicknames that
                might arise naturally.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">✍️ Check the Initials</h3>
              <p>
                Write out the initials of the full name to make sure they don&apos;t spell anything
                embarrassing. Also consider how the name looks written down — your child will write it
                thousands of times throughout their life.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">🌍 Think About Siblings</h3>
              <p>
                If you already have children or plan to have more, consider how sibling names sound together.
                They don&apos;t need to match, but a similar style or origin can create a nice cohesion.
                Avoid names that rhyme or sound too similar.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">📊 Balance Popularity</h3>
              <p>
                Decide how important uniqueness is to you. A very popular name means your child might share
                it with classmates, while a very unusual name might require constant spelling and pronunciation
                help. Our generator shows popularity ratings to help you find the right balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 hero-gradient">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Baby&apos;s Name?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of parents who have found the perfect name with BabyNamePick.
          </p>
          <a
            href="#generator"
            className="inline-block btn-primary text-white font-bold py-4 px-8 rounded-xl text-lg"
          >
            ✨ Generate Names Now — It&apos;s Free!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-3">Name Generator</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#generator" className="hover:text-white transition-colors">AI Name Generator</a></li>
                <li><a href="#popular" className="hover:text-white transition-colors">Trending Names</a></li>
                <li><a href="#styles" className="hover:text-white transition-colors">Browse by Style</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Boy Names</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Classic Boy Names</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modern Boy Names</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Unique Boy Names</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Girl Names</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Classic Girl Names</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modern Girl Names</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Unique Girl Names</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#tips" className="hover:text-white transition-colors">Naming Tips</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 BabyNamePick.com — Free AI Baby Name Generator</p>
            <p className="mt-2 text-gray-500">Made with ❤️ for parents-to-be everywhere</p>
          </div>
        </div>
      </footer>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
