import CerHtml from '../assets/certificates/HTML.jpg';
import CerCss from '../assets/certificates/CSS.jpg';
import CerM1 from '../assets/certificates/MongoDBDatabase.jpg';
import CerM2 from '../assets/certificates/MongoDBAtlas.jpg';
import CerM3 from '../assets/certificates/MongoDBDocModel.jpg';
import CerM4 from '../assets/certificates/MongoDBAggregation.jpg';
import CerM5 from '../assets/certificates/MongoDBCRUD1.jpg';
import CerM6 from '../assets/certificates/MongoDBCRUD2.jpg';
import CerM7 from '../assets/certificates/MongoDBCRUD3.jpg';

import './Carousel.css';

function Certi() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={CerHtml} className="d-block w-100" alt="HTML" />
        </div>
        <div className="carousel-item">
          <img src={CerCss} className="d-block w-100" alt="CSS" />
        </div>
        <div className="carousel-item">
          <img src={CerM1} className="d-block w-100" alt="MongoDB1" />
        </div>
        <div className="carousel-item">
          <img src={CerM2} className="d-block w-100" alt="MongoDB2" />
        </div>
        <div className="carousel-item">
          <img src={CerM3} className="d-block w-100" alt="MongoDB3" />
        </div>
        <div className="carousel-item">
          <img src={CerM4} className="d-block w-100" alt="MongoDB4" />
        </div>
        <div className="carousel-item">
          <img src={CerM5} className="d-block w-100" alt="MongoDB5" />
        </div>
        <div className="carousel-item">
          <img src={CerM6} className="d-block w-100" alt="MongoDB6" />
        </div>
        <div className="carousel-item">
          <img src={CerM7} className="d-block w-100" alt="MongoDB7" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Certi;
