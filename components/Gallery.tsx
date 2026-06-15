import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1450px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[52px] font-bold text-[#12284d]">
            Moments that Matter
          </h2>

          <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
            Real people. Real events. Real connections.
            Every photo tells a story of a community that
            shows up for each other.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-2 auto-rows-[150px]">

          {/* Left Large */}
          <div className="col-span-5 row-span-3 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g1.jpg"
              alt="Gallery"
              width={1000}
              height={1200}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Center Top */}
          <div className="col-span-5 row-span-2 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g2.jpg"
              alt="Gallery"
              width={1000}
              height={700}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Top */}
          <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g3.jpg"
              alt="Gallery"
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Middle */}
          <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g4.jpg"
              alt="Gallery"
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Center Bottom Left */}
          <div className="col-span-5 row-span-1 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g5.jpg"
              alt="Gallery"
              width={700}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Center Bottom Right */}
          <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g6.jpg"
              alt="Gallery"
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Bottom Left */}
          <div className="col-span-6 row-span-2 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g7.jpg"
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Bottom Right */}
          <div className="col-span-6 row-span-2 overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/g8.jpg"
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}