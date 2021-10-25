// import logo from './logo.svg';
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Header1 } from "./header/Header1";
import { Header2 } from "./header/Header2";
import { Header3 } from "./header/Header3";
import { Carousel } from "./carousel/Carousel";
import { Phone } from "./phone/Phone";
import { ScrollTop } from "./scroll-top/ScrollTop";
import { Section } from "./common/Section";
import { AboutUs } from "./about-us/AboutUs";
import { Gallery } from "./gallery/Gallery";
import { Food } from "./food/Food";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";

// enable smooth scroll for safari
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

function App() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />
      <Carousel />
      <Phone />
      <ScrollTop />
      <Section header="về chúng tôi" id="about-section">
        <AboutUs />
      </Section>
      <Section header="hình ảnh về sản phẩm" id="gallery-section">
        <Gallery />
      </Section>
      <Section header="món ngon từ miến dong" id="food-section">
        <Food />
      </Section>
      <Section header="liên hệ với chúng tôi" id="contact-section">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
