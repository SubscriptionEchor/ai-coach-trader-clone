import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Trading Smarter?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already using CryptoSignals to
            make data-driven trading decisions.
          </p>
          <button className="px-8 py-3 bg-gradient-primary rounded-full transition-colors">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}
