/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
  //khi button được click thì tìm đến thẻ body có id là myBody
  // dùng classlist để gọi thuộc tính class của thẻ body
  //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
  document.getElementById("myBody").classList.toggle("dark");
  document.getElementById("header").classList.toggle("darktheme");
};

// Button search open close animation
const zoomButton = document.querySelector(".fa-search");
const outButton = document.querySelector(".fa-close");

const fullsearch = document.querySelector(".full_search");

zoomButton.addEventListener("click", () => {
  zoomButton.classList.add("zoomed");
  zoomButton.classList.remove("normal");
  // Full search open close
  fullsearch.style.display = "block";
});

outButton.addEventListener("click", () => {
  // Full search open close
  fullsearch.style.display = "none";
  if (zoomButton.classList.contains("zoomed")) {
    zoomButton.classList.remove("zoomed");
    zoomButton.classList.add("normal");
  }
});

// Set position cụm nút search và đổi theme khi màn hình nhỏ
const btn2 = document.querySelector(".button_right");
const fheader = document.querySelector("#header");
const btnshow = document.querySelector("#button_show");

var clickCount = 0;
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    // ngăn người dùng cuộn chuột hay thao tác khác trước khi thoát khỏi phần show
    document.body.style.overflow = "hidden";

    if (clickCount === 0) {
      // dịch chuyển 2 nút search và đổi theme
      btn2.style.right = "15%";
      // kéo dài header để khoảng full dc phần show
      fheader.style.height = "250px";
      fheader.style.border = "none";
      btnshow.classList.add("fa-xmark");
      btnshow.classList.remove("fa-bars");

      clickCount = 1;
    } else if (clickCount === 1) {
      btn2.style.right = "";
      fheader.style.height = "";
      document.body.style.overflow = "";
      fheader.style.border = "";
      btnshow.classList.remove("fa-xmark");
      btnshow.classList.add("fa-bars");

      clickCount = 0;
    }
  });

// Nhấn vào phần Page
var clickPage = 0;
document.querySelector(".page").addEventListener("click", function () {
  if (clickPage === 0 && window.innerWidth < 992) {
    // kéo dài header để khoảng full dc phần show
    fheader.style.height = "300px";
    clickPage = 1;
  } else if (clickPage === 1) {
    fheader.style.height = "250px";
    clickPage = 0;
  }
});

// Chỉnh màu header khi scoll xuống
const page_active = document.getElementById(".active");

window.addEventListener("scroll", function () {
  // Kiểm tra xem trang đã được cuộn xuống hay chưa
  if (window.scrollY > 0) {
    fheader.classList.add("scrolled");
    page_active.classList.add("scrolled");
  } else {
    fheader.classList.remove("scrolled");
    page_active.classList.remove("scrolled");
  }
});

