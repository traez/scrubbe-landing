"use client";
import { useState, useEffect, useRef, useMemo } from "react";

function HeroAdvanced() {
  // Use useMemo to prevent recreation of the words array on each render
  const words = useMemo(() => ["Intelligence", "Features", "in Action"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);
  // Fix: Properly type the refs to handle NodeJS.Timeout
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const animationRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Function to handle word rotation
  useEffect(() => {
    // Clear any existing intervals when component mounts or unmounts
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  useEffect(() => {
    // Start the word rotation when component mounts
    intervalRef.current = setInterval(() => {
      // Reset visible letters to 0
      setVisibleLetters(0);

      // Change to the next word
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // 5 seconds rotation

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [words.length]);

  // Letter animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (visibleLetters < currentWord.length) {
      animationRef.current = setTimeout(() => {
        setVisibleLetters((prevCount) => prevCount + 1);
      }, 100); // 100ms per letter
    }

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [currentWordIndex, visibleLetters, words]);

  // Get the current word and split it for animation
  const currentWord = words[currentWordIndex];
  const visiblePart = currentWord.substring(0, visibleLetters);

  return (
    <div className="h-auto bg-gradient-to-br from-[#1a237e] to-[#283593] flex items-center justify-center p-4">
      <div className="w-full min-w-[280px] max-w-[720px] max-h-[450px] mx-auto overflow-hidden">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 text-left">
              Advanced{" "}
              <span className="text-emerald-400">
                SIEM &amp; <br />
                SOAR
              </span>{" "}
              <span className="text-white">Security</span>
              <br />
              <span
                className="text-white inline-block"
                style={{
                  minHeight: "1.2em", // Ensures height is maintained
                }}
              >
                {visiblePart || "\u00A0"} {/* Non-breaking space if empty */}
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 text-left">
              Scrubbe combines powerful security monitoring with automated
              response capabilities to keep your organization safe from emerging
              threats.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3 justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 md:px-6 rounded-md transition-colors text-sm">
                Start free trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-2 px-4 md:px-6 rounded-md transition-colors text-sm">
                See Demo
              </button>
            </div>

            <div className="flex justify-start gap-x-[2rem] sm:gap-x-[4rem] text-white max-w-2xl">
              <nav className="flex flex-col items-start border-l-2 border-emerald-400 pl-2 sm:pl-4">
                <span className="text-xl md:text-2xl font-bold mb-1">
                  98.7%
                </span>
                <span className="text-gray-300 text-xs">Threat Detection</span>
              </nav>
              <nav className="flex flex-col items-start border-l-2 border-emerald-400 pl-2 sm:pl-4">
                <span className="text-xl md:text-2xl font-bold mb-1">87%</span>
                <span className="text-gray-300 text-xs">Faster Response</span>
              </nav>
              <nav className="flex flex-col items-start border-l-2 border-emerald-400 pl-2 sm:pl-4">
                <span className="text-xl md:text-2xl font-bold mb-1">250+</span>
                <span className="text-gray-300 text-xs">Integrations</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAdvanced;
