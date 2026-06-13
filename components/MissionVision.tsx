import {
  Target,
  Lightbulb,
  Handshake,
  Flame,
  Globe,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#f8fafc] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Badge */}

        <div className="flex justify-center">
          <span className="bg-cyan-100 text-cyan-700 text-sm px-4 py-2 rounded-full font-medium">
            WHO WE ARE
          </span>
        </div>

        {/* Heading */}

        <h2 className="text-center text-5xl font-bold text-slate-900 mt-6">
          Our Mission & Vision
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto mt-4 rounded-full"></div>

        <p className="text-center text-slate-500 mt-6 max-w-2xl mx-auto">
          We exist to connect passionate innovators and
          create opportunities for learning, networking
          and community growth.
        </p>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Mission */}

          <div className="bg-[#112554] text-white rounded-3xl p-10 relative overflow-hidden">

            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Target className="text-cyan-300" />
            </div>

            <span className="inline-block mt-6 bg-white/10 px-4 py-2 rounded-full text-xs">
              OUR MISSION
            </span>

            <h3 className="text-3xl font-bold mt-5">
              Empowering Every Builder
            </h3>

            <p className="mt-5 text-slate-300 leading-8">
              To democratize access to knowledge,
              opportunities and mentorship for
              students, developers and founders.
            </p>

            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3">
                <CheckCircle size={18} />
                <span>Host 200+ events annually</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle size={18} />
                <span>Connect 10,000+ members</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle size={18} />
                <span>Create startup opportunities</span>
              </div>

            </div>

          </div>

          {/* Vision */}

          <div className="bg-white border border-cyan-100 rounded-3xl p-10">

            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center">
              <Lightbulb className="text-cyan-500" />
            </div>

            <span className="inline-block mt-6 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-xs">
              OUR VISION
            </span>

            <h3 className="text-3xl font-bold text-slate-900 mt-5">
              India's #1 Builder Community
            </h3>

            <p className="mt-5 text-slate-500 leading-8">
              Creating a thriving ecosystem where
              innovators, entrepreneurs and builders
              support each other and launch impactful
              products.
            </p>

            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle size={18} className="text-cyan-500" />
                <span>Community chapter in every city</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle size={18} className="text-cyan-500" />
                <span>Mentorship from industry leaders</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle size={18} className="text-cyan-500" />
                <span>Launchpad for future startups</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Values */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <Handshake className="mx-auto text-yellow-500" />
            <h4 className="font-bold mt-4">Collaboration</h4>
            <p className="text-slate-500 text-sm mt-2">
              Building together is always stronger.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <Flame className="mx-auto text-orange-500" />
            <h4 className="font-bold mt-4">Passion</h4>
            <p className="text-slate-500 text-sm mt-2">
              Curiosity and relentless drive.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <Globe className="mx-auto text-cyan-500" />
            <h4 className="font-bold mt-4">Inclusivity</h4>
            <p className="text-slate-500 text-sm mt-2">
              Everyone deserves a seat at the table.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <Rocket className="mx-auto text-pink-500" />
            <h4 className="font-bold mt-4">Impact</h4>
            <p className="text-slate-500 text-sm mt-2">
              Creating measurable positive change.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}