import '../assets/Project.css/Header.css'
function Header() {
    return (
      <Header>
        <div className="header">NGUYỄN KIM</div>
        <div className="header">Xem giá tại</div>
        <div>
        <input type="text" className="header" placeholder="Bạn tìm gì hôm nay?"/>
        </div>
        <div className="header">Giỏ hàng</div>
        <div className="header">Tra cứu đơn hàng</div>
        <div className="header">Tài khoản</div>
        <div className="header">liên lạc: 1800.6800</div>
      </Header>
    );
}
  export default Header