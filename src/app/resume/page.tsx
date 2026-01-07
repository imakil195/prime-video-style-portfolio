"use client";

import { Header } from "@/components/layout/Header";
import { Download, Calendar, Briefcase, Award } from "lucide-react";
import { PROFILE_DATA } from "@/data/mockData";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-[#0f171e] pb-20">
            <Header />

            {/* Header Info */}
            <div className="pt-24 px-4 md:px-12 mb-8 border-b border-gray-800 pb-8">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-none tracking-tight">
                    Professional Resume
                    <span className="block text-2xl md:text-4xl text-gray-400 mt-3 font-normal">& Work Experience</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm md:text-base font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Released 2025</span>
                    <span className="bg-gray-700 text-gray-200 px-1.5 py-0.5 rounded text-xs border border-gray-500">RESUME</span>
                    <span className="text-prime-blue hover:underline cursor-pointer">Engineering</span>
                </div>

                <div className="mt-6 flex gap-4">
                    <a
                        href="/AkilS-Resume-final.pdf"
                        download
                        className="bg-prime-blue hover:bg-prime-blue/90 text-white font-bold py-3 px-8 rounded flex items-center gap-2 transition-transform active:scale-95"
                    >
                        <Download className="w-5 h-5 fill-current" />
                        Download PDF
                    </a>
                    <button className="bg-[#425265]/80 hover:bg-[#425265] text-white font-bold py-3 px-8 rounded transition-colors">
                        View Full History
                    </button>
                </div>
            </div>

            {/* Timeline Content */}
            <div className="px-4 md:px-12 max-w-4xl space-y-12">

                {/* Experience Section */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-prime-blue pl-3">Experience</h2>

                    <div className="space-y-8 relative pl-4 border-l border-gray-700 ml-2">
                        {PROFILE_DATA.experience.map((exp) => (
                            <div key={exp.id} className="relative">
                                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-prime-blue ring-4 ring-[#0f171e]" />
                                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                <p className="text-prime-blue text-sm mb-2">{exp.company} &middot; {exp.period}</p>
                                <div className="text-gray-400 leading-relaxed text-sm">
                                    {exp.bullets ? (
                                        <ul className="list-disc pl-4 space-y-1">
                                            {exp.bullets.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{exp.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-prime-blue pl-3">Education</h2>
                    <div className="space-y-8 relative pl-4 border-l border-gray-700 ml-2">
                        <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-600 ring-4 ring-[#0f171e]" />
                            <h3 className="text-lg font-bold text-white">{PROFILE_DATA.education.school}</h3>
                            <p className="text-prime-blue text-sm mb-2">{PROFILE_DATA.education.degree}</p>
                            <p className="text-gray-500 text-sm mb-2">{PROFILE_DATA.education.year}</p>
                            {PROFILE_DATA.education.grade && (
                                <p className="text-gray-400 flex items-center gap-2 text-sm">
                                    <Award className="w-4 h-4 text-yellow-500" />
                                    <span className="italic text-white">{PROFILE_DATA.education.grade}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
