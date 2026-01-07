"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

interface ContentRowProps {
    title: string;
    items: any[]; // Replace with proper type
}

export function ContentRow({ title, items }: ContentRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [scrollPos, setScrollPos] = useState(0);

    const scroll = (direction: "left" | "right") => {
        if (rowRef.current) {
            const scrollAmount = window.innerWidth * 0.7; // Scroll 70% of screen width
            const newPos = direction === "left"
                ? rowRef.current.scrollLeft - scrollAmount
                : rowRef.current.scrollLeft + scrollAmount;

            rowRef.current.scrollTo({
                left: newPos,
                behavior: "smooth",
            });
            setScrollPos(newPos);
        }
    };

    return (
        <div className="relative py-4 md:py-8 pl-4 md:pl-12 group hover:z-30">
            {/* Header */}
            <div className="flex items-end gap-3 mb-2 md:mb-4 px-1">
                <h2 className="text-lg md:text-xl font-bold text-prime-blue hover:underline cursor-pointer">
                    {title}
                </h2>
                <span className="text-xs font-semibold text-prime-blue/80 cursor-pointer hidden md:block hover:text-prime-blue mb-1">
                    See more
                </span>
            </div>

            {/* Controls - Only visible on hover/group hover */}
            <button
                onClick={() => scroll("left")}
                className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 h-full w-12 items-center justify-center hover:bg-black/70 transition-opacity hidden md:flex opacity-0 group-hover:opacity-100",
                    // Hide if at start
                    "data-[hidden=true]:hidden"
                )}

            >
                <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 h-full w-12 hidden md:flex items-center justify-center hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Scroll Container */}
            <div
                ref={rowRef}
                className="flex gap-4 overflow-x-auto no-scrollbar pb-60 -mb-52 pt-10 -mt-6 px-12 -ml-12 scroll-smooth" // Increased x-padding to prevent left border clipping
                style={{ scrollBehavior: 'smooth' }}
            >
                {items.map((item, index) => (
                    <div key={item.id} className="relative z-0 hover:z-[100] transition-none">
                        <ProjectCard
                            project={item}
                            isFirst={index === 0}
                            isLast={index === items.length - 1}
                        />
                    </div>
                ))}
                {/* Spacer for end of list */}
                <div className="w-8 shrink-0" />
            </div>
        </div>
    );
}
