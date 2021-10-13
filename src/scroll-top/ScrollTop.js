import "./scroll-top.css";

export function ScrollTop() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a href="#home" className="scroll-to-top" onClick={scrollToTop}>
      <i className="fas fa-angle-up"></i>
    </a>
  );
}
