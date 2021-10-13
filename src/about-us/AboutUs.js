import './about-us.css'
import about from "./images/about-us.jpg";

export function AboutUs() {
  return (
    <div className="container about-us">
      <img src={about} alt="About Us" />
      <div className="content">
        <div>* Kính gửi Quý Đối tác và Khách hàng,</div>
        <div>* Miến dong Nam Tài xin gửi lời chào trân trọng và lời cảm ơn sâu sắc tới Quý Đối tác và Khách hàng đã quan tâm tới sản phẩm Miến dong Nam Tài.</div>
        <div>* Miến dong Nam Tài là sự kết hợp tinh hoa của làng nghề truyền thống trên 80 năm (Làng So, xã Tân Hòa, huyện Quốc Oai, Tp.Hà Nội) với công nghệ hiện đại để tạo nên một sản phẩm chất lượng cao đảm bảo vệ sinh an toàn thực phẩm.</div>
        <div>* Miến dong Nam Tài được làm từ bột dong riềng, có tính mát, nhiều chất xơ, không chứa chất béo và cholesterol, là đặc sản của Việt Nam đáp ứng đầy đủ nhu cầu về Protein hàng ngày của con người, phù hợp nhất với những người ăn chay, ăn kiêng, những người cần giữ dáng vóc chuẩn mực hay những người có nguy cơ mắc bệnh tiểu đường, tim mạch...</div>
        <div>* MIẾN DONG NAM TÀI cam kết hoàn toàn tự nhiên, không có chất bảo quản, không sử dụng phụ gia, không phẩm màu, là một thực phẩm rất tốt với tất cả mọi người, mọi gia đình.</div>
        <div>* MIẾN DONG NAM TÀI là nhà sản xuất và cung cấp hàng đầu những sản phẩm tinh chế từ bột củ dong riềng với chất lượng tốt nhất, giá thành hợp lý nhất tới tất cả người tiêu dùng trên cả nước và thế giới.</div>
        <div>* Hi vọng sớm được hợp tác với Quý Đối tác và Khách hàng trong nước và quốc tế.</div>
        <div>* Trân trọng cảm ơn đối tác và khách hàng đã ủng hộ!</div>
      </div>
    </div>
  )
}