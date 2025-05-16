"use client";
import Image from "next/image";

const team = [
  {
    name: "John Schibelli",
    title: "Founder / CEO",
    image: "/john_schibelli.jpg",
    bio: "John provides strategic vision, product direction, and final approvals for all projects. He is passionate about building innovative solutions that drive business growth.",
  },
  {
    name: "Alex Reyes",
    title: "Project Manager",
    image: "/alex_reyes.png",
    bio: "Alex coordinates cross-functional teams, manages timelines, and ensures seamless task execution from start to finish.",
  },
  {
    name: "Nico Alvarez",
    title: "Frontend Lead",
    image: "/nico.png",
    bio: "Nico leads UI implementation, component architecture, and ensures responsive, accessible interfaces across all platforms.",
  },
  {
    name: "Eli Noor",
    title: "Backend Lead",
    image: "/eli-noor.png",
    bio: "Eli designs robust databases, develops API endpoints, and handles authentication and multi-tenant logic.",
  },
  {
    name: "Aria Das",
    title: "AI/ML Lead",
    image: "/Aria_das.png",
    bio: "Aria integrates custom AI models, manages token state logic, and develops agent workflows for intelligent automation.",
  },
  {
    name: "Sophie Tran",
    title: "UX/UI Lead",
    image: "/sophie_tran.png",
    bio: "Sophie crafts visual design, UX flows, and Figma mockups, ensuring every product is beautiful and user-friendly.",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-16 md:py-24">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-center mb-4">Meet Our Team</h1>
        <p className="text-lg text-teal-400 font-semibold text-center mb-12">The people behind IntraWeb Technologies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-teal-500 bg-gray-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'top' }}
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-1">{member.name}</h3>
              <p className="text-teal-400 font-semibold mb-2">{member.title}</p>
              <p className="text-gray-300 text-base font-body">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 