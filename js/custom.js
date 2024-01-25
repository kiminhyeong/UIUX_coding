// clone menu and info elements

const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// Mobile Menu Toggle Function

const mobileMenuicon = document.querySelector('.mobile-icon');

mobileMenuicon.addEventListener('click', (e) => {
  const target = e.currentTarget;
  target.classList.toggle('active');
  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; // 요소가 펼쳐졌을 때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = 0;
  }
});

// Fixed Header Style Change and Meet Section Start Animation When Scrolling Down

const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; // 화면 최상단에 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);

// Features Section Data

const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '밍을 자삼의 카아에멱게니 바가딘해주, 컬은 으아지 옥슨은기는. 깡밴늰구조다가 오튄다 너오아가 시티애셩지 망쬐깅안저밧다.',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '아출이대한지 한사느도 린자껴닷을 이후벼 돌으다. 자왁 여온까를 줌헝좐 교는하십으로써 타피데안넨에 안기라도 앙맅늠으라.',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuelty Free',
    text: '이나액서바알 랄다져사해킷을 민둰도겅. 리울옼다가 그다윽이어 더죘닺렘 멀움 둤긍다 이아바여어군은 엉어너사다.',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
  <div class = "feature">
  <div class = "feature-icon">
    <img src = "${feature.image}" alt "" />
    </div>
    <h4>${feature.title}</h4>
    <p>${feature.text}</P>
  </div>
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, // 반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
