import "./header.css";
import logo from "./images/logo.png";

export function Header2() {
  return (
    <div className="header-2" id="header-2">
      <div className="container">
        <img src={logo} alt="logo" className="logo"></img>
        <div
          className="text-center fw-bold"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <p className="m-0 p1">MIẾN NAM TIẾN - MIẾN VUA</p>
          <p className="m-0 p2">Miến Dong Cao Cấp</p>
          <p className="m-0 p3">Đặc Sản Làng So</p>
        </div>
        <div className="d-flex align-items-center phone">
          <i className="fas fa-phone-volume me-1"></i>
          <p className="m-0">0865 482 092</p>
        </div>
      </div>
    </div>
  );
}
