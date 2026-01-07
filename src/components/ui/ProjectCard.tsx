"use client";

import { motion } from "framer-motion";
import { Play, Plus, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
    id: number | string;
    title: string;
    description: string;
    tags?: string[];
    image?: string;
}

import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
    project: Project;
    isFirst?: boolean;
    isLast?: boolean;
}

export function ProjectCard({ project, isFirst = false, isLast = false }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/projects/${project.id}`);
    };

    return (
        <motion.div
            className="relative flex-shrink-0 w-[250px] md:w-[300px] aspect-video rounded-md cursor-pointer transition-all duration-300 z-0 hover:z-50"
            style={{ transformOrigin: isFirst ? 'left center' : isLast ? 'right center' : 'center center' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Thumbnail */}
            <div className={cn("w-full h-full rounded-md overflow-hidden bg-gray-800 relative transition-all duration-300", isHovered ? "rounded-b-none shadow-2xl ring-2 ring-[#0f171e]" : "")}>
                {/* Placeholder for Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-500">
                    {/* Replace with Image component later */}
                    <span className="text-sm font-semibold">{project.title}</span>
                </div>
            </div>

            {/* Expanded Content (Visible on Hover) */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-[#1A242F] p-3 rounded-b-md shadow-2xl border-x border-b border-gray-600/50 border-t-0 -mt-[1px] z-50"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent duplicate triggers if wrapper has click
                        handleNavigate();
                    }}
                >
                    {/* Action Row - Compact */}
                    <div className="flex flex-col gap-2 mb-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNavigate();
                            }}
                            className="w-full h-9 rounded-[4px] bg-white flex items-center justify-center hover:bg-gray-200 transition-colors gap-2 group/btn"
                        >
                            <Play className="w-4 h-4 fill-black text-black" />
                            <span className="text-black font-bold text-xs uppercase tracking-wide">Play</span>
                        </button>

                        <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-full border-2 border-gray-400/60 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors">
                                <Plus className="w-4 h-4 text-gray-200" />
                            </button>
                            <button className="w-8 h-8 rounded-full border-2 border-gray-400/60 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors">
                                <Info className="w-4 h-4 text-gray-200" />
                            </button>

                            {/* Prime Check alignment */}
                            <div className="ml-auto flex items-center gap-1.5">
                                <span className="text-[#00A8E1] text-[10px] font-bold flex items-center gap-1">
                                    <span className="w-3 h-3 bg-[#00A8E1] rounded-full text-[#0f171e] flex items-center justify-center text-[8px]">✓</span>
                                    Included with Prime
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Row */}
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold mb-2">
                        <span className="text-white">2025</span>
                        <span className="border border-gray-500 px-1 rounded-[2px]">U/A 13+</span>
                        <span className="bg-gray-700 text-gray-200 px-1 rounded-[2px]">{project.tags?.[0] || 'App'}</span>
                    </div>

                    {/* Description - Compact */}
                    <p className="text-gray-300 text-[10px] line-clamp-2 leading-relaxed mb-2">
                        {project.description}
                    </p>

                    {/* Tags - Minimal */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags?.slice(1, 3).map((tag) => (
                            <span key={tag} className="text-[9px] text-gray-500 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
