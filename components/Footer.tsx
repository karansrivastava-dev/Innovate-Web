import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black py-16"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <Image
          src="/images/logo.png"
          alt=""
          width={220}
          height={60}
          className="mx-auto"
        />

        <p className="text-gray-400 mt-6">
          © 2025 Innovate Web. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}