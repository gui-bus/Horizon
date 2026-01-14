"use client";

//#region Imports
import { Card } from "@heroui/react";
import {
  AirplaneTakeoffIcon,
  ClockIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { fadeInUp, viewportOnce } from "@/lib/motion";

//#endregion

//#region Constants
const categories = [
  {
    id: "wild-escapes",
    label: "Wild Escapes",
    trips: [
      {
        name: "Amazon Adventure",
        duration: "7 days",
        price: "$2,100",
        image: "/content/trips/amazonia.webp",
        rating: 4.97,
        reviews: 320,
      },
      {
        name: "Patagonia Trek",
        duration: "10 days",
        price: "$2,500",
        image: "/content/trips/patagonia.webp",
        rating: 4.95,
        reviews: 180,
      },
      {
        name: "Australian Outback",
        duration: "8 days",
        price: "$2,400",
        image: "/content/trips/australia.webp",
        rating: 4.89,
        reviews: 150,
      },
      {
        name: "Alaskan Wilderness",
        duration: "7 days",
        price: "$2,300",
        image: "/content/trips/alaska.webp",
        rating: 4.94,
        reviews: 200,
      },
    ],
  },
  {
    id: "cultural-immersion",
    label: "Cultural Immersion",
    trips: [
      {
        name: "Kyoto Temples",
        duration: "5 days",
        price: "$1,900",
        image: "/content/trips/kyoto.webp",
        rating: 4.97,
        reviews: 1052,
      },
      {
        name: "Parisian Art Tour",
        duration: "4 days",
        price: "$2,000",
        image: "/content/trips/paris.webp",
        rating: 4.95,
        reviews: 980,
      },
      {
        name: "Rome Heritage",
        duration: "5 days",
        price: "$1,850",
        image: "/content/trips/roma.webp",
        rating: 4.91,
        reviews: 680,
      },
      {
        name: "Mexico City Culture",
        duration: "6 days",
        price: "$1,950",
        image: "/content/trips/mexico.webp",
        rating: 4.92,
        reviews: 700,
      },
    ],
  },
  {
    id: "urban-pulse",
    label: "Urban Pulse",
    trips: [
      {
        name: "New York Vibes",
        duration: "4 days",
        price: "$2,200",
        image: "/content/trips/newYork.webp",
        rating: 4.94,
        reviews: 880,
      },
      {
        name: "Tokyo Streets",
        duration: "5 days",
        price: "$2,300",
        image: "/content/trips/tokyo.webp",
        rating: 4.95,
        reviews: 910,
      },
      {
        name: "London Life",
        duration: "4 days",
        price: "$2,100",
        image: "/content/trips/london.webp",
        rating: 4.92,
        reviews: 860,
      },
      {
        name: "Hong Kong Buzz",
        duration: "4 days",
        price: "$2,250",
        image: "/content/trips/hongKong.webp",
        rating: 4.93,
        reviews: 790,
      },
    ],
  },
];
//#endregion

export function TabbedTrips() {
  //#region useStates
  const [activeTab, setActiveTab] = useState("wild-escapes");
  //#endregion

  //#region Filters
  const activeCategory = categories.find((c) => c.id === activeTab);
  //#endregion

  return (
    <section className="py-24 px-6 lg:px-12" id="destinations">
      {/* BADGE - TITLE - DESCRIPTION */}
      <motion.div
        className="mb-16 text-center mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        {/* BADGE */}
        <span className="text-sm font-medium uppercase tracking-widest text-accent">
          Destinations
        </span>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Discover Your{" "}
          <motion.span
            className="relative inline-block font-serif italic font-normal text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Next Adventure
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeOut",
                    delay: 0.25,
                  },
                },
              }}
              className="absolute left-0 -bottom-3 h-0.75 w-[130%] origin-left bg-linear-to-r from-accent via-accent/60 to-transparent"
            />
          </motion.span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-2 text-gray-600">
          Curated experiences for every traveler. Explore our top destinations.
        </p>
      </motion.div>

      {/* TABS */}
      <motion.div
        className="mb-12 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-12 cursor-pointer text-lg py-2 rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ${
              activeTab === category.id
                ? "bg-accent text-white shadow-md font-medium"
                : "text-foreground"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* TRIPS GRID */}
      <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 select-none">
        <AnimatePresence mode="wait">
          {activeCategory?.trips.map((trip, index) => (
            <motion.div
              key={trip.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.05 * index, duration: 0.35 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-120">
                {/* IMAGE */}
                <Image
                  src={trip.image}
                  alt={trip.name}
                  fill
                  className="object-cover"
                />

                {/* DURATION */}
                <span className="absolute top-0 right-0 w-fit px-10 py-2 bg-black/50 backdrop-blur-md rounded-bl-3xl flex gap-2 text-white">
                  <ClockIcon weight="duotone" size={20} />
                  {trip.duration} trip
                </span>

                {/* RATINGS - PRICE - NAME - CTA */}
                <div className="absolute bottom-0 left-0 w-full p-5 bg-black/50 backdrop-blur-md flex flex-col gap-2 text-white">
                  {/* RATINGS - PRICE */}
                  <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between text-sm ">
                    {/* RATINGS */}
                    <div className="flex items-center gap-1">
                      <StarIcon
                        size={16}
                        weight="fill"
                        className="text-yellow-400"
                      />
                      <span>
                        {trip.rating} ({trip.reviews})
                      </span>
                    </div>

                    {/* PRICE */}
                    <span className="text-2xl 2xl:text-3xl mt-2 2xl:mt-0">
                      {trip.price} <span className="text-sm">/ person</span>
                    </span>
                  </div>

                  {/* NAME */}
                  <h3 className="text-lg md:text-xl leading-snug truncate">
                    {trip.name}
                  </h3>

                  {/* CTA */}
                  <button
                    type="button"
                    className="bg-accent text-white hover:bg-accent/90 transition-colors py-2 w-full justify-center rounded-3xl h-12 flex items-center gap-5 mt-3"
                  >
                    <AirplaneTakeoffIcon size={28} /> Book now
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
