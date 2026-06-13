export default function LogoStrip() {
  const companies = [
    "Innovate Web Communitie",
    "Innovate Web Communitie",
    "Innovate Web Communitie",
    "Innovate Web Communitie",
    "Innovate Web Communitie",
    "Innovate Web Communitie",
    "Innovate Web Communitie",
  ];

  return (
    <section className="bg-[#dbe4ff] border-y border-[#c8d5ff] overflow-hidden">

      <div className="py-6">

        <div className="flex whitespace-nowrap animate-marquee">

          {[...companies, ...companies].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-10 text-sm text-slate-900"
            >
              <span>{item}</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}