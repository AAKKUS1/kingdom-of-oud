import parfumMukhalatat from "@/assets/parfum-mukhalatat.jpg";
import parfumOud from "@/assets/parfum-oud.jpg";
import parfumMusc from "@/assets/parfum-musc.jpg";
import oilDahin from "@/assets/oil-dahin.jpg";
import oilMukhalatat from "@/assets/oil-mukhalatat.jpg";
import oilMusc from "@/assets/oil-musc.jpg";
import oudKalimantan from "@/assets/oud-kalimantan.jpg";
import oudMorokee from "@/assets/oud-morokee.jpg";
import oudCombodi from "@/assets/oud-combodi.jpg";
import oudBuya from "@/assets/oud-buya.jpg";
import oudHindi from "@/assets/oud-hindi.jpg";
import oudVietnam from "@/assets/oud-vietnam.jpg";
import lubanGreen from "@/assets/luban-green.jpg";
import lubanWhite from "@/assets/luban-white.jpg";
import lubanRed from "@/assets/luban-red.jpg";
import lubanBlack from "@/assets/luban-black.jpg";
import mabsoos from "@/assets/mabsoos.jpg";
import maamoul from "@/assets/maamoul.jpg";
import encensoirCristal from "@/assets/encensoir-cristal.jpg";
import encensoirArtisanale from "@/assets/encensoir-artisanale.jpg";
import encensoirMetal from "@/assets/encensoir-metal.jpg";
import encensoirVerre from "@/assets/encensoir-verre.jpg";
import encensoirRoyal from "@/assets/encensoir-royal.jpg";
import encensoirSultan from "@/assets/encensoir-sultan.jpg";
import encensoirClassique from "@/assets/encensoir-classique.jpg";
import encensoirSet from "@/assets/encensoir-set.jpg";
import encensoirLuxe from "@/assets/encensoir-luxe.jpg";

export type Product = {
  id: string;
  name: string;
  category: "parfums" | "oil-perfumes" | "oud-wood" | "resine" | "encens" | "accessoires";
  description: string;
  notes?: string;
  featured?: boolean;
  image: string;
};

