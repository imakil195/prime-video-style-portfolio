export const ALL_PROJECTS = [
    {
        id: "project-1",
        title: "YouTube-Style Video Platform",
        description: "Full-stack video platform with Next.js, Firebase Auth, and a Cloud Run transcoding pipeline using Dockerized FFmpeg.",
        longDescription: "Built a full-stack video platform with Next.js and Firebase Auth, enabling secure uploads and public video streaming. Designed a cloud pipeline where raw uploads trigger Pub/Sub to run a Dockerized FFmpeg service on Cloud Run for transcoding. The system implements signed-URL uploads, Firestore metadata storage, and a comprehensive end-to-end video processing workflow.",
        subTitle: "2025 • Cloud Engineering",
        features: ["Cloud Pub/Sub Messaging", "Dockerized FFmpeg Transcoding", "Signed-URL Secure Uploads", "Firestore Metadata Storage"],
        tags: ["Cloud Run", "Docker", "FFmpeg", "Next.js", "Firebase", "GCP"],
        image: "/images/project1.jpg",
        featured: true,
        link: "https://yt-web-client-174443553704.us-central1.run.app/",
        github: "https://github.com/imakil195/youtube-clone"
    },
    {
        id: "project-2",
        title: "TravelStay (Hotel Booking)",
        description: "Full-stack hotel booking app with Node.js/Express backend, MongoDB, JWT auth, and Razorpay payment integration.",
        longDescription: "Developed a full-stack hotel booking web application similar to Airbnb. Built backend using Node.js/Express.js with RESTful APIs for user management and bookings. Integrated MongoDB via Mongoose and secure authentication using JWT. Features Razorpay integration for real-time payments and a responsive React frontend.",
        subTitle: "2024 • Full Stack",
        features: ["JWT Authentication", "Razorpay Payment Gateway", "RESTful API Architecture", "MongoDB Aggregations"],
        tags: ["Node.js", "MongoDB", "React", "Razorpay", "Express.js"],
        image: "/images/project2.jpg",
        featured: true,
        link: "https://travel-app-frontend-ten.vercel.app/",
        github: "https://github.com/imakil195/Travel-App-main"
    },
    {
        id: "project-3",
        title: "Study Buddy (Focus)",
        description: "React + TypeScript study tracker with Firebase persistence and a context-aware AI assistant powered by Google Gemini.",
        longDescription: "Built a full-stack React + TypeScript application for tracking focused study sessions with subject-wise analytics. Implemented Google Authentication and Firebase Firestore for secure, cloud-synced persistence. Integrated a context-aware AI assistant using Google Gemini to answer study history and analytics queries. Designed a premium dark-mode UI with smooth animations, glassmorphism, and responsive layouts.",
        subTitle: "2024 • AI Integration",
        features: ["Google Gemini AI Assistant", "Subject-wise Analytics", "Firebase Cloud Sync", "Glassmorphism UI Design"],
        tags: ["React", "TypeScript", "Firebase", "Gemini API", "Tailwind"],
        image: "/images/project3.jpg",
        featured: true,
        link: "https://study-buddy-app-nu.vercel.app/",
        github: "https://github.com/imakil195/study-buddy-app"
    },
    {
        id: "project-4",
        title: "Food Delivery Web App",
        description: "Full-stack food delivery app with Node.js/Express REST APIs, MongoDB, and a responsive React frontend.",
        longDescription: "Developed a full-stack food delivery app with user authentication, restaurant listings, and order placement. Built backend REST APIs using Node.js/Express.js and integrated MongoDB with Mongoose for data management. Created a responsive React frontend and used Axios for smooth communication with backend services.",
        subTitle: "2023 • Web Development",
        features: ["Restaurant Listing APIs", "Order Management System", "User Authentication", "Axios Data Fetching"],
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
        image: "/images/project4.jpg",
        github: "https://github.com/imakil195/Food-Delivery-basic-website"
    },
    {
        id: "project-5",
        title: "Invisible Presenter Overlay",
        description: "Stealth desktop utility providing a private, always-on-top notes overlay invisible to screen-sharing tools like Zoom.",
        longDescription: "A stealth desktop utility for presenters who want perfect eye contact — without revealing their notes. This high-performance cross-platform application provides a private, always-on-top overlay for speaker notes, completely invisible to screen-sharing software like Zoom and Teams. Integrates directly with low-level OS window composition APIs to inject a secure UI layer.",
        subTitle: "2025 • System Utility",
        features: ["Invisible Overlay Injection", "Cross-Platform Support", "OS Window Composition APIs", "Stealth React UI"],
        tags: ["Electron", "Node.js", "Desktop App", "System API"],
        image: "/images/project5.jpg",
        link: "https://github.com/imakil195/presentation_invisible-overlay/releases/tag/v1.0.0",
        github: "https://github.com/imakil195/presentation_invisible-overlay"
    }
];

export const TOP_PROJECTS = ALL_PROJECTS.slice(0, 3);

