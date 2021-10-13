import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";

export function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-30" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="slide 1" style={{ height: 'calc(100vh - 262px)', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="slide 2" style={{ height: 'calc(100vh - 262px)', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="slide 3" style={{ height: 'calc(100vh - 262px)', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="slide 4" style={{ height: 'calc(100vh - 262px)', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img src={slide5} className="d-block w-100" alt="slide 5" style={{ height: 'calc(100vh - 262px)', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img src={slide6} className="d-block w-100" alt="slide 6" style={{ height: 'calc(100vh - 262px)', objectFit: 'cover' }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}