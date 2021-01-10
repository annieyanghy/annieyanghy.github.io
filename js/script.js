/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
// console.log("hi");



$(document).ready(function() {
    $('.nav_logo_container').hover(
        function(){ $('#hyy').css({ "display": 'inline-block' });},
        function(){ $('#hyy').css({ "display": 'none' });},
    ) 
   
  });
  $('.nav_logo_container').off( "mouseenter mouseleave" );



    // -------- prj modal-----------//
    $(".modal_img").on("click", function() {

        $(this).css({ "width": "100%", "display": "" });
        $(this).addClass("modal");
        $("#modal-container").addClass("modal-box");
        $("#modal-container .fa").addClass("close");
        $("#modal-container .fa").addClass("fa-times");
        $('html, body').css({
            overflow: 'hidden',

        });

        console.log("haha");

    });

    $("#modal-container .fa").on("click", function() {
        $("#modal-container").removeClass("modal-box");
        $(this).removeClass("close");
        $(this).removeClass("fa-times");
        $("img").removeClass("modal");
        $(".prj_content_container img").css({ "width": "100%", "display": "block" });
        $('html, body').css({
            overflow: 'auto',

        });

    })

    $("#modal-container").on("click", function() {
        $("#modal-container").removeClass("modal-box");
        $(this).removeClass("close");
        $(this).removeClass("fa-times");
        $("img").removeClass("modal");
        $(".prj_content_container img").css({ "width": "100%", "display": "block" });
        $('html, body').css({
            overflow: 'auto',

        });

    })

    $(document).keyup(function(e) {
        if (e.keyCode === 27)
            $("#modal-container").removeClass("modal-box");
        $(this).removeClass("close");
        $(this).removeClass("fa-times");
        $("img").removeClass("modal");
        $(".prj_content_container img").css({ "width": "100%", "display": "block" });
        $('html, body').css({
            overflow: 'auto',

        });

    })


    // --------prj handy nav + toc-----------//


    $(document).scroll(function(e) {


        if ($(document).scrollTop() > 300 && $(window).width() > 900) {
            $(".handy_nav_container").css("display", "flex");
            $(".sticky-toc").css("display", "block");
            console.log(e)

        } else {
            $(".handy_nav_container").css("display", "none");
            $(".sticky-toc").css("display", "none");
        }

        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".handy_nav_container").css("bottom", "200px");
        } else {
            $(".handy_nav_container").css("bottom", "var(--margin-small)");
        }

    })


    // video autoplay//
    $('video').prop('autoplay', true);
    $('video').prop('muted', true);
    $('video').prop('loop', true);
    $('video').prop('controls', true);


    // --------filter-----------//

    $(document).ready(function() {
        // $("#sort_time_asc").css("visibiilty", "hidden");
        $("#sort_time_des").click(function(event){
           
              $("#sort_time_des").addClass("sort_activated");
              $("#sort_time_asc").removeClass("sort_activated");
         
            //   $("#sort_time_des").css("display", "none");
              console.log("New to old")
    
        })
        $("#sort_time_asc").click(function(event){
            $("#sort_time_asc").addClass("sort_activated");
            $("#sort_time_des").removeClass("sort_activated");

            console.log("Old to new")
  
      })
    
       
      });

    
    $(".button_container button").click(function(event) {


        event.preventDefault();

        $(".button_container button").removeClass("filter_button_selected");
        $(this).addClass("filter_button_selected");


    });
    var containerEl = document.querySelector('.project_resp_container');
    var mixer = mixitup(containerEl);