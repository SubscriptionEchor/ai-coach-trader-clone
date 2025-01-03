import React from 'react';

export function TrustedBy() {
  return (
    <div className="text-center mt-24">
      <p className="text-gray-500 mb-8">Designs trusted by companies like:</p>
      <div className="flex justify-center items-center gap-16 flex-wrap opacity-50">
        {['ANNAH', 'MILANO', 'LUMINOUS', 'AMSTERDAM'].map((brand) => (
          <div key={brand} className="text-xl text-gray-400 font-semibold">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}