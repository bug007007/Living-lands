import { ArrowLeftIcon, MapPinIcon, CalendarIcon, UsersIcon, WalletIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import land1 from "@shared/static/images/land-1.jpg";
import land2 from "@shared/static/images/land-2.jpg";
import land3 from "@shared/static/images/land-3.jpg";
import land4 from "@shared/static/images/land-4.jpg";
import land5 from "@shared/static/images/land-5.jpg";
import land6 from "@shared/static/images/land-6.jpg";
import land7 from "@shared/static/images/land-7.jpg";
import land8 from "@shared/static/images/land-8.jpg";
import land9 from "@shared/static/images/land-9.jpg";
import land10 from "@shared/static/images/land-10.jpg";
import land11 from "@shared/static/images/land-11.jpg";
import land12 from "@shared/static/images/land-12.jpg";
import land13 from "@shared/static/images/land-13.jpg";
import land14 from "@shared/static/images/land-14.jpg";

export default function RootedInLandPage() {
  const navigate = useNavigate();

  const itinerary = [
    { day: 1, location: "Xiamen", theme: "Arrival & Coastal First Impressions" },
    { day: 2, location: "Xiamen", theme: "Island Rhythms & Local Life" },
    { day: 3, location: "Quanzhou", theme: "Maritime Heritage & Faith" },
    { day: 4, location: "Quanzhou", theme: "Living Crafts & Temple Streets" },
    { day: 5, location: "Fujian Tulou", theme: "Collective Architecture" },
    { day: 6, location: "Fujian Tulou", theme: "Village Immersion" },
    { day: 7, location: "Pingnan", theme: "Mountain Tea Culture" },
    { day: 8, location: "Pingnan", theme: "Ancient Trails & Forests" },
    { day: 9, location: "Wuyishan", theme: "Tea Mountains & Rivers" },
    { day: 10, location: "Wuyishan", theme: "Bamboo Raft & Nature" },
    { day: 11, location: "Wuyishan", theme: "Final Reflections" },
    { day: 12, location: "Departure", theme: "Carrying the Journey Home" },
  ];

  const highlights = [
    { title: "Intentionally Small", desc: "Maximum 4 participants for intimate experience" },
    { title: "Ancient & Future-Oriented", desc: "Discover timeless wisdom for modern living" },
    { title: "Not Tourism, but Shared Living", desc: "Live alongside locals, not observe from outside" },
    { title: "Learning from Practitioners", desc: "Masters of craft, tea, and tradition as teachers" },
    { title: "Season & Atmosphere", desc: "September-October: golden light, harvest season" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
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
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 mb-6">
            Journey Experience
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-stone-900 mb-6 leading-[1.1]">
            Rooted in the Land
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-2xl md:text-3xl font-serif text-stone-500 mb-8 italic">
            Between Mountains and Sea
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light">
            A 12-Day Journey into the Living Culture of Southern China
          </motion.p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img src={land1} alt="Rooted in the Land" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Journey Philosophy */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 mb-4">Journey Philosophy</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-8">Why Fujian?</h2>
              <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
                <p>
                  Fujian is one of the best gateways into Southern Chinese culture — a land where maritime civilization meets mountain traditions, where ancient tea cultures thrive alongside folk spirituality.
                </p>
                <p>
                  This is a province of collective architecture, master craftsmanship, and local foodways that have been refined over centuries. Here, the connection between people and land remains tangible and alive.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={land2} alt="Fujian Scenery" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <img src={land3} alt="Mountain View" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Route Overview */}
      <section className="py-20 md:py-32 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-4">Route</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">The Journey Path</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-emerald-700 hidden md:block" />
            
            <div className="space-y-12">
              {[
                { city: "Xiamen", desc: "Coastal Gateway & Island Life", days: "Days 1-2" },
                { city: "Quanzhou", desc: "Maritime Heritage & Faith", days: "Days 3-4" },
                { city: "Fujian Tulou", desc: "Collective Architecture & Villages", days: "Days 5-6" },
                { city: "Pingnan", desc: "Mountain Tea & Ancient Trails", days: "Days 7-8" },
                { city: "Wuyishan", desc: "Tea Mountains & Rivers", days: "Days 9-11" },
              ].map((stop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                >
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-emerald-400 text-sm font-medium">{stop.days}</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-emerald-400 border-4 border-emerald-900 z-10" />
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="font-serif text-2xl font-light">{stop.city}</h3>
                    <p className="text-emerald-300 font-light">{stop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Highlights */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 mb-4">Highlights</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900">What Makes This Journey Special</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm"
              >
                <span className="text-4xl font-serif text-emerald-100 font-light">0{index + 1}</span>
                <h3 className="font-serif text-xl text-stone-900 mt-4 mb-2">{item.title}</h3>
                <p className="text-stone-600 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={land4} alt="Experience 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-6">
              <img src={land5} alt="Experience 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={land6} alt="Experience 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-6">
              <img src={land7} alt="Experience 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Itinerary */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 mb-4">Itinerary</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900">Day by Day</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itinerary.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-stone-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-semibold">
                    {day.day}
                  </span>
                  <span className="text-stone-400 text-sm">|</span>
                  <span className="text-stone-600 font-medium">{day.location}</span>
                </div>
                <p className="text-stone-700 font-light">{day.theme}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={land8} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={land9} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={land10} alt="Gallery 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={land11} alt="Gallery 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={land12} alt="Gallery 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={land13} alt="Gallery 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 mb-4">Practical Info</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900">Journey Details</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-stone-50 rounded-2xl"
            >
              <UsersIcon className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">Group Size</p>
              <p className="text-3xl font-serif text-stone-900">Max 4</p>
              <p className="text-stone-600 font-light mt-2">Intimate & Personal</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-8 bg-stone-50 rounded-2xl"
            >
              <CalendarIcon className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">Duration</p>
              <p className="text-3xl font-serif text-stone-900">12 Days</p>
              <p className="text-stone-600 font-light mt-2">11 Nights</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 bg-stone-50 rounded-2xl"
            >
              <WalletIcon className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">Price</p>
              <p className="text-3xl font-serif text-stone-900">RMB 58,000</p>
              <p className="text-stone-600 font-light mt-2">Per Person</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-serif text-xl text-stone-900 mb-4">Included</h3>
              <ul className="space-y-3 text-stone-600 font-light">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                  <span>All accommodation (boutique hotels & traditional guesthouses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                  <span>All meals featuring local cuisine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                  <span>Private transportation throughout</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                  <span>Expert local guides & practitioners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                  <span>All activities & entrance fees</span>
                </li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-serif text-xl text-stone-900 mb-4">Not Included</h3>
              <ul className="space-y-3 text-stone-600 font-light">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2" />
                  <span>International flights to/from Xiamen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2" />
                  <span>Travel insurance (required)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2" />
                  <span>Personal expenses & souvenirs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2" />
                  <span>Alcoholic beverages</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Image */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden">
            <img src={land14} alt="Journey Conclusion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center px-8">
              <div className="text-center text-white max-w-3xl">
                <p className="font-serif text-2xl md:text-4xl font-light leading-relaxed">
                  A journey about reconnecting with land, culture, community, and one another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-900 text-stone-400">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="font-serif text-lg mb-2">Rooted in the Land</p>
          <p className="text-sm font-light">Between Mountains and Sea</p>
        </div>
      </footer>
    </div>
  );
}
