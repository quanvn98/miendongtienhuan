import "./header.css";
import logo from "./images/logo.jpg"

export function Header2() {
  return (
    <div className="header-2">
      <div className="container">
        <img src={logo} alt="logo" className="logo"></img>
        <div className="text-center fw-bold">
          <p className="m-0" style={{ fontSize: 46, color: '#008000' }}>MIẾN DONG TIẾN HUẤN</p>
          <p className="m-0" style={{ fontSize: 40, color: '#ff0000' }}>Miến Dong Cao Cấp</p>
          <p className="m-0" style={{ fontSize: 26, color: '#ffa500' }}>Đặc Sản Làng So</p>
        </div>
        <div className="d-flex align-items-center phone">
          <i className="fas fa-phone-volume me-1"></i>
          <p className="m-0">0355 111 616</p>
        </div>
      </div>
    </div>
  )
}