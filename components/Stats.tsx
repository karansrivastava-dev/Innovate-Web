export default function Stats() {
  return (
    <section className="relative h-[340px] bg-gradient-to-r from-[#dfe6ff] to-[#8f9fc2] overflow-hidden">

      <div className="relative max-w-[1728px] mx-auto h-full">

        {/* Thread */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1728 340"
          fill="none"
        >
          <path
            d="
              M40 110

              C120 20 180 20 260 110

              S420 200 520 110

              S700 20 820 110

              S980 200 1100 110

              S1280 20 1400 110

              S1560 200 1680 110
            "
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 8"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>

        {/* Card 1 */}
        <div className="absolute left-[70px] top-[55px] w-[170px] h-[80px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center z-10">
          <div className="w-6 h-6 bg-[#dce3ff] rounded mb-1"></div>
          <h3 className="font-bold text-[#12284d]">12k+</h3>
          <p className="text-[10px] text-slate-500">Community Members</p>
        </div>

        {/* Card 2 */}
        <div className="absolute left-[340px] top-[145px] w-[170px] h-[80px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center z-10">
          <div className="w-6 h-6 bg-[#dce3ff] rounded mb-1"></div>
          <h3 className="font-bold text-[#12284d]">350+</h3>
          <p className="text-[10px] text-slate-500">Events Hosted</p>
        </div>

        {/* Card 3 */}
        <div className="absolute left-[620px] top-[55px] w-[170px] h-[80px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center z-10">
          <div className="w-6 h-6 bg-[#dce3ff] rounded mb-1"></div>
          <h3 className="font-bold text-[#12284d]">120+</h3>
          <p className="text-[10px] text-slate-500">Startups Connected</p>
        </div>

        {/* Card 4 */}
        <div className="absolute left-[930px] top-[145px] w-[170px] h-[80px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center z-10">
          <div className="w-6 h-6 bg-[#dce3ff] rounded mb-1"></div>
          <h3 className="font-bold text-[#12284d]">50+</h3>
          <p className="text-[10px] text-slate-500">Mentors</p>
        </div>

        {/* Card 5 */}
        <div className="absolute left-[1220px] top-[55px] w-[170px] h-[80px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center z-10">
          <div className="w-6 h-6 bg-[#dce3ff] rounded mb-1"></div>
          <h3 className="font-bold text-[#12284d]">25+</h3>
          <p className="text-[10px] text-slate-500">Cities</p>
        </div>

        {/* Card 6 */}
        <div className="absolute right-[70px] top-[145px] w-[170px] h-[80px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center z-10">
          <div className="w-6 h-6 bg-[#dce3ff] rounded mb-1"></div>
          <h3 className="font-bold text-[#12284d]">98%</h3>
          <p className="text-[10px] text-slate-500">Satisfaction Rate</p>
        </div>

      </div>

    </section>
  );
}