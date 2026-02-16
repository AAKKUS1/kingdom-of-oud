import parfumMukhalatat from "@/assets/parfum-mukhalatat.jpg";
import parfumOud from "@/assets/parfum-oud.jpg";
import parfumMusc from "@/assets/parfum-musc.jpg";
import parfumOudWood from "@/assets/parfum-oud-wood.jpg";
import parfumBlueberryMusk from "@/assets/parfum-blueberry-musk.jpg";
import parfumNight from "@/assets/parfum-night.jpg";
import parfumMajestic from "@/assets/parfum-majestic.jpg";
import parfumPassion from "@/assets/parfum-passion.jpg";
import parfumMidnight from "@/assets/parfum-midnight.jpg";
import parfumWickedNoir from "@/assets/parfum-wicked-noir.jpg";
import parfumMaisonRouge from "@/assets/parfum-maison-rouge.jpg";
import parfumVanillaTobacco from "@/assets/parfum-vanilla-tobacco.jpg";
import parfumMalikat from "@/assets/parfum-malikat.jpg";
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
import encensoirBlancOr from "@/assets/encensoir-blanc-or.jpg";
import encensoirCalligraphieBlanc from "@/assets/encensoir-calligraphie-blanc.jpg";
import encensoirPerle from "@/assets/encensoir-perle.jpg";
import encensoirNoir from "@/assets/encensoir-noir.jpg";
import encensoirCalligraphieNoir from "@/assets/encensoir-calligraphie-noir.jpg";
import encensoirCristalMini from "@/assets/encensoir-cristal-mini.jpg";
import encensoirRamadan from "@/assets/encensoir-ramadan.jpg";
import encensoirDore from "@/assets/encensoir-dore.jpg";
import encensoirTresse from "@/assets/encensoir-tresse.jpg";
import encensoirRoseDore from "@/assets/encensoir-rose-dore.jpg";
import encensoirCristalBoule from "@/assets/encensoir-cristal-boule.jpg";
import encensoirGrillage from "@/assets/encensoir-grillage.jpg";
import encensoirFloral from "@/assets/encensoir-floral.jpg";
import encensoirFleur from "@/assets/encensoir-fleur.jpg";
import encensoirCeramique from "@/assets/encensoir-ceramique.jpg";
import encensoirCollectionCristal from "@/assets/encensoir-collection-cristal.jpg";
import encensoirSetComplet from "@/assets/encensoir-set-complet.jpg";
import encensoirHexagonal from "@/assets/encensoir-hexagonal.jpg";
import encensoirNoirDore from "@/assets/encensoir-noir-dore.jpg";
import encensoirCaftan from "@/assets/encensoir-caftan.jpg";
import encensoirMosquee from "@/assets/encensoir-mosquee.jpg";
import encensoirDiamant from "@/assets/encensoir-diamant.jpg";
import encensoirCouronne from "@/assets/encensoir-couronne.jpg";
import encensoirCristalOr from "@/assets/encensoir-cristal-or.jpg";
import encensoirRamadan2 from "@/assets/encensoir-ramadan-2.jpg";
import encensoirPalmier from "@/assets/encensoir-palmier.jpg";
import encensoirFleuron from "@/assets/encensoir-fleuron.jpg";
import encensoirFloralRond from "@/assets/encensoir-floral-rond.jpg";
import encensoirFleurDecoupe from "@/assets/encensoir-fleur-decoupe.jpg";
import encensoirTresseBlanc from "@/assets/encensoir-tresse-blanc.jpg";
import encensoirGeometrique from "@/assets/encensoir-geometrique.jpg";
import encensoirForteresseRouge from "@/assets/encensoir-forteresse-rouge.jpg";
import encensoirForteresseNoir from "@/assets/encensoir-forteresse-noir.jpg";

