$(document).ready(function() {
    // $(document).scroll(function () {
    //     var scroll = $(this).scrollTop();
    //     var topDist = $(".header-content").position();
    //     if (scroll > 120) {
    //         $('nav').css({"position":"fixed","top":"0"});
    //         $('nav').addClass('scrollable-menu');
    //         $('.logo-n-ph').addClass('hider');

    //     } else {
    //         $('nav').css({"position":"static","top":"auto"});
    //         $('nav').removeClass('scrollable-menu');
    //         $('.logo-n-ph').removeClass('hider');
    //     } 
    //  });

    history.scrollRestoration = "manual";

    $(".feature").waypoint(
        function (direction) {
          if (direction == "down") {
            $("nav").addClass("scrollable-menu");
            $('.feature').addClass("scroll-adjuster");
          } else {
            $("nav").removeClass("scrollable-menu");
            $('.feature').removeClass("scroll-adjuster");
          }
        },
        {
          offset: "12%",
        }
      );
});