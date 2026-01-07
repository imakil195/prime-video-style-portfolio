"use client";

import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ALL_PROJECTS } from "@/data/mockData";
import { Play, Plus, Info, Check, Share2, Globe, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProjectDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"episodes" | "details">("episodes");

    const project = ALL_PROJECTS.find(p => p.id === params.id || p.id === `project-${params.id}`);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0f171e] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => router.push('/browse')}
                        className="bg-prime-blue text-white px-6 py-2 rounded hover:bg-prime-blue/90"
                    >
                        Return to Browse
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f171e] pb-20 overflow-x-hidden">
            <Header />

            {/* Cinematic Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[80vh]">
                {/* Background (Gradient Placeholder) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f171e] via-[#0f171e]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f171e] via-transparent to-transparent z-10" />

                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-800">
                    <div className="w-full h-full opacity-40 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
                    {/* Fallback gradient if no image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
                        <div className="max-w-2xl space-y-6">
                            {/* Super Title / Badge */}
                            <span className="text-[#00A8E1] font-bold tracking-widest text-sm uppercase mb-2 block">
                                Prime Original
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                                {project.title}
                            </h1>

                            {/* Metadata */}
                            <div className="flex items-center gap-4 text-gray-300 text-sm font-medium">
                                <span className="text-green-500 font-bold">98% Match</span>
                                <span>{project.subTitle || "2025"}</span>
                                <span className="border border-gray-500 px-1.5 rounded-[2px] text-xs">U/A 13+</span>
                                <span className="bg-gray-700 text-white px-1.5 rounded-[2px] text-xs">HD</span>
                            </div>

                            {/* Synopsis */}
                            <p className="text-white text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none drop-shadow-md">
                                {project.longDescription || project.description}
                            </p>

                            {/* Actions */}
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-white hover:bg-gray-200 text-black px-8 py-3.5 rounded-[4px] font-bold transition-colors group"
                                    >
                                        <Play className="w-6 h-6 fill-black group-hover:scale-110 transition-transform" />
                                        <span className="text-lg">View Live Demo</span>
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="flex items-center gap-3 bg-gray-600 text-gray-400 px-8 py-3.5 rounded-[4px] font-bold cursor-not-allowed opacity-50"
                                    >
                                        <Play className="w-6 h-6 fill-gray-400" />
                                        <span className="text-lg">Demo Unavailable</span>
                                    </button>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-[#425265]/80 hover:bg-[#425265] text-white px-6 py-3.5 rounded-[4px] font-bold transition-colors"
                                    >
                                        <Github className="w-6 h-6" />
                                        <span>Source Code</span>
                                    </a>
                                )}

                                {/* Buttons removed for cleanliness as per final audit */}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium mt-4">
                                <Check className="w-4 h-4 text-[#00A8E1]" />
                                Included with your Prime membership
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs & Details Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8">
                {/* Tabs */}
                <div className="flex items-center gap-8 border-b border-gray-700 mb-8">
                    <button
                        onClick={() => setActiveTab('episodes')}
                        className={cn(
                            "pb-4 text-lg font-bold border-b-2 transition-colors",
                            activeTab === 'episodes'
                                ? "text-white border-white"
                                : "text-gray-400 border-transparent hover:text-white"
                        )}
                    >
                        Episodes (Features)
                    </button>
                    <button
                        onClick={() => setActiveTab('details')}
                        className={cn(
                            "pb-4 text-lg font-bold border-b-2 transition-colors",
                            activeTab === 'details'
                                ? "text-white border-white"
                                : "text-gray-400 border-transparent hover:text-white"
                        )}
                    >
                        Details & Cast (Tech Stack)
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'episodes' ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between pointer-events-none">
                            <h3 className="text-white font-bold text-xl">Season 1</h3>
                            <span className="text-gray-400 text-sm">{project.features?.length || 0} Episodes</span>
                        </div>

                        <div className="space-y-4">
                            {project.features?.map((feature: string, idx: number) => (
                                <div key={idx} className="group cursor-pointer bg-[#19222B] hover:bg-[#232f3c] p-6 rounded-lg flex flex-col md:flex-row gap-6 transition-colors border border-transparent hover:border-gray-600">
                                    {/* Thumbnail Placeholder */}
                                    <div className="w-full md:w-64 aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded relative overflow-hidden flex-shrink-0 group-hover:scale-[1.02] transition-transform">
                                        {/* Large Episode Number Background */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                            <span className="text-[120px] font-black text-white">{idx + 1}</span>
                                        </div>
                                        {/* Subtle Grid Pattern */}
                                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                        {/* Prime Blue Accent */}
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-prime-blue/50 to-transparent"></div>
                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                        </div>
                                        {/* Duration Badge */}
                                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs text-white rounded">
                                            {10 + idx}m
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 py-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-white font-bold text-lg group-hover:text-prime-blue transition-colors flex items-center">
                                                <span className="text-gray-500 font-light mr-4 text-2xl">{idx + 1}</span>
                                                {feature}
                                            </h4>
                                            <span className="text-gray-400 text-sm">March 2025</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            Detailed breakdown of the {feature} implementation. Utilizing modern best practices to ensure scalability and performance.
                                        </p>
                                        <a href="#" className="text-xs font-bold text-gray-400 hover:text-white underline">Read Technical Documentation</a>
                                    </div>
                                </div>
                            )) || (
                                    <div className="text-gray-400 italic">No specific features listed for this project.</div>
                                )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">
                        <div>
                            <span className="block text-gray-500 text-sm font-bold mb-2 uppercase">Genres (Tech Stack)</span>
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="text-prime-blue hover:underline cursor-pointer">{tag}</span>
                                )) || "N/A"}
                            </div>
                        </div>
                        <div>
                            <span className="block text-gray-500 text-sm font-bold mb-2 uppercase">Director (Role)</span>
                            <span className="text-prime-blue hover:underline cursor-pointer">Akil Saravanan</span>

                            <span className="block text-gray-500 text-sm font-bold mt-6 mb-2 uppercase">Studio (Links)</span>
                            <div className="flex flex-col gap-2">
                                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Project Repository</a>}
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Live Deployment</a>}
                            </div>
                        </div>
                        <div>
                            <span className="block text-gray-500 text-sm font-bold mb-2 uppercase">Maturity Rating</span>
                            <span className="border border-gray-500 px-2 py-0.5 rounded text-xs font-bold text-white inline-block mb-2">U/A 13+</span>
                            <p className="text-xs text-gray-400">Suitable for technical recruiters, engineering managers, and fellow developers.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
