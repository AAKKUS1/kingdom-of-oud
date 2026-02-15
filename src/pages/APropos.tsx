import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedText from "@/components/AnimatedText";
import ParticleField from "@/components/ParticleField";

const values = [
  { title: "Authenticité", desc: "Des matières premières d'exception, sélectionnées avec le plus grand soin pour garantir une qualité irréprochable.", icon: "◈" },
  { title: "Tradition", desc: "Un savoir-faire ancestral transmis de génération en génération, perpétuant l'art du oud et de l'encens oriental.", icon: "✦" },
  { title: "Prestige", desc: "Des créations uniques qui incarnent le luxe et l'élégance, pour une clientèle exigeante et raffinée.", icon: "◆" },
  { title: "Excellence", desc: "Une quête permanente de perfection dans chaque fragrance, chaque encens et chaque encensoir.", icon: "❖" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const APropos = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 lg:pt-28 pb-20 relative">
          <ParticleField count={15} />
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1 }}
                className="font-elegant text-sm text-gold uppercase mb-2"
              >
                Notre Histoire
              </motion.p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                <AnimatedText text="À Propos" delay={0.3} />
              </h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "4rem" }} transition={{ duration: 0.8, delay: 0.5 }} className="h-px bg-gold mx-auto" />
            </motion.div>

            {/* Story */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
              <motion.h2
                className="font-display text-2xl text-gold mb-6 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Depuis 2010
              </motion.h2>
              <div className="space-y-5 font-elegant text-lg text-foreground/80 leading-relaxed text-center">
                <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <strong className="text-foreground">Kingdom of Oud</strong> est née d'une passion profonde pour l'art du parfum oriental. Depuis 2010, nous perpétuons la tradition séculaire du oud, offrant à notre clientèle des créations olfactives d'une rare intensité.
                </motion.p>
                <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                  Nos compositions mettent en valeur les plus nobles essences : <span className="text-gold">oud</span>, <span className="text-gold">musc</span>, <span className="text-gold">ambre</span> et accords chaleureux, pour des fragrances à la tenue exceptionnelle et à la signature inoubliable.
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                  De nos parfums emblématiques comme le <em className="text-gold">Parfum Dubai</em> à nos encensoirs richement ornés, chaque création est un hommage au raffinement oriental et à l'excellence artisanale.
                </motion.p>
              </div>
            </motion.div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="font-display text-2xl text-gold mb-10 text-center">
                <AnimatedText text="Nos Valeurs" />
              </h2>
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((v) => (
                  <motion.div
                    key={v.title}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-card border border-border p-8 rounded-sm hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="text-2xl text-gold block mb-3"
                    >
                      {v.icon}
                    </motion.span>
                    <h3 className="font-display text-lg text-gold mb-3">{v.title}</h3>
                    <p className="font-elegant text-base text-foreground/70 leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Oud universe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary/50 border border-border p-10 rounded-sm text-center hover:border-gold/20 transition-all duration-500"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-4xl text-gold block mb-4"
              >
                ✦
              </motion.span>
              <h2 className="font-display text-2xl text-foreground mb-4">L'Univers du Oud</h2>
              <p className="font-elegant text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Le oud, aussi appelé « bois d'agar », est l'une des matières premières les plus précieuses au monde. Issu de la résine de l'arbre Aquilaria, il est vénéré depuis des millénaires dans la culture orientale pour ses vertus aromatiques et spirituelles. Chez Kingdom of Oud, nous sélectionnons les meilleurs ouds pour créer des expériences olfactives uniques.
              </p>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default APropos;
