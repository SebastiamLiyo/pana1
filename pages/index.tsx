import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function QbitGastronomiaLanding() {
  const [form, setForm] = useState({ nombre: "", negocio: "", whatsapp: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Soy ${form.nombre}, tengo un negocio de tipo ${form.negocio} y me gustaría conocer más sobre Qbit. Mi WhatsApp es ${form.whatsapp}`;
    const url = `https://wa.me/5491164450430?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 px-6 py-12 md:px-20 relative text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Gestión Inteligente para tu Panadería, Cafetería o Restaurante
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Con Qbit, simplificá el control de tu negocio: ventas, stock, caja, reportes y facturación oficial en un solo lugar.
          </p>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              className="border border-gray-600 bg-zinc-800 text-white rounded-xl p-3 w-full focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="text"
              name="negocio"
              placeholder="Tipo de negocio (panadería, etc)"
              value={form.negocio}
              onChange={handleChange}
              className="border border-gray-600 bg-zinc-800 text-white rounded-xl p-3 w-full focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="Tu número de WhatsApp"
              value={form.whatsapp}
              onChange={handleChange}
              className="border border-gray-600 bg-zinc-800 text-white rounded-xl p-3 w-full focus:ring-2 focus:ring-orange-400"
              required
            />
            <Button type="submit" className="text-lg px-6 py-3 w-full bg-orange-500 hover:bg-orange-400">
              Enviar por WhatsApp
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video demo Qbit"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-8 mt-20 md:grid-cols-3 lg:grid-cols-5">
        {[{
          title: "📊 Estadísticas Claras",
          desc: "Visualizá los números clave de tu negocio en tiempo real. Tomá decisiones rápidas y seguras."
        }, {
          title: "🧾 Facturación Oficial",
          desc: "Emití facturas A, B y C al instante, integradas con ARCA AFIP sin complicaciones."
        }, {
          title: "📦 Control de Stock",
          desc: "Supervisá cada producto, insumo o combo para evitar pérdidas y aprovechar al máximo tus recursos."
        }, {
          title: "🎯 Servicio Personalizado",
          desc: "Nos adaptamos al tipo de negocio y necesidades específicas de cada cliente. Te acompañamos en cada paso."
        }, {
          title: "🕐 Soporte 24/7",
          desc: "Siempre disponibles para ayudarte. Resolvé dudas o problemas en cualquier momento del día."
        }].map((item, i) => (
          <Card key={i} className="rounded-2xl shadow-xl">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {["Solving", "Pan House", "La Font", "Lo de la Abuela"].map((empresa, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md text-center">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">⭐️⭐️⭐️⭐️⭐️</h3>
              <p className="text-gray-300 italic">
                “Qbit nos dio el control y la tranquilidad que necesitábamos en {empresa}.”
              </p>
              <p className="mt-2 font-bold text-orange-500">{empresa}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">❓ Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {[{
            question: "¿Qué incluye el sistema Qbit?",
            answer: "Incluye control de stock, facturación oficial, reportes, estadísticas y más, todo integrado."
          }, {
            question: "¿Puedo usarlo desde el celular?",
            answer: "Sí, Qbit es 100% web y se adapta a cualquier dispositivo, incluyendo celulares y tablets."
          }, {
            question: "¿Cuánto demora la implementación?",
            answer: "Podés empezar a usarlo en menos de 24 horas con acompañamiento personalizado."
          }, {
            question: "¿Qué pasa si necesito ayuda?",
            answer: "Contamos con soporte técnico disponible 24/7 para resolver cualquier duda o inconveniente."
          }].map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p className="text-gray-400 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-orange-700 text-white text-center py-12 px-6 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold mb-4">¿Listo para Actualizar Tu Panadería?</h2>
        <p className="text-lg mb-6">Agenda una demo personalizada y descubrí cómo QBITS puede ayudarte a optimizar TU NEGOCIO</p>
        <a
          href="https://wa.me/5491164450430"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-orange-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100"
        >
          Solicitar Demo por WhatsApp
        </a>
        <p className="mt-4 text-sm opacity-80">Sin compromisos • Soporte personalizado • Implementación en 24 horas</p>
      </div>
    </div>
  );
}

