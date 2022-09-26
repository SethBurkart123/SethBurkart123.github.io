import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, Component } from 'react';
import BeforeAfterSlider from 'react-before-after-slider'
import './App.css';

gsap.registerPlugin(ScrollTrigger);


function App() {
  const Maskbefore = './images/premask.jpg'
  const Maskafter = './images/postmask.jpg'

  const Colourbefore = './images/precolour.jpg'
  const Colourafter = './images/postcolour.jpg'

  const OutLeft = useRef(null);
  const OutRight = useRef(null);

  
  useEffect(() => {
    gsap.to(OutLeft.current, {
      scrollTrigger: {
        trigger: OutLeft.current,
        start: "center center",
        end: "+=500",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
      x: -100,
    });

    gsap.to(OutRight.current, {
      scrollTrigger: {
        trigger: OutRight.current,
        start: "center center",
        end: "+=500",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
      x: 100,
    });
    


  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-900 md:px-8">
      <section className="justify-between h-screen gap-2 px-8 py-12 lg:flex">
        <div className="grid flex-1 place-items-center">
          <div>
            <h1 className="pb-6 text-6xl font-bold text-center lg:text-left lg:text-8xl blue-text">Hey! I'm Seth</h1>
            <p className="pr-8 text-xl text-center text-slate-500 lg:text-left">
                With over 5 years of video editing experience... I can do anything you like:
                typography, motion tracking, green screening. You name it!
            </p>
          </div>
        </div>

        <div className="grid flex-1 pt-16 max-w-32 place-items-center lg:pt-0">
          <iframe className="youtube" src="https://www.youtube.com/embed/oFtIIDcZo80" title="Demo Reel 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>
      </section>

      <section className="flex h-screen gap-24 pb-32 mx-auto md:px-12">
        {/* Item */}
        <div ref={OutLeft}>
          <h3 className="pb-12 text-6xl font-bold text-center blue-text">Masking</h3>
          <div className="px-2 py-12 md:px-12 md:shadow-2xl md:bg-neutral-800 rounded-3xl w-fit h-fit">
            <BeforeAfterSlider before={Maskbefore} after={Maskafter} width={640} height={480}/>
          </div>
        </div>

        {/* Item 2 */}
        <div ref={OutRight}>
          <h3 className="pb-12 text-6xl font-bold text-center blue-text">Colour Grading</h3>
          <div className="px-2 py-12 md:px-12 md:shadow-2xl md:bg-neutral-800 rounded-3xl w-fit h-fit">
            <BeforeAfterSlider before={Colourbefore} after={Colourafter} width={640} height={480}/>
          </div>
        </div>
      </section>

      <section>
        
      </section>
    </div>
  );
}

export default App;
