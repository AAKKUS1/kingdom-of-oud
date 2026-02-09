import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featured = products.filter((p) => p.featured);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold/20 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-gold/10 rounded-full" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="font-elegant text-lg text-muted-foreground tracking-[0.3em] uppercase mb-4">
              Depuis 2010
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-6 leading-tight">
              Kingdom of Oud
            </h1>
            <p className="font-elegant text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              L'art du parfum oriental — Oud, Encens & Encensoirs de luxe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/catalogue"
                className="inline-flex items-center justify-center px-8 py-3 gradient-gold text-background font-body text-sm tracking-widest uppercase font-bold rounded-sm hover:opacity-90 transition-opacity"
              >
                Découvrir le Catalogue
              </Link>
              <a
                href="https://wa.me/33623413595"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gold/40 text-gold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
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
            <p className="font-elegant text-sm text-gold tracking-[0.3em] uppercase mb-2">Sélection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Produits Phares</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalogue"
              className="inline-flex items-center justify-center px-8 py-3 border border-gold/30 text-gold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-colors"
            >
              Voir tout le catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Ambiance banner */}
      <section className="py-20 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "✦", title: "Parfums d'Exception", desc: "Des fragrances intenses aux accords orientaux uniques" },
              { icon: "◆", title: "Oud & Encens", desc: "Les plus nobles essences pour vos rituels de bien-être" },
              { icon: "❖", title: "Encensoirs de Luxe", desc: "Des pièces d'art aux finitions dorées et pierres précieuses" },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8"
              >
                <span className="text-3xl text-gold mb-4 block">{item.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="font-elegant text-base text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
