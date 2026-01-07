"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Play, Plus, Info } from "lucide-react";
import { TOP_PROJECTS } from "@/data/mockData";

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TOP_PROJECTS.length);
        }, 8000); // 8 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Background Image Placeholder */}
                    {/* In a real app, use next/image with layout="fill" */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-60"
                        style={{
                            backgroundImage: `url(${TOP_PROJECTS[currentIndex].image})`,
                            backgroundColor: '#111'
                        }}
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-40 flex items-center px-6 md:px-12 pt-20 pointer-events-none">
                        <div className="max-w-xl space-y-4 pointer-events-auto">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                            >
                                {TOP_PROJECTS[currentIndex].title}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-lg md:text-xl text-gray-200 line-clamp-3"
                            >
                                {TOP_PROJECTS[currentIndex].description}
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center gap-4 pt-4"
                            >
                                <Link
                                    href={`/projects/${TOP_PROJECTS[currentIndex].id}`}
                                    className="flex items-center gap-2 bg-prime-blue hover:bg-prime-blue/90 text-white px-6 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105 active:scale-95"
                                >
                                    <Play className="w-6 h-6 fill-current" />
                                    View Project
                                </Link>

                                <button className="flex items-center gap-2 bg-[#425265]/80 hover:bg-[#425265] text-white px-6 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105 active:scale-95 backdrop-blur-sm">
                                    <Plus className="w-6 h-6" />
                                    Watchlist
                                </button>

                                <button className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors">
                                    <Info className="w-6 h-6 text-gray-200" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f171e] to-transparent z-30 pointer-events-none" />

            {/* Indicators */}
            <div className="absolute bottom-8 right-12 z-40 flex gap-2">
                {TOP_PROJECTS.map((_, idx) => (
                    <button
                        key={idx}
                        className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-gray-500'}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </div>
    );
}