// Re-export as MOCK_PROJECTS_ROW for compatibility with existing components
export const MOCK_PROJECTS_ROW = ALL_PROJECTS;

export const SKILLS_DATA = [
    // Languages
    { id: 'lang1', title: 'JavaScript (ES6+)', level: 'Expert', category: 'Languages' },
    { id: 'lang2', title: 'TypeScript', level: 'Expert', category: 'Languages' },
    { id: 'lang3', title: 'Python', level: 'Intermediate', category: 'Languages' },

    // Frontend
    { id: 'fe1', title: 'React.js', level: 'Expert', category: 'Frontend' },
    { id: 'fe2', title: 'HTML5', level: 'Expert', category: 'Frontend' },
    { id: 'fe3', title: 'CSS3', level: 'Expert', category: 'Frontend' },
    { id: 'fe4', title: 'Tailwind CSS', level: 'Expert', category: 'Frontend' },

    // Backend
    { id: 'be1', title: 'Node.js', level: 'Advanced', category: 'Backend' },
    { id: 'be2', title: 'Express.js', level: 'Advanced', category: 'Backend' },
    { id: 'be3', title: 'RESTful APIs', level: 'Advanced', category: 'Backend' },
    { id: 'be4', title: 'MongoDB', level: 'Advanced', category: 'Backend' },

    // Cloud & DevOps
    { id: 'cd1', title: 'Docker', level: 'Intermediate', category: 'Cloud & DevOps' },
    { id: 'cd2', title: 'Google Cloud Platform (GCP)', level: 'Intermediate', category: 'Cloud & DevOps' },

    // AI Tools
    { id: 'ai1', title: 'GitHub Copilot', level: 'Advanced', category: 'AI Tools' },
    { id: 'ai2', title: 'ChatGPT', level: 'Advanced', category: 'AI Tools' },
    { id: 'ai3', title: 'Claude', level: 'Advanced', category: 'AI Tools' },
    { id: 'ai4', title: 'Prompt Engineering', level: 'Advanced', category: 'AI Tools' },
    { id: 'ai5', title: 'AI-assisted Debugging', level: 'Advanced', category: 'AI Tools' },

    // Tools & Platforms
    { id: 'tp1', title: 'Git', level: 'Advanced', category: 'Tools & Platforms' },
    { id: 'tp2', title: 'GitHub', level: 'Advanced', category: 'Tools & Platforms' },
    { id: 'tp3', title: 'VS Code', level: 'Advanced', category: 'Tools & Platforms' },
    { id: 'tp4', title: 'Postman', level: 'Advanced', category: 'Tools & Platforms' },
    { id: 'tp5', title: 'Render', level: 'Intermediate', category: 'Tools & Platforms' },
    { id: 'tp6', title: 'Vercel', level: 'Intermediate', category: 'Tools & Platforms' },
];

export const PROFILE_DATA = {
    name: "Akil Saravanan",
    role: "Full-Stack Developer",
    bio: "Full-stack web developer experienced in building and deploying production-ready applications using React.js, Node.js/Express.js, and MongoDB. Skilled in developing secure, scalable RESTful APIs, integrating payment gateways, and delivering responsive frontend interfaces. Passionate about solving real-world problems through clean code, efficient architecture, and modern development practices. Experienced in leveraging AI tools such as GitHub Copilot, ChatGPT, Claude, and Gemini to accelerate development, enhance problem-solving, and build smarter solutions.",
    location: "India",
    email: "akilsaran195@gmail.com",
    phone: "+91-9611554474",
    social: {
        linkedin: "https://linkedin.com/in/akil19",
        github: "https://github.com/imakil195"
    },
    education: {
        degree: "B.Tech in Electronics and Instrumentation Engineering",
        school: "B.M.S College of Engineering",
        year: "2022 - 2026",
        grade: "CGPA 8.1"
    },
    hobbies: ["Chess", "Basketball", "Football"],
    sports: "National Badminton Player (Rank 5 U-17), School Sports Captain",
    experience: [
        {
            id: "work-1",
            role: "Intern",
            company: "GeeksforGeeks",
            period: "Apr 2025 - Jun 2025",
            description: "Developed a full-stack hotel booking web application similar to Airbnb, enabling users to browse, book, and pay securely using Razorpay.",
            bullets: [
                "Developed a full-stack hotel booking web application similar to Airbnb, enabling users to browse, book, and pay securely using Razorpay.",
                "Built backend using RestAPI and Node.js/Express.js with multiple RESTful APIs for user management, hotel listings, and bookings.",
                "Integrated MongoDB via Mongoose for dynamic data storage and implemented secure authentication using JWT.",
                "Developed a responsive frontend with React.js, including home, hotel listings, single-hotel details, and order confirmation pages.",
                "Used Axios for API communication between frontend and backend, managing data fetching and user interactions efficiently.",
                "Integrated Razorpay for real-time payments and deployed backend on Render and frontend on Vercel to deliver a production-ready application."
            ],
            skills: ["Node.js", "React", "MongoDB", "Express.js", "Razorpay"]
        }
    ]
};
