import { Link } from "react-router-dom";
import { motion, type Easing } from "framer-motion";
import { MessageCircle, Sparkles, Star, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
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
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        
        {/* Animated decorative elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-[15%] w-64 h-64 border border-gold/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants2}
          animate="animate"
          className="absolute bottom-1/4 right-[15%] w-96 h-96 border border-gold/10 rounded-full"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        {/* Sparkle decorations */}
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          className="absolute top-[20%] right-[25%] text-gold/30"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[30%] left-[20%] text-gold/20"
        >
          <Star className="w-3 h-3" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          className="absolute top-[40%] left-[10%] text-gold/25"
        >
          <Gem className="w-3 h-3" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-elegant text-lg text-muted-foreground uppercase mb-4"
            >
              Depuis 2010
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-2 leading-tight"
            >
              Kingdom of Oud
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
              <Link
                to="/catalogue"
                className="inline-flex items-center justify-center px-8 py-3 gradient-gold text-background font-body text-sm tracking-widest uppercase font-bold rounded-sm hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                Découvrir le Catalogue
              </Link>
              <a
                href="https://wa.me/33623413595"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gold/40 text-gold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Nous contacter
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-gold/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gold/50 rounded-full mt-1.5"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured products */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-elegant text-sm text-gold uppercase mb-2"
            >
              Sélection
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Produits Phares</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold/50 mx-auto mt-4"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featured.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/catalogue"
              className="inline-flex items-center justify-center px-8 py-3 border border-gold/30 text-gold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 hover:scale-105 transition-all duration-300"
            >
              Voir tout le catalogue
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ambiance banner */}
      <section className="py-20 bg-secondary/50 border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
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
                  animate={{ rotate: [0, 5, -5, 0] }}
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

      <Footer />
    </div>
  );
};

export default Index;