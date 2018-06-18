$(document).ready(function() {
  $("#fullpage").fullpage({
    css3: true,
    navigation: false,
    slidesNavigation: false,
    loopHorizontal: false,
    scrollHorizontally: true,
    controlArrows: false,
    menu: "#menu",
    responsiveSlides: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    afterLoad: function( anchorLink, index){
      var loadedSection = $(this);
  
      if(anchorLink == 'secondPage'){
        $('.nav-link').css('color', 'white');
      }
    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);
  
      //after leaving section 2
      if(index == 2 && direction =='down'){
        $('.nav-link').css('color', 'black');
      }
  
      else if(index == 2 && direction == 'up'){
        $('.nav-link').css('color', 'black');
      }
    }
  });

  var slider = $(".slider");
  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    draggable: true,
    accessibility: true,
    // cssEase: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)', 
    fade: true,
    infinite: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false
        }
      }
    ]
  });

  $("nav#menu a[data-index]").on("click", function(event) {
    event.preventDefault();
    slideIndex = $(this).attr("data-index");
    slider[0].slick.slickGoTo(parseInt(slideIndex));
  });

  $(".navigation__inner a").click(function () {

    $.fn.fullpage.moveTo('firstPage', 1);
  });


  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });


            $('.nav-link').hover(function(event) {
              $(event.target).addClass('link-active');
            }, function() {
              $(event.target).removeClass('link-active');
            });
});

