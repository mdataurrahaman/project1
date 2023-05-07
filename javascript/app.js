function openNav() {
  document.getElementById("mySidenav").style.width = '200px';
  document.querySelector(".container-xl").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".container-xl").style.margin = "0 auto";
}

$('.trust-card-wrapper').slick({
  dots: true,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: '<button type="button" class="slick-prev"> <div> <i class="fa-solid fa-greater-than"></div></i></button>',
  nextArrow: '<button type="button" class="slick-next"> <div> <i class="fa-solid fa-greater-than"></div></i></button>',
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});