"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { SearchOverlay } from "./SearchOverlay";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
    { label: "Home", href: "/browse" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Resume & Work Experience", href: "/resume" },
];

export function Header() {
    const isScrolled = useScrolled(20);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-200 hover:text-white z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <Link href="/browse" className="group flex items-center gap-1 text-xl md:text-2xl font-bold tracking-tight text-white select-none">
                            <motion.span
                                whileHover={{ x: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Akil
                            </motion.span>
                            <motion.span
                                className="text-prime-blue"
                                whileHover={{ x: 2, scale: 1.05, textShadow: "0 0 8px rgba(52, 131, 250, 0.5)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Saravanan
                            </motion.span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            {NAV_ITEMS.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "relative text-sm font-medium transition-colors duration-200 py-1.5 px-1",
                                            isActive
                                                ? "text-white"
                                                : "text-gray-400 hover:text-white"
                                        )}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-0 w-full h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Right Actions */}
                    <div className="ml-auto flex items-center gap-6 text-gray-200">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hover:text-white transition-colors p-1"
                        >
                            <Search className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <div className="h-6 w-[1px] bg-gray-700 hidden md:block" />

                        {/* Profiles Switcher - Premium Style */}
                        <Link
                            href="/"
                            className="hidden md:flex items-center gap-2 group hover:bg-white/10 px-3 py-1 rounded-md transition-all duration-200"
                        >
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white">Profiles</span>
                            <ChevronDown className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
                        </Link>

                        <Link href="/about" className="hover:text-white transition-colors p-1 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center border border-transparent hover:border-white transition-all">
                                <User className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-16 bg-[#0f171e] z-50 md:hidden flex flex-col p-6 space-y-4 border-t border-gray-800 overflow-y-auto"
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "text-lg font-medium py-2 border-b border-gray-800",
                                    pathname === item.href ? "text-white" : "text-gray-400"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium py-2 text-prime-blue mt-4 flex items-center gap-2"
                        >
                            Switch Profiles <ChevronDown className="w-4 h-4" />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
