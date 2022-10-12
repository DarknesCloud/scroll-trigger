import { useCallback, useEffect, useRef } from 'react';
import { useWindowsSize } from './hooks/useWindowsSize';
import './App.css';

function App() {
  //
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, []);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  return (
    <div>
      <div className="container" ref={containerRef}>
        <div className="intro">
          <div className="nav">
            <div className="nav--logo">m.</div>
            <ul className="navigation">
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
            <span>Clothing</span>
            <figure>
              <img src="https://picsum.photos/200/300" />
            </figure>
            <span className="top">Imported</span>
            <div className="text">
              in Accra <span>0'03'439'02</span>
            </div>
          </div>

          <div className="intro-bottom">
            <div className="intro-bottom-list">Vomule 02</div>
            <div className="intro-bottom-list">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="intro-bottom-list">By Lorem Ipsum</div>
          </div>
        </div>
        <div className="section section--one">
          <figure className="img-bg">
            <img src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg" />
          </figure>
          <div className="wrapper-img">
            <figure className="img-reveal">
              <img src="https://picsum.photos/200/300" />
            </figure>
          </div>
        </div>
        <div className="section section--tow">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam
            eum accusantium? Dolor officiis beatae dolorem expedita eligendi
            quidem commodi fugit impedit accusamus consectetur, quos
            perspiciatis aut, nemo officia asperiores?
          </h1>
          <figure>
            <img src="https://fondosmil.com/fondo/17009.jpg" />
          </figure>
        </div>
        <div className="section section--third">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            iste quisquam. Perferendis assumenda aliquam ratione incidunt
            tempora eaque obcaecati ducimus illo nostrum reiciendis quas, fuga
            iure saepe. Repellat, aperiam laudantium?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
