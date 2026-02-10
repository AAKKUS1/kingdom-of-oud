import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Product, getWhatsAppLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-500"
    >
      <div className="aspect-square bg-secondary relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
        {product.notes && (
          <p className="font-body text-xs text-muted-foreground mb-2 tracking-wide">{product.notes}</p>
        )}
        <p className="font-elegant text-sm text-foreground/70 mb-4 line-clamp-2">{product.description}</p>
        <a
          href={getWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-gold/10 border border-gold/30 text-gold text-sm font-body tracking-wider uppercase hover:bg-gold hover:text-background transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Commander
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
