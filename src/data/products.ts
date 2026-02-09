export type Product = {
  id: string;
  name: string;
  category: "parfums" | "oud-encens" | "encensoirs";
  price: number;
  description: string;
  notes?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "parfum-dubai",
    name: "Parfum Dubai",
    category: "parfums",
    price: 89,
    description: "Fragrance phare de Kingdom of Oud. Un parfum intense et élégant aux accords profondément orientaux. Notes de oud, musc, ambre et bois précieux pour une signature olfactive inoubliable.",
    notes: "Oud, Musc, Ambre, Bois de Santal",
    featured: true,
  },
  {
    id: "royal-amber",
    name: "Royal Amber",
    category: "parfums",
    price: 75,
    description: "Un mélange majestueux d'ambre doré et de résines précieuses, enveloppé dans un voile de vanille et de musc blanc.",
    notes: "Ambre, Vanille, Musc Blanc, Résine",
    featured: true,
  },
  {
    id: "sultan-oud",
    name: "Sultan Oud",
    category: "parfums",
    price: 95,
    description: "L'essence même du luxe oriental. Un oud rare et puissant sublimé par des notes florales et épicées.",
    notes: "Oud, Rose, Safran, Cuir",
    featured: true,
  },
  {
    id: "nuit-orientale",
    name: "Nuit Orientale",
    category: "parfums",
    price: 69,
    description: "Une fragrance envoûtante pour les soirées d'exception. Des notes chaudes et sensuelles qui captivent les sens.",
    notes: "Oud, Encens, Patchouli, Vanille",
  },
  {
    id: "oud-premium",
    name: "Oud Premium",
    category: "oud-encens",
    price: 120,
    description: "Copeaux de bois d'oud de première qualité, sélectionnés pour leur richesse aromatique et leur pureté exceptionnelle.",
    featured: true,
  },
  {
    id: "encens-royal",
    name: "Encens Royal",
    category: "oud-encens",
    price: 35,
    description: "Bâtonnets d'encens artisanaux aux senteurs orientales profondes. Idéal pour créer une atmosphère de sérénité.",
  },
  {
    id: "bakhoor-luxe",
    name: "Bakhoor de Luxe",
    category: "oud-encens",
    price: 45,
    description: "Mélange traditionnel de bakhoor aux arômes enivrants de oud, musc et fleurs orientales.",
  },
  {
    id: "encensoir-sultan",
    name: "Encensoir Sultan",
    category: "encensoirs",
    price: 150,
    description: "Encensoir d'exception aux finitions dorées et pierres décoratives. Une pièce maîtresse inspirée de l'art islamique traditionnel.",
  },
  {
    id: "encensoir-royal",
    name: "Encensoir Royal",
    category: "encensoirs",
    price: 180,
    description: "Encensoir richement orné, idéal pour les grandes occasions et les cérémonies. Un véritable objet d'art oriental.",
  },
  {
    id: "encensoir-classique",
    name: "Encensoir Classique",
    category: "encensoirs",
    price: 95,
    description: "Élégant encensoir aux lignes épurées avec finitions dorées. Parfait pour un usage quotidien raffiné.",
  },
];

export const categories = [
  { id: "all", label: "Tous les produits" },
  { id: "parfums", label: "Parfums" },
  { id: "oud-encens", label: "Oud & Encens" },
  { id: "encensoirs", label: "Encensoirs de Luxe" },
] as const;

export const getWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par le produit "${productName}" de Kingdom of Oud. Pourriez-vous me donner plus d'informations ?`
  );
  return `https://wa.me/33623413595?text=${message}`;
};
