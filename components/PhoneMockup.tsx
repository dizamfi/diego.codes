import React from "react";

interface PhoneMockupProps {
  src: string; // link al video o iframe
  type?: "video" | "iframe";
}

export default function PhoneMockup({ src, type = "iframe" }: PhoneMockupProps) {
  return (
    <div className="relative w-[300px] h-[600px] mx-auto border-8 border-gray-800 rounded-[40px] shadow-2xl overflow-hidden bg-black">
      {/* Notch arriba */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

      {type === "iframe" ? (
        <iframe
          src={src}
          className="w-full h-full"
          style={{ border: "none" }}
        />
      ) : (
        <video
          src={src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
    </div>
  );
}
