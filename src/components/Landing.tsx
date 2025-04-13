import Image from "next/image";

const Landing = () => {
  return (
    <section className="w-full mx-auto">
      {/* Navigation - Sticky */}
      <nav className="sticky top-0 z-50 bg-white w-full px-4 md:px-6 lg:px-8 shadow-sm">
        <div className="flex flex-row justify-between items-center py-4">
          <div className="text-3xl font-bold text-blue-600">
            Scrubbe<span className="text-blue-600">.</span>
          </div>

          {/* Mobile navigation - improved alignment */}
          <div className="md:hidden flex flex-col items-end">
            <div className="space-y-3 mt-2">
              <a href="#" className="block text-right hover:text-blue-600">
                Home
              </a>
              <a href="#" className="block text-right hover:text-blue-600">
                Features
              </a>
              <a href="#" className="block text-right hover:text-blue-600">
                Documentation
              </a>
              <a href="#" className="block text-right hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="block text-right hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Features
            </a>
            <a href="#" className="hover:text-blue-600">
              Documentation
            </a>
            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

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
    </section>
  );
};

export default Landing;
