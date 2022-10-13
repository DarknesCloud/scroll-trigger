import { useCallback, useEffect, useRef } from 'react';
import { useWindowsSize } from '../hooks/useWindowsSize';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const ScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navList = useRef<HTMLUListElement>(null);
  const navLogo = useRef<HTMLDivElement>(null);
  const bottomList = useRef<HTMLDivElement>(null);

  const clothing = useRef<HTMLDivElement>(null);
  const introFig = useRef<HTMLDivElement>(null);
  const imported = useRef<HTMLDivElement>(null);
  const accra = useRef<HTMLDivElement>(null);
  const introBottomText = useRef<HTMLDivElement>(null);
  const volume = useRef<HTMLDivElement>(null);
  const author = useRef<HTMLDivElement>(null);
  const sectionOneImg = useRef<HTMLDivElement>(null);
  const sectionTwoHeading = useRef<HTMLDivElement>(null);
  const sectionTwoFig = useRef<HTMLDivElement>(null);
  const sectionThirdContainer = useRef<HTMLDivElement>(null);
  const sectionThirdText = useRef<HTMLDivElement>(null);

  //

  const size = useWindowsSize();
  const data = {
    ease: 0.1,
    curr: 0,
    prev: 0,
    rounded: 0,
  };

  const setBodyHeight = () => {
    document.body.style.height = `${
      containerRef.current!.getBoundingClientRect().height
    }px`;
  };

  const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    containerRef.current!.style.transform = `translateY(-${data.rounded}px)`;
    requestAnimationFrame(() => smoothScroll());
  }, [data]);

  const initSrollAnimation = useCallback(() => {
    const animationObj = {
      duration: 0.8,
      y: -80,
      opacity: 0,
    };

    gsap.to(clothing.current, {
      scrollTrigger: {
        trigger: clothing.current!,
        start: 'center 30%',
        scrub: true,
      },
      ...animationObj,
    });

    gsap.to(imported.current, {
      scrollTrigger: {
        trigger: imported.current!,
        start: 'center 13%',
        scrub: true,
      },
      ...animationObj,
    });

    gsap.to(accra.current, {
      scrollTrigger: {
        trigger: accra.current!,
        start: 'center 30%',
        scrub: true,
      },
      ...animationObj,
    });

    gsap.to(introBottomText.current, {
      scrollTrigger: {
        trigger: introBottomText.current!,
        start: 'center 60%',
        scrub: true,
      },
      y: -90,
      duration: 0.8,
    });

    gsap.to(volume.current, {
      scrollTrigger: {
        trigger: volume.current!,
        start: 'center 60%',
        scrub: true,
      },
      autoAlpha: 0,
      duration: 0.1,
    });

    gsap.to(author.current, {
      scrollTrigger: {
        trigger: author.current!,
        start: 'center 60%',
        scrub: true,
      },
      autoAlpha: 0,
      duration: 0.1,
    });

    gsap.to(sectionOneImg.current, {
      scrollTrigger: {
        trigger: sectionOneImg.current!,
        start: 'top 100%',
        scrub: true,
      },
      y: -300,
      filter: 'contrast(1)',
      duration: 0.8,
    });

    // toogle classes

    gsap.to(sectionTwoHeading.current, {
      scrollTrigger: {
        trigger: sectionTwoHeading.current!,
        start: 'center 100%',
        scrub: true,
        toggleClass: 'reveal',
      },
    });

    gsap.to(sectionTwoFig.current, {
      scrollTrigger: {
        trigger: sectionTwoFig.current!,
        start: 'center 100%',
        scrub: true,
        toggleClass: 'reveal',
      },
    });

    gsap.to(sectionTwoFig.current, {
      scrollTrigger: {
        trigger: sectionThirdContainer.current!,
        start: '30% 100%',
        scrub: true,
        toggleClass: 'reveal',
      },
      y: 600,
      height: '300px',
    });

    gsap.to(sectionThirdText.current, {
      scrollTrigger: {
        trigger: sectionThirdContainer.current!,
        start: '0% 100%',
        scrub: true,
      },
      y: -100,
      autoAlpha: 1,
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, []);

  useEffect(() => {
    setBodyHeight();
    initSrollAnimation();
  }, [size.height, initSrollAnimation]);

  return (
    <div>
      {' '}
      <div className="container" ref={containerRef}>
        <div className="intro">
          <div className="nav">
            <div className="nav--logo" ref={navLogo}>
              m.
            </div>
            <ul className="navigation" ref={navList}>
              <li className="navigation__item">
                <a href="" className="navigation__link">
                  Instagram
                </a>
              </li>
              <li className="navigation__item">
                <a href="" className="navigation__link">
                  Twitter
                </a>
              </li>
              <li className="navigation__item">
                <a href="" className="navigation__link">
                  Youtube
                </a>
              </li>
              <li className="navigation__item">
                <a href="" className="navigation__link">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div className="intro-center">
            <span ref={clothing}>Clothing</span>
            <figure ref={introFig}>
              <img src="https://picsum.photos/200/300" />
            </figure>
            <span className="top" ref={imported}>
              Imported
            </span>
            <div className="text" ref={accra}>
              in Accra <span>0'03'439'02</span>
            </div>
          </div>

          <div className="intro-bottom" ref={bottomList}>
            <div className="intro-bottom-list" ref={volume}>
              Vomule 02
            </div>
            <div className="intro-bottom-list" ref={introBottomText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="intro-bottom-list" ref={author}>
              By Lorem Ipsum
            </div>
          </div>
        </div>
        <div className="section section--one">
          <figure className="img-bg">
            <img src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg" />
          </figure>
          <div className="wrapper-img">
            <figure className="img-reveal" ref={sectionOneImg}>
              <img src="https://picsum.photos/200/300" />
            </figure>
          </div>
        </div>
        <div className="section section--two">
          <h1 className="reveal" ref={sectionTwoHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam
            eum accusantium? Dolor officiis beatae dolorem expedita eligendi
            quidem commodi fugit impedit accusamus consectetur, quos
            perspiciatis aut, nemo officia asperiores?
          </h1>
          <figure ref={sectionTwoFig}>
            <img src="https://fondosmil.com/fondo/17009.jpg" />
          </figure>
        </div>
        <div className="section section--third" ref={sectionThirdContainer}>
          <h1 ref={sectionThirdText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            iste quisquam. Perferendis assumenda aliquam ratione incidunt
            tempora eaque obcaecati ducimus illo nostrum reiciendis quas, fuga
            iure saepe. Repellat, aperiam laudantium?
          </h1>
        </div>
      </div>
    </div>
  );
};
