import "./header.css";
import logo from "./images/logo.jpg";

export function Header2() {
  return (
    <div className="header-2">
      <div className="container">
        <img src={logo} alt="logo" className="logo"></img>
        <div
          className="text-center fw-bold"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <p className="m-0 p1">MIẾN DONG TIẾN HUẤN</p>
          <p className="m-0 p2">Miến Dong Cao Cấp</p>
          <p className="m-0 p3">Đặc Sản Làng So</p>
        </div>
        <div className="d-flex align-items-center phone">
          <i className="fas fa-phone-volume me-1"></i>
          <p className="m-0">0355 111 616</p>
        </div>
      </div>
    </div>
  );
}
