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
    icon?: any; // React Icon component
}

import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
    project: Project;
    isFirst?: boolean;
    isLast?: boolean;
    className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/projects/${project.id}`);
    };

    return (
        <motion.div
            className={cn(
                "relative flex-shrink-0 w-[250px] md:w-[300px] aspect-video rounded-md cursor-pointer transition-all duration-300 z-0 hover:z-50",
                className
            )}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Thumbnail - Gradient Card */}
            <div className={cn(
                "w-full h-full rounded-md overflow-hidden bg-gradient-to-br from-[#1b2530] to-[#10161d] relative transition-all duration-300 flex items-center justify-center p-6 text-center border-t border-white/5",
                isHovered ? "rounded-b-none border-x-2 border-t-2 border-b-0 border-white shadow-[0_-10px_25px_rgba(255,255,255,0.1)] bg-[#1b2530]" : "border-transparent"
            )}>
                {project.icon ? (
                    <div className="flex flex-col items-center gap-3">
                        <project.icon className={cn(
                            "w-12 h-12 text-gray-500 transition-colors duration-300",
                            isHovered ? "text-white" : ""
                        )} />
                        <h3 className={cn(
                            "text-lg font-bold text-gray-100 tracking-tight leading-snug transition-colors duration-300",
                            isHovered ? "text-white" : ""
                        )}>
                            {project.title}
                        </h3>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <h3 className={cn(
                            "text-lg md:text-xl font-bold text-gray-100 tracking-tight leading-snug transition-colors duration-300",
                            isHovered ? "text-white scale-105" : ""
                        )}>
                            {project.title}
                        </h3>
                    </div>
                )}
            </div>

            {/* Expanded Content (Visible on Hover) */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="absolute top-full left-0 right-0 bg-[#1b2530] p-4 rounded-b-md shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-x-2 border-b-2 border-white border-t-0 -mt-[2px] z-50 overflow-hidden" // -mt-[2px] to overlap 2px border
                    onClick={(e) => {
                        e.stopPropagation();
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
