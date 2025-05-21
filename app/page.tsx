import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-blue-900 p-10">
      <h1 className="text-4xl font-bold mb-6">JERSEY SPORT CO</h1>
      <p className="mb-4 text-center max-w-lg">
        Personaliza tu jersey con tu nombre, colores y logo. Haz tu pedido por WhatsApp o explora el catálogo.
      </p>
      <a
        href="https://wa.me/573001112233?text=Hola,%20quiero%20personalizar%20un%20jersey"
        target="_blank"
        className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
      >
