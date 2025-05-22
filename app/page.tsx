// app/page.tsx

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-900 font-sans flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">JERSEY SPORT CO</h1>
      <p className="mb-4 text-center max-w-lg">
        Personaliza tu jersey con tu nombre, colores y logo. Haz tu pedido por WhatsApp.
      </p>
      <a
        href="https://wa.me/573001112233?text=Hola,%20quiero%20personalizar%20un%20jersey"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
      >
        PEDIR POR WHATSAPP
      </a>
    </main>
  );
}

