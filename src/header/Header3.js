import "./header.css";

export function Header3() {
  const scrollToElement = (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("href");
    let el = document.getElementById(id.slice(1));
    let top = el === null ? 0 : el.offsetTop;
    window.scrollTo({
      top: top - 45,
      behavior: "smooth",
    });
  };

  return (
    <div className="header-3" id="header-3">
      <div className="container d-flex align-items-center">
        <ul className="menu">
          <li>
            <a href="#home" onClick={scrollToElement}>
              TRANG CHỦ
            </a>
          </li>
          <li>
            <a href="#about-section" onClick={scrollToElement}>
              VỀ CHÚNG TÔI
            </a>
          </li>
          <li>
            <a href="#gallery-section" onClick={scrollToElement}>
              HÌNH ẢNH SẢN PHẨM
            </a>
          </li>
          <li>
            <a href="#food-section" onClick={scrollToElement}>
              TIN TỨC VÀ MÓN NGON
            </a>
          </li>
          <li>
            <a href="#contact-section" onClick={scrollToElement}>
              LIÊN HỆ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
