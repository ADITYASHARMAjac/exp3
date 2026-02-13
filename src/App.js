import React from 'react';
// Sahi paths aapke sidebar ke hisaab se
import ProductCard from './experiments/Exp3.1'; 
import LibrarySystem from './experiments/Exp3.2';
import ClassHierarchy from './experiments/Exp3.3';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-8">
        <header className="bg-white border border-amber-200 rounded-2xl shadow-sm px-6 py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-800">Experiment Dashboard</h1>
          <p className="text-slate-600 mt-2">Simple, clean layout for all experiment sections.</p>
        </header>

      <section className="w-full bg-white border border-amber-200 rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-sm font-semibold text-teal-700 mb-4 uppercase tracking-[0.2em]">Experiment 3.3</h2>
        <ClassHierarchy />
      </section>

      <section className="w-full bg-white border border-amber-200 rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-sm font-semibold text-teal-700 mb-4 uppercase tracking-[0.2em]">Experiment 3.2</h2>
        <LibrarySystem />
      </section>

      <section className="w-full bg-white border border-amber-200 rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-sm font-semibold text-teal-700 mb-4 uppercase tracking-[0.2em]">Experiment 3.1</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard name="Wireless Headphones" price="129.99" status="In Stock" image="🎧" />
          <ProductCard name="Mechanical Keyboard" price="89.99" status="Out of Stock" image="⌨️" />
          <ProductCard name="Smart Watch" price="199.99" status="In Stock" image="⌚" />
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;