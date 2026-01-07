"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#0f171e] text-white flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
                <p className="text-gray-400 max-w-md mb-8">
                    We encountered an error while loading this page. Please try again.
                </p>
                <button
                    onClick={reset}
                    className="bg-gray-700 text-white font-bold py-3 px-8 rounded hover:bg-gray-600 transition-colors border border-gray-600"
                >
                    Try Again
                </button>
            </main>
        </div>
    );
}
