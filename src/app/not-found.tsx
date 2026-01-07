"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0f171e] text-white flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-bold text-prime-blue mb-4">404</h1>
                <h2 className="text-2xl font-bold mb-4">Title Not Found</h2>
                <p className="text-gray-400 max-w-md mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/browse"
                    className="bg-prime-blue text-white font-bold py-3 px-8 rounded hover:bg-blue-600 transition-colors"
                >
                    Go Home
                </Link>
            </main>
        </div>
    );
}
