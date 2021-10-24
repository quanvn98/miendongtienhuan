import "./header.css";

export function Header1() {
  return (
    <div className="header-1" id="header-1">
      <div className="container">
        <div className="d-flex align-items-center phone">
          <i className="fas fa-phone-volume me-1"></i>
          <p className="m-0">0865 482 092</p>
        </div>
        <div className="d-flex align-items-center address">
          <i className="fas fa-map-marker me-1"></i>
          <p className="m-0">Cộng Hòa, Quốc Oai, Hà Nội</p>
        </div>
        <div className="d-flex ms-auto">
          <div className="header-icon">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Mi%E1%BA%BFn-dong-%C4%91%E1%BA%B7c-s%E1%BA%A3n-l%C3%A0ng-so-sx-v%C3%A0-pp-mi%E1%BA%BFn-vua-cho-c%C3%A1c-t%E1%BB%95ng-%C4%91%E1%BA%A1i-l%C3%BD-108755597653440">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="header-icon">
            <i className="fab fa-google"></i>
          </div>
          <div className="header-icon">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="header-icon">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="header-icon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  )
}