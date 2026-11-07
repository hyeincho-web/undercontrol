// Header Swiper
// Initialize Swiper
var swiper = new Swiper(".band", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 250,
  loop: true,

  speed: 5000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  freeMode: {
    enabled: true,
    momentum: false,
  },

  allowTouchMove: false,
});

// NAV crossBtn
const crossBtn = document.querySelector(".crossBtn");
const navInner2 = document.querySelector(".nav_inner2");

crossBtn.addEventListener("click", () => {
  // 1. + 버튼을 X로 변경
  const isOpen = crossBtn.classList.toggle("active");

  // 2. NAV 메뉴 열기 / 닫기
  navInner2.classList.toggle("open", isOpen);

  // 3. 접근성 속성 업데이트
  crossBtn.setAttribute("aria-expended", String(isOpen));

  crossBtn.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

// main visual swiper
var swiper = new Swiper(".main_visual", {
  pagination: {
    el: ".main_visual .swiper-pagination",
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// item slide swiper
var swiper = new Swiper(".item_slide", {
  slidesPerView: 1.2,
  slidesPerGroup: 1,
  spaceBetween: 4,

  breakpoints: {
    // 1001px 이상부터 3장
    1001: {
      slidesPerView: 3,
    },
    // 1101px 이상부터 4장
    1101: {
      slidesPerView: 4,
    },
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// MOBILE FOOTER REVEAL
const footer = document.querySelector("footer");

const footerObserver = new ResizeObserver(() => {
  const footerHeight = footer.getBoundingClientRect().height;

  document.documentElement.style.setProperty(
    "--mobile-footer-height",
    `${Math.ceil(footerHeight)}px`,
  );
});

footerObserver.observe(footer);

// Undercontrol 로고 클릭시 부드럽게 최상단으로 이동
const logo = document.querySelector(".logo a");
logo.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
