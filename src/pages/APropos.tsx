import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { title: "Authenticité", desc: "Des matières premières d'exception, sélectionnées avec le plus grand soin pour garantir une qualité irréprochable." },
  { title: "Tradition", desc: "Un savoir-faire ancestral transmis de génération en génération, perpétuant l'art du oud et de l'encens oriental." },
  { title: "Prestige", desc: "Des créations uniques qui incarnent le luxe et l'élégance, pour une clientèle exigeante et raffinée." },
  { title: "Excellence", desc: "Une quête permanente de perfection dans chaque fragrance, chaque encens et chaque encensoir." },
];

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-elegant text-sm text-gold tracking-[0.3em] uppercase mb-2">Notre Histoire</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">À Propos</h1>
            <div className="w-16 h-px bg-gold mx-auto" />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-2xl text-gold mb-6 text-center">Depuis 2010</h2>
            <div className="space-y-5 font-elegant text-lg text-foreground/80 leading-relaxed text-center">
              <p>
                <strong className="text-foreground">Kingdom of Oud</strong> est née d'une passion profonde pour l'art du parfum oriental. Depuis 2010, nous perpétuons la tradition séculaire du oud, offrant à notre clientèle des créations olfactives d'une rare intensité.
              </p>
              <p>
                Nos compositions mettent en valeur les plus nobles essences : <span className="text-gold">oud</span>, <span className="text-gold">musc</span>, <span className="text-gold">ambre</span> et accords chaleureux, pour des fragrances à la tenue exceptionnelle et à la signature inoubliable.
              </p>
              <p>
                De nos parfums emblématiques comme le <em className="text-gold">Parfum Dubai</em> à nos encensoirs richement ornés, chaque création est un hommage au raffinement oriental et à l'excellence artisanale.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-display text-2xl text-gold mb-10 text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-8 rounded-sm"
                >
                  <h3 className="font-display text-lg text-gold mb-3">{v.title}</h3>
                  <p className="font-elegant text-base text-foreground/70 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Oud universe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/50 border border-border p-10 rounded-sm text-center"
          >
            <span className="text-4xl text-gold block mb-4">✦</span>
            <h2 className="font-display text-2xl text-foreground mb-4">L'Univers du Oud</h2>
            <p className="font-elegant text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Le oud, aussi appelé « bois d'agar », est l'une des matières premières les plus précieuses au monde. Issu de la résine de l'arbre Aquilaria, il est vénéré depuis des millénaires dans la culture orientale pour ses vertus aromatiques et spirituelles. Chez Kingdom of Oud, nous sélectionnons les meilleurs ouds pour créer des expériences olfactives uniques.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
