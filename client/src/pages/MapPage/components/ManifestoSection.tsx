import { motion } from "framer-motion";

const lines = [
  "Not tourism, but shared living.",
  "Not passing through, but truly meeting.",
  "Not staged experiences, but an invitation into real life.",
  "Deeply local, naturally global.",
];

export function ManifestoSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50/50 to-slate-50 py-12 md:py-16 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Top decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-slate-300 mx-auto mb-16"
          />
          
          {/* Manifesto lines */}
          <div className="space-y-6 md:space-y-8">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-slate-700 leading-relaxed tracking-wide"
              >
                {line}
              </motion.p>
            ))}
          </div>
          
          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-16 h-px bg-slate-300 mx-auto mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
}
