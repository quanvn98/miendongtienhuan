import './phone.css'

export function Phone() {
  return (
    <a href="tel:0355111616" className="phone-call">
      <span>0355 111 616</span>
      <div className="phone-icon">
        <i className="fas fa-phone-alt"></i>
      </div>
      <div className="phone-background"></div>
      <div className="phone-ring"></div>
    </a>
  )
}