/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");



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


    // // -------- handy index-----------//

    // $(document).scroll(function() {


    //     if ($(document).scrollTop() > 300) {
    //         $(".handy_index_container").css("display", "flex");

    //     } else {
    //         $(".handy_index_container").css("display", "none");
    //     }

    //     // var w_offset = $("#HIW").offset().top - $(window).scrollTop();
    //     // if (w_offset < 0){
    //     // 	$(document).find().css("font-weight", "600");

    //     // } else{
    //     // 	$("#HIW h3").css("font-weight", "400");
    //     // }

    //     var scrollPos = $(window).scrollTop();
    //     $(".handy_index").each(function() {
    //         var curTitle = $(this).offset().top - scrollPos;
    //         var title = $(this).attr("href");

    //         if (title && curTitle <= 0) {
    //             $(".handy_index_li" + title).addClass("handy_active");
    //             console.log(event)
    //         } else {
    //             $(this).removeClass("handy_active");
    //         }
    //     })

    // })





    // --------prj sticky title-----------//

    // $(window).scroll(function(){

    // 	if ($(window).scrollTop() >= $(".prj_index_container .prj_index").offset().top){
    // 		$(".prj_index_container .prj_index").addClass("sticky_title");
    // 		console.log("sticky")
    // 	} else{
    // 		$(this).removeClass("sticky_title");
    // 	}



    // })



    // --------filter-----------//



    $(".button_container button").click(function(event) {


        event.preventDefault();

        $(".button_container button").removeClass("filter_button_selected");
        $(this).addClass("filter_button_selected");


    });
    var containerEl = document.querySelector('.main_grid');
    var mixer = mixitup(containerEl);