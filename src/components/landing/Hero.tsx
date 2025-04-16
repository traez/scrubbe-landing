import HeroBanner from "@/components/landing/HeroBanner";
import HeroAdvanced from "@/components/landing/HeroAdvanced";

const Hero = () => {
  return (
    <section className="h-auto bg-gradient-to-br from-[#1a237e] to-[#283593] w-full">
      <article className="mx-auto px-4 py-8 flex flex-col lg:flex-row lg:items-center lg:gap-8  max-w-[1440px] w-full">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <HeroAdvanced />
        </div>
        <div className="w-full lg:w-1/2">
          <HeroBanner />
        </div>
      </article>
    </section>
  );
};

export default Hero;
