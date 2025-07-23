import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ParticlesBackground from "./ui/Particles";


const Hero = () => {

  return (
    <div className="pb-20 pt-36 relative">
      {/* Hero-specific particles with more intensity */}
      <ParticlesBackground 
        className="absolute inset-0 z-0" 
        particleColor="#ffffff" 
        particleCount={100} 
        speed={0.8} 
        opacity={0.4} 
        particleSize={2}
      />

      {/* Your existing Spotlight and content */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Developer / Designer / Editor
          </p>

          <TextGenerateEffect
            words="Hey There ! I'm Shashank Jha"
            className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl leading-[3]"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg text-gray-300 mt-2.5">
            A Next.js Developer based in Delhi.
          </p>

          <a href="#about">
            <MagicButton title="Download Resume" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
