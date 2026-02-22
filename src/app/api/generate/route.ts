import { NextRequest, NextResponse } from "next/server";

interface NameResult {
  name: string;
  meaning: string;
  origin: string;
  popularity: string;
  gender: string;
}

const nameDatabase: Record<string, NameResult[]> = {
  boy_classic: [
    { name: "Alexander", meaning: "Defender of the people", origin: "Greek", popularity: "★★★★★", gender: "boy" },
    { name: "William", meaning: "Resolute protector", origin: "Germanic", popularity: "★★★★★", gender: "boy" },
    { name: "Theodore", meaning: "Gift of God", origin: "Greek", popularity: "★★★★☆", gender: "boy" },
    { name: "Benjamin", meaning: "Son of the right hand", origin: "Hebrew", popularity: "★★★★★", gender: "boy" },
    { name: "Sebastian", meaning: "Venerable, revered", origin: "Latin", popularity: "★★★★☆", gender: "boy" },
    { name: "Nathaniel", meaning: "Gift of God", origin: "Hebrew", popularity: "★★★☆☆", gender: "boy" },
    { name: "Frederick", meaning: "Peaceful ruler", origin: "Germanic", popularity: "★★★☆☆", gender: "boy" },
    { name: "Edmund", meaning: "Wealthy protector", origin: "English", popularity: "★★☆☆☆", gender: "boy" },
  ],
  boy_modern: [
    { name: "Kai", meaning: "Sea, ocean", origin: "Hawaiian", popularity: "★★★★☆", gender: "boy" },
    { name: "Liam", meaning: "Strong-willed warrior", origin: "Irish", popularity: "★★★★★", gender: "boy" },
    { name: "Ezra", meaning: "Helper, aid", origin: "Hebrew", popularity: "★★★★☆", gender: "boy" },
    { name: "Milo", meaning: "Gracious, soldier", origin: "Germanic", popularity: "★★★★☆", gender: "boy" },
    { name: "Arlo", meaning: "Fortified hill", origin: "English", popularity: "★★★☆☆", gender: "boy" },
    { name: "Finn", meaning: "Fair, white", origin: "Irish", popularity: "★★★★☆", gender: "boy" },
    { name: "Rowan", meaning: "Little red-haired one", origin: "Irish", popularity: "★★★☆☆", gender: "boy" },
    { name: "Atlas", meaning: "Bearer of the heavens", origin: "Greek", popularity: "★★★☆☆", gender: "boy" },
  ],
  boy_unique: [
    { name: "Orion", meaning: "Rising in the sky", origin: "Greek", popularity: "★★☆☆☆", gender: "boy" },
    { name: "Zephyr", meaning: "West wind", origin: "Greek", popularity: "★☆☆☆☆", gender: "boy" },
    { name: "Caspian", meaning: "Of the Caspian Sea", origin: "English", popularity: "★☆☆☆☆", gender: "boy" },
    { name: "Leander", meaning: "Lion man", origin: "Greek", popularity: "★☆☆☆☆", gender: "boy" },
    { name: "Idris", meaning: "Ardent lord", origin: "Welsh", popularity: "★★☆☆☆", gender: "boy" },
    { name: "Stellan", meaning: "Calm, peaceful", origin: "Swedish", popularity: "★☆☆☆☆", gender: "boy" },
  ],
  boy_nature: [
    { name: "River", meaning: "Flowing body of water", origin: "English", popularity: "★★★☆☆", gender: "boy" },
    { name: "Sage", meaning: "Wise one, herb", origin: "Latin", popularity: "★★★☆☆", gender: "boy" },
    { name: "Jasper", meaning: "Bringer of treasure", origin: "Persian", popularity: "★★★☆☆", gender: "boy" },
    { name: "Forrest", meaning: "Dweller near the woods", origin: "English", popularity: "★★☆☆☆", gender: "boy" },
    { name: "Cedar", meaning: "Cedar tree", origin: "English", popularity: "★☆☆☆☆", gender: "boy" },
    { name: "Flint", meaning: "Hard quartz rock", origin: "English", popularity: "★☆☆☆☆", gender: "boy" },
  ],
  girl_classic: [
    { name: "Charlotte", meaning: "Free woman", origin: "French", popularity: "★★★★★", gender: "girl" },
    { name: "Eleanor", meaning: "Bright, shining one", origin: "French", popularity: "★★★★☆", gender: "girl" },
    { name: "Victoria", meaning: "Victory", origin: "Latin", popularity: "★★★★☆", gender: "girl" },
    { name: "Elizabeth", meaning: "Pledged to God", origin: "Hebrew", popularity: "★★★★★", gender: "girl" },
    { name: "Catherine", meaning: "Pure", origin: "Greek", popularity: "★★★★☆", gender: "girl" },
    { name: "Margaret", meaning: "Pearl", origin: "Greek", popularity: "★★★☆☆", gender: "girl" },
    { name: "Josephine", meaning: "God will increase", origin: "French", popularity: "★★★☆☆", gender: "girl" },
    { name: "Adelaide", meaning: "Noble natured", origin: "Germanic", popularity: "★★☆☆☆", gender: "girl" },
  ],
  girl_modern: [
    { name: "Luna", meaning: "Moon", origin: "Latin", popularity: "★★★★★", gender: "girl" },
    { name: "Aria", meaning: "Air, melody", origin: "Italian", popularity: "★★★★★", gender: "girl" },
    { name: "Nova", meaning: "New", origin: "Latin", popularity: "★★★★☆", gender: "girl" },
    { name: "Willow", meaning: "Graceful, slender", origin: "English", popularity: "★★★★☆", gender: "girl" },
    { name: "Isla", meaning: "Island", origin: "Scottish", popularity: "★★★★★", gender: "girl" },
    { name: "Maya", meaning: "Water, illusion", origin: "Sanskrit", popularity: "★★★★☆", gender: "girl" },
    { name: "Zara", meaning: "Princess, blooming flower", origin: "Arabic", popularity: "★★★☆☆", gender: "girl" },
    { name: "Ivy", meaning: "Faithfulness", origin: "English", popularity: "★★★★☆", gender: "girl" },
  ],
  girl_unique: [
    { name: "Seraphina", meaning: "Fiery, ardent", origin: "Hebrew", popularity: "★★☆☆☆", gender: "girl" },
    { name: "Elowen", meaning: "Elm tree", origin: "Cornish", popularity: "★☆☆☆☆", gender: "girl" },
    { name: "Calista", meaning: "Most beautiful", origin: "Greek", popularity: "★☆☆☆☆", gender: "girl" },
    { name: "Isolde", meaning: "Ice ruler", origin: "Welsh", popularity: "★☆☆☆☆", gender: "girl" },
    { name: "Ondine", meaning: "Little wave", origin: "French", popularity: "★☆☆☆☆", gender: "girl" },
    { name: "Thessaly", meaning: "From Thessaly", origin: "Greek", popularity: "★☆☆☆☆", gender: "girl" },
  ],
  girl_nature: [
    { name: "Aurora", meaning: "Dawn", origin: "Latin", popularity: "★★★★☆", gender: "girl" },
    { name: "Iris", meaning: "Rainbow", origin: "Greek", popularity: "★★★☆☆", gender: "girl" },
    { name: "Hazel", meaning: "Hazelnut tree", origin: "English", popularity: "★★★★☆", gender: "girl" },
    { name: "Dahlia", meaning: "Valley flower", origin: "Scandinavian", popularity: "★★★☆☆", gender: "girl" },
    { name: "Wren", meaning: "Small bird", origin: "English", popularity: "★★★☆☆", gender: "girl" },
    { name: "Meadow", meaning: "Field of grass", origin: "English", popularity: "★★☆☆☆", gender: "girl" },
  ],
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { gender = "either", style = "modern" } = body;

  let results: NameResult[] = [];

  const genders = gender === "either" ? ["boy", "girl"] : [gender];
  const styles = style === "any" ? ["classic", "modern", "unique", "nature"] : [style];

  for (const g of genders) {
    for (const s of styles) {
      const key = `${g}_${s}`;
      if (nameDatabase[key]) {
        results.push(...nameDatabase[key]);
      }
    }
  }

  // Shuffle
  results = results.sort(() => Math.random() - 0.5).slice(0, 8);

  return NextResponse.json({ names: results });
}
