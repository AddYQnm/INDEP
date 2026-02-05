import { motion } from "framer-motion";

interface WhyCardProps {
  title: string;
  text: string;
  accent?: boolean;
  className?: string;
}

export function WhyCard({
  title,
  text,
  accent = false,
  className = "",
}: WhyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        relative overflow-hidden rounded-2xl p-8
        ${
          accent
            ? "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white"
            : "border border-pink-500/20 bg-gradient-to-br from-white via-white to-pink-50"
        }
        ${className}
      `}
    >
      {/* glow */}
      {accent && (
        <div className="pointer-events-none absolute inset-0 bg-white/10 blur-2xl" />
      )}

      <div className="relative z-10">
        <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
        <p className={accent ? "text-white/90" : "text-gray-600"}>
          {text}
        </p>
      </div>
    </motion.div>
  );
}
