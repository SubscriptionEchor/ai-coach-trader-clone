import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function NavLogo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-2 rounded-lg bg-primary/10">
        <Zap className="w-5 h-5 text-primary" />
      </div>
      <span className="text-lg font-medium">
        Pistol Signals
      </span>
    </motion.div>
  );
}