import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoUrl from "@assets/logo.png";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for window load
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={logoUrl}
                alt="Inclusion Bridge Africa Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold text-primary font-display mb-2">
              Inclusion Bridge Africa
            </h2>
            <div className="flex gap-1 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-secondary"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
