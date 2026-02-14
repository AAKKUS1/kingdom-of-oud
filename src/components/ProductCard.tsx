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
      whileHover={{ y: -8 }}
      className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold/40 hover:shadow-[0_10px_40px_-10px_hsl(43_72%_55%/0.15)] transition-all duration-500"
    >
      <div className="aspect-square bg-secondary relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-300">{product.name}</h3>
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