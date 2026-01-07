"use client";

import Link from "next/link";
import { Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { SearchOverlay } from "./SearchOverlay";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Resume & Work Experience", href: "/resume" },
];

export function Header() {
    const isScrolled = useScrolled(20);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 h-16 flex items-center px-4 md:px-12",
                    isScrolled
                        ? "bg-[#0f171e]/90 backdrop-blur-md shadow-lg"
                        : "bg-gradient-to-b from-black/80 to-transparent"
                )}
            >
                <div className="flex items-center gap-8 w-full">
                    {/* Mobile Menu Trigger (Hidden on Desktop) */}
                    <button className="md:hidden text-gray-200 hover:text-white">
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white select-none">
                        Akil <span className="text-prime-blue">Prime</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="ml-auto flex items-center gap-4 text-gray-200">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hover:text-white transition-colors p-1"
                        >
                            <Search className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <Link href="/about" className="hover:text-white transition-colors p-1 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center border border-transparent hover:border-white transition-all">
                                <User className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
