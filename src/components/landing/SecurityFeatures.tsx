/* const SecurityFeatures = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-green-400 flex justify-center">
        <section className="w-full h-auto max-w-[1440px]">
          Scrolling Modal
        </section>
      </div>
    </>
  );
};

export default SecurityFeatures;
 */
"use client";
import { useState, useEffect } from "react";
import {
  IoPersonOutline,
  IoShieldOutline,
  IoGlobeOutline,
  IoChevronForwardOutline,
  IoChevronBackOutline,
} from "react-icons/io5";
import { MdPhishing } from "react-icons/md";

// Card Component
interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="h-full px-4 pb-8 border border-black">
      <div className="flex flex-col items-center text-center h-full">
        <div className="text-green-500 text-4xl mb-6">{icon}</div>
        <h3 className="text-green-500 text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-800 mb-6">{description}</p>
        <div className="flex items-center text-green-500 font-bold cursor-pointer mt-auto">
          Learn More <IoChevronForwardOutline className="ml-1" />
        </div>
      </div>
    </div>
  );
};

// Carousel Components
interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, className = "" }) => {
  return <div className={`relative w-full ${className}`}>{children}</div>;
};

interface CarouselContentProps {
  children: React.ReactNode;
  currentIndex: number;
  isMobile: boolean;
}

const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  currentIndex,
  isMobile,
}) => {
  return (
    <div className="overflow-hidden px-8">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: isMobile
            ? `translateX(-${currentIndex * 100}%)`
            : `translateX(-${currentIndex * (100 / 3)}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  children: React.ReactNode;
  isMobile: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children, isMobile }) => {
  return (
    <div className={`flex-shrink-0 ${isMobile ? "w-full" : "w-1/3"} p-2`}>
      {children}
    </div>
  );
};

interface CarouselButtonProps {
  onClick: () => void;
  disabled: boolean;
  direction: "previous" | "next";
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  onClick,
  disabled,
  direction,
}) => {
  const Icon =
    direction === "previous" ? IoChevronBackOutline : IoChevronForwardOutline;

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      } ${direction === "previous" ? "left-0" : "right-0"}`}
      disabled={disabled}
      aria-label={direction === "previous" ? "Previous cards" : "Next cards"}
    >
      <Icon className="text-2xl text-green-500" />
    </button>
  );
};

// Main Component
const SecurityFeatures: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add resize listener
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Reset current index when switching between mobile and desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const cards = [
    {
      icon: (
        <div className="p-3 bg-white rounded-full border-2 border-green-500">
          <IoPersonOutline className="text-green-500" />
        </div>
      ),
      title: "Real-Time Threat Detection",
      description:
        "Monitor and detect suspicious activities across your network with advanced analytics and machine learning algorithms.",
    },
    {
      icon: (
        <div className="p-3 bg-white rounded-full border-2 border-green-500">
          <MdPhishing className="text-green-500" />
        </div>
      ),
      title: "Automated Response",
      description:
        "Configure playbooks to automatically respond to security incidents, reducing response time and minimizing damage",
    },
    {
      icon: (
        <div className="p-3 bg-white rounded-full border-2 border-green-500">
          <IoGlobeOutline className="text-green-500" />
        </div>
      ),
      title: "Comprehensive Dashboards",
      description:
        "Visualize security data with intuitive dashboards that provide actionable insights at a glance",
    },
    {
      icon: (
        <div className="p-3 bg-white rounded-full border-2 border-green-500">
          <IoShieldOutline className="text-green-500" />
        </div>
      ),
      title: "Integration Ecosystem",
      description:
        "Connect with over 200 security tools and data sources to centralize your security operations.",
    },
    {
      icon: (
        <div className="p-3 bg-white rounded-full border-2 border-green-500">
          <IoPersonOutline className="text-green-500" />
        </div>
      ),
      title: "Mobile Alerts",
      description:
        "Stay informed with real-time notifications on critical security events via mobile app or SMS.",
    },
    {
      icon: (
        <div className="p-3 bg-white rounded-full border-2 border-green-500">
          <IoShieldOutline className="text-green-500" />
        </div>
      ),
      title: "Compliance Reporting",
      description:
        "Generate comprehensive reports for regulatory compliance including GDPR, HIPAA, PCI DSS, and more.",
    },
  ];

  // Calculate visible items and max index
  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = cards.length - itemsPerView;

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  // Check if buttons should be disabled
  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  return (
    <div className="w-full h-auto bg-white flex justify-center py-12">
      <section className="w-full max-w-[1440px] px-4 flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Security Features
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto">
            Scrubbe offers comprehensive security monitoring and automated
            response capabilities to identify and neutralize threats before they
            impact your business.
          </p>
        </div>

        {/* Carousel */}
        <Carousel className="my-8">
          <CarouselButton
            direction="previous"
            onClick={goToPrevious}
            disabled={isPreviousDisabled}
          />

          <CarouselContent currentIndex={currentIndex} isMobile={isMobile}>
            {cards.map((card, idx) => (
              <CarouselItem key={`card-${idx}`} isMobile={isMobile}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselButton
            direction="next"
            onClick={goToNext}
            disabled={isNextDisabled}
          />
        </Carousel>
      </section>
    </div>
  );
};

export default SecurityFeatures;