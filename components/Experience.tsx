import Image from "next/image";
import { Check } from "lucide-react";

export default function Experience() {
  return (
    <section className="bg-gradient-to-r from-[#00646d] via-[#06376d] to-[#081f5c] py-24 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-8">

        <div className="grid lg:grid-cols-[700px_420px] gap-16 items-center justify-center">

          {/* IMAGE SIDE */}
          <div className="relative">

            {/* Blur Stat Card */}
            <div
  className="
    absolute
    top-12
    -left-5
    z-20

    w-[100px]
    h-[100px]

    rounded-2xl

    bg-[#c9ece8]/80
    backdrop-blur-2xl

    border
    border-white/40

    shadow-[0_10px_40px_rgba(255,255,255,0.20)]

    flex
    flex-col
    items-center
    justify-center
  "
>
              <h3 className="text-[34px] font-bold text-slate-900">
                350+
              </h3>

              <p className="text-xs text-slate-700">
                Events
              </p>
            </div>

            {/* Image Border */}
            <div className="rounded-2xl border-2 border-white overflow-hidden">

              <Image
                src="/images/exp.jpg"
                alt="Experience"
                width={900}
                height={700}
                className="
                  w-full
                  h-[580px]
                  object-cover
                "
              />

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div className="text-white max-w-[420px]">

            <span
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full

                bg-white/10
                border
                border-white/20

                text-xs
              "
            >
              The Meetup Experience
            </span>

            <h2 className="text-[44px] font-bold leading-tight mt-5">
              Real Connections.
              <br />
              Real Impact.
            </h2>

            <p className="mt-6 text-white/80 leading-7 text-[15px]">
              Every Innovate Web Social event is crafted
              for meaningful interaction — not just attendance.
              We design spaces where conversations happen
              organically, ideas get born and collaborations
              take root.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <div className="w-7 h-7 bg-pink-100 rounded-sm flex items-center justify-center">
                  <Check size={15} className="text-pink-600" />
                </div>

                <span className="text-[15px]">
                  Curated attendee matching before the event
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-7 h-7 bg-pink-100 rounded-sm flex items-center justify-center">
                  <Check size={15} className="text-pink-600" />
                </div>

                <span className="text-[15px]">
                  Founder dinners & private networking
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-7 h-7 bg-pink-100 rounded-sm flex items-center justify-center">
                  <Check size={15} className="text-pink-600" />
                </div>

                <span className="text-[15px]">
                  Meaningful conversations over vanity metrics
                </span>
              </div>

            </div>

            <button
              className="
                mt-10
                px-8
                py-3
                rounded-lg
                bg-[#071d54]
                border
                border-white/10
                hover:bg-[#0c2c7d]
                transition
              "
            >
              Join The Fun
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}