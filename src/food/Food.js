import './food.css'
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import food4 from "./images/food4.jpg";

export function Food() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="food-item vertical">
            <div className="food-viewport">
              <img src={food1} alt="food 1" />
            </div>
            <div className="content">
              <h6 className="title">Miến xào thập cẩm dễ làm dễ ăn</h6>
              <div className="description">Món miến xào thập cẩm với những nguyên liệu dễ kiếm, ăn bao nhiêu cũng không ngán.</div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="food-item horizontal">
            <div className="food-viewport">
              <img src={food2} alt="food 2" />
            </div>
            <div className="content">
              <h6 className="title">Là lạ miến xào mít non</h6>
              <div className="description">Sợi miến không quá dai, quyện với mít non dân dã tạo cảm giác rất ngon miệng.</div>
            </div>
          </div>
          <hr />
          <div className="food-item horizontal">
            <div className="food-viewport">
              <img src={food3} alt="food 3" />
            </div>
            <div className="content">
              <h6 className="title">Miến xào mỳ căn thanh đạm</h6>
              <div className="description">Miến xào với rau củ ăn nhẹ bụng, giảm cân sau những ngày đã ngán thịt.</div>
            </div>
          </div>
          <hr />
          <div className="food-item horizontal">
            <div className="food-viewport">
              <img src={food4} alt="food 4" />
            </div>
            <div className="content">
              <h6 className="title">Miến xào rau củ</h6>
              <div className="description">Sau những bữa ăn nhiều thịt cá, bạn thử đổi vị với món miến xào rau củ chay nhé.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}