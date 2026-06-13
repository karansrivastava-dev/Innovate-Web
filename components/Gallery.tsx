import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery/g1.jpg", className: "col-span-2 row-span-2" },
  { src: "/images/gallery/g2.jpg", className: "col-span-2 row-span-1" },
  { src: "/images/gallery/g3.jpg", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/g4.jpg", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/g5.jpg", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/g6.jpg", className: "col-span-2 row-span-1" },
  { src: "/images/gallery/g7.jpg", className: "col-span-2 row-span-1" },
  { src: "/images/gallery/g8.jpg", className: "col-span-2 row-span-1" },
];

export default function Gallery() {
  return (
    <section className="bg-[#f7f9fc] py-24">

      <div className="max-w-[1728px] mx-auto px-10">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
            Gallery
          </span>

          <h2 className="text-[52px] font-bold text-[#12284d] mt-5">
            Moments that matter
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Real people. Real events. Real connections.
            Every photo tells a story of a community
            that shows up for each other.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-6 gap-3 auto-rows-[180px]">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`
                relative
                overflow-hidden
                rounded-xl
                ${image.className}
              `}
            >
              <Image
                src={image.src}
                alt={`Gallery ${index + 1}`}
                fill
                className="
                  object-cover
                  hover:scale-105
                  transition
                  duration-500
                "
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}