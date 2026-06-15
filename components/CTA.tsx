import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-[1588px] mx-auto px-6">

        <div className="relative h-[600px] overflow-hidden rounded-[32px] shadow-2xl">

          {/* Background Image */}
          <Image
            src="/images/community.jpg"
            alt="Join Community"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 pointer-events-none" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center z-10">

            <div
              className="
                ml-8
                md:ml-16
                lg:ml-20

                max-w-[520px]

                bg-white/10
                backdrop-blur-xl

                border
                border-white/20

                rounded-[28px]

                p-8
                md:p-10

                shadow-2xl
              "
            >

              {/* Badge */}
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

                  text-white
                  text-sm
                "
              >
                🚀 Join Innovate Web
              </span>

              {/* Heading */}
              <h2
                className="
                  mt-6

                  text-white

                  text-[48px]
                  md:text-[64px]

                  font-bold
                  leading-[1.05]
                "
              >
                Join Our
                <br />
                Community
              </h2>

              {/* Description */}
              <p
                className="
                  mt-6

                  text-white/80

                  text-base
                  md:text-lg

                  leading-8
                "
              >
                Connect with developers, founders, students and innovators.
                Learn, collaborate and grow together through networking,
                workshops, meetups and meaningful opportunities.
              </p>

              {/* Button */}
              <button
                className="
                  mt-8

                  px-8
                  py-4

                  rounded-xl

                  bg-[#001f63]
                  hover:bg-[#0a2f8a]

                  text-white
                  font-semibold

                  transition-all
                  duration-300
                "
              >
                Join The Community
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}