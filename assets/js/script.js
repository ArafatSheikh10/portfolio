$(document).ready(function() {

  // body-darkmood

  $(document).ready(function() {
    $('#dark-mode-toggle').on('click', function() {
      $('body').toggleClass('dark-mode');
    });
  });

    // Open responsive slide detailss
    $('.side-details-button').on('click', function() {
      $('.side-details').toggleClass("left-0");
    });

    // Open responsive slide detailss
    $('.side-icons-list-button').on('click', function() {
      $('.side-icons-list').toggleClass("right-0").removeClass("hidden").addClass("flex");
    });

  });

  $('.project-count').counterUp({
    delay: 10,
    time: 2000
  });



  $('.recommendations-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.gallery').magnificPopup({
  delegate: '.gllary-image',
  type: 'image',
  gallery: {
    enabled: true
  }
});

// Initialize Isotope
  // Initialize isotope
  $(document).ready(function() {
    // init Isotope
    var $grid = $('.gallery').isotope({
      itemSelector: ".gllary-image",
      layoutMode: 'fitRows' // এটি গ্রিড লেআউট ভাঙবে না
    });
  
    // filter items on button click
    $('.gllary-filter').on('click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    
      $('.gllary-filter li').removeClass('active');
      $(this).addClass('active');
    });
  });
// active-link

$(".gllary-filter li").click(function(){
  $(this).removeClass("active")
})

$(".gllary-filter li").click(function(){
  $(".gllary-filter li").addClass("active")
})