$(function() {
    let stickyNavTop = $('nav').offset().top;  
  console.log(stickyNavTop)
     
     //  function that decides weather the navigation bar should have "fixed" css position or not.
     function stickyNav(){
         let scrollTop = $(window).scrollTop();
          // The scrollTop() method sets or returns the vertical scrollbar position for the selected elements, so now it returns current vertical position from the top
           
         // if scrolled down more than the navigation, change element's position to fixed to stick to top,
         // otherwise change it back to relative
         if (scrollTop > stickyNavTop) { 
             $('nav').addClass('sticky');
         } else {
             $('nav').removeClass('sticky'); 
         }
      };

  stickyNav();
  // and run it again whenever scrolling is done
  $(window).scroll(function() {
      stickyNav();
  });
});



// 

$(document).ready(function() {
    $('#toggleSlide').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var $content = $this.prev('.ab-text').find('.ab-more-text');
        
        if ($content.is(':visible')) {
            $content.slideUp();
            $this.text('Learn More');
        } else {
            $content.slideDown();
            $this.text('Learn Less');
        }
    });
});

// 


document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".model-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-model'))
        myModal.show();
    }
  })

  //  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    // autoplay:{
    //   delay:2000,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });


