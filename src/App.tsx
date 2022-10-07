import './App.css';
import { useWindowsSize } from './hooks/useWindowsSize';

function App() {
  const size = useWindowsSize();

  return (
    <div className="App">
      <div className="container">
        <div className="intro">
          <div className="nav">
            <div className="nav__logo">
              <ul className="navigation">
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Instagram
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Facecbook
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Twitter
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="intro-center">
            <span>Clothing</span>
            <figure>
              <img src="https://picsum.photos/200/300" alt="" />
            </figure>
            <span className="top">Imported</span>
            <div className="text">
              in Accra <span>0'03'423'2</span>
            </div>
          </div>

          <div className="intro-bottom">
            <div className="intro-bottom-list">Volume 02</div>
            <div className="intro-bottom-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est
              eveniet officia eos aspernatur dolor beatae atque, quisquam
              consequatur tenetur soluta ea pariatur fugit asperiores a
              explicabo cum suscipit voluptatem.
            </div>
            <div className="intro-bottom-list">By Lorem Ipsum</div>
          </div>
        </div>

        <div className="section section--one">
          <figure>
            <img src="https://picsum.photos/200/300" />
          </figure>
          <div className="wrapper-img">
            <figure className="img-reveal">
              <img src="" />
            </figure>
          </div>
        </div>

        <div className="section section--two">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto
            nihil quidem aperiam enim. Sed itaque quibusdam debitis! Eligendi
            delectus itaque ab similique ducimus dolorem. Quibusdam animi itaque
            dolore quis.
          </h1>
          <figure>
            <img src="https://picsum.photos/200/300" />
          </figure>
        </div>
        <div className="section section-third">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            omnis officia earum aperiam quibusdam doloribus doloremque nisi
            nihil dolores velit, expedita, reprehenderit atque quia, sint
            recusandae quam eos nobis eius.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
