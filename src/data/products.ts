import parfumDubai from "@/assets/parfum-dubai.jpg";
import royalAmber from "@/assets/royal-amber.jpg";
import sultanOud from "@/assets/sultan-oud.jpg";
import nuitOrientale from "@/assets/nuit-orientale.jpg";
import oudPremium from "@/assets/oud-premium.jpg";
import encensRoyal from "@/assets/encens-royal.jpg";
import bakhoorLuxe from "@/assets/bakhoor-luxe.jpg";
import encensoirSultan from "@/assets/encensoir-sultan.jpg";
import encensoirRoyal from "@/assets/encensoir-royal.jpg";
import encensoirClassique from "@/assets/encensoir-classique.jpg";

export type Product = {
  id: string;
  name: string;
  category: "parfums" | "oud-encens" | "encensoirs";
  description: string;
  notes?: string;
  featured?: boolean;
  image: string;
};

export const products: Product[] = [
  {
    id: "parfum-dubai",
    name: "Parfum Dubai",
    category: "parfums",
    description: "Fragrance phare de Kingdom of Oud. Un parfum intense et élégant aux accords profondément orientaux, avec une tenue longue durée et une signature olfactive inoubliable.",
    notes: "Oud, Musc, Ambre, Bois de Santal",
    featured: true,
    image: parfumDubai,
  },
  {
    id: "royal-amber",
    name: "Royal Amber",
    category: "parfums",
    description: "Un mélange majestueux d'ambre doré et de résines précieuses, enveloppé dans un voile de vanille et de musc blanc.",
    notes: "Ambre, Vanille, Musc Blanc, Résine",
    featured: true,
    image: royalAmber,
  },
  {
    id: "sultan-oud",
    name: "Sultan Oud",
    category: "parfums",
    description: "L'essence même du luxe oriental. Un oud rare et puissant sublimé par des notes florales et épicées.",
    notes: "Oud, Rose, Safran, Cuir",
    featured: true,
    image: sultanOud,
  },
  {
    id: "nuit-orientale",
    name: "Nuit Orientale",
    category: "parfums",
    description: "Une fragrance envoûtante pour les soirées d'exception. Des notes chaudes et sensuelles qui captivent les sens.",
    notes: "Oud, Encens, Patchouli, Vanille",
    image: nuitOrientale,
  },
  {
    id: "oud-premium",
    name: "Oud Premium",
    category: "oud-encens",
    description: "Copeaux de bois d'oud de première qualité, sélectionnés pour leur richesse aromatique et leur pureté exceptionnelle.",
    featured: true,
    image: oudPremium,
  },
  {
    id: "encens-royal",
    name: "Encens Royal",
    category: "oud-encens",
    description: "Bâtonnets d'encens artisanaux aux senteurs orientales profondes. Idéal pour créer une atmosphère de sérénité.",
    image: encensRoyal,
  },
  {
    id: "bakhoor-luxe",
    name: "Bakhoor de Luxe",
    category: "oud-encens",
    description: "Mélange traditionnel de bakhoor aux arômes enivrants de oud, musc et fleurs orientales.",
    image: bakhoorLuxe,
  },
  {
    id: "encensoir-sultan",
    name: "Encensoir Sultan",
    category: "encensoirs",
    description: "Encensoir d'exception aux finitions dorées et pierres décoratives. Une pièce maîtresse inspirée de l'art islamique traditionnel.",
    image: encensoirSultan,
  },
  {
    id: "encensoir-royal",
    name: "Encensoir Royal",
    category: "encensoirs",
    description: "Encensoir richement orné, idéal pour les grandes occasions et les cérémonies. Un véritable objet d'art oriental.",
    image: encensoirRoyal,
  },
  {
    id: "encensoir-classique",
    name: "Encensoir Classique",
    category: "encensoirs",
    description: "Élégant encensoir aux lignes épurées avec finitions dorées. Parfait pour un usage quotidien raffiné.",
    image: encensoirClassique,
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
