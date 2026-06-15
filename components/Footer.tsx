import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000B2A] text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

          {/* Logo Section */}
          <div className="md:col-span-2">

            <div className="bg-white inline-block p-3 rounded-lg">
              <Image
                src="/images/logo.png"
                alt="Innovate Web"
                width={180}
                height={50}
              />
            </div>

            <div className="flex gap-5 mt-6 text-white/70 text-sm">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">X</a>
            </div>

            <p className="mt-6 text-white/50 text-sm max-w-xs">
              Connecting People, Creating Opportunities,
              Building Communities.
            </p>

          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-5">
              Support
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-5">
              Social
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-5">
              Legal
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-white/40 text-sm">
            © 2026 Innovate Web. All rights reserved.
          </p>

          <p className="text-white/40 text-sm mt-3 md:mt-0">
            Made with ❤️ for the Innovate Web Community
          </p>

        </div>

      </div>
    </footer>
  );
}