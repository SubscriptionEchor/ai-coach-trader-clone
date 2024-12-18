import { TestimonialsHeader } from './testimonials-header';
import { TestimonialsScroll } from './testimonials-scroll';

export function Testimonials() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        style={{ backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <TestimonialsHeader />
        <TestimonialsScroll />
        <TestimonialsScroll />
      </div>
    </section>
  );
}
