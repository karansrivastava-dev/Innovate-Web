import {
  Users,
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

const cards = [
  {
    title: "Networking",
    icon: <Users size={32} />,
    desc: "Connect with developers, founders and professionals from the ecosystem.",
  },
  {
    title: "Learning",
    icon: <GraduationCap size={32} />,
    desc: "Access workshops, mentoring sessions and practical learning opportunities.",
  },
  {
    title: "Career Growth",
    icon: <Briefcase size={32} />,
    desc: "Discover internships, jobs and collaboration opportunities.",
  },
  {
    title: "Innovation",
    icon: <Rocket size={32} />,
    desc: "Build projects, launch ideas and grow with the community.",
  },
];

export default function Ecosystem() {
  return (
    <section className="relative py-28 bg-[#f8fafc] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute left-1/3 top-20 h-72 w-72 bg-cyan-200/40 blur-3xl rounded-full"></div>

      <div className="absolute right-1/3 bottom-10 h-72 w-72 bg-yellow-200/40 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="bg-cyan-100 text-cyan-700 text-sm px-4 py-2 rounded-full">
            Join The Fun
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-900 mt-6">
          Everything you need to thrive in the ecosystem
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              p-8
              shadow-md
              hover:shadow-xl
              transition
              "
            >
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700">
                {card.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {card.title}
              </h3>

              <p className="mt-3 text-slate-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <button className="border border-slate-400 px-8 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition">
            Join The Fun
          </button>
        </div>

      </div>
    </section>
  );
}