import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryTopRef = useRef(null);
  const libraryBottomRef = useRef(null);

  const [mainIndex, setMainIndex] = useState(0);
  const [sideTopIndex, setSideTopIndex] = useState(0);
  const [sideBottomIndex, setSideBottomIndex] = useState(0);

  const mainImages = [
    "/images/project1.png",
    "/images/project1.1.png",
    "/images/project1.2.png",
    "/images/project1.3.png",
  ];
  const sideTopImages = [
    "/images/op1.png",
    "/images/op1.1.png",
    "/images/op1.3.png",
    "/images/op1.4.png",
    "/images/op1.5.png",
    "/images/op1.6.png",
    "/images/op1.7.png",
    "/images/op2.png",
  ];
  const sideBottomImages = ["/images/project3.png"];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryTopRef.current, libraryBottomRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" className="flex flex-col">
      <div>
        <h1 className="projects">My Projects</h1>
      </div>
      <div ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            {/* === Main Project Card === */}
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="custom-bg-wrapper bg-[#1E293B] rounded-2xl p-4">
                <div className="image-inner-wrapper">
                  <img
                    src={mainImages[mainIndex]}
                    alt="Ryde App Interface"
                    className="rounded-xl w-full h-full object-contain"
                  />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    <button
                      onClick={() =>
                        setMainIndex((prev) =>
                          prev > 0 ? prev - 1 : mainImages.length - 1
                        )
                      }
                    >
                      <ChevronLeft className="text-white bg-black/50 p-1 rounded-full" />
                    </button>
                    <button
                      onClick={() =>
                        setMainIndex((prev) => (prev + 1) % mainImages.length)
                      }
                    >
                      <ChevronRight className="text-white bg-black/50 p-1 rounded-full" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://chat-rizz.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-wrapper"
                >
                  <div className="cta-button w-[40%] sm:w-[60%] md:w-[40%] lg:w-[30%] sm:ml-3 mt-[-1rem] group">
                    <div className="bg-circle" />
                    <p className="text">Go To Site</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-right.svg" alt="arrow" />
                    </div>
                  </div>
                </a>
              </div>

              <div className="text-content pl-1 sm:pl-3">
                <h2>
                  A real-time chat application enabling seamless, instant
                  communication between users with a sleek and responsive
                  interface.
                </h2>
                <p className="text-white-50 md:text-xl">
                  Built with modern technologies like React, Express, MongoDB,
                  Node.js, TailwindCSS, DaisyUI, and Lucide React for a fast,
                  secure, and user-friendly experience.
                </p>
              </div>
            </div>

            {/* === Side Project Cards === */}
            <div className="project-list-wrapper overflow-hidden">
              {/* Top Side Project */}
              <div className="project" ref={libraryTopRef}>
                <div className="custom-bg-wrapper bg-[#ffedd7] rounded-2xl p-4">
                  <div className="smallimage-inner-wrapper">
                    <img
                      src={sideTopImages[sideTopIndex]}
                      alt="Op Store Project"
                      className="rounded-xl w-full h-full object-contain"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                      <button
                        onClick={() =>
                          setSideTopIndex((prev) =>
                            prev > 0 ? prev - 1 : sideTopImages.length - 1
                          )
                        }
                      >
                        <ChevronLeft className="text-white bg-black/50 p-1 rounded-full" />
                      </button>
                      <button
                        onClick={() =>
                          setSideTopIndex(
                            (prev) => (prev + 1) % sideTopImages.length
                          )
                        }
                      >
                        <ChevronRight className="text-white bg-black/50 p-1 rounded-full" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="https://op-store24.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-wrapper"
                  >
                    <div className="cta-buttonsmall sm:h-[3rem] w-[40%] sm:w-[60%] md:w-[40%] lg:w-[30%] mt-[-1rem] group">
                      <div className="bg-circle" />
                      <p className="text">Go To Site</p>
                      <div className="arrow-wrappersmall">
                        <img src="/images/arrow-right.svg" alt="arrow" />
                      </div>
                    </div>
                  </a>
                </div>

                <h2>
                  Op-Store, an e-commerce website featuring exclusive One Piece
                  merchandise.
                </h2>
              </div>

              {/* Bottom Side Project */}
              <div className="project" ref={libraryBottomRef}>
                <div className="custom-bg-wrapper bg-[#ffe6ea] rounded-2xl p-4">
                  <div className="smallimage-inner-wrapper">
                    <img
                      src={sideBottomImages[sideBottomIndex]}
                      alt="Expensify"
                      className="rounded-xl w-full h-full object-contain"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                      <button
                        onClick={() =>
                          setSideBottomIndex((prev) =>
                            prev > 0 ? prev - 1 : sideBottomImages.length - 1
                          )
                        }
                      >
                        <ChevronLeft className="text-white bg-black/50 p-1 rounded-full" />
                      </button>
                      <button
                        onClick={() =>
                          setSideBottomIndex(
                            (prev) => (prev + 1) % sideBottomImages.length
                          )
                        }
                      >
                        <ChevronRight className="text-white bg-black/50 p-1 rounded-full" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="https://expensify1724.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-wrapper"
                  >
                    <div className="cta-buttonsmall sm:h-[3rem] w-[40%] sm:w-[60%] md:w-[40%] lg:w-[30%] mt-[-1rem] group">
                      <div className="bg-circle" />
                      <p className="text">Go To Site</p>
                      <div className="arrow-wrappersmall">
                        <img src="/images/arrow-right.svg" alt="arrow" />
                      </div>
                    </div>
                  </a>
                </div>

                <h2>Expensify - My first React Project</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
