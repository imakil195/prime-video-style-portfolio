"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Code, Briefcase, FileText, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const PROFILES = [
  {
    id: "projects",
    name: "Projects",
    href: "/browse",
    color: "from-blue-600 to-blue-400",
    icon: Code
  },
  {
    id: "about",
    name: "About Me",
    href: "/about",
    color: "from-red-600 to-red-400",
    icon: User
  },
  {
    id: "skills",
    name: "Skills",
    href: "/skills",
    color: "from-green-600 to-green-400",
    icon: Code
  },
  {
    id: "resume",
    name: "Resume &\nWork Experience",
    href: "/resume",
    color: "from-purple-600 to-purple-400",
    icon: FileText
  },
];

export default function ProfileGate() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f171e] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Prime Logo Top Left */}
      <div className="absolute top-8 left-8 md:left-12">
        {/* Using text for logo as requested */}
        <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">
          Akil Saravanan
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 w-full max-w-5xl px-4"
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-tight">Who's watching?</h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {PROFILES.map((profile, idx) => (
            <Link key={profile.id} href={profile.href} className="group flex flex-col items-center gap-4">
              <motion.div
                whileHover={isDesktop ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:ring-4 ring-white/80 transition-all duration-200`}
              >
                {/* Shimmer/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <profile.icon className="w-10 h-10 md:w-14 md:h-14 text-white drop-shadow-md relative z-10" />
              </motion.div>

              <span className="text-gray-400 text-lg md:text-xl font-medium group-hover:text-white transition-colors text-center whitespace-pre-line leading-tight">
                {profile.name}
              </span>
            </Link>
          ))}

          {/* "Add New" Placeholder to match UI */}
          <div className="flex flex-col items-center gap-4 group cursor-not-allowed opacity-60">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#1A242F] flex items-center justify-center group-hover:bg-[#25303d] transition-colors">
              <Plus className="w-10 h-10 text-gray-400" />
            </div>
            <span className="text-gray-400 text-lg md:text-xl font-medium">Add new</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
