import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-elegant text-sm text-gold tracking-[0.3em] uppercase mb-2">Contactez-nous</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Contact</h1>
            <div className="w-16 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Nom</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-gold"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-gold"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card border-border focus:border-gold resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <Button
                type="submit"
                className="w-full gradient-gold text-background font-body text-sm tracking-widest uppercase hover:opacity-90"
              >
                <Send className="w-4 h-4 mr-2" />
                Envoyer
              </Button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border p-8 rounded-sm">
                <h3 className="font-display text-lg text-gold mb-4">WhatsApp</h3>
                <p className="font-elegant text-foreground/70 mb-4">
                  Contactez-nous directement sur WhatsApp pour une réponse rapide.
                </p>
                <a
                  href="https://wa.me/33623413595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 text-gold text-sm font-body tracking-wider uppercase rounded-sm hover:bg-gold hover:text-background transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  +33 6 23 41 35 95
                </a>
              </div>

              <div className="bg-card border border-border p-8 rounded-sm">
                <h3 className="font-display text-lg text-gold mb-4">Instagram</h3>
                <p className="font-elegant text-foreground/70 mb-4">
                  Suivez-nous pour découvrir nos dernières créations.
                </p>
                <a
                  href="https://instagram.com/almamalakahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 text-gold text-sm font-body tracking-wider uppercase rounded-sm hover:bg-gold hover:text-background transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  @almamalakahh
                </a>
              </div>

              <div className="bg-card border border-border p-8 rounded-sm">
                <h3 className="font-display text-lg text-gold mb-2">Horaires</h3>
                <div className="font-elegant text-foreground/70 space-y-1">
                  <p>Lundi - Samedi : 10h - 19h</p>
                  <p>Dimanche : Sur rendez-vous</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
