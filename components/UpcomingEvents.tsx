 import {
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function UpcomingEvents() {
  const upcoming = [1, 2, 3, 4];
  const completed = [1, 2, 3, 4];

  return (
    <section className="bg-[#f7f9fc] py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-14">

          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#0b6b6f] text-white text-sm">
              The Meetup Experience
            </span>

            <h2 className="text-[52px] font-bold text-[#12284d] mt-5">
              Upcoming Events
            </h2>
          </div>
          

          <button className="flex items-center gap-2 text-[#12284d] font-medium">
            See All Events
            <ChevronRight size={18} />
          </button>

        </div>

        {/* Upcoming Events */}

        <div className="grid lg:grid-cols-4 gap-6">

          {upcoming.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-start justify-between">

                <div className="bg-[#dff3ea] rounded-xl px-4 py-3 text-center">
                  <h3 className="text-3xl font-bold text-[#0b6b6f]">
                    14
                  </h3>

                  <p className="text-sm text-[#0b6b6f]">
                    Feb
                  </p>
                </div>

                <div className="flex gap-2">

                  <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
                    Startup Grind
                  </span>

                  <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                    In-Person
                  </span>

                </div>

              </div>

              <h3 className="text-[24px] font-bold text-[#12284d] mt-8 leading-tight">
                Founder&apos;s Fireside Building in 2027
              </h3>

              <div className="flex gap-4 mt-5 text-slate-500 text-sm">

                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  San Francisco, CA
                </div>

                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  6:50PM - 10:00PM
                </div>

              </div>

              <button className="mt-8 border border-slate-300 px-8 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition">
                Join The Fun
              </button>

            </div>
          ))}

        </div>

        {/* Completed Events */}

        <div className="grid lg:grid-cols-4 gap-6 mt-8">

          {completed.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-start justify-between">

                <div className="bg-slate-100 rounded-xl px-4 py-3 text-center">
                  <h3 className="text-3xl font-bold text-slate-500">
                    10
                  </h3>

                  <p className="text-sm text-slate-500">
                    Jan
                  </p>
                </div>

                <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full">
                  Completed
                </span>

              </div>

              <h3 className="text-[24px] font-bold text-[#12284d] mt-8">
                AI & Machine Learning Workshop
              </h3>

              <p className="text-slate-400 mt-3 text-sm">
                Hands-on session with TensorFlow and PyTorch models.
              </p>

              <div className="flex justify-between mt-8 text-sm text-slate-400">

                <span>
                  San Francisco, CA
                </span>

                <span>
                  156 attended
                </span>

              </div>

              <div className="flex items-center justify-between mt-8">

                <div className="flex -space-x-2">

                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>

                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>

                  <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-white"></div>

                </div>

                <button className="bg-slate-100 px-5 py-2 rounded-lg text-slate-600 text-sm">
                  Watch Replay
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}