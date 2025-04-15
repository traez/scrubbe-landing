import Banner from "@/components/landing/Banner";
import Advanced from "@/components/landing/Advanced";
//import Space from "@/components/landing/Space";

const Hero = () => {
  return (
    <div className="h-auto bg-gradient-to-br from-[#1a237e] to-[#283593]">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:items-center lg:gap-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Advanced />
        </div>
        <div className="w-full lg:w-1/2">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
