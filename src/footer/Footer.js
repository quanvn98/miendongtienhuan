import './footer.css'

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="footer-header">
              <span>liên hệ</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-map-marked-alt me-1"></i>
              <p className="m-0">Địa chỉ: Cộng Hòa, Quốc Oai, Hà Nội</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-tty me-1"></i>
              <p className="m-0">Điện thoại: 0355111616</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-envelope-open-text me-1"></i>
              <p className="m-0">Email: quanvuongngoc98@gmail.com</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-globe me-1"></i>
              <p className="m-0">Website: miendongtienhuan.com</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 map">
            <div className="footer-header">
              <span>bản đồ</span>
            </div>
            <iframe title="miendongtienhuan" width="600" height="450" style={{ border: 0, width: '100%', height: 300, display: 'block' }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ____T-RPNDERvzP1vPLLp28&key=AIzaSyCRbh3BEu61PgeCHemwFZgDfnPwmILN9cE"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}