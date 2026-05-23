import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import futures1 from "@shared/static/images/futures-1.jpg";
import futures2 from "@shared/static/images/futures-2.jpg";
import futures3 from "@shared/static/images/futures-3.jpg";
import futures4 from "@shared/static/images/futures-4.jpg";
import futures5 from "@shared/static/images/futures-5.jpg";
import futures6 from "@shared/static/images/futures-6.jpg";
import futures7 from "@shared/static/images/futures-7.jpg";
import futures8 from "@shared/static/images/futures-8.jpg";
import futures9 from "@shared/static/images/futures-9.jpg";
import futures10 from "@shared/static/images/futures-10.jpg";
import futures11 from "@shared/static/images/futures-11.jpg";

export default function FuturesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">Back</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 md:px-12 text-center"
        >
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 mb-6">
            Fujian Community
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-stone-900 mb-8 leading-[1.1]">
            Futures（福雀来）
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            A place where life unfolds at its own rhythm, and growth emerges from genuine human connection.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 1 - Philosophy */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200">
                <img
                  src={futures1}
                  alt="Community Philosophy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="lg:col-span-5 lg:pl-8">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-400 mb-4">
                Philosophy
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-8 leading-tight">
                All meaningful growth begins with understanding living human beings.
              </motion.h2>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p className="text-lg italic text-stone-500 border-l-2 border-stone-300 pl-6">
                  "If you have never truly experienced the changing sky from morning to night, the subtle difference in the scent of air at different hours, or the way your appetite and skin shift with the seasons — how could you say you have lived a deeply joyful and fulfilled day?"
                </p>
                <p>
                  Only by stepping beyond labels, entering life itself, and embracing emotion, values, and lived experience, can we rediscover the original vitality and creativity within a person.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Quote */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="aspect-[21/9] md:aspect-[3/1]">
              <img
                src={futures2}
                alt="Landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-stone-900/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16">
              <p className="text-white text-xl md:text-3xl font-serif font-light text-center max-w-4xl leading-relaxed">
                "And how could you create a rich and vibrant life?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Beginner's Village */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-400 mb-4">
              The Village
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6">
              The Beginner's Village
            </motion.h2>
          </div>

          {/* Intro Text with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-stone-600 font-light leading-relaxed text-lg"
            >
              <p>
                There are many kinds of villages in this world: eco-villages, resort villages, global villages. But <strong className="text-stone-900 font-normal">Futures</strong> is a "Beginner's Village" — a place that exists at the starting point of every great journey.
              </p>
              <p>
                A parallel world beside ordinary reality, born from accidental creativity, where hidden order quietly grows within chaos and uncertainty.
              </p>
              <p className="text-stone-500 italic">
                Here, everything follows a slower and more ancient rhythm. This is not a world you are asked to "quickly fit into." It is a place inviting you to slowly sink into life itself.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src={futures3} alt="Village Life" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Seven Conditions Grid */}
          <div className="mb-16">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-2xl md:text-3xl font-light text-stone-900 text-center mb-12">
              Seven Conditions for Passing Through
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: "01", text: "Presence within the flowing moment" },
                { num: "02", text: "Curiosity toward the whispers of all living things" },
                { num: "03", text: "The joy of creating without purpose" },
                { num: "04", text: "Courage to stay with the unknown" },
                { num: "05", text: "Generosity without leaving traces" },
                { num: "06", text: "Awareness of becoming a source yourself" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#FAFAF8] rounded-2xl p-8 border border-stone-100"
                >
                  <span className="text-4xl font-serif text-stone-200 font-light">{item.num}</span>
                  <p className="mt-4 text-stone-700 font-light leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <p className="font-serif text-2xl md:text-3xl text-stone-400 italic">
              "Perhaps that is where the infinite game truly begins."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery - Masonry Style */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={futures4} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={futures5} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={futures6} alt="Gallery 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={futures7} alt="Gallery 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={futures8} alt="Gallery 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={futures9} alt="Gallery 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={futures10} alt="Gallery 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={futures11} alt="Gallery 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Activities */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 mb-4">
              Activities
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-4xl md:text-5xl font-light mb-6">
              Community Life
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "The Art of Life Center",
                desc: "Reconnecting people with land, creativity and life itself"
              },
              {
                title: "Adult Forest University",
                desc: "Perhaps adulthood is not about becoming harder, faster, or more efficient."
              },
              {
                title: "Children's Nature Forest Campus",
                desc: "For children aged 3-8. Education grows through life itself."
              },
              {
                title: "1000 Hours Outdoors",
                desc: "Quiet the mind. Awaken the body."
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-stone-700 pt-8"
              >
                <h3 className="font-serif text-xl md:text-2xl font-light mb-3">{activity.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{activity.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 md:mt-28 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl font-light mb-6 italic text-stone-300">
                "Whoever you are... there may already be a place for you here."
              </p>
            </div>
          </motion.div>

          {/* Accommodation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 pt-16 border-t border-stone-800"
          >
            <p className="text-center text-stone-500 text-sm uppercase tracking-[0.2em] mb-4">Accommodation</p>
            <p className="text-center text-stone-400 font-light">
              Shared village dormitories · Hostels · Apartments · Mountain villas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 text-stone-600">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="font-serif text-lg mb-2">Futures（福雀来）</p>
          <p className="text-sm font-light">A Beginner's Village in Fujian, China</p>
        </div>
      </footer>
    </div>
  );
}
