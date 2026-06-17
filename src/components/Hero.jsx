import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SoftAurora from './SoftAurora';
import { SplitText } from 'gsap/all';

const Hero = () => {
  useGSAP(() => {

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.to(".title", {
      duration: 2.5,
      scrambleText: {
        text: "DESKIE",
        chars: "__________",
        revealDelay: 0.2,
        tweenLength: true,
        speed: 0.1,
        newClass: "text-gradient",
      },
      ease: "power2.inOut",
      overwrite: "auto",
    });

    gsap.to(".ai", {
      duration: 2.5,
      scrambleText: {
        text: "AI",
        chars: "++",
        revealDelay: 0.5,
        tweenLength: true,
        speed: 0.1,
        newClass: "text-gradient",
      },
      ease: "power2.inOut",
      overwrite: "auto",
    });


    gsap.from(".card", {
      opacity: 0,
      y: 50,
      rotation: gsap.utils.random(-15, 15),
      duration: 3,
      stagger: 0.15,
      ease: "elastic.out(1, 0.5)",
    });
  });

  return (
      <section id="hero" className="noisy">
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <SoftAurora
              speed={0.3} scale={1.5} brightness={1}
              color1="#9E97FF" color2="#0f2c5c"
              noiseFrequency={1} noiseAmplitude={1}
              bandHeight={0.5} bandSpread={1}
              octaveDecay={0.1} layerOffset={0}
              colorSpeed={0.3} enableMouseInteraction mouseInfluence={0.25}
          />
        </div>
        <h1 className="title">DESKIE </h1>
        <h2 className="ai">AI</h2>



        <div className="body">
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className="content">
            <div className="space-y-5 hidden md:block">

              <p className="subtitle">
                Own your <br /> Intelligence
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Captures, organize, and bring your learning to life
              </p>
              <a href="#about" className="badge">
                <img src="/images/microsoft.png" alt="arrow" className="size-10" />
                Download</a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;