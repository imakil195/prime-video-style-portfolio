"use client";

import { Header } from "@/components/layout/Header";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

import { PROFILE_DATA } from "@/data/mockData";

export default function AboutPage() {


    return (
        <div className="min-h-screen bg-[#0f171e] pb-20">
            <Header />

            {/* Hero Banner */}
            <div className="relative w-full h-[50vh] bg-gradient-to-b from-gray-800 to-[#0f171e]">
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-gray-800 opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f171e] via-[#0f171e]/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full px-4 md:px-12 pb-12 flex flex-col md:flex-row items-end gap-8">
                    {/* Profile Avatar */}
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-gray-600/50 bg-gray-700 overflow-hidden shadow-2xl skew-y-0 md:-skew-y-2 transform origin-bottom-left">
                        <img
                            src="/akilphoto.jpg"
                            alt={PROFILE_DATA.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-2 mb-2">
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{PROFILE_DATA.name}</h1>
                        <p className="text-xl text-prime-blue font-semibold">{PROFILE_DATA.role}</p>

                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mt-2">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {PROFILE_DATA.location}</span>
                            <span>&middot;</span>
                            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {PROFILE_DATA.email}</span>
                            <span>&middot;</span>
                            <span className="flex items-center gap-1">{PROFILE_DATA.phone}</span>

                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 mb-4">
                        <a href="#contact" className="bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-200 transition-colors flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            Contact Me
                        </a>
                        <a href={PROFILE_DATA.social.github} target="_blank" rel="noreferrer" className="bg-[#425265]/80 text-white font-bold py-3 px-4 rounded hover:bg-[#425265] transition-colors flex items-center justify-center">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={PROFILE_DATA.social.linkedin} target="_blank" rel="noreferrer" className="bg-[#425265]/80 text-white font-bold py-3 px-4 rounded hover:bg-[#425265] transition-colors flex items-center justify-center">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Content - "Bio" as Synopsis */}
            <div className="px-4 md:px-12 max-w-5xl mx-auto mt-8 space-y-12">
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {PROFILE_DATA.bio}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Cast & Crew Credits</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="space-y-1">
                            <h3 className="text-gray-400 text-sm">Role</h3>
                            <p className="text-white font-medium">Full-Stack Engineer</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-gray-400 text-sm">Education</h3>
                            <p className="text-white font-medium">B.M.S College of Engineering</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-gray-400 text-sm">Degree</h3>
                            <p className="text-white font-medium">Electronics and Instrumentation</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-gray-400 text-sm">Graduation</h3>
                            <p className="text-white font-medium">{PROFILE_DATA.education.year}</p>
                        </div>
                    </div>
                </section>

                {/* Behind the Scenes (Hobbies & Sports) */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Behind the Scenes (Interests)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                        <div className="bg-[#19222B] p-6 rounded-lg border border-gray-700">
                            <h3 className="text-prime-blue font-bold mb-2 uppercase text-sm tracking-wider">Sports Achievements</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {PROFILE_DATA.sports}
                            </p>
                        </div>
                        <div className="bg-[#19222B] p-6 rounded-lg border border-gray-700">
                            <h3 className="text-prime-blue font-bold mb-2 uppercase text-sm tracking-wider">Hobbies</h3>
                            <div className="flex flex-wrap gap-2">
                                {PROFILE_DATA.hobbies?.map(hobby => (
                                    <span key={hobby} className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section Styled as "Bonus Features" or similar */}
                <section id="contact" className="pt-8 border-t border-gray-800">
                    <h2 className="text-xl font-bold text-white mb-6">Contact</h2>

                    <div className="bg-[#19222B] p-8 rounded-lg max-w-2xl">
                        <div className="space-y-6 text-center md:text-left">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Akil S</h3>
                                <div className="flex flex-col md:flex-row gap-4 text-gray-400">
                                    <span className="flex items-center gap-2 hover:text-prime-blue transition-colors">
                                        <Mail className="w-5 h-5" />
                                        akilsaran195@gmail.com
                                    </span>
                                    <span className="hidden md:inline">&middot;</span>
                                    <span className="flex items-center gap-2 hover:text-prime-blue transition-colors">
                                        <span className="font-bold">Phone:</span>
                                        +91 9611554474
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-700">
                                <p className="text-gray-300 text-lg leading-relaxed italic">
                                    "Let's build something impactful. Always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}
