import "./header.css";

export function Header1() {
  return (
    <div className="header-1">
      <div className="container">
        <div className="d-flex align-items-center me-3">
          <i className="fas fa-phone-volume me-1"></i>
          <p className="m-0">0355 111 616</p>
        </div>
        <div className="d-flex align-items-center me-3">
          <i className="fas fa-map-marker me-1"></i>
          <p className="m-0">Cộng Hòa, Quốc Oai, Hà Nội</p>
        </div>
        <div className="d-flex ms-auto">
          <div className="header-icon">
            <i className="fab fa-facebook-f"></i>
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