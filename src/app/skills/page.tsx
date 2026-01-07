"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { SKILLS_DATA } from "@/data/mockData";
import { cn } from "@/lib/utils";

const SEASONS = [
    { id: 's1', title: 'Season 1: Languages', category: 'Languages' },
    { id: 's2', title: 'Season 2: Frontend', category: 'Frontend' },
    { id: 's3', title: 'Season 3: Backend', category: 'Backend' },
    { id: 's4', title: 'Season 4: Cloud & DevOps', category: 'Cloud & DevOps' },
    { id: 's5', title: 'Season 5: AI Tools', category: 'AI Tools' },
    { id: 's6', title: 'Season 6: Tools & Platforms', category: 'Tools & Platforms' },
];

export default function SkillsPage() {
    const [activeSeason, setActiveSeason] = useState(SEASONS[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Filter skills based on active season/category
    const filteredSkills = SKILLS_DATA.filter(s => s.category === activeSeason.category);

    return (
        <div className="min-h-screen bg-[#0f171e] pb-20">
            <Header />

            <main className="pt-24 px-4 md:px-12">
                <h1 className="text-3xl font-bold text-white mb-2">Technical Skills</h1>
                <p className="text-gray-400 mb-8">Included with your subscription</p>

                {/* Seasons Selector */}
                <div className="flex flex-col md:flex-row gap-6 mb-10">

                    {/* Mobile Dropdown (Vertical with Arrow) */}
                    <div className="md:hidden relative z-20">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 font-bold"
                        >
                            <span>{activeSeason.title}</span>
                            <ChevronDown className={cn("w-5 h-5 transition-transform", isDropdownOpen ? "rotate-180" : "")} />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-[#19222B] border border-gray-700 rounded-md shadow-xl overflow-hidden"
                                >
                                    {SEASONS.map(season => (
                                        <button
                                            key={season.id}
                                            onClick={() => {
                                                setActiveSeason(season);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={cn(
                                                "w-full text-left px-4 py-3 text-sm font-medium transition-colors border-l-4",
                                                activeSeason.id === season.id
                                                    ? "bg-gray-800 border-prime-blue text-prime-blue"
                                                    : "border-transparent text-gray-300 hover:bg-gray-800"
                                            )}
                                        >
                                            {season.title}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Desktop Vertical List */}
                    <div className="hidden md:flex flex-col gap-2 min-w-[250px]">
                        <span className="text-lg font-bold text-white mb-2">Seasons</span>
                        {SEASONS.map(season => (
                            <button
                                key={season.id}
                                onClick={() => setActiveSeason(season)}
                                className={cn(
                                    "text-left px-4 py-3 rounded-md transition-colors border-l-4",
                                    activeSeason.id === season.id
                                        ? "bg-gray-800 border-prime-blue text-prime-blue font-semibold"
                                        : "hover:bg-gray-800/50 border-transparent text-gray-400"
                                )}
                            >
                                {season.title}
                            </button>
                        ))}
                    </div>

                    {/* Episodes List - The Skills */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-prime-blue">Episodes</span>
                            <span className="text-gray-500 text-sm font-normal">({filteredSkills.length} Episodes)</span>
                        </h2>

                        <div className="space-y-4">
                            {filteredSkills.map((skill, idx) => (
                                <motion.div
                                    key={skill.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-[#19222B] p-4 rounded-md flex items-center gap-4"
                                >
                                    {/* Episode Thumbnail / Icon */}
                                    <div className="relative w-32 h-20 bg-black rounded overflow-hidden flex-shrink-0 flex items-center justify-center p-4">
                                        {skill.icon && (
                                            <skill.icon className="w-10 h-10 text-gray-500" />
                                        )}
                                        <div className="absolute inset-0 bg-black/10" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-base mb-1">{skill.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">
                                            {skill.level} proficiency. extensively used in production environments.
                                        </p>
                                    </div>

                                    <div className="text-gray-500 text-sm font-mono mr-4">
                                        {(skill.title.length + idx * 5) % 30 + 12}m
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