export type ProductVariant = {
  color: string;
  colorHex: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  category: "parfums" | "oil-perfumes" | "oud-wood" | "resine" | "encens" | "accessoires";
  description: string;
  notes?: string;
  featured?: boolean;
  image: string;
  variants?: ProductVariant[];
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
  {
    id: "parfum-oud-wood",
    name: "Just Oud & Wood",
    category: "parfums",
    description: "Un parfum boisé intense aux notes profondes de oud. Flacon élégant pour une fragrance masculine et raffinée.",
    notes: "Oud, Bois, Notes fumées",
    image: parfumOudWood,
  },
  {
    id: "parfum-blueberry-musk",
    name: "Blueberry Musk",
    category: "parfums",
    description: "Alliance unique de musc et de myrtille dans un flacon bleu royal. Une fragrance fraîche et orientale.",
    notes: "Musc, Myrtille, Notes orientales",
    image: parfumBlueberryMusk,
  },
  {
    id: "parfum-night",
    name: "Night",
    category: "parfums",
    description: "Eau de parfum pour femme aux notes mystérieuses et envoûtantes. Un flacon élégant pour les soirées raffinées.",
    notes: "Ambre, Musc, Fleurs nocturnes",
    image: parfumNight,
  },
  {
    id: "parfum-majestic",
    name: "Majestic",
    category: "parfums",
    description: "Un parfum royal au flacon doré orné de motifs traditionnels. Fragrance majestueuse et opulente.",
    notes: "Oud, Or, Épices royales",
    image: parfumMajestic,
  },
  {
    id: "parfum-passion",
    name: "Passion",
    category: "parfums",
    description: "Eau de parfum féminine aux tons rosés et délicats. Une fragrance passionnée et séduisante.",
    notes: "Rose, Musc, Vanille",
    image: parfumPassion,
  },
  {
    id: "parfum-midnight",
    name: "Midnight",
    category: "parfums",
    description: "Parfum pour femme aux teintes violettes envoûtantes. Une fragrance nocturne intense et captivante.",
    notes: "Fleurs de nuit, Musc, Ambre",
    image: parfumMidnight,
  },
  {
    id: "parfum-wicked-noir",
    name: "Wicked Noir",
    category: "parfums",
    description: "Un parfum noir intense et mystérieux avec des accents floraux dorés. Audace et sophistication.",
    notes: "Oud noir, Fleurs, Épices sombres",
    image: parfumWickedNoir,
  },
  {
    id: "parfum-maison-rouge",
    name: "Maison Rouge",
    category: "parfums",
    description: "Eau de parfum raffinée au flacon doré. Une création élégante aux notes chaudes et enveloppantes.",
    notes: "Ambre, Bois précieux, Épices",
    image: parfumMaisonRouge,
  },
  {
    id: "parfum-vanilla-tobacco",
    name: "Vanilla & Tobacco",
    category: "parfums",
    description: "Alliance gourmande de vanille et tabac dans un flacon boisé. Un parfum chaleureux et addictif.",
    notes: "Vanille, Tabac, Bois",
    image: parfumVanillaTobacco,
  },
  {
    id: "parfum-malikat-al-hub",
    name: "Malikat Al Hub",
    category: "parfums",
    description: "La Reine de l'Amour, un parfum féminin au flacon rouge velours avec pompon noir. Intense et passionné.",
    notes: "Rose, Oud, Musc rouge",
    image: parfumMalikat,
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
  {
    id: "encensoir-blanc-or",
    name: "Encensoir Blanc & Or",
    category: "accessoires",
    description: "Encensoir élégant en blanc mat avec couvercle doré et boule cristal. Design moderne et épuré.",
    image: encensoirBlancOr,
  },
  {
    id: "encensoir-calligraphie-blanc",
    name: "Encensoir Calligraphie Blanc",
    category: "accessoires",
    description: "Encensoir cube blanc orné de calligraphie arabe dorée. Couvercle ajouré en or pour une diffusion parfaite.",
    image: encensoirCalligraphieBlanc,
  },
  {
    id: "encensoir-perle",
    name: "Encensoir Perle",
    category: "accessoires",
    description: "Encensoir blanc texturé avec motifs en relief et touches dorées. Un style unique moucheté d'or.",
    image: encensoirPerle,
  },
  {
    id: "encensoir-noir",
    name: "Encensoir Noir",
    category: "accessoires",
    description: "Encensoir en métal noir avec dôme doré ajouré. Style contemporain aux motifs géométriques.",
    image: encensoirNoir,
  },
  {
    id: "encensoir-calligraphie-noir",
    name: "Encensoir Calligraphie Noir",
    category: "accessoires",
    description: "Encensoir cube noir orné de calligraphie arabe dorée. L'alliance parfaite du moderne et du traditionnel.",
    image: encensoirCalligraphieNoir,
  },
  {
    id: "encensoir-cristal-mini",
    name: "Encensoir Cristal Mini",
    category: "accessoires",
    description: "Petit encensoir en cristal taillé avec couvercle doré orné. Format compact idéal pour tous les espaces.",
    image: encensoirCristalMini,
  },
  {
    id: "encensoir-ramadan",
    name: "Encensoir Ramadan",
    category: "accessoires",
    description: "Encensoir spécial Ramadan avec silhouette de mosquée découpée. Inscription 'Ramadan Mubarak' en calligraphie.",
    image: encensoirRamadan,
  },
  {
    id: "encensoir-dore",
    name: "Encensoir Doré",
    category: "accessoires",
    description: "Encensoir entièrement doré avec motif palmier gravé. Style traditionnel saoudien d'une grande finesse.",
    image: encensoirDore,
  },
  {
    id: "encensoir-tresse",
    name: "Encensoir Tressé",
    category: "accessoires",
    description: "Encensoir en fibre tressée dorée avec dôme ajouré. Un design artisanal unique et chaleureux.",
    image: encensoirTresse,
  },
  {
    id: "encensoir-rose-dore",
    name: "Encensoir Rose Doré",
    category: "accessoires",
    description: "Encensoir nacré orné d'une guirlande de roses dorées. Base ajourée et fleuron classique pour une élégance royale.",
    image: encensoirRoseDore,
  },
  {
    id: "encensoir-cristal-boule",
    name: "Encensoir Cristal Boule",
    category: "accessoires",
    description: "Encensoir en cristal taillé avec boule de cristal au sommet. Pétales de verre et touches dorées pour un éclat unique.",
    image: encensoirCristalBoule,
  },
  {
    id: "encensoir-grillage",
    name: "Encensoir Grillage Doré",
    category: "accessoires",
    description: "Encensoir entièrement doré avec motif grillage et cristal au sommet. Design sur pied d'une finesse remarquable.",
    image: encensoirGrillage,
  },
  {
    id: "encensoir-floral",
    name: "Encensoir Floral Doré",
    category: "accessoires",
    description: "Encensoir doré aux motifs floraux ajourés avec cristal décoratif. Un bijou d'artisanat aux détails raffinés.",
    image: encensoirFloral,
  },
  {
    id: "encensoir-fleur",
    name: "Encensoir Fleur Découpée",
    category: "accessoires",
    description: "Encensoir doré avec grandes fleurs découpées. Style audacieux et lumineux pour une diffusion généreuse.",
    image: encensoirFleur,
  },
  {
    id: "encensoir-ceramique",
    name: "Encensoir Céramique Rose",
    category: "accessoires",
    description: "Encensoir en céramique rose pâle avec couvercle bronze aux motifs floraux sculptés. Douceur et élégance vintage.",
    image: encensoirCeramique,
  },
  {
    id: "encensoir-collection-cristal",
    name: "Collection Cristal & Or",
    category: "accessoires",
    description: "Ensemble de cinq encensoirs en cristal taillé avec couvercles dorés. Différentes tailles pour une collection complète.",
    image: encensoirCollectionCristal,
  },
  {
    id: "encensoir-set-complet",
    name: "Set Complet Lotus",
    category: "accessoires",
    description: "Set luxueux avec encensoir lotus cristal sur plateau miroir, boîte à encens, pince et flacon. L'art de recevoir à l'orientale.",
    image: encensoirSetComplet,
  },
  {
    id: "encensoir-hexagonal",
    name: "Encensoir Hexagonal",
    category: "accessoires",
    description: "Encensoir hexagonal en cristal gravé aux motifs orientaux dorés. Design classique pour une diffusion élégante.",
    image: encensoirHexagonal,
  },
  {
    id: "encensoir-noir-dore",
    name: "Encensoir Noir & Or",
    category: "accessoires",
    description: "Encensoir cylindrique noir laqué avec dôme ajouré doré et arabesques. Élégance sombre et mystérieuse.",
    image: encensoirNoirDore,
  },
  {
    id: "encensoir-caftan",
    name: "Collection Caftan",
    category: "accessoires",
    description: "Encensoirs en forme de caftan traditionnel aux couleurs royales. Disponibles en noir, blanc, vert et rouge avec ornements dorés.",
    image: encensoirCaftan,
  },
  {
    id: "encensoir-mosquee",
    name: "Encensoir Mosquée",
    category: "accessoires",
    description: "Duo d'encensoirs en forme de mosquée avec dôme et arches. Disponibles en noir & or et blanc & or.",
    image: encensoirMosquee,
  },
  {
    id: "encensoir-diamant",
    name: "Encensoir Diamant Blanc",
    category: "accessoires",
    description: "Encensoir blanc mat avec motifs géométriques dorés en losange. Design moderne sur support circulaire.",
    image: encensoirDiamant,
  },
  {
    id: "encensoir-couronne",
    name: "Encensoir Couronne",
    category: "accessoires",
    description: "Encensoir blanc en forme de couronne avec perles et cristaux. Dôme doré ajouré pour une touche royale et scintillante.",
    image: encensoirCouronne,
  },
  {
    id: "encensoir-cristal-or",
    name: "Encensoir Cristal & Or",
    category: "accessoires",
    description: "Encensoir en cristal taillé avec couvercle doré orné d'un cristal. Design classique et lumineux.",
    image: encensoirCristalOr,
  },
  {
    id: "encensoir-ramadan-2",
    name: "Encensoir Ramadan Mosquée",
    category: "accessoires",
    description: "Encensoir Ramadan Mubarak avec silhouette de mosquée 3D découpée et dôme doré ajouré.",
    image: encensoirRamadan2,
  },
  {
    id: "encensoir-palmier",
    name: "Encensoir Palmier Doré",
    category: "accessoires",
    description: "Encensoir doré en forme de coupe avec motif palmier gravé. Inspiration saoudienne traditionnelle.",
    image: encensoirPalmier,
  },
  {
    id: "encensoir-fleuron",
    name: "Encensoir Fleuron Nacré",
    category: "accessoires",
    description: "Encensoir nacré avec guirlande de roses dorées et base ajourée. Fleuron élégant au sommet.",
    image: encensoirFleuron,
  },
  {
    id: "encensoir-floral-rond",
    name: "Encensoir Floral Rond",
    category: "accessoires",
    description: "Encensoir doré rond avec motifs floraux ajourés sur pied. Cristal décoratif au sommet.",
    image: encensoirFloralRond,
  },
  {
    id: "encensoir-fleur-decoupe-2",
    name: "Encensoir Fleurs Découpées",
    category: "accessoires",
    description: "Encensoir doré aux grandes fleurs découpées sur pied. Design lumineux et généreux.",
    image: encensoirFleurDecoupe,
  },
  {
    id: "encensoir-tresse-blanc",
    name: "Encensoir Tressé Blanc",
    category: "accessoires",
    description: "Encensoir blanc tressé avec dôme doré ajouré et ornement arabesque. Douceur et raffinement.",
    image: encensoirTresseBlanc,
  },
  {
    id: "encensoir-geometrique",
    name: "Encensoir Géométrique",
    category: "accessoires",
    description: "Encensoir doré aux motifs géométriques modernes avec cristal au sommet. Style contemporain.",
    image: encensoirGeometrique,
  },
  {
    id: "encensoir-forteresse",
    name: "Encensoir Forteresse",
    category: "accessoires",
    description: "Encensoir en forme de forteresse avec dôme doré ajouré et motifs triangulaires. Disponible en rouge et noir.",
    image: encensoirForteresseRouge,
    variants: [
      { color: "Rouge", colorHex: "#8B1A1A", image: encensoirForteresseRouge },
      { color: "Noir", colorHex: "#1a1a1a", image: encensoirForteresseNoir },
    ],
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
