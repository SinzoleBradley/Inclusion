import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/data";

export function PartnersCarousel() {
  return (
    <div className="w-full overflow-hidden py-10 bg-transparent">
      <div className="flex relative w-full max-w-[100vw]">
        {/* Gradients for premium fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-12 pr-12"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          style={{ width: "max-content" }}
        >
          {/* Repeat enough times to ensure smooth looping even on large screens */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 flex items-center justify-center h-24 min-w-[160px] hover:scale-110 transition-all duration-500 cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
