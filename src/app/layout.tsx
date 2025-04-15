import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BprogressProvider from "@/lib/BprogressProvider";
import Navbar from "@/components/landing/Navbar";
import Chatbot from "@/components/landing/Chatbot";
import CookieConsentModal from "@/components/landing/CookieConsentModal";
import AnnouncementBar from "@/components/landing/AnnouncementBar";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs bg-[#F5F5F5]">
        <BprogressProvider>
          <Navbar />
          <AnnouncementBar />
          <main className="flex-grow h-full w-full max-w-[1440px] bg-white text-black">
            {children}
          </main>
          <CookieConsentModal />
          <Chatbot />
        </BprogressProvider>
      </body>
    </html>
  );
}
