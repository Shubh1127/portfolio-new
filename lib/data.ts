import { Project_Details } from '@/types';

export const INFO = {
    email: 'nerd.shubh.dev@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Shubham, I am reaching out to you because...',

    oldPortfolio: 'https://new-portfolio-omega-rouge.vercel.app',
    upworkProfile: 'https://www.upwork.com/freelancers/~01a820589e1473f3e1',
    githubProfile: 'https://github.com/Shubh1127',
    linkedinProfile: 'https://www.linkedin.com/in/shubham-singh-7705512a7',
    xProfile: 'https://x.com/NerdShubh',
    instagramProfile: 'https://www.instagram.com/shubhamm_1223',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Shubh127' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/shubham-singh-7705512a7',
    },
    {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/29695880/shubham-singh',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Three',
            icon: '/logo/three.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Fast API',
            icon: '/logo/fast.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
        {
            name: 'Appwrite',
            icon: '/logo/appWrite.png',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabse.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: Project_Details[] = [
    {
        title: 'AI Powered Chat-bot',
        link: 'https://chat-bot-one-pink.vercel.app/',
        description: `
     A chatbot build with langChain and integration of Google Gemini API. It provides a user-friendly interface for seamless interactions, allowing users to ask questions and receive accurate responses in real-time. The chatbot is designed to understand natural language, making it an effective tool for customer support, information retrieval, and various other applications.
      `,

        image: '/projects/images/chat-bot.png',
    },
    {
        title: 'Supply chain',
        image: '/projects/images/supply-chain.png',
        link: 'https://supply-chain-1.onrender.com/',
        description: `The project aims to provide businesses with a digital platform for managing the end-to-end processes.Including Farmer dashboard and buyer e-commerce`,
    },
    {
        title: 'AirLite',
        image: '/projects/images/airlite.png',
        link: 'https://air-lite.vercel.app/',
        description:
            'AirLite is a full-stack web application inspired by modern property rental platforms, designed to allow users to explore, create, and manage accommodation listings through a secure and user-friendly interface. The platform focuses on clean UI, secure authentication, and scalable backend architecture.',
    },
    {
        title: 'Voice Scam Detector ',
        image: '/projects/images/scam-1.png',
        link: 'https://github.com/Shubh1127/vocie-based-scam-detector-',
        description:
            'Voice Scam Detector is a platform designed to identify and prevent voice-based scams using advanced machine learning algorithms and real-time speech analysis.',
    },
];

export const My_Achievements = [
    {
        title: 'Hackathon Participant ',
        name: 'BFCET 2.0 - Baba Farid College, Bathinda, Punjab',
        time: '2025',
        description:
            'Participated in BFCET 2.0 hackathon showcasing skills in innovation and collaboration.',
    },
    {
        title: '2nd Prize Winner - CyberCup 4.0',
        name: 'Amity University, Noida',
        time: '2024',
        description:
            'Secured 2nd position and won a cash prize of ₹10,000 in CyberCup 4.0.',
    },
    {
        title: 'Hackathon Participant',
        name: 'Hack the League Chapter 3 - JECRC University, Jaipur',
        time: '2024',
        description:
            'Earned goodies like caps and cups while collaborating on a tech solution.',
    },
    {
        title: '3rd Prize Winner - CodeSangam',
        name: 'SGT University, Gurgaon',
        time: '2023',
        description:
            'Won 3rd prize and a cash award of ₹5,000 for an innovative solution at CodeSangam 2023.',
    },
];
