"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { MOCK_PROJECTS_ROW, SKILLS_DATA } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Combine data for search
    const allItems = [
        ...MOCK_PROJECTS_ROW.map(p => ({ ...p, type: 'Project', href: `/projects` })), // Todo: dynamic link
        ...SKILLS_DATA.map(s => ({ ...s, description: s.category, type: 'Skill', href: '/skills' }))
    ];

    const results = query
        ? allItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        : [];

    const handleSelect = (href: string) => {
        router.push(href);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-[#0f171e]/95 backdrop-blur-sm"
                >
                    <div className="max-w-4xl mx-auto px-4 pt-8">
                        {/* Search Bar */}
                        <div className="relative flex items-center border-b border-gray-600 pb-4">
                            <SearchIcon className="w-8 h-8 text-gray-400 mr-4" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search for projects, skills, or experience..."
                                className="w-full bg-transparent text-2xl md:text-4xl text-white placeholder:text-gray-600 focus:outline-none font-medium"
                            />
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors ml-4"
                            >
                                <X className="w-8 h-8 text-white" />
                            </button>
                        </div>

                        {/* Results */}
                        <div className="mt-8 space-y-2">
                            {results.length > 0 ? (
                                results.map((item, idx) => (
                                    <motion.div
                                        key={`${item.id}-${idx}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        onClick={() => handleSelect(item.href)}
                                        className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg cursor-pointer group transition-colors"
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-white group-hover:text-prime-blue transition-colors">
                                                {item.title}
                                            </span>
                                            <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                                                {item.type} &middot; {item.description}
                                            </span>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-prime-blue -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    </motion.div>
                                ))
                            ) : query ? (
                                <p className="text-gray-500 text-lg">No results found for "{query}"</p>
                            ) : (
                                <div className="text-gray-500 text-sm font-medium mt-4">
                                    Try searching for "React", "Next.js", or "Analytics"
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