export const products: Product[] = [
  // Parfums
  {
    id: "parfum-mukhalatat",
    name: "Mukhalatat",
    category: "parfums",
    description: "Un mélange raffiné de notes orientales, alliance parfaite de traditions et de modernité pour une signature olfactive unique.",
    notes: "Oud, Musc, Ambre, Épices",
    featured: true,
    image: parfumMukhalatat,
  },
  {
    id: "parfum-oud",
    name: "Oud",
    category: "parfums",
    description: "L'essence pure du oud dans un parfum intense et envoûtant. Une fragrance noble aux accords boisés profonds.",
    notes: "Oud, Bois de Santal, Résine",
    featured: true,
    image: parfumOud,
  },
  {
    id: "parfum-musc",
    name: "Musc",
    category: "parfums",
    description: "Un musc délicat et sensuel, empreint de douceur orientale. Élégance et raffinement au quotidien.",
    notes: "Musc Blanc, Ambre, Vanille",
    image: parfumMusc,
  },

  // Oil Perfumes
  {
    id: "oil-dahin-al-oud",
    name: "Dahin Al Oud",
    category: "oil-perfumes",
    description: "Huile de parfum concentrée au oud pur. Application précise pour une tenue exceptionnelle tout au long de la journée.",
    notes: "Oud, Ambre, Bois précieux",
    featured: true,
    image: oilDahin,
  },
  {
    id: "oil-mukhalatat",
    name: "Mukhalatat",
    category: "oil-perfumes",
    description: "Huile parfumée aux notes orientales complexes. Un mukhalatat traditionnel en format huile pour une diffusion subtile.",
    notes: "Oud, Musc, Fleurs orientales",
    image: oilMukhalatat,
  },
  {
    id: "oil-musc",
    name: "Musc",
    category: "oil-perfumes",
    description: "Huile de musc pure et enveloppante. Un classique intemporel de la parfumerie orientale en version concentrée.",
    notes: "Musc, Ambre, Vanille",
    image: oilMusc,
  },

  // Oud Wood
  {
    id: "oud-kalimantan",
    name: "Kalimantan",
    category: "oud-wood",
    description: "Bois d'oud de Kalimantan, réputé pour ses notes douces et résineuses. Une qualité exceptionnelle d'Indonésie.",
    featured: true,
    image: oudKalimantan,
  },
  {
    id: "oud-morokee",
    name: "Morokee",
    category: "oud-wood",
    description: "Oud Morokee aux arômes terreux et profonds. Un bois rare prisé par les connaisseurs.",
    image: oudMorokee,
  },
  {
    id: "oud-combodi",
    name: "Combodi",
    category: "oud-wood",
    description: "Oud du Cambodge, considéré parmi les plus nobles. Notes sucrées et florales caractéristiques.",
    image: oudCombodi,
  },
  {
    id: "oud-buya",
    name: "Buya",
    category: "oud-wood",
    description: "Bois d'oud Buya aux senteurs intenses et persistantes. Idéal pour les cérémonies et occasions spéciales.",
    image: oudBuya,
  },
  {
    id: "oud-hindi",
    name: "Hindi",
    category: "oud-wood",
    description: "Oud Hindi d'Inde, le plus intense et le plus recherché. Des notes animales et boisées puissantes.",
    image: oudHindi,
  },
  {
    id: "oud-vietnam",
    name: "Viet Nam",
    category: "oud-wood",
    description: "Oud vietnamien aux notes douces et florales. Une alternative élégante et subtile très appréciée.",
    image: oudVietnam,
  },

  // Résine
  {
    id: "luban-royal-green",
    name: "Luban Hojari Royal Green",
    category: "resine",
    description: "Résine d'encens Hojari vert royal, la plus précieuse. Arôme frais et citronné d'une pureté exceptionnelle.",
    featured: true,
    image: lubanGreen,
  },
  {
    id: "luban-pure-white",
    name: "Luban Hojari Pure White",
    category: "resine",
    description: "Encens Hojari blanc pur d'Oman. Notes douces et délicates, parfait pour la méditation et la relaxation.",
    image: lubanWhite,
  },
  {
    id: "luban-red",
    name: "Luban Hojari Red",
    category: "resine",
    description: "Résine Hojari rouge aux arômes chauds et enveloppants. Une variété rare aux propriétés aromatiques uniques.",
    image: lubanRed,
  },
  {
    id: "luban-black",
    name: "Luban Hojari Black",
    category: "resine",
    description: "Encens Hojari noir, intense et mystérieux. Des notes profondes et résineuses pour une ambiance envoûtante.",
    image: lubanBlack,
  },

  // Encens
  {
    id: "encens-mabsoos",
    name: "Mabsoos",
    category: "encens",
    description: "Encens Mabsoos aux copeaux de bois d'oud imprégnés d'huiles parfumées. Un mélange traditionnel pour une ambiance chaleureuse et envoûtante.",
    featured: true,
    image: mabsoos,
  },
  {
    id: "encens-maamoul",
    name: "Maamoul",
    category: "encens",
    description: "Encens Maamoul, préparation artisanale de bois d'oud et de résines précieuses. Diffusion lente et parfum intense pour les grandes occasions.",
    image: maamoul,
  },

  // Accessoires
  {
    id: "encensoir-cristal",
    name: "Encensoir Cristal",
    category: "accessoires",
    description: "Encensoir en cristal aux reflets lumineux. Une pièce d'exception qui sublime votre intérieur avec élégance.",
    image: encensoirCristal,
  },
  {
    id: "encensoir-artisanale",
    name: "Encensoir Artisanale",
    category: "accessoires",
    description: "Encensoir fait main par des artisans traditionnels. Chaque pièce est unique, témoignage d'un savoir-faire ancestral.",
    image: encensoirArtisanale,
  },
  {
    id: "encensoir-metal",
    name: "Encensoir Métal",
    category: "accessoires",
    description: "Encensoir en métal finement ciselé aux motifs orientaux. Robuste et élégant pour un usage quotidien.",
    image: encensoirMetal,
  },
  {
    id: "encensoir-verre",
    name: "Encensoir Verre",
    category: "accessoires",
    description: "Encensoir en verre soufflé aux teintes dorées. Alliance de modernité et de tradition orientale.",
    image: encensoirVerre,
  },
  {
    id: "encensoir-royal",
    name: "Encensoir Royal",
    category: "accessoires",
    description: "Duo d'encensoirs modernes aux motifs calligraphiques dorés. Disponible en blanc et noir pour une décoration raffinée.",
    image: encensoirRoyal,
  },
  {
    id: "encensoir-sultan",
    name: "Encensoir Sultan Set",
    category: "accessoires",
    description: "Set complet avec encensoir cristal sur plateau miroir, boîte à encens et pince dorée. L'élégance orientale absolue.",
    image: encensoirSultan,
  },
  {
    id: "encensoir-classique",
    name: "Collection Classique",
    category: "accessoires",
    description: "Collection d'encensoirs cristal et or aux formes classiques. Différentes tailles disponibles pour tous les intérieurs.",
    image: encensoirClassique,
  },
  {
    id: "encensoir-set",
    name: "Encensoir Set Miroir",
    category: "accessoires",
    description: "Ensemble encensoir cristal avec plateau miroir doré et accessoires assortis. Un cadeau d'exception.",
    image: encensoirSet,
  },
  {
    id: "encensoir-luxe",
    name: "Encensoir Luxe",
    category: "accessoires",
    description: "Encensoir cristal de luxe sur plateau miroir avec boîte et pince dorées. Finitions haut de gamme.",
    image: encensoirLuxe,
  },
];

export const categories = [
  { id: "all", label: "Tous les produits" },
  { id: "parfums", label: "Parfums" },
  { id: "oil-perfumes", label: "Oil Perfumes" },
  { id: "oud-wood", label: "Oud Wood" },
  { id: "resine", label: "Résine" },
  { id: "encens", label: "Encens" },
  { id: "accessoires", label: "Accessoires" },
] as const;

export const getWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par le produit "${productName}" de Kingdom of Oud. Pourriez-vous me donner plus d'informations ?`
  );
  return `https://wa.me/33623413595?text=${message}`;
};
