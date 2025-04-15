import Image from "next/image";
import Banner from "@/components/landing/Banner";

const Hero = () => {
  return (
    <section className="w-full mx-auto">
      {/* Content area with proper padding */}
      <div className="px-4 md:px-6 lg:px-8">
        {/* Divider */}
        <div className="border-t border-gray-200 w-full my-4"></div>

        {/* Hero Section - column on mobile, row on desktop */}
        <article className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-12 gap-8">
          <aside className="lg:max-w-[50%]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Intelligent SIEM & SOAR Solution
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Scrubbe combines cutting-edge security information and event
              management with security orchestration, automation and response to
              provide comprehensive protection for your organization.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Get Started
            </button>
          </aside>

          <div className="relative cursor-pointer w-[250px] h-[199px] sm:w-[400px] sm:h-[319px] lg:w-[500px] lg:h-[400px] mx-auto lg:mx-0">
            <Image
              src="/executive-dashboard-example.png"
              alt="Scrubbe Dashboard"
              fill
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 400px, 500px"
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </article>
      </div>
      <Banner />
    </section>
  );
};

export default Hero;
