$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    if(scrollOffset >= introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
    });

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

let scrollUp = () => {
    let scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll-btn')
    : scrollUp.classList.remove('show-scroll-btn')
}
window.addEventListener('scroll', scrollUp);
