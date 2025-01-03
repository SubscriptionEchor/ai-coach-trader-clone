import React from 'react';

export function Switch() {
  return (
    <button
      type="button"
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
    >
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
    </button>
  );
}