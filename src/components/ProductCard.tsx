import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product, getWhatsAppLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [activeVariant, setActiveVariant] = useState(0);
  const currentImage = product.variants
    ? product.variants[activeVariant].image
    : product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, rotateY: 2, rotateX: -1 }}
      className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold/40 hover:shadow-[0_10px_40px_-10px_hsl(43_72%_55%/0.2)] transition-all duration-500"
      style={{ perspective: 1000 }}
    >
      <div className="aspect-square bg-secondary relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={product.name}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.12 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-sm border border-gold/20 rounded-sm"
        >
          <span className="font-body text-[10px] text-gold uppercase tracking-wider">
            {product.category === "oil-perfumes" ? "Oil" : product.category === "oud-wood" ? "Oud" : ""}
          </span>
        </motion.div>

        {/* Color variant dots */}
        {product.variants && product.variants.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full border border-gold/20"
          >
            {product.variants.map((variant, i) => (
              <motion.button
                key={variant.color}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVariant(i);
                }}
                className="relative w-5 h-5 rounded-full border-2 transition-all duration-300"
                style={{
                  backgroundColor: variant.colorHex,
                  borderColor: activeVariant === i ? "hsl(43 72% 55%)" : "transparent",
                }}
                title={variant.color}
              >
                {activeVariant === i && (
                  <motion.div
                    layoutId={`variant-ring-${product.id}`}
                    className="absolute -inset-1 rounded-full border border-gold/50"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-300">{product.name}</h3>
        {product.variants && (
          <p className="font-body text-[10px] text-gold/70 uppercase tracking-wider mb-1">
            {product.variants[activeVariant].color}
          </p>
        )}
        {product.notes && (
          <p className="font-body text-xs text-muted-foreground mb-2 tracking-wide">{product.notes}</p>
        )}
        <p className="font-elegant text-sm text-foreground/70 mb-4 line-clamp-2">{product.description}</p>
        <motion.a
          href={getWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-gold/10 border border-gold/30 text-gold text-sm font-body tracking-wider uppercase hover:bg-gold hover:text-background transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Commander
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
