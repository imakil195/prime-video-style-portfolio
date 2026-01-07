"use client";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { ContentRow } from "@/components/ui/ContentRow";
import { MOCK_PROJECTS_ROW, SKILLS_DATA } from "@/data/mockData";

export default function BrowsePage() {
    // Map skills data to match the ProjectCard interface expected by ContentRow
    // ProjectCard expects: id, title, description, tags, image
    const skillsAsProjects = SKILLS_DATA.map(skill => ({
        id: skill.id,
        title: skill.title,
        description: `${skill.level} Proficiency in ${skill.category}`,
        tags: [skill.category, skill.level],
        image: `/images/skills/${skill.category.toLowerCase()}.jpg`, // Placeholder path, card will handle missing image
        icon: skill.icon
    }));

    return (
        <div className="min-h-screen pb-20 bg-[#0f171e]">
            <Header />

            <main>
                <Hero />

                <div className="relative z-40 -mt-16 md:-mt-24 space-y-4 md:space-y-8 pb-10">
                    <ContentRow title="Prime Originals: Projects" items={MOCK_PROJECTS_ROW} />
                    <ContentRow title="Prime Skills" items={skillsAsProjects} />
                </div>
            </main>
        </div>
    );
}
