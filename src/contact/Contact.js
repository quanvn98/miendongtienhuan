import './contact.css'

export function Contact() {
  const formSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container contact">
      <form onSubmit={formSubmit}>
        <div className="row">
          <div className="col-12 col-sm-6 offset-sm-3">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <input type="text" className="form-control" placeholder="Họ tên" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 offset-sm-3">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <input type="text" className="form-control" placeholder="Địa chỉ" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-3 offset-sm-3">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-phone-alt"></i>
              </span>
              <input type="text" className="form-control" placeholder="Điện thoại" />
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 offset-sm-3">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-question"></i>
              </span>
              <textarea className="form-control" placeholder="Nội dung" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Gửi ngay</button>
        </div>
      </form>
    </div>
  )
}