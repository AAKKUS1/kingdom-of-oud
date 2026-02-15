import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Sparkles, Star, Gem } from "lucide-react";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import PageTransition from "@/components/PageTransition";
import ParticleField from "@/components/ParticleField";
import AnimatedText from "@/components/AnimatedText";
import { products } from "@/data/products";

const featured = products.filter((p) => p.featured);

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const floatingVariants2 = {
  animate: {
    y: [0, 15, 0],
    rotate: [0, 5, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.1, 0.2, 0.1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
          <ParticleField count={30} />

          {/* Animated decorative elements */}
          <motion.div variants={floatingVariants} animate="animate" className="absolute top-1/4 left-[15%] w-64 h-64 border border-gold/20 rounded-full" />
          <motion.div variants={floatingVariants2} animate="animate" className="absolute bottom-1/4 right-[15%] w-96 h-96 border border-gold/10 rounded-full" />
          <motion.div variants={pulseVariants} animate="animate" className="absolute top-1/3 right-1/3 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
          <motion.div variants={pulseVariants} animate="animate" className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl" style={{ animationDelay: "2s" }} />

          {/* Sparkle decorations */}
          {[
            { Icon: Sparkles, top: "20%", right: "25%", delay: 0, size: "w-4 h-4", opacity: "30" },
            { Icon: Star, bottom: "30%", left: "20%", delay: 1, size: "w-3 h-3", opacity: "20" },
            { Icon: Gem, top: "40%", left: "10%", delay: 2, size: "w-3 h-3", opacity: "25" },
            { Icon: Sparkles, top: "60%", right: "10%", delay: 1.5, size: "w-3 h-3", opacity: "15" },
            { Icon: Star, top: "15%", left: "30%", delay: 0.5, size: "w-2 h-2", opacity: "20" },
          ].map((s, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, delay: s.delay }}
              className={`absolute text-gold/${s.opacity}`}
              style={{ top: s.top, right: s.right, bottom: s.bottom, left: s.left }}
            >
              <s.Icon className={s.size} />
            </motion.div>
          ))}

          <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="relative z-10 text-center px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="font-elegant text-lg text-muted-foreground uppercase mb-4"
              >
                Depuis 2010
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-2 leading-tight"
              >
                Kingdom of Oud
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl text-gold/90 mb-1"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                مملكة العود
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="font-elegant text-lg md:text-xl text-foreground/60 tracking-[0.2em] uppercase mb-6"
              >
                Welcome to the Middle East
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="font-elegant text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                L'art du parfum oriental — Oud, Encens & Encensoirs de luxe
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/catalogue"
                    className="inline-flex items-center justify-center px-8 py-3 gradient-gold text-background font-body text-sm tracking-widest uppercase font-bold rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    Découvrir le Catalogue
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="https://wa.me/33623413595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gold/40 text-gold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Nous contacter
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border border-gold/30 rounded-full flex justify-center">
              <motion.div animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-gold/50 rounded-full mt-1.5" />
            </motion.div>
          </motion.div>
        </section>

        {/* Featured products */}
        <section className="py-20 lg:py-28 relative">
          <ParticleField count={10} />
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-elegant text-sm text-gold uppercase mb-2"
              >
                Sélection
              </motion.p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedText text="Produits Phares" />
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-gold/50 mx-auto mt-4"
              />
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((product) => (
                <motion.div key={product.id} variants={staggerItem}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/catalogue"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gold/30 text-gold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-all duration-300"
                >
                  Voir tout le catalogue
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ambiance banner */}
        <section className="py-20 bg-secondary/50 border-y border-border overflow-hidden relative">
          <ParticleField count={8} />
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: "✦", title: "Parfums & Oil Perfumes", desc: "Des fragrances intenses et huiles parfumées aux accords orientaux" },
                { icon: "◆", title: "Oud Wood & Résine", desc: "Les plus nobles bois d'oud et résines Luban Hojari d'Oman" },
                { icon: "❖", title: "Accessoires", desc: "Encensoirs en cristal, verre, métal et artisanaux d'exception" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-8 rounded-sm border border-transparent hover:border-gold/20 hover:bg-gold/5 transition-colors duration-500"
                >
                  <motion.span
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-3xl text-gold mb-4 block"
                  >
                    {item.icon}
                  </motion.span>
                  <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="font-elegant text-base text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { value: "15+", label: "Années d'expérience" },
                { value: "100+", label: "Produits" },
                { value: "1000+", label: "Clients satisfaits" },
                { value: "6", label: "Catégories" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerItem} className="p-6">
                  <motion.p
                    className="font-display text-4xl md:text-5xl text-gold font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="font-elegant text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
