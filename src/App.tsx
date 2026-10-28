import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#141715] flex flex-col items-center justify-start py-0 sm:py-6 px-0 sm:px-4">
      {/* Menu Card Container */}
      <main className="w-full max-w-[860px] mx-auto bg-[#FAF6EC] shadow-2xl overflow-hidden sm:rounded-md flex justify-center">
        <img
          src="/assets/aistudio/Frame_193_57df070e.jpg"
          alt="Jems Table Catering Menu"
          className="w-full h-auto block object-contain select-none"
          loading="eager"
          decoding="async"
        />
      </main>
    </div>
  );
}
