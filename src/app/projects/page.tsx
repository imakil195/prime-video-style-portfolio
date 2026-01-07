"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MOCK_PROJECTS_ROW } from "@/data/mockData";
import { cn } from "@/lib/utils";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-[#0f171e] pb-20">
            <Header />

            <main className="pt-24 px-4 md:px-12 max-w-[1920px] mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Projects</h1>
                    <p className="text-gray-400 text-lg">A collection of my technical work and experiments.</p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {MOCK_PROJECTS_ROW.map((project) => (
                        <div key={project.id} className="relative group">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ProjectsPage;
